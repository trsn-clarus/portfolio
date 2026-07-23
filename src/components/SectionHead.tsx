import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  index: string;
  kicker: string;
  title: ReactNode;
  children?: ReactNode;
};

export function SectionHead({ index, kicker, title, children }: Props) {
  return (
    <Reveal className="sec-head">
      <div className="sec-meta">
        <span className="idx">{index}</span>
        <span className="rule" />
        <span className="kicker">{kicker}</span>
      </div>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </Reveal>
  );
}
