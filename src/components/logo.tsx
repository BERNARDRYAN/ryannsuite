import { cn } from "@/lib/utils";

/**
 * The RyannSuite mark: the suite as a fanned stack of cards — RyannPlan magenta,
 * RyannPace orange and RyannReceipt paper — with the "R" on top. Same artwork as src/app/icon.svg.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={cn("size-8 shrink-0 rounded-[23%] dark:ring-1 dark:ring-white/15", className)}>
      <rect width="64" height="64" rx="15" fill="#141413" />
      <g transform="translate(-1 1)">
        <rect x="18" y="14" width="25" height="34" rx="5" fill="#D6337F" transform="rotate(-22 30.5 47)" />
        <rect x="18" y="14" width="25" height="34" rx="5" fill="#E4572E" transform="rotate(-9 30.5 47)" />
        <g transform="rotate(5 30.5 47)">
          <rect x="18" y="14" width="25" height="34" rx="5" fill="#F3F1EC" />
          <path
            d="M25.5 40.5v-19h6.4c3.8 0 6 2.1 6 5.2s-2.2 5.2-6 5.2h-6.4M31.3 31.9l6.5 8.6"
            fill="none"
            stroke="#141413"
            strokeWidth="3.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  );
}

/** Mark + "Ryann*Suite*" wordmark, echoing the "Ryann*Pace*" lockup. */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      <span className="text-lg font-semibold tracking-tight">
        Ryann<span className="font-serif text-[1.3em] font-normal italic leading-none tracking-normal">Suite</span>
      </span>
    </span>
  );
}
