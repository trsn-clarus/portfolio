import { SectionHead } from "@/components/layout/SectionHead";
import { Reveal } from "@/components/motion/Reveal";
import { capabilities } from "@/data/capabilities";

export function Capabilities() {
  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-title"
      className="sect"
      data-ambient-section="data"
    >
      <div className="wrap">
        <SectionHead id="capabilities-title" index="04" kicker="Capabilities" title="할 수 있는 일">
          기술 목록이 아니라, 실제로 풀어 온 문제를 기준으로 정리했습니다.
        </SectionHead>
        <div className="cap-grid">
          {capabilities.map((g, i) => (
            <Reveal key={g.id} delay={Math.min(i * 0.04, 0.16)} className="cap-row">
              <h3>{g.titleEn}</h3>
              <ul>
                {g.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
