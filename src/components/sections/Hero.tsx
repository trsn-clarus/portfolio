"use client";

import { FocusText, FocusItem } from "@/components/motion/FocusText";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/layout/Section";
import { profile } from "@/data/profile";

/**
 * The first 60 seconds. Name, role and the one-sentence positioning have to
 * land before any motion finishes, so delay is near zero and nothing here
 * waits on scroll — everything renders immediately in the server markup.
 */
export function Hero() {
  return (
    <Section id="intro" state="intro" labelledBy="intro-title" className="hero">
      <div className="hero-main">
        <FocusText className="hero-inner">
          <FocusItem className="hero-eyebrow">
            <span className="dot" aria-hidden="true" />
            {profile.roleDescriptor}
          </FocusItem>

          <FocusItem>
            <h1 id="intro-title" className="hero-name">
              <span lang="ko">{profile.nameKo}</span>
              <span className="hero-name-slash" aria-hidden="true">
                {" "}
                /{" "}
              </span>
              <span className="hero-name-id" lang="en">
                {profile.identity}
              </span>
            </h1>
          </FocusItem>

          <FocusItem className="hero-statement-ko" lang="ko">
            {profile.heroStatementKo}
          </FocusItem>
          <FocusItem className="hero-statement-en" lang="en">
            {profile.heroStatementEn}
          </FocusItem>
          <FocusItem className="hero-support">{profile.heroSupportingKo}</FocusItem>

          <FocusItem className="hero-cta">
            <a className="link primary" href="#work">
              Selected Work
            </a>
            <a className="link" href="#contact">
              Contact
            </a>
          </FocusItem>
        </FocusText>

      </div>

      <Reveal className="hero-stats" delay={0.25}>
        {profile.stats.map((s) => (
          <div className="stat" key={s.label}>
            <b>{s.value}</b>
            <span>{s.label}</span>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
