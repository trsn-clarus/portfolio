"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";
import { EASE } from "@/lib/motion";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0 } },
};

const focus: Variants = {
  hidden: { opacity: 0, y: 10, filter: "blur(7px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: EASE },
  },
};

/**
 * Text coming into focus rather than fading in — used for headline-weight
 * copy (Hero, section titles) where information has to read immediately.
 * Delay is minimal by design: this is for the words a visitor reads first,
 * not a flourish to sit through.
 */
export function FocusText({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      animate="show"
      transition={{ delayChildren: delay }}
    >
      {children}
    </motion.div>
  );
}

/**
 * A single focusing unit inside FocusText — a line, a word group. Renders as
 * a block-level div so it can safely wrap headings without violating HTML's
 * phrasing-content rules.
 */
export function FocusItem({
  children,
  className,
  lang,
}: {
  children: ReactNode;
  className?: string;
  lang?: string;
}) {
  return (
    <motion.div className={className} variants={focus} lang={lang}>
      {children}
    </motion.div>
  );
}
