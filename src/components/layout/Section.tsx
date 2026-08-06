import type { ReactNode } from "react";
import type { SectionState } from "@/data/trajectory";

type SectionProps = {
  id: string;
  state: SectionState;
  labelledBy: string;
  children: ReactNode;
  className?: string;
};

/**
 * Every top-level section shares this shell: a stable id for nav/anchors, an
 * aria-labelledby pointing at its heading, and a data-ambient-section flag
 * that SectionStateProvider's observer reads to decide the field's current
 * state. Nothing here is decorative — remove the ambient system entirely and
 * every section still has a correct heading and landmark.
 */
export function Section({ id, state, labelledBy, children, className }: SectionProps) {
  return (
    <section
      id={id}
      data-ambient-section={state}
      aria-labelledby={labelledBy}
      className={className ? `sect ${className}` : "sect"}
    >
      <div className="wrap">{children}</div>
    </section>
  );
}
