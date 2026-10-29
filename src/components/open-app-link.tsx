import type { Project } from "@/types/content";
import { ExternalLink } from "@/components/ui/external-link";
import { buttonClasses } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** "Open app" link, or a muted note while the live URL is still a placeholder. */
export function OpenAppLink({ project, asButton = false }: { project: Project; asButton?: boolean }) {
  if (!project.liveUrl) {
    return (
      <span className={cn("text-muted-foreground", asButton && buttonClasses({ variant: "secondary", className: "cursor-default hover:bg-card" }))}>
        Link coming soon
      </span>
    );
  }
  return (
    <ExternalLink
      href={project.liveUrl}
      className={asButton ? buttonClasses({ className: "bg-accent-text text-background hover:bg-accent-text/90" }) : "text-accent-text hover:underline"}
    >
      Open {asButton ? project.name : "app"}
    </ExternalLink>
  );
}
