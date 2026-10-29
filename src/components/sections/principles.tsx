import { principles } from "@/content/principles";
import { Section } from "@/components/ui/section";

export function Principles() {
  return (
    <Section
      id="principles"
      eyebrow="How I build"
      heading={
        <>
          Four rules every app <span className="font-serif font-normal italic">has to follow</span>
        </>
      }
      className="bg-card/60 border-y border-border"
    >
      <ol className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
        {principles.map((p, i) => (
          <li key={p.title} className="flex flex-col bg-background p-6 sm:p-8">
            <span className="font-mono text-xs text-signal-text">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-3 text-xl font-semibold tracking-tight">{p.title}</h3>
            <p className="mt-2 text-muted-foreground">{p.description}</p>
            <p className="mt-4 border-t border-dashed border-border pt-4 font-mono text-xs leading-relaxed text-muted-foreground">
              {p.evidence}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
