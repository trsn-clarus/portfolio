import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";
import { creds } from "@/data/portfolio";

export function About() {
  return (
    <section id="about">
      <div className="wrap">
        <SectionHead
          index="01"
          kicker="About"
          title="번역가인데, 소프트웨어를 만듭니다"
        >
          전업 개발자가 아닙니다. 번역·통역을 하다 보니 기계 번역의 한계가 보였고, 그걸
          직접 고치려고 도구를 만들기 시작했습니다.
        </SectionHead>
        <Reveal className="about-grid">
          <div className="about-aside">
            <span className="kicker">이력</span>
            <ul className="creds">
              {creds.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div className="about-body">
            <p>
              조민수(Minsoo Cho)는 <span className="accent">서강대학교</span>에서
              중국문화학을 전공하고, <span className="accent">중국에서 12년간 거주</span>
              하며 언어와 문화를 현지에서 익혔습니다. 인증 한중 사법통역사로
              법원·수사기관·기업 현장에서 통역·번역을 해왔습니다.
            </p>
            <p>
              여기 있는 소프트웨어(번역 플랫폼 · 품질 평가기 · 운영 콘솔 · 용어집 · 웹)는
              전부 <span className="accent">바이브코딩(AI 협업 코딩)</span>으로 직접
              만들었습니다. 회사 프로젝트는{" "}
              <span className="accent">UI부터 배포 직전까지 전 과정을 혼자 맡았고</span>
              (배포·인프라 운영만 제외), VS Code에서 Claude와 Codex를 썼습니다. 코드를
              몰라도 문제를 정확히 알면 도구는 따라옵니다.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
