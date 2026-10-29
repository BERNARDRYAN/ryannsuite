import type { NavItem, SocialLink } from "@/types/content";

export const site = {
  brand: "RyannSuite",
  tagline: "Small, thoughtful apps for everyday life.",
  description:
    "RyannSuite is a family of small, well-made apps — RyannPlan, RyannPace and RyannReceipt — designed and built by Bernard Ryan Sim, software engineer.",
  owner: {
    fullName: "Bernard Ryan Sim Kang Xuan",
    name: "Bernard Ryan Sim",
    role: "Software engineer",
  },
  email: "ryannplan.app@gmail.com",
  // TODO: replace with the custom domain once connected (also update public/_headers / README if needed).
  url: "https://ryannsuite.pages.dev",
  // TODO: replace with the real resume PDF at public/resume.pdf.
  resumePdf: "/resume.pdf",
  // TODO: typical support response time.
  supportResponseTime: "within 3 working days",
  interests: ["running", "badminton", "bouldering", "travel", "gym"],
  nav: [
    { label: "Apps", href: "/#apps" },
    { label: "About", href: "/#about" },
    { label: "Experience", href: "/#experience" },
    { label: "Contact", href: "/#contact" },
  ] as NavItem[],
  socials: [
    // TODO: add GitHub profile URL, e.g. "https://github.com/<username>".
    { label: "GitHub", href: null },
    // TODO: add LinkedIn profile URL, e.g. "https://www.linkedin.com/in/<handle>".
    { label: "LinkedIn", href: null },
  ] as SocialLink[],
};

export const activeSocials = site.socials.filter(
  (s): s is SocialLink & { href: string } => s.href !== null,
);
