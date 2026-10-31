import type { NavItem, SocialLink } from "@/types/content";

export const site = {
  brand: "RyannSuite",
  tagline: "Small, thoughtful apps for everyday life.",
  description:
    "RyannSuite is a family of small, well-made apps — RyannPlan for group trips, RyannPace for run posters and RyannReceipt for spending — designed, built and shipped solo by Bernard Ryan Sim, software engineer.",
  owner: {
    fullName: "Bernard Ryan Sim Kang Xuan",
    name: "Bernard Ryan Sim",
    role: "Software engineer",
    location: "Johor Bahru, Malaysia",
  },
  /** Two or three sentences at the top of the resume. */
  resumeSummary:
    "Software Engineering graduate from Multimedia University (CGPA 3.75). I enjoy building things people actually use, and I care about the small details that make an app feel easy. I got to work on live systems as a full-stack developer intern at 7-Eleven Malaysia, and in my own time I build RyannSuite: small apps for planning trips, sharing runs and tracking spending.",
  /** Spoken languages, shown on the resume. */
  languages: ["English", "Chinese", "Malay"],
  // Shown as a badge in the hero and on the resume. Set to null to hide.
  availability: "Open to graduate software engineering roles" as string | null,
  /** Personal contact for the portfolio (hero, contact section, footer, resume). */
  email: "ryansim727@gmail.com",
  /** App support address — the one the apps themselves publish. Used on privacy, terms and support pages. */
  supportEmail: "ryannplan.app@gmail.com",
  // TODO: replace with the custom domain once connected (drives metadataBase, canonical URLs, sitemap, robots).
  url: "https://ryannsuite.pages.dev",
  /** Public source of this site, linked from the footer. */
  sourceRepo: "https://github.com/BERNARDRYAN/ryannsuite",
  // Regenerate after resume edits: print /resume/ to PDF (A4, no headers) and save over public/resume.pdf.
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
    { label: "GitHub", href: "https://github.com/BERNARDRYAN" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/bernard-ryan-kang-xuan-sim-1b17792a7/" },
  ] as SocialLink[],
};

export const activeSocials = site.socials.filter(
  (s): s is SocialLink & { href: string } => s.href !== null,
);
