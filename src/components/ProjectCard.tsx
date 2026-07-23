import { Check, ArrowUpRight } from "./icons";
import { ContributionBar } from "./ContributionBar";
import type { Project } from "@/data/portfolio";

export function ProjectCard({
  project: p,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article className={`entry${p.flag ? " flag" : ""}`}>
      <div className="e-meta">
        <span className="e-num">{String(index + 1).padStart(2, "0")}</span>
        <span className="badge">{p.badge}</span>
        <div className="e-tags">
          {p.topTags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>

      <div className="e-body">
        <h3>{p.title}</h3>
        <div className="role">{p.role}</div>
        <p className="desc" dangerouslySetInnerHTML={{ __html: p.desc }} />
        {p.contribution && (
          <ContributionBar
            label={p.contribution.label}
            percent={p.contribution.percent}
          />
        )}
        <ul className="feat">
          {p.features.map((f) => (
            <li key={f}>
              <span className="ic">
                <Check />
              </span>
              <span dangerouslySetInnerHTML={{ __html: f }} />
            </li>
          ))}
        </ul>
        {p.bottomTags.length > 0 && (
          <div className="bottom-tags">
            {p.bottomTags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        )}
        {p.link && (
          <a className="go" href={p.link.href} target="_blank" rel="noopener">
            {p.link.label.replace(" ↗", "")} <ArrowUpRight />
          </a>
        )}
      </div>
    </article>
  );
}
