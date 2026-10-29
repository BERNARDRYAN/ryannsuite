import type { Metadata } from "next";
import { sortedChangelog } from "@/content/changelog";
import { site } from "@/content/site";
import { Container } from "@/components/ui/container";
import { ChangelogList } from "@/components/changelog-list";

export const metadata: Metadata = {
  title: "Changelog",
  description: `What's new across ${site.brand} apps.`,
  alternates: { canonical: "/changelog/" },
};

export default function ChangelogPage() {
  return (
    <Container className="max-w-3xl py-14 sm:py-20">
      <header>
        <p className="font-mono text-xs font-medium tracking-widest text-primary uppercase">{site.brand}</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">Changelog</h1>
        <p className="mt-3 text-lg text-muted-foreground">What&apos;s new across the suite.</p>
      </header>
      <div className="mt-12">
        <ChangelogList entries={sortedChangelog()} />
      </div>
    </Container>
  );
}
