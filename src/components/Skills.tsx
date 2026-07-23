import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";
import { skillGroups } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <SectionHead index="03" kicker="Capabilities" title="기술 스택">
          실제로 돌아가는 것만 적었습니다. 전업 엔지니어는 아니고,{" "}
          <span className="accent">AI 코딩 도구(Claude · Codex)</span>를 써서 직접
          구현했습니다.
        </SectionHead>
        <div className="stack">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.08}>
              <div className="stack-row">
                <h4>{g.title}</h4>
                <div className="list">
                  {g.chips.map((c) => (
                    <span key={c}>{c}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
