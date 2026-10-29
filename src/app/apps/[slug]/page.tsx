import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, ShieldCheck } from "lucide-react";
import { getProject, projects } from "@/content/projects";
import { sortedChangelog } from "@/content/changelog";
import { site } from "@/content/site";
import { Container } from "@/components/ui/container";
import { Badge, StatusBadge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "@/components/ui/external-link";
import { AppLogo } from "@/components/app-logo";
import { BrowserFrame } from "@/components/browser-frame";
import { ChangelogList } from "@/components/changelog-list";
import { OpenAppLink } from "@/components/open-app-link";
import { ProjectCard } from "@/components/project-card";
import { JsonLd } from "@/components/json-ld";
import { softwareApplicationSchema } from "@/lib/structured-data";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/apps/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const url = `/apps/${project.slug}/`;
  return {
    title: `${project.name} — ${project.tagline.replace(/\.$/, "")}`,
    description: project.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: site.brand,
      url,
      title: project.name,
      description: project.description,
    },
    twitter: {
      card: "summary_large_image",
      title: project.name,
      description: project.description,
      images: [`/apps/${project.slug}/opengraph-image`],
    },
  };
}

export default async function AppPage({ params }: PageProps<"/apps/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const updates = sortedChangelog(project.slug);
  const [cover, ...gallery] = project.screenshots;
  const others = projects.filter((p) => p.slug !== project.slug);

  return (
    <div data-accent={project.accent}>
      <JsonLd data={softwareApplicationSchema(project)} />

      <section aria-labelledby="app-heading" className="relative overflow-hidden border-b border-border">
        <div aria-hidden="true" className="bg-dots pointer-events-none absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-48 right-0 -z-10 h-96 w-[36rem] rounded-full bg-accent/15 blur-3xl"
        />
        <Container className="pt-12 pb-16 sm:pt-16">
          <Link
            href="/#apps"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
            Back to the suite
          </Link>
          <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1fr_1.15fr]">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <AppLogo project={project} className="size-14" />
                <StatusBadge status={project.status} />
                <Badge>{project.category}</Badge>
              </div>
              <h1 id="app-heading" className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl">
                {project.name}
              </h1>
              <p className="mt-3 font-serif text-2xl text-pretty text-accent-text italic sm:text-3xl">{project.tagline}</p>
              <p className="mt-5 max-w-xl text-lg text-pretty text-muted-foreground">{project.description}</p>
              <ul aria-label="Highlights" className="mt-6 flex flex-wrap gap-2">
                {project.highlights.map((h) => (
                  <li key={h} className="rounded-full border border-border bg-card px-3 py-1 text-sm">
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <OpenAppLink project={project} asButton />
                {project.repoUrl && (
                  <ExternalLink href={project.repoUrl} className="text-sm font-medium hover:underline">
                    View source
                  </ExternalLink>
                )}
              </div>
            </div>
            {cover && (
              <figure>
                <BrowserFrame shot={cover} url={project.liveUrl} priority />
                {cover.caption && (
                  <figcaption className="mt-3 text-center font-mono text-xs text-muted-foreground">{cover.caption}</figcaption>
                )}
              </figure>
            )}
          </div>
        </Container>
      </section>

      {project.howItWorks && (
        <section aria-labelledby="how-heading" className="border-b border-border">
          <Container className="py-14 sm:py-20">
            <h2 id="how-heading" className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
              How it works
            </h2>
            <ol className={`mt-6 grid gap-6 sm:grid-cols-2 ${project.howItWorks.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
              {project.howItWorks.map((step, i) => (
                <li key={step.title} className="border-t-2 border-accent pt-4">
                  <span className="font-mono text-xs text-accent-text">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-1 text-lg font-semibold tracking-tight">{step.title}</h3>
                  <p className="mt-1 text-muted-foreground">{step.description}</p>
                </li>
              ))}
            </ol>
          </Container>
        </section>
      )}

      <Container className="grid grid-cols-[minmax(0,1fr)] gap-10 py-14 sm:py-20 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <section aria-labelledby="features-heading">
          <h2 id="features-heading" className="text-2xl font-semibold tracking-tight">
            Features
          </h2>
          <ul className="mt-5 space-y-3">
            {project.features.map((feature) => (
              <li key={feature} className="flex gap-3">
                <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-accent-text" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="space-y-6">
          <Card>
            <h2 className="font-mono text-xs tracking-widest text-muted-foreground uppercase">Built with</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li key={tech} className="rounded-full border border-border px-3 py-1 text-sm">
                  {tech}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">Designed, built and shipped solo by {site.owner.name}.</p>
          </Card>
          {project.privacyNotes && (
            <Card>
              <h2 className="flex items-center gap-2 font-mono text-xs tracking-widest text-muted-foreground uppercase">
                <ShieldCheck aria-hidden="true" className="size-4" />
                Privacy
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">{project.privacyNotes}</p>
              <Link href="/privacy/" className="mt-3 inline-block text-sm font-medium text-accent-text hover:underline">
                Read the full privacy policy
              </Link>
            </Card>
          )}
        </div>

        {gallery.length > 0 && (
          <section aria-labelledby="screens-heading" className="lg:col-span-2">
            <h2 id="screens-heading" className="text-2xl font-semibold tracking-tight">
              A closer look
            </h2>
            <div className={gallery.length > 1 ? "mt-6 grid gap-8 md:grid-cols-2" : "mt-6 max-w-4xl"}>
              {gallery.map((shot) => (
                <figure key={shot.src}>
                  <BrowserFrame shot={shot} url={project.liveUrl} />
                  {shot.caption && (
                    <figcaption className="mt-3 font-mono text-xs text-muted-foreground">{shot.caption}</figcaption>
                  )}
                </figure>
              ))}
            </div>
          </section>
        )}

        {updates.length > 0 && (
          <section aria-labelledby="updates-heading" className="lg:col-span-2">
            <div className="flex items-baseline justify-between gap-4">
              <h2 id="updates-heading" className="text-2xl font-semibold tracking-tight">
                Recent updates
              </h2>
              <Link href="/changelog/" className="text-sm font-medium text-accent-text hover:underline">
                Full changelog
              </Link>
            </div>
            <div className="mt-6">
              <ChangelogList entries={updates.slice(0, 5)} showApp={false} />
            </div>
          </section>
        )}

        <section aria-labelledby="more-heading" className="lg:col-span-2">
          <h2 id="more-heading" className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            More from the suite
          </h2>
          <ul className="mt-4 grid grid-cols-[minmax(0,1fr)] gap-4 sm:grid-cols-2">
            {others.map((p) => (
              <li key={p.slug}>
                <ProjectCard project={p} />
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </div>
  );
}
