import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/types/content";
import { ProjectIcon } from "@/components/icons";
import { StatusBadge } from "@/components/ui/badge";
import { OpenAppLink } from "@/components/open-app-link";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      data-accent={project.accent}
      className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-[0_8px_40px_-12px_var(--accent)]"
    >
      <div aria-hidden="true" className="absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-accent to-transparent" />
      <div className="flex items-start justify-between gap-4">
        <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent/12 text-accent-text">
          <ProjectIcon name={project.icon} className="size-5" />
        </span>
        <StatusBadge status={project.status} />
      </div>
      <h3 className="mt-5 text-xl font-semibold tracking-tight">{project.name}</h3>
      <p className="mt-1 font-mono text-xs tracking-wide text-accent-text uppercase">{project.category}</p>
      <p className="mt-3 flex-1 text-muted-foreground">{project.tagline}</p>
      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium">
        <OpenAppLink project={project} />
        <Link href={`/apps/${project.slug}/`} className="inline-flex items-center gap-1 text-foreground hover:text-accent-text">
          Details
          <ArrowRight aria-hidden="true" className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          <span className="sr-only"> about {project.name}</span>
        </Link>
      </div>
    </article>
  );
}
