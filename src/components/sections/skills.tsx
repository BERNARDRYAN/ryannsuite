import { skillGroups } from "@/content/skills";
import { Section } from "@/components/ui/section";

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" heading="What I work with">
      <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.name}>
            <dt className="font-mono text-xs tracking-widest text-muted-foreground uppercase">{group.name}</dt>
            <dd className="mt-3 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="rounded-full border border-border bg-card px-3 py-1 text-sm">
                  {skill}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
