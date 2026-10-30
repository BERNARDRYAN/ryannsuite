import { site } from "@/content/site";
import { Section } from "@/components/ui/section";

export function About() {
  return (
    <Section id="about" eyebrow="About me" heading={`Hi, I'm ${site.owner.name}.`}>
      <div className="grid gap-10 md:grid-cols-[1fr_auto]">
        <div className="max-w-2xl space-y-4 text-lg text-pretty text-muted-foreground">
          <p>
            I&apos;m a Software Engineering student at Multimedia University, finishing my Bachelor of Computer
            Science in November 2026. I recently completed a full-stack developer internship with the development team
            at 7-Eleven Malaysia, where I built an internal e-sourcing platform from scratch, worked on the customer app
            UI revamp for the printing service, and fixed bugs and added features in its Digital Sales Integration Platform.
          </p>
          <p>
            Outside of that I build {site.brand}: small apps for things I actually do, like planning trips, sharing a
            run and keeping track of spending. Building each one end to end, from database to UI to deployment, is how
            I keep learning.
          </p>
        </div>
        <aside
          aria-label="Off the keyboard"
          className="h-fit rounded-2xl border border-dashed border-border p-5 font-mono text-sm md:w-64"
        >
          <p className="text-xs tracking-widest text-muted-foreground uppercase">Off the keyboard</p>
          <ul className="mt-3 space-y-1.5">
            {site.interests.map((interest) => (
              <li key={interest} className="flex justify-between gap-4 capitalize">
                <span>{interest}</span>
                <span aria-hidden="true" className="text-muted-foreground">
                  ×1
                </span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Section>
  );
}
