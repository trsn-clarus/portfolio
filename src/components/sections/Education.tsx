import { SectionHead } from "@/components/layout/SectionHead";
import { Reveal } from "@/components/motion/Reveal";
import { credentialNotes, education, languages, researchProject } from "@/data/education";

export function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-title"
      className="sect"
      data-ambient-section="language"
    >
      <div className="wrap">
        <SectionHead id="education-title" index="05" kicker="Education & Research" title="학업과 연구">
          언어와 문화를 학문으로도 다뤘습니다.
        </SectionHead>

        <div className="edu-grid">
          <Reveal className="edu-list">
            {education.map((ed) => (
              <div key={ed.id} className="edu-row">
                <div className="edu-period">{ed.period}</div>
                <div>
                  <h3>
                    {ed.org} <span lang="en" className="edu-en">{ed.orgEn}</span>
                  </h3>
                  <p>
                    {ed.program} <span lang="en" className="edu-en">· {ed.programEn}</span>
                  </p>
                  {ed.status && <p className="edu-status">{ed.status}</p>}
                  {ed.detail && <p className="edu-detail">{ed.detail}</p>}
                </div>
              </div>
            ))}

            <div className="edu-row">
              <div className="edu-period">{researchProject.period}</div>
              <div>
                <h3>{researchProject.org}</h3>
                <p>{researchProject.titleKo}</p>
                <p className="edu-detail">{researchProject.bodyKo}</p>
              </div>
            </div>
          </Reveal>

          <Reveal className="edu-aside" delay={0.1}>
            <span className="ev-label">Languages</span>
            <ul className="lang-list">
              {languages.map((l) => (
                <li key={l.lang}>
                  <span>{l.lang}</span>
                  <span>{l.level}</span>
                </li>
              ))}
            </ul>
            <ul className="cred-notes">
              {credentialNotes.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
