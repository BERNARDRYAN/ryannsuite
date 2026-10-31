import Link from "next/link";
import { ArrowDown, FileText } from "lucide-react";
import { site } from "@/content/site";
import { projects } from "@/content/projects";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { AppLogo } from "@/components/app-logo";
import { BrowserFrame } from "@/components/browser-frame";
import { cn } from "@/lib/utils";

// Fan positions for the screenshot stack, back to front — mirrors the logo mark.
const fan = [
  "left-0 top-6 -rotate-6 sm:top-10 group-hover:-translate-x-3",
  "left-[11%] top-3 -rotate-1 sm:top-4 group-hover:-translate-y-2",
  "left-[22%] top-0 rotate-[4deg] group-hover:translate-x-3",
];

const facts = [
  { value: `${projects.length} apps`, label: "live — try them" },
  { value: "Solo", label: "made end to end" },
  { value: "7-Eleven MY", label: "interned on the dev team, 2026" },
  { value: "MMU '26", label: "B.CS Software Engineering" },
];

export function Hero() {
  const covers = projects.slice(0, 3);
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden">
      <div aria-hidden="true" className="bg-dots pointer-events-none absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 -z-10 h-[30rem] w-[40rem] rounded-full bg-signal/10 blur-3xl"
      />
      <Container className="grid items-center gap-14 pt-16 pb-14 sm:pt-24 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:pb-20">
        <div>
          {site.availability && (
            <p className="inline-flex items-center gap-2 rounded-2xl border border-border bg-card px-3 py-1 font-mono text-[11px] tracking-wider text-muted-foreground uppercase sm:rounded-full sm:tracking-widest">
              <span aria-hidden="true" className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-signal opacity-60 motion-reduce:hidden" />
                <span className="relative inline-flex size-2 rounded-full bg-signal" />
              </span>
              {site.availability}
            </p>
          )}
          <h1 id="hero-heading" className="mt-6 text-5xl leading-[0.95] font-semibold tracking-tight text-balance sm:text-7xl">
            Small, thoughtful apps{" "}
            <span className="font-serif font-normal tracking-normal italic">
              for everyday life<span className="text-signal">.</span>
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-pretty text-muted-foreground">
            I&apos;m {site.owner.name}, a software engineer. I design, build and ship every app in {site.brand} end to
            end — {projects.length} of them are live today.
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
          <ul aria-label="Apps in the suite" className="mt-10 flex flex-wrap gap-2">
            {projects.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/apps/${p.slug}/`}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card py-1 pr-3.5 pl-1 text-sm transition-colors hover:border-foreground/30"
                >
                  <AppLogo project={p} className="size-6" />
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div aria-hidden="true" className="group relative mx-auto aspect-[16/11] w-full max-w-[18rem] sm:max-w-xl lg:max-w-none">
          {covers.map((p, i) => (
            <div
              key={p.slug}
              className={`absolute w-[78%] transition-transform duration-500 ease-out motion-reduce:transition-none ${fan[i]}`}
            >
              <BrowserFrame shot={p.screenshots[0]} url={p.liveUrl} size="thumb" priority={i === covers.length - 1} />
            </div>
          ))}
        </div>
      </Container>

      <Container>
        <dl className="grid grid-cols-2 border-y border-border sm:grid-cols-4">
          {facts.map((f, i) => (
            <div
              key={f.label}
              className={cn(
                "flex flex-col-reverse py-5 sm:px-5 sm:first:pl-0",
                i % 2 === 1 && "border-l border-border pl-5",
                i === 2 && "sm:border-l sm:border-border",
                i > 1 && "border-t border-border sm:border-t-0",
              )}
            >
              <dt className="mt-0.5 font-mono text-[11px] tracking-wide text-muted-foreground uppercase">{f.label}</dt>
              <dd className="text-xl font-semibold tracking-tight sm:text-2xl">{f.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
