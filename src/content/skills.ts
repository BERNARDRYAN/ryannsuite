import type { SkillGroup } from "@/types/content";

// Grouped, not rated — no bars or percentages.
export const skillGroups: SkillGroup[] = [
  {
    name: "Frontend",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Backend & Data",
    skills: ["Supabase / PostgreSQL", "REST APIs"], // TODO: confirm — add any backend language/framework used at 7-Eleven
  },
  {
    name: "Auth",
    skills: ["Microsoft / Entra ID sign-in"], // TODO: confirm naming used on the E-Sourcing Platform
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
