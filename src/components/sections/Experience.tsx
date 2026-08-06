import { SectionHead } from "@/components/layout/SectionHead";
import { Reveal } from "@/components/motion/Reveal";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="sect"
      data-ambient-section="operations"
    >
      <div className="wrap">
        <SectionHead id="experience-title" index="03" kicker="Experience" title="경력">
          현대로템을 중심으로, 언어와 운영이 만나는 실무를 쌓아 온 기록입니다.
        </SectionHead>

        <ol className="exp-list">
          {experience.map((e, i) => (
            <li key={e.id}>
              <Reveal delay={Math.min(i * 0.03, 0.12)} className="exp-row">
                <div className="exp-period">
                  <span>{e.start}</span>
                  <span aria-hidden="true">–</span>
                  <span>{e.end}</span>
                </div>
                <div className="exp-body">
                  <h3>{e.company}</h3>
                  <p className="exp-role">{e.role}</p>
                  <p className="exp-summary">{e.summary}</p>
                  <ul className="exp-resp">
                    {e.responsibilities.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                  {e.tags && e.tags.length > 0 && (
                    <ul className="exp-tags">
                      {e.tags.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
