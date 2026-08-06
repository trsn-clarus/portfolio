import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";

type Props = {
  id: string;
  index: string;
  kicker: string;
  title: ReactNode;
  children?: ReactNode;
};

/** Section header — index, English kicker, Korean title, short intro. */
export function SectionHead({ id, index, kicker, title, children }: Props) {
  return (
    <Reveal className="sec-head">
      <div className="sec-meta">
        <span className="sec-idx">{index}</span>
        <span className="sec-kicker">{kicker}</span>
      </div>
      <div>
        <h2 id={id} className="sec-title">
          {title}
        </h2>
        {children && <p className="sec-intro">{children}</p>}
      </div>
    </Reveal>
  );
}
