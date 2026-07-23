"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
  type Variants,
} from "motion/react";
import { ArrowRight, ArrowUpRight } from "./icons";
import { Magnetic } from "./Magnetic";

const ease = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};
const lineUp: Variants = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 0.9, ease } },
};
const fade: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const mx = useMotionValue(-400);
  const my = useMotionValue(-400);
  const sx = useSpring(mx, { stiffness: 90, damping: 22 });
  const sy = useSpring(my, { stiffness: 90, damping: 22 });
  const background = useMotionTemplate`radial-gradient(480px circle at ${sx}px ${sy}px, rgba(230,207,156,0.10), transparent 68%)`;

  const onMove = (e: React.PointerEvent<HTMLElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  return (
    <section className="hero" ref={ref} onPointerMove={onMove}>
      <motion.div className="hero-spot" style={{ background }} aria-hidden />
      <div className="wrap">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span className="eyebrow" variants={fade}>
            <span className="dot" /> 한중 번역가 · 통역사
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
            <Magnetic>
              <a className="btn primary" href="#work">
                프로젝트 보기 <ArrowRight />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                className="btn ghost"
                href="https://trsnclarus.com/"
                target="_blank"
                rel="noopener"
              >
                trsnclarus.com <ArrowUpRight />
              </a>
            </Magnetic>
          </motion.div>

          <motion.div className="stats" variants={fade}>
            <div className="stat">
              <b>중국 12년 거주</b>
              <span>현지에서 체득한 언어·문화</span>
            </div>
            <div className="stat">
              <b>서강대 · HSK 6급</b>
              <span>중국문화학 · 인증 한중 사법통역</span>
            </div>
            <div className="stat">
              <b>바이브코딩</b>
              <span>AI 협업으로 전 제품 직접 구축</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
