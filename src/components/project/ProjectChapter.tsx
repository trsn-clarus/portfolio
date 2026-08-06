import { EvidenceList } from "./EvidenceList";
import { ProjectLink } from "./ProjectLink";
import type { Project } from "@/data/projects";

/**
 * One project as a chapter, not a card: Situation/Problem set the stakes,
 * Action is what was actually built, Evidence is what can be verified rather
 * than a manufactured metric, and Outcome states what changed in one plain
 * sentence. Nothing here waits on hover to be readable.
 */
export function ProjectChapter({ project }: { project: Project }) {
  return (
    <article
      className={project.weight === "primary" ? "chapter chapter-primary" : "chapter"}
    >
      <div className="chapter-meta">
        <span className="chapter-num">{project.index}</span>
        <span className="chapter-category">{project.category}</span>
        <div className="chapter-org">
          <span>{project.org}</span>
          <span className="chapter-period">{project.period}</span>
        </div>
      </div>

      <div className="chapter-body">
        <h3 className="chapter-title">{project.titleKo}</h3>
        <p className="chapter-role">{project.role}</p>

        {project.image && (
          // eslint-disable-next-line @next/next/no-img-element -- static export, images.unoptimized
          <img
            className="chapter-image"
            src={project.image.src}
            alt={project.image.alt}
            width={project.image.width}
            height={project.image.height}
            loading="lazy"
            decoding="async"
          />
        )}

        <dl className="chapter-sp">
          <div>
            <dt>Situation</dt>
            <dd>{project.situationKo}</dd>
          </div>
          <div>
            <dt>Problem</dt>
            <dd>{project.problemKo}</dd>
          </div>
        </dl>

        <EvidenceList title="Action" items={project.actionKo} />
        {project.constraintsKo && (
          <EvidenceList title="Constraints" items={project.constraintsKo} muted />
        )}
        <EvidenceList title="Evidence" items={project.evidenceKo} mono />

        <p className="chapter-outcome">{project.outcomeKo}</p>

        {project.tags.length > 0 && (
          <ul className="chapter-tags">
            {project.tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        )}

        {project.links && project.links.length > 0 && (
          <div className="chapter-links">
            {project.links.map((l) => (
              <ProjectLink key={l.href} link={l} />
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
