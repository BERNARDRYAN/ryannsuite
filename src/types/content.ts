import type { ProjectIconName } from "@/components/icons";

/** Accent palettes defined in `globals.css` under `[data-accent="…"]`. */
export type AccentColor = "sky" | "orange" | "emerald" | "violet" | "rose" | "amber";

export type ProjectStatus = "live" | "beta" | "coming-soon";

export interface Project {
  slug: string;
  name: string;
  /** ≤ 10 words. */
  tagline: string;
  /** 2–3 sentences. */
  description: string;
  category: string;
  status: ProjectStatus;
  /** `null` until the live URL is known — the UI shows "Link coming soon". */
  liveUrl: string | null;
  repoUrl?: string | null;
  accent: AccentColor;
  icon: ProjectIconName;
  /** 4–6 items. */
  features: string[];
  stack: string[];
  /** Paths relative to `public/`, e.g. `/projects/ryannplan/screenshot-1.png`. Missing files render as placeholder frames. */
  screenshots: string[];
  privacyNotes?: string;
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
  highlights?: ExperienceHighlight[];
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
