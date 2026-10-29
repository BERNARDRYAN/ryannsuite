import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, ImageIcon, ShieldCheck } from "lucide-react";
import { getProject, projects } from "@/content/projects";
import { site } from "@/content/site";
import { Container } from "@/components/ui/container";
import { Badge, StatusBadge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "@/components/ui/external-link";
import { ProjectIcon } from "@/components/icons";
import { OpenAppLink } from "@/components/open-app-link";
import { JsonLd } from "@/components/json-ld";
import { softwareApplicationSchema } from "@/lib/structured-data";
import { publicFileExists } from "@/lib/public-files";

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
      images: [{ url: "/og.png", width: 1200, height: 630 }],
    },
  };
}

export default async function AppPage({ params }: PageProps<"/apps/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <div data-accent={project.accent}>
      <JsonLd data={softwareApplicationSchema(project)} />

      <section aria-labelledby="app-heading" className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-48 -z-10 mx-auto h-96 max-w-3xl rounded-full bg-accent/20 blur-3xl"
        />
        <Container className="py-14 sm:py-20">
          <Link
            href="/#apps"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
            Back to the suite
          </Link>
          <div className="mt-8 flex items-center gap-3">
            <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-accent/15 text-accent-text">
              <ProjectIcon name={project.icon} className="size-6" />
            </span>
            <StatusBadge status={project.status} />
            <Badge>{project.category}</Badge>
          </div>
          <h1 id="app-heading" className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
            {project.name}
          </h1>
          <p className="mt-3 text-xl text-pretty text-accent-text">{project.tagline}</p>
          <p className="mt-5 max-w-2xl text-lg text-pretty text-muted-foreground">{project.description}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <OpenAppLink project={project} asButton />
            {project.repoUrl && (
              <ExternalLink href={project.repoUrl} className="text-sm font-medium hover:underline">
                View source
              </ExternalLink>
            )}
          </div>
        </Container>
      </section>

      <Container className="grid gap-10 py-14 sm:py-20 lg:grid-cols-[2fr_1fr]">
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

        <section aria-labelledby="screens-heading" className="lg:col-span-2">
          <h2 id="screens-heading" className="text-2xl font-semibold tracking-tight">
            Screenshots
          </h2>
          <ul className="mt-5 grid gap-5 sm:grid-cols-2">
            {project.screenshots.map((src, i) => (
              <li key={src}>
                {publicFileExists(src) ? (
                  // eslint-disable-next-line @next/next/no-img-element -- static export serves images as-is
                  <img
                    src={src}
                    alt={`${project.name} screenshot ${i + 1}`}
                    loading="lazy"
                    className="aspect-video w-full rounded-2xl border border-border object-cover"
                  />
                ) : (
                  <div className="flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-border bg-muted/50 text-sm text-muted-foreground">
                    <ImageIcon aria-hidden="true" className="size-6" />
                    Screenshot coming soon
                  </div>
                )}
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </div>
  );
}
