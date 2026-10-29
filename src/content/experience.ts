import type { ExperienceItem } from "@/types/content";

export const work: ExperienceItem[] = [
  {
    kind: "work",
    title: "Industrial Trainee",
    org: "7-Eleven Malaysia",
    orgDetail: "IT Department – Development Team",
    start: "27 Jul 2026",
    end: "18 Oct 2026",
    highlights: [
      {
        name: "E-Sourcing Platform",
        description: "Built from scratch — an internal user platform with Microsoft login.",
      },
      {
        name: "Printing Service",
        description:
          "Worked across frontend and backend; implemented the customer app UI revamp from a provided prototype, identifying and implementing improvements along the way.",
      },
      {
        name: "DSIP (Digital Sales Integration Platform)",
        description: "Contributed to development.",
      },
    ],
  },
];

export const education: ExperienceItem[] = [
  {
    kind: "education",
    title: "Bachelor of Computer Science (Software Engineering)",
    org: "Multimedia University (MMU)",
    orgDetail: "Faculty of Computing and Informatics",
    start: "Oct 2023",
    end: "Nov 2026 (expected)",
  },
];

export const independentWork = {
  title: "Founder & sole developer",
  org: "RyannSuite",
  description:
    "Design, build and ship a suite of web apps end to end — RyannPlan, RyannPace and RyannReceipt — from database and APIs to UI, deployed on Cloudflare.",
};
