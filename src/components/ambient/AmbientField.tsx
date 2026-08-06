"use client";

import { useEffect, useRef } from "react";
import { AmbientFallback } from "./AmbientFallback";

type Particle = { x: number; y: number; r: number; vx: number; vy: number; a: number };

function hexToRgba(hex: string, alpha: number): string {
  const clean = hex.trim().replace("#", "");
  if (clean.length !== 3 && clean.length !== 6) return `rgba(122, 138, 152, ${alpha})`;
  const full = clean.length === 3
    ? clean.split("").map((c) => c + c).join("")
    : clean;
  const value = parseInt(full, 16);
  const r = (value >> 16) & 255;
  const g = (value >> 8) & 255;
  const b = value & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/**
 * One fixed environment field behind the whole page. Colour comes from the
 * --f-tint / --f-density custom properties SectionStateProvider sets on the
 * nearest .ambient-root, so the canvas and the CSS fallback are always
 * describing the same state — there is no second source of truth.
 *
 * Stays off entirely (CSS gradient only) when: reduced motion is requested,
 * the pointer is coarse, or the viewport is narrow (mobile gets the static
 * environment, not the animated one). Pauses while the tab is hidden.
 */
export function AmbientField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const smallViewport = window.innerWidth < 768;
    if (reduceMotion || coarsePointer || smallViewport) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const root = canvas.closest(".ambient-root") as HTMLElement | null;
    const styleSource = root ?? document.documentElement;

    let raf = 0;
    let running = true;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    function resize() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      canvas!.style.width = `${w}px`;
      canvas!.style.height = `${h}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    const COUNT = 30;
    const particles: Particle[] = Array.from({ length: COUNT }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: 140 + Math.random() * 260,
      vx: (Math.random() - 0.5) * 0.05,
      vy: (Math.random() - 0.5) * 0.035,
      a: 0.35 + Math.random() * 0.5,
    }));

    let lastFrame = 0;
    const FRAME_MS = 1000 / 30;

    function draw(t: number) {
      if (!running) return;
      raf = requestAnimationFrame(draw);
      if (t - lastFrame < FRAME_MS) return;
      lastFrame = t;

      const w = window.innerWidth;
      const h = window.innerHeight;
      const tint = getComputedStyle(styleSource).getPropertyValue("--f-tint").trim() || "#2c3944";
      const density = parseFloat(getComputedStyle(styleSource).getPropertyValue("--f-density")) || 0.24;

      ctx!.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -p.r) p.x = w + p.r;
        if (p.x > w + p.r) p.x = -p.r;
        if (p.y < -p.r) p.y = h + p.r;
        if (p.y > h + p.r) p.y = -p.r;

        const g = ctx!.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
        g.addColorStop(0, hexToRgba(tint, p.a * density * 0.55));
        g.addColorStop(1, hexToRgba(tint, 0));
        ctx!.fillStyle = g;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    function onVisibility() {
      running = document.visibilityState === "visible";
      if (running) {
        lastFrame = 0;
        raf = requestAnimationFrame(draw);
      } else {
        cancelAnimationFrame(raf);
      }
    }
    document.addEventListener("visibilitychange", onVisibility);
    raf = requestAnimationFrame(draw);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div className="ambient-field" aria-hidden="true">
      <AmbientFallback />
      <canvas ref={canvasRef} className="ambient-canvas" />
    </div>
  );
}
