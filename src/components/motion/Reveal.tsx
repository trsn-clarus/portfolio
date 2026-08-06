"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { EASE } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** distance to travel on the y axis before settling */
  y?: number;
};

/**
 * Scroll-triggered reveal for content blocks — a list, a row, a chapter.
 * Content rises a short distance and resolves out of a soft blur, once, the
 * first time it crosses into view. Never re-triggers, never blocks reading:
 * viewport margin is generous so text is legible well before the settle ends.
 */
export function Reveal({ children, className, delay = 0, y = 20 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.8, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}
