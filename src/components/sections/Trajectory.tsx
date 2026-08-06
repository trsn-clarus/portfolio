import { SectionHead } from "@/components/layout/SectionHead";
import { Reveal } from "@/components/motion/Reveal";
import { trajectory } from "@/data/trajectory";

/**
 * The career arc as one continuous line rather than four cards: each stage
 * is its own [data-ambient-section], so the field shifts tint as a visitor
 * scrolls through Language → Operations → Data → AI Systems — the sequence
 * that Selected Work and Experience later unpack in detail.
 */
export function Trajectory() {
  return (
    <section id="trajectory" aria-labelledby="trajectory-title" className="sect">
      <div className="wrap">
        <SectionHead id="trajectory-title" index="01" kicker="Trajectory" title="언어에서 시스템까지">
          언어를 사용하던 사람에서, 언어를 데이터로 다루고, 실제로 작동하는 시스템을 만드는 사람으로
          이어진 흐름입니다.
        </SectionHead>

        <ol className="traj-line">
          {trajectory.map((stage) => (
            <li key={stage.id} data-ambient-section={stage.state} className="traj-stage">
              <Reveal className="traj-stage-inner">
                <div className="traj-stage-meta">
                  <span className="traj-idx">{stage.index}</span>
                  <span className="traj-period">{stage.period}</span>
                </div>
                <div className="traj-stage-body">
                  <h3>
                    <span lang="ko">{stage.titleKo}</span>
                    <span className="traj-title-en" lang="en">
                      {" "}
                      · {stage.titleEn}
                    </span>
                  </h3>
                  <p>{stage.bodyKo}</p>
                  <ul className="traj-points">
                    {stage.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
