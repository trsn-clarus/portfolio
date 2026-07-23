"use client";

import { motion } from "motion/react";

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
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        />
      </div>
    </div>
  );
}
