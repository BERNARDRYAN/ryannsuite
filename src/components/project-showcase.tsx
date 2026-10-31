import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/types/content";
import { AppLogo } from "@/components/app-logo";
import { BrowserFrame } from "@/components/browser-frame";
import { OpenAppLink } from "@/components/open-app-link";
import { ExternalLink } from "@/components/ui/external-link";
import { cn } from "@/lib/utils";

/** A large, alternating feature row for one app on the home page. */
export function ProjectShowcase({ project, index }: { project: Project; index: number }) {
  const flip = index % 2 === 1;
  return (
    <article data-accent={project.accent} className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
      <Link
        href={`/apps/${project.slug}/`}
        tabIndex={-1}
        aria-hidden="true"
        className={cn(
          "group relative block transition-transform duration-500 ease-out hover:-translate-y-1 motion-reduce:transition-none",
          flip && "md:order-2",
        )}
      >
        <div className="absolute -inset-4 -z-10 rounded-3xl bg-accent/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
        <BrowserFrame shot={project.screenshots[0]} url={project.liveUrl} size="thumb" />
      </Link>

      <div>
        <div className="flex items-center gap-3">
          <AppLogo project={project} className="size-11" />
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            {String(index + 1).padStart(2, "0")} · {project.category}
          </p>
        </div>
        <h3 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">{project.name}</h3>
        <p className="mt-2 font-serif text-2xl text-pretty text-accent-text italic">{project.tagline}</p>
        <p className="mt-4 text-pretty text-muted-foreground">{project.description}</p>
        <ul aria-label={`${project.name} highlights`} className="mt-5 flex flex-wrap gap-2">
          {project.highlights.map((h) => (
            <li key={h} className="rounded-full border border-border bg-card px-3 py-1 text-sm">
              {h}
            </li>
          ))}
        </ul>
        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
          <OpenAppLink project={project} asButton />
          <Link
            href={`/apps/${project.slug}/`}
            className="group/link inline-flex items-center gap-1.5 text-sm font-medium hover:underline"
          >
            Case study<span className="sr-only">: {project.name}</span>
            <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover/link:translate-x-0.5" />
          </Link>
          {project.repoUrl && (
            <ExternalLink href={project.repoUrl} className="text-sm font-medium hover:underline">
              Source<span className="sr-only">: {project.name}</span>
            </ExternalLink>
          )}
        </div>
      </div>
    </article>
  );
}
