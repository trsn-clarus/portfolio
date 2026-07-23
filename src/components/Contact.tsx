import { Reveal } from "./Reveal";
import { ArrowUpRight } from "./icons";

export function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <Reveal className="contact">
          <span className="kicker">Contact</span>
          <h2>일 얘기, 편하게 주세요</h2>
          <p>
            한중 번역·통역, AI 번역 시스템, 업무 자동화, 웹 작업. 필요하신 게 있으면
            연락 주세요.
          </p>
          <div className="cta" style={{ justifyContent: "center" }}>
            <a
              className="btn primary"
              href="https://trsnclarus.com/"
              target="_blank"
              rel="noopener"
            >
              TRSN CLARUS <ArrowUpRight />
            </a>
            <a
              className="btn ghost"
              href="https://trsnclarus.com/terroir-proof/"
              target="_blank"
              rel="noopener"
            >
              Terroir &amp; Proof <ArrowUpRight />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
