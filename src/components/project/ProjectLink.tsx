import { ArrowUpRight } from "@/components/icons";
import type { ProjectLink as ProjectLinkType } from "@/data/projects";

export function ProjectLink({ link }: { link: ProjectLinkType }) {
  return (
    <a
      className="go"
      href={link.href}
      {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {link.label} <ArrowUpRight />
    </a>
  );
}
