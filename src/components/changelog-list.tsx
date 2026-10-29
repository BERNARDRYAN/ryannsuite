import Link from "next/link";
import { getProject } from "@/content/projects";
import { site } from "@/content/site";
import type { ChangelogEntry } from "@/types/content";
import { AppLogo } from "@/components/app-logo";
import { cn, formatDate } from "@/lib/utils";

/** Timeline of changelog entries. `showApp` labels each entry with the app it belongs to. */
export function ChangelogList({ entries, showApp = true }: { entries: ChangelogEntry[]; showApp?: boolean }) {
  return (
    <ol className="relative space-y-8 before:absolute before:top-2 before:bottom-2 before:left-[5px] before:w-px before:bg-border">
      {entries.map((entry) => {
        const project = getProject(entry.app);
        return (
          <li key={`${entry.date}-${entry.title}`} data-accent={project?.accent} className="relative pl-8">
            <span
              aria-hidden="true"
              className={cn("absolute top-1.5 left-0 size-[11px] rounded-full border-2 border-background ring-1 ring-border", project ? "bg-accent" : "bg-signal")}
            />
            <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs tracking-wide text-muted-foreground uppercase">
              <time dateTime={entry.date}>{formatDate(entry.date)}</time>
              {showApp &&
                (project ? (
                  <Link href={`/apps/${project.slug}/`} className="inline-flex items-center gap-1 text-accent-text hover:underline">
                    <AppLogo project={project} className="size-4" />
                    {project.name}
                  </Link>
                ) : (
                  <span className="text-signal-text">{site.brand}</span>
                ))}
            </p>
            <h3 className="mt-1 text-lg font-semibold tracking-tight">{entry.title}</h3>
            {entry.description && <p className="mt-1 text-muted-foreground">{entry.description}</p>}
          </li>
        );
      })}
    </ol>
  );
}
