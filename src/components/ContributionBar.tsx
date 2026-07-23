"use client";

import { motion } from "motion/react";
import { EASE } from "@/lib/motion";

export function ContributionBar({
  label,
  percent,
}: {
  label: string;
  percent: number;
}) {
  return (
    <div className="contrib">
      <div className="row">
        <span>{label}</span>
        <b>~{percent}%</b>
      </div>
      <div className="track">
        <motion.div
          className="fill"
          style={{ width: `${percent}%`, transformOrigin: "left" }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 1.15, ease: EASE, delay: 0.12 }}
        />
      </div>
    </div>
  );
}
