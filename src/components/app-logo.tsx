import type { Project } from "@/types/content";
import { cn } from "@/lib/utils";

/** An app's own icon. Decorative by default because the app name is always next to it. */
export function AppLogo({ project, className }: { project: Project; className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- static export serves images as-is
    <img
      src={project.logo}
      alt=""
      width={64}
      height={64}
      className={cn("size-10 shrink-0 rounded-[22%] object-contain", className)}
    />
  );
}
