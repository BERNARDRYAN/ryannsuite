/** Accent palettes defined in `globals.css` under `[data-accent="…"]`. */
export type AccentColor =
  | "magenta"
  | "vermilion"
  | "ink"
  | "sky"
  | "orange"
  | "emerald"
  | "violet"
  | "rose"
  | "amber";

export type ProjectStatus = "live" | "beta" | "coming-soon";

export interface Screenshot {
  /** Full-size image under `public/`, e.g. `/projects/ryannplan/screenshot-1.jpg` (16:9). */
  src: string;
  /** Optional ~720px-wide version used in cards and the hero. */
  thumb?: string;
  alt: string;
  caption?: string;
}

export interface Step {
  title: string;
  description: string;
}

export interface Project {
  slug: string;
  name: string;
  /** ≤ 10 words. */
  tagline: string;
  /** 2–3 sentences. */
  description: string;
  category: string;
  /** schema.org applicationCategory, e.g. "TravelApplication". */
  schemaCategory: string;
  status: ProjectStatus;
  liveUrl: string | null;
  repoUrl?: string | null;
  accent: AccentColor;
  /** App icon under `public/` (square). */
  logo: string;
  /** Short selling points shown as chips, e.g. "No sign-up". */
  highlights: string[];
  /** 4–6 items. */
  features: string[];
  howItWorks?: Step[];
  stack: string[];
  /** First screenshot is the cover image. */
  screenshots: Screenshot[];
  privacyNotes?: string;
  /** True only when the app itself says it's free. */
  free?: boolean;
}

export interface ExperienceHighlight {
  name: string;
  description: string;
}

export interface ExperienceItem {
  kind: "work" | "education";
  title: string;
  org: string;
  orgDetail?: string;
  start: string;
  end: string;
  /** Short extra line, e.g. a CGPA. */
  note?: string;
  highlights?: ExperienceHighlight[];
}

/** Hackathon and coursework projects — shown on the resume, not as suite apps. */
export interface OtherProject {
  name: string;
  /** Where it was built, e.g. "Hack Day, Multimedia University". */
  context: string;
  description: string;
  stack: string[];
}

export interface SkillGroup {
  name: string;
  skills: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: "GitHub" | "LinkedIn";
  /** `null` until known — the link is hidden. */
  href: string | null;
}

export interface ChangelogEntry {
  /** ISO date, e.g. "2026-10-30". */
  date: string;
  /** A project slug, or `"suite"` for the RyannSuite site itself. */
  app: string;
  title: string;
  description?: string;
}
