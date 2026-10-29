import type { SkillGroup } from "@/types/content";

// Grouped, not rated — no bars or percentages. Everything here is used in RyannSuite or at 7-Eleven.
export const skillGroups: SkillGroup[] = [
  {
    name: "Frontend",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vite", "PWAs / offline"],
  },
  {
    name: "Backend & Data",
    skills: ["Supabase / PostgreSQL", "REST APIs", "Cloudflare Workers"], // TODO: confirm — add any backend language/framework used at 7-Eleven
  },
  {
    name: "Auth",
    skills: ["Microsoft / Entra ID sign-in", "Google sign-in (OAuth)"], // TODO: confirm naming used on the E-Sourcing Platform
  },
  {
    name: "Tooling & Hosting",
    skills: ["Git", "Cloudflare Pages"],
  },
  {
    name: "Foundations",
    skills: ["OOP / OOAD", "Software design", "Database design"],
  },
];
