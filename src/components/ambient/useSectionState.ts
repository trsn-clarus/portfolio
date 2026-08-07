"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type RefObject,
} from "react";
import type { SectionState } from "@/data/trajectory";

export const AmbientStateContext = createContext<SectionState>("intro");

/** Reads the ambient state the nearest SectionStateProvider is currently in. */
export function useAmbientState(): SectionState {
  return useContext(AmbientStateContext);
}

type Rgb = [number, number, number];
type AmbientTokens = { accent: Rgb; tint: Rgb; density: number };
type SectionPoint = { state: SectionState; center: number };

function hexToRgb(value: string, fallback: Rgb): Rgb {
  const hex = value.trim().replace("#", "");
  if (!/^[0-9a-f]{6}$/i.test(hex)) return fallback;
  return [
    Number.parseInt(hex.slice(0, 2), 16),
    Number.parseInt(hex.slice(2, 4), 16),
    Number.parseInt(hex.slice(4, 6), 16),
  ];
}

function mixColor(from: Rgb, to: Rgb, amount: number): string {
  const channel = (index: number) => Math.round(from[index] + (to[index] - from[index]) * amount);
  return `rgb(${channel(0)} ${channel(1)} ${channel(2)})`;
}

function smoothstep(value: number): number {
  const clamped = Math.min(1, Math.max(0, value));
  return clamped * clamped * (3 - 2 * clamped);
}

/**
 * Reads the ordered ambient sections and continuously blends the colour tokens
 * between their vertical centres. The active semantic state still changes at
 * the midpoint, but the visible field no longer switches at that boundary.
 */
export function useSectionStateObserver(
  rootRef: RefObject<HTMLDivElement | null>,
  initial: SectionState = "intro"
): SectionState {
  const [state, setState] = useState<SectionState>(initial);
  const stateRef = useRef<SectionState>(initial);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || typeof window === "undefined") return;

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-ambient-section]")
    );
    if (elements.length === 0) return;

    const setActiveState = (next: SectionState) => {
      if (stateRef.current === next) return;
      stateRef.current = next;
      setState(next);
    };

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      if (!("IntersectionObserver" in window)) return;
      const tracked = new Map<Element, { state: SectionState; ratio: number }>();
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            const key = (entry.target as HTMLElement).dataset.ambientSection as
              | SectionState
              | undefined;
            if (!key) continue;
            if (entry.isIntersecting) {
              tracked.set(entry.target, { state: key, ratio: entry.intersectionRatio });
            } else {
              tracked.delete(entry.target);
            }
          }
          let best: { state: SectionState; ratio: number } | null = null;
          for (const candidate of tracked.values()) {
            if (!best || candidate.ratio > best.ratio) best = candidate;
          }
          if (best) setActiveState(best.state);
        },
        { threshold: [0, 0.25, 0.5, 0.75, 1], rootMargin: "-15% 0px -15% 0px" }
      );
      elements.forEach((element) => observer.observe(element));
      return () => observer.disconnect();
    }

    const rootStyle = getComputedStyle(document.documentElement);
    const tokenCache = new Map<SectionState, AmbientTokens>();
    const getTokens = (key: SectionState): AmbientTokens => {
      const cached = tokenCache.get(key);
      if (cached) return cached;
      const prefix = `--ambient-${key}`;
      const tokens = {
        accent: hexToRgb(rootStyle.getPropertyValue(`${prefix}-accent`), [127, 151, 173]),
        tint: hexToRgb(rootStyle.getPropertyValue(`${prefix}-tint`), [58, 70, 82]),
        density: Number.parseFloat(rootStyle.getPropertyValue(`${prefix}-density`)) || 0.24,
      } satisfies AmbientTokens;
      tokenCache.set(key, tokens);
      return tokens;
    };

    let points: SectionPoint[] = [];
    let animationFrame = 0;
    let disposed = false;

    const measure = () => {
      points = elements.map((element) => {
        const rect = element.getBoundingClientRect();
        return {
          state: element.dataset.ambientSection as SectionState,
          center: rect.top + window.scrollY + rect.height / 2,
        };
      });
    };

    const applyBlend = (from: SectionPoint, to: SectionPoint, amount: number) => {
      const start = getTokens(from.state);
      const end = getTokens(to.state);
      root.style.setProperty("--accent", mixColor(start.accent, end.accent, amount));
      root.style.setProperty("--f-tint", mixColor(start.tint, end.tint, amount));
      root.style.setProperty(
        "--f-density",
        (start.density + (end.density - start.density) * amount).toFixed(3)
      );
      setActiveState(amount < 0.5 ? from.state : to.state);
    };

    const update = () => {
      animationFrame = 0;
      if (points.length === 0) return;
      const anchor = window.scrollY + window.innerHeight * 0.5;

      if (anchor <= points[0].center) {
        applyBlend(points[0], points[0], 0);
        return;
      }
      const last = points[points.length - 1];
      if (anchor >= last.center) {
        applyBlend(last, last, 0);
        return;
      }

      let index = 0;
      while (index < points.length - 1 && anchor > points[index + 1].center) index += 1;
      const from = points[index];
      const to = points[index + 1];
      const distance = Math.max(1, to.center - from.center);
      applyBlend(from, to, smoothstep((anchor - from.center) / distance));
    };

    const queueUpdate = () => {
      if (animationFrame === 0) animationFrame = window.requestAnimationFrame(update);
    };
    const handleResize = () => {
      measure();
      queueUpdate();
    };

    measure();
    update();
    window.addEventListener("scroll", queueUpdate, { passive: true });
    window.addEventListener("resize", handleResize);
    document.fonts?.ready.then(() => {
      if (!disposed) handleResize();
    });

    return () => {
      disposed = true;
      if (animationFrame !== 0) window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", queueUpdate);
      window.removeEventListener("resize", handleResize);
      root.style.removeProperty("--accent");
      root.style.removeProperty("--f-tint");
      root.style.removeProperty("--f-density");
    };
  }, [rootRef]);

  return state;
}
