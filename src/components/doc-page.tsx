import { Container } from "@/components/ui/container";

/** Shell for long-form ecosystem pages (privacy, terms, support). */
export function DocPage({
  eyebrow,
  title,
  lastUpdated,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  lastUpdated?: string;
  intro?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Container className="py-14 sm:py-20">
      <header className="max-w-2xl">
        <p className="font-mono text-xs font-medium tracking-widest text-primary uppercase">{eyebrow}</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">{title}</h1>
        {lastUpdated && (
          <p className="mt-3 font-mono text-sm text-muted-foreground">
            Last updated: <time dateTime={lastUpdated}>{formatDate(lastUpdated)}</time>
          </p>
        )}
        {intro && <div className="mt-5 text-lg text-pretty text-muted-foreground">{intro}</div>}
      </header>
      <div className="prose-doc mt-10">{children}</div>
    </Container>
  );
}

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
