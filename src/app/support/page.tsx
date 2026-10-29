import type { Metadata } from "next";
import Link from "next/link";
import { ChevronDown, Mail } from "lucide-react";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { DocPage } from "@/components/doc-page";
import { Button } from "@/components/ui/button";
import { ProjectIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Support",
  description: `Get help with ${site.brand} apps.`,
  alternates: { canonical: "/support/" },
};

const faqs = [
  {
    q: "How do I get help with an app?",
    a: `Email ${site.email} with the app's name, what you were trying to do, and what happened instead. Screenshots help.`,
  },
  {
    q: "How do I delete my account and data?",
    a: `Email ${site.email} from the address on your account and ask for deletion. Everything linked to your account is removed across all ${site.brand} apps.`,
  },
  {
    q: "Is my data shared between apps?",
    a: `The apps share one backend and sign-in system, so one account can work across the suite. Your content is never sold or shared with advertisers.`,
  },
  {
    q: "Can I suggest a feature?",
    a: "Please do — ideas from people using the apps shape what gets built next.",
  },
];

export default function SupportPage() {
  return (
    <DocPage
      eyebrow={site.brand}
      title="Support"
      intro={
        <p>
          Something not working, or have a question? Email{" "}
          <a href={`mailto:${site.email}`} className="text-primary underline underline-offset-4">
            {site.email}
          </a>{" "}
          and you&apos;ll usually hear back {site.supportResponseTime}.
        </p>
      }
    >
      <Button href={`mailto:${site.email}?subject=Support%20request`}>
        <Mail aria-hidden="true" />
        Email support
      </Button>

      <h2>Frequently asked questions</h2>
      <div className="mt-4 divide-y divide-border rounded-2xl border border-border">
        {faqs.map((f) => (
          <details key={f.q} className="group px-5 py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium [&::-webkit-details-marker]:hidden">
              {f.q}
              <ChevronDown aria-hidden="true" className="size-4 shrink-0 transition-transform group-open:rotate-180" />
            </summary>
            <p className="text-muted-foreground">{f.a}</p>
          </details>
        ))}
      </div>

      <h2>Help for each app</h2>
      <ul className="!list-none !pl-0">
        {projects.map((p) => (
          <li key={p.slug} data-accent={p.accent} className="flex gap-3">
            <ProjectIcon name={p.icon} className="mt-1.5 size-4 shrink-0 text-accent-text" />
            <span>
              <strong>{p.name}</strong> — {p.tagline}{" "}
              <a href={`mailto:${site.email}?subject=${encodeURIComponent(`${p.name} support`)}`}>Email about {p.name}</a>
              {" · "}
              <Link href={`/apps/${p.slug}/`}>About the app</Link>
            </span>
          </li>
        ))}
      </ul>
    </DocPage>
  );
}
