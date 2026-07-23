"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { Check, ArrowUpRight } from "./icons";
import { ContributionBar } from "./ContributionBar";
import type { Project } from "@/data/portfolio";

export function ProjectCard({
  project: p,
  index,
  total,
}: {
  project: Project;
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 150, damping: 18 });
  const sry = useSpring(ry, { stiffness: 150, damping: 18 });

  const onMove = (e: React.PointerEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    // subtle tilt (max ~4deg)
    ry.set((px - 0.5) * 8);
    rx.set((0.5 - py) * 8);
    // pointer glow position
    el.style.setProperty("--mx", `${(e.clientX - r.left).toFixed(0)}px`);
    el.style.setProperty("--my", `${(e.clientY - r.top).toFixed(0)}px`);
  };
  const reset = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.article
      ref={ref}
      className={`p${p.flag ? " flag" : ""}`}
      onPointerMove={onMove}
      onPointerLeave={reset}
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 1200 }}
    >
      <span className="glow" aria-hidden />
      <span className="pnum">
        {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </span>
      <div className="top">
        <span className="badge">{p.badge}</span>
        <div className="tags">
          {p.topTags.map((t) => (
            <span className="tag" key={t}>
              {t}
            </span>
          ))}
        </div>
      </div>
      <h3>{p.title}</h3>
      <div className="role">{p.role}</div>
      <p className="desc" dangerouslySetInnerHTML={{ __html: p.desc }} />
      {p.contribution && (
        <ContributionBar
          label={p.contribution.label}
          percent={p.contribution.percent}
        />
      )}
      <ul className="feat">
        {p.features.map((f) => (
          <li key={f}>
            <span className="ic">
              <Check />
            </span>
            <span dangerouslySetInnerHTML={{ __html: f }} />
          </li>
        ))}
      </ul>
      {p.bottomTags.length > 0 && (
        <div className="tags">
          {p.bottomTags.map((t) => (
            <span className="tag" key={t}>
              {t}
            </span>
          ))}
        </div>
      )}
      {p.link && (
        <a className="go" href={p.link.href} target="_blank" rel="noopener">
          {p.link.label.replace(" ↗", "")} <ArrowUpRight />
        </a>
      )}
    </motion.article>
  );
}
