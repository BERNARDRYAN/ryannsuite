import { cn } from "@/lib/utils";
import { Container } from "./container";

interface SectionProps extends Omit<React.ComponentProps<"section">, "title"> {
  eyebrow?: string;
  heading?: React.ReactNode;
  description?: React.ReactNode;
}

export function Section({ id, eyebrow, heading, description, className, children, ...props }: SectionProps) {
  const headingId = id ? `${id}-heading` : undefined;
  return (
    <section id={id} aria-labelledby={heading ? headingId : undefined} className={cn("py-16 sm:py-24", className)} {...props}>
      <Container>
        {(eyebrow || heading || description) && (
          <header className="mb-10 max-w-2xl">
            {eyebrow && (
              <p className="font-mono text-xs font-medium tracking-widest text-primary uppercase">{eyebrow}</p>
            )}
            {heading && (
              <h2 id={headingId} className="mt-2 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                {heading}
              </h2>
            )}
            {description && <p className="mt-3 text-lg text-pretty text-muted-foreground">{description}</p>}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
