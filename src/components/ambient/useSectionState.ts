"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import type { SectionState } from "@/data/trajectory";

export const AmbientStateContext = createContext<SectionState>("intro");

/** Reads the ambient state the nearest SectionStateProvider is currently in. */
export function useAmbientState(): SectionState {
  return useContext(AmbientStateContext);
}

type Tracked = { state: SectionState; ratio: number };

/**
 * Tracks every [data-ambient-section] element in the page and returns the
 * state of whichever one currently holds the most of the viewport's centre
 * band. One observer for the whole tree, not one per section.
 */
export function useSectionStateObserver(initial: SectionState = "intro"): SectionState {
  const [state, setState] = useState<SectionState>(initial);
  const tracked = useRef(new Map<Element, Tracked>());

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const key = (entry.target as HTMLElement).dataset.ambientSection as
            | SectionState
            | undefined;
          if (!key) continue;
          if (entry.isIntersecting) {
            tracked.current.set(entry.target, { state: key, ratio: entry.intersectionRatio });
          } else {
            tracked.current.delete(entry.target);
          }
        }
        let best: Tracked | null = null;
        for (const v of tracked.current.values()) {
          if (!best || v.ratio > best.ratio) best = v;
        }
        if (best) setState(best.state);
      },
      { threshold: [0, 0.2, 0.4, 0.6, 0.8, 1], rootMargin: "-15% 0px -15% 0px" }
    );

    const els = document.querySelectorAll<HTMLElement>("[data-ambient-section]");
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return state;
}
