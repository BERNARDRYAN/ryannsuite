import type { Screenshot } from "@/types/content";
import { cn } from "@/lib/utils";

/** A screenshot inside a minimal browser window, labelled with the app's host. */
export function BrowserFrame({
  shot,
  url,
  size = "full",
  priority = false,
  className,
}: {
  shot: Screenshot;
  url?: string | null;
  /** "thumb" uses the ~720px variant when there is one. */
  size?: "full" | "thumb";
  priority?: boolean;
  className?: string;
}) {
  const src = size === "thumb" && shot.thumb ? shot.thumb : shot.src;
  return (
    <div className={cn("overflow-hidden rounded-xl border border-border bg-card shadow-[0_24px_60px_-28px_rgb(20_20_19/0.45)]", className)}>
      <div className="flex items-center gap-1.5 border-b border-border bg-muted px-3 py-2">
        <span aria-hidden="true" className="size-2 rounded-full bg-foreground/15" />
        <span aria-hidden="true" className="size-2 rounded-full bg-foreground/15" />
        <span aria-hidden="true" className="size-2 rounded-full bg-foreground/15" />
        {url && (
          <span className="ml-2 truncate font-mono text-[10px] text-muted-foreground">{new URL(url).host}</span>
        )}
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element -- static export serves images as-is */}
      <img
        src={src}
        alt={shot.alt}
        width={size === "thumb" ? 720 : 1440}
        height={size === "thumb" ? 405 : 810}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        decoding="async"
        className="block aspect-video h-auto w-full object-cover object-top"
      />
    </div>
  );
}
