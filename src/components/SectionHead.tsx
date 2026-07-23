"use client";

import type { ReactNode } from "react";
import { motion, type Variants } from "motion/react";
import { EASE } from "@/lib/motion";

type Props = {
  index: string;
  kicker: string;
  title: ReactNode;
  children?: ReactNode;
};

const group: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.04 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: EASE },
  },
};

/** Section header — meta, title and intro resolve in a considered cascade. */
export function SectionHead({ index, kicker, title, children }: Props) {
  return (
    <motion.div
      className="sec-head"
      variants={group}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
    >
      <motion.div className="sec-meta" variants={item}>
        <span className="idx">{index}</span>
        <span className="kicker">{kicker}</span>
      </motion.div>
      <div>
        <motion.h2 variants={item}>{title}</motion.h2>
        {children && (
          <motion.p className="intro" variants={item}>
            {children}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
}
