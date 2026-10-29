import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
  secondary: "border border-border bg-card text-foreground hover:bg-muted",
  ghost: "text-foreground hover:bg-muted",
} as const;

const sizes = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-5 text-sm",
} as const;

interface BaseProps {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsLink = BaseProps & Omit<React.ComponentProps<"a">, keyof BaseProps> & { href: string };
type ButtonAsButton = BaseProps & Omit<React.ComponentProps<"button">, keyof BaseProps> & { href?: undefined };

export function buttonClasses({ variant = "primary", size = "md", className }: Omit<BaseProps, "children">) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
    variants[variant],
    sizes[size],
    className,
  );
}

/** Renders a Next `<Link>` for internal paths, a plain `<a>` for external/mailto URLs, or a `<button>`. */
export function Button(props: ButtonAsLink | ButtonAsButton) {
  if (props.href !== undefined) {
    const { variant, size, className, href, ...rest } = props;
    const classes = buttonClasses({ variant, size, className });
    const isInternal = href.startsWith("/") || href.startsWith("#");
    if (isInternal && !href.match(/\.[a-z0-9]+$/i)) {
      return <Link href={href} className={classes} {...rest} />;
    }
    return <a href={href} className={classes} {...rest} />;
  }
  const { variant, size, className, type = "button", ...rest } = props;
  return <button type={type} className={buttonClasses({ variant, size, className })} {...rest} />;
}
