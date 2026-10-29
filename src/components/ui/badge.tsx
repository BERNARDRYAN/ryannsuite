import { cn } from "@/lib/utils";
import type { ProjectStatus } from "@/types/content";

export function Badge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-border bg-muted px-2.5 py-0.5 font-mono text-[11px] font-medium tracking-wide text-muted-foreground uppercase",
        className,
      )}
      {...props}
    />
  );
}

const statusLabel: Record<ProjectStatus, string> = {
  live: "Live",
  beta: "Beta",
  "coming-soon": "Coming soon",
};

const statusDot: Record<ProjectStatus, string> = {
  live: "bg-emerald-500",
  beta: "bg-amber-500",
  "coming-soon": "bg-zinc-400",
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <Badge>
      <span aria-hidden="true" className={cn("size-1.5 rounded-full", statusDot[status])} />
      {statusLabel[status]}
    </Badge>
  );
}
