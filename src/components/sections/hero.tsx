import { ArrowDown, FileText } from "lucide-react";
import { site } from "@/content/site";
import { projects } from "@/content/projects";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ProjectIcon } from "@/components/icons";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 mx-auto h-[28rem] max-w-3xl rounded-full bg-primary/15 blur-3xl"
      />
      <Container className="pt-20 pb-16 sm:pt-28 sm:pb-24">
        <div className="animate-fade-up max-w-3xl">
          <p className="font-mono text-xs font-medium tracking-widest text-primary uppercase">
            {site.brand} · {projects.length} apps and counting
          </p>
          <h1 id="hero-heading" className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
            {site.tagline.replace(/\.$/, "")}
            <span className="text-primary">.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-pretty text-muted-foreground">
            Designed &amp; built by {site.owner.name}, software engineer.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/#apps">
              Explore the apps
              <ArrowDown aria-hidden="true" />
            </Button>
            <Button href="/resume/" variant="secondary">
              <FileText aria-hidden="true" />
              View my resume
            </Button>
          </div>
          <ul aria-label="Apps in the suite" className="mt-12 flex flex-wrap gap-2">
            {projects.map((p) => (
              <li
                key={p.slug}
                data-accent={p.accent}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-sm"
              >
                <ProjectIcon name={p.icon} className="size-4 text-accent-text" />
                {p.name}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
