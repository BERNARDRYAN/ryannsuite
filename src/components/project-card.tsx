import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/types/content";
import { AppLogo } from "@/components/app-logo";

/** Compact link card for an app, used for "More from the suite". */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/apps/${project.slug}/`}
      data-accent={project.accent}
      className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50"
    >
      <AppLogo project={project} className="size-12" />
      <span className="min-w-0 flex-1">
        <span className="block font-semibold tracking-tight">{project.name}</span>
        <span className="block truncate text-sm text-muted-foreground">{project.tagline}</span>
      </span>
      <ArrowRight aria-hidden="true" className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}
