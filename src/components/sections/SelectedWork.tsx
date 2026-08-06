import { SectionHead } from "@/components/layout/SectionHead";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectChapter } from "@/components/project/ProjectChapter";
import { projects } from "@/data/projects";

export function SelectedWork() {
  return (
    <section id="work" aria-labelledby="work-title" className="sect">
      <div className="wrap">
        <SectionHead id="work-title" index="02" kicker="Selected Work" title="대표 작업">
          철도 AI 번역 시스템부터 브랜드 웹까지, 언어와 데이터를 다루는 문제를 실제로 작동하는
          도구로 만든 기록입니다.
        </SectionHead>

        <div className="chapters">
          {projects.map((p, i) => (
            <div key={p.id} data-ambient-section={p.state}>
              <Reveal delay={Math.min(i * 0.04, 0.12)}>
                <ProjectChapter project={p} />
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
