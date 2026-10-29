import type { Metadata } from "next";
import { Download, Printer } from "lucide-react";
import { education, independentWork, work } from "@/content/experience";
import { projects } from "@/content/projects";
import { skillGroups } from "@/content/skills";
import { activeSocials, site } from "@/content/site";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { PrintButton } from "@/components/print-button";
import { JsonLd } from "@/components/json-ld";
import { personSchema } from "@/lib/structured-data";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume of ${site.owner.fullName} — software engineer, MMU Software Engineering, founder of ${site.brand}.`,
  alternates: { canonical: "/resume/" },
};

function ResumeSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-border pt-6 print:pt-3">
      <h2 className="font-mono text-xs font-semibold tracking-widest text-muted-foreground uppercase">{title}</h2>
      <div className="mt-4 space-y-6 print:mt-2 print:space-y-3">{children}</div>
    </section>
  );
}

function Entry({
  title,
  org,
  dates,
  children,
}: {
  title: string;
  org: string;
  dates?: string;
  children?: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex flex-col justify-between gap-x-4 sm:flex-row sm:items-baseline print:flex-row">
        <h3 className="font-semibold">{title}</h3>
        {dates && <p className="shrink-0 font-mono text-xs text-muted-foreground">{dates}</p>}
      </div>
      <p className="text-muted-foreground">{org}</p>
      {children}
    </div>
  );
}

export default function ResumePage() {
  return (
    <Container className="max-w-3xl py-14 sm:py-20 print:max-w-none print:p-0">
      <JsonLd data={personSchema()} />
      <div className="mb-10 flex flex-wrap gap-3 print:hidden">
        {/* TODO: add the real PDF at public/resume.pdf */}
        <Button href={site.resumePdf} download>
          <Download aria-hidden="true" />
          Download PDF
        </Button>
        <PrintButton>
          <Printer aria-hidden="true" />
          Print
        </PrintButton>
      </div>

      <article className="space-y-8 print:space-y-4">
        <header>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl print:text-2xl">{site.owner.fullName}</h1>
          <p className="mt-1 text-lg text-muted-foreground">Software Engineer · Founder of {site.brand}</p>
          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
            <li>
              <a href={`mailto:${site.email}`} className="hover:underline">
                {site.email}
              </a>
            </li>
            <li>
              <a href={absoluteUrl("/")} className="hover:underline">
                {new URL(site.url).host}
              </a>
            </li>
            {activeSocials.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="hover:underline">
                  {s.href.replace(/^https?:\/\/(www\.)?/, "")}
                </a>
              </li>
            ))}
          </ul>
        </header>

        <ResumeSection title="Experience">
          {work.map((item) => (
            <Entry
              key={item.org}
              title={item.title}
              org={[item.org, item.orgDetail].filter(Boolean).join(" · ")}
              dates={`${item.start} – ${item.end}`}
            >
              {item.highlights && (
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  {item.highlights.map((h) => (
                    <li key={h.name}>
                      <span className="font-medium">{h.name}</span> — {h.description}
                    </li>
                  ))}
                </ul>
              )}
            </Entry>
          ))}
        </ResumeSection>

        <ResumeSection title="Independent work">
          <Entry title={independentWork.title} org={independentWork.org}>
            <p className="mt-2">{independentWork.description}</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              {projects.map((p) => (
                <li key={p.slug}>
                  <span className="font-medium">{p.name}</span> — {p.tagline}
                  {p.liveUrl && (
                    <>
                      {" "}
                      <a href={p.liveUrl} className="font-mono text-xs text-muted-foreground hover:underline">
                        {new URL(p.liveUrl).host}
                      </a>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </Entry>
        </ResumeSection>

        <ResumeSection title="Education">
          {education.map((item) => (
            <Entry
              key={item.org}
              title={item.title}
              org={[item.org, item.orgDetail].filter(Boolean).join(" · ")}
              dates={`${item.start} – ${item.end}`}
            />
          ))}
        </ResumeSection>

        <ResumeSection title="Skills">
          <dl className="grid gap-2 sm:grid-cols-[10rem_1fr] print:grid-cols-[9rem_1fr]">
            {skillGroups.map((g) => (
              <div key={g.name} className="contents">
                <dt className="font-medium">{g.name}</dt>
                <dd className="text-muted-foreground">{g.skills.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </ResumeSection>

        <ResumeSection title="Interests">
          <p className="capitalize">{site.interests.join(" · ")}</p>
        </ResumeSection>
      </article>
    </Container>
  );
}
