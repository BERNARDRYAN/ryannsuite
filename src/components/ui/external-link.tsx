import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExternalLinkProps extends React.ComponentProps<"a"> {
  href: string;
  showIcon?: boolean;
}

/** Opens in a new tab with `rel="noopener noreferrer"` and announces that to screen readers. */
export function ExternalLink({ className, children, showIcon = true, ...props }: ExternalLinkProps) {
  return (
    <a target="_blank" rel="noopener noreferrer" className={cn("inline-flex items-center gap-1", className)} {...props}>
      {children}
      {showIcon && <ArrowUpRight aria-hidden="true" className="size-3.5 shrink-0" />}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
