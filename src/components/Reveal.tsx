"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** distance to travel on the y axis before settling */
  y?: number;
};

/**
 * Scroll-triggered reveal wrapper (replaces the original IntersectionObserver).
 * Renders a plain div so any hover-transformed child (e.g. `.p`) keeps its own
 * CSS transform without fighting Motion's inline transform.
 */
export function Reveal({ children, className, delay = 0, y = 22 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
