import { Briefcase, GraduationCap } from "lucide-react";
import { education, work } from "@/content/experience";
import type { ExperienceItem } from "@/types/content";
import { Section } from "@/components/ui/section";

function TimelineItem({ item }: { item: ExperienceItem }) {
  const Icon = item.kind === "work" ? Briefcase : GraduationCap;
  return (
    <li className="relative pb-12 pl-10 last:pb-0">
      <span
        aria-hidden="true"
        className="absolute top-0 left-0 inline-flex size-7 items-center justify-center rounded-full border border-border bg-card text-signal-text"
      >
        <Icon className="size-3.5" />
      </span>
      <p className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
        {item.start} — {item.end}
      </p>
      <h3 className="mt-1 text-xl font-semibold tracking-tight">{item.title}</h3>
      <p className="text-muted-foreground">
        {item.org}
        {item.orgDetail && <> · {item.orgDetail}</>}
      </p>
      {item.note && <p className="mt-1 font-mono text-sm">{item.note}</p>}
      {item.highlights && (
        <ul className="mt-5 grid gap-3 sm:grid-cols-3">
          {item.highlights.map((h) => (
            <li key={h.name} className="rounded-xl border border-border bg-card p-4">
              <p className="font-medium">{h.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">{h.description}</p>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" heading="Where I've been building">
      <ol className="relative before:absolute before:top-2 before:bottom-2 before:left-3.5 before:w-px before:bg-border">
        {[...work, ...education].map((item) => (
          <TimelineItem key={`${item.org}-${item.title}`} item={item} />
        ))}
      </ol>
    </Section>
  );
}
