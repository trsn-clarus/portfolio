"use client";

import { motion, type Variants } from "motion/react";
import { ArrowUpRight } from "./icons";

const ease = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.04 } },
};
const lineUp: Variants = {
  hidden: { y: "108%" },
  show: { y: "0%", transition: { duration: 0.85, ease } },
};
const fade: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span className="eyebrow" variants={fade}>
            <span className="dot" /> 한중 번역가 · 통역사 — 조민수
          </motion.span>

          <h1>
            <span className="line-mask">
              <motion.span style={{ display: "block" }} variants={lineUp}>
                번역가가 만든
              </motion.span>
            </span>
            <span className="line-mask">
              <motion.span style={{ display: "block" }} variants={lineUp}>
                <em>번역 소프트웨어.</em>
              </motion.span>
            </span>
          </h1>

          <motion.p className="lead" variants={fade}>
            법정과 기업 현장에서 한중 통역·번역을 해왔습니다. 그 경험으로 회사의 AI
            번역·검토 플랫폼을 기획부터 UI, 구현, 품질검토까지 직접 만들었습니다. 품질
            평가기와 운영 콘솔, 철도 용어집, 브랜드 웹도 같은 방식으로 만들었습니다.
          </motion.p>

          <motion.div className="cta" variants={fade}>
            <a className="link primary" href="#work">
              프로젝트 보기
            </a>
            <a
              className="link"
              href="https://trsnclarus.com/"
              target="_blank"
              rel="noopener"
            >
              trsnclarus.com <ArrowUpRight />
            </a>
          </motion.div>

          <motion.div className="stats" variants={fade}>
            <div className="stat">
              <b>중국 12년</b>
              <span>현지 거주</span>
            </div>
            <div className="stat">
              <b>HSK 6급</b>
              <span>인증 한중 사법통역</span>
            </div>
            <div className="stat">
              <b>서강대</b>
              <span>중국문화학</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
