import { SectionHead } from "@/components/layout/SectionHead";
import { Reveal } from "@/components/motion/Reveal";
import { activities } from "@/data/activities";

export function BeyondWork() {
  return (
    <section id="beyond" aria-labelledby="beyond-title" className="sect" data-ambient-section="people">
      <div className="wrap">
        <SectionHead id="beyond-title" index="06" kicker="Beyond Work" title="일 너머">
          사람과 기술 사이를 연결하기 전부터, 사람과 사람 사이에서 오래 일해왔습니다.
        </SectionHead>
        <ul className="beyond-list">
          {activities.map((a, i) => (
            <li key={a.id}>
              <Reveal delay={Math.min(i * 0.04, 0.16)} className="beyond-row">
                <div className="beyond-period">{a.period}</div>
                <div>
                  <h3>
                    {a.org} <span lang="en" className="edu-en">{a.orgEn}</span>
                  </h3>
                  <p className="beyond-role">{a.role}</p>
                  <p>{a.bodyKo}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
