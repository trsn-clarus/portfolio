import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/data/portfolio";

export function Work() {
  return (
    <section id="work">
      <div className="wrap">
        <SectionHead index="02" kicker="Selected Work" title="대표 프로젝트">
          회사의 번역 플랫폼과 그 주변 도구들(품질 평가기·운영 콘솔·용어집), 그리고 직접
          만든 웹. 대부분 기획부터 구현, 품질검토까지 혼자 맡았습니다.
        </SectionHead>

        <div className="entries">
          {projects.map((p, i) => (
            <Reveal key={p.title}>
              <ProjectCard project={p} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
