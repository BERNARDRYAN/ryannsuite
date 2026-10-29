import type { ChangelogEntry } from "@/types/content";

/**
 * Newest first is not required — entries are sorted by date when rendered.
 * `app` is a project slug from projects.ts, or "suite" for this site.
 *
 * TODO: add release history for RyannPlan, RyannPace and RyannReceipt.
 */
export const changelog: ChangelogEntry[] = [
  {
    date: "2026-10-30",
    app: "suite",
    title: "RyannSuite homepage launched",
    description: "One home for every app in the suite, plus shared privacy, terms and support pages.",
  },
];

export function sortedChangelog(app?: string) {
  return changelog
    .filter((e) => app === undefined || e.app === app)
    .toSorted((a, b) => b.date.localeCompare(a.date));
}
