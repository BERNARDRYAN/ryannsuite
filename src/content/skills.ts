import type { SkillGroup } from "@/types/content";

// Grouped, not rated — no bars or percentages. Everything here is used in RyannSuite, at 7-Eleven or in coursework.
export const skillGroups: SkillGroup[] = [
  {
    name: "Languages",
    skills: ["TypeScript", "JavaScript", "HTML / CSS", "Python", "Java", "C++", "SQL"],
  },
  {
    name: "Frontend",
    skills: ["Next.js", "React", "Tailwind CSS", "Vite", "PWAs / offline"],
  },
  {
    name: "Backend & Data",
    skills: ["Supabase / PostgreSQL", "Firebase", "SQLite", "REST APIs", "Cloudflare Workers"], // TODO: confirm — add any backend language/framework used at 7-Eleven
  },
  {
    name: "Auth",
    skills: ["Microsoft / Entra ID sign-in", "Google sign-in (OAuth)"], // TODO: confirm naming used on the E-Sourcing Platform
  },
  {
    name: "Tools & Design",
    skills: ["Git", "Cloudflare Pages", "VS Code", "Figma"],
  },
  {
    name: "Foundations",
    skills: ["OOP / OOAD", "Software design", "Database design"],
  },
];
