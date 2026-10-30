import type { SkillGroup } from "@/types/content";

// Grouped, not rated — no bars or percentages. Everything here is used in RyannSuite, at 7-Eleven or in coursework.
export const skillGroups: SkillGroup[] = [
  {
    name: "Languages",
    skills: ["TypeScript", "JavaScript", "C#", "SQL", "HTML / CSS", "Python", "Java", "C++"],
  },
  {
    name: "Frontend",
    skills: ["Next.js", "React", "MUI", "Tailwind CSS", "Vite", "PWAs / offline"],
  },
  {
    name: "Backend & Data",
    skills: ["NestJS", "ASP.NET Core", "PostgreSQL", "Supabase", "Firebase", "REST APIs", "Cloudflare Workers"],
  },
  {
    name: "Auth",
    skills: ["Microsoft sign-in", "Role-based access control", "Google sign-in (OAuth)", "Secure session cookies"],
  },
  {
    name: "Tools & Design",
    skills: ["Git", "Azure DevOps", "Postman", "pgAdmin", "Cloudflare Pages", "Figma"],
  },
  {
    name: "Foundations",
    skills: ["OOP / OOAD", "Software design", "Database design"],
  },
];
