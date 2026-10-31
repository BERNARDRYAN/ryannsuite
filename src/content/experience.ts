import type { ExperienceItem, OtherProject } from "@/types/content";

export const work: ExperienceItem[] = [
  {
    kind: "work",
    title: "Full-Stack Developer Intern",
    org: "7-Eleven Malaysia",
    orgDetail: "IT Department – Development Team",
    start: "27 Jul 2026",
    end: "18 Oct 2026",
    highlights: [
      {
        name: "E-Sourcing Platform",
        description:
          "Built the internal user platform from scratch with Next.js, NestJS and PostgreSQL: vendor management, sourcing events and purchase requests, behind Microsoft login with role-based access. Delivered every user story, then wrote the documentation and handed it over to the next intern.",
      },
      {
        name: "Printing Service",
        description:
          "Implemented the redesigned customer app across every page, responsive and mobile-first, and built the payment result page and a back-office reconciliation dashboard with Excel export. Moved customer login to secure server-set session cookies.",
      },
      {
        name: "DSIP (Digital Sales Integration Platform)",
        description:
          "Fixed production bugs in voucher handling, order totals and file uploads, and added order and article search, in a C# / ASP.NET Core and React app.",
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
    end: "Nov 2026",
    note: "CGPA 3.75 / 4.00 · Convocation Dec 2026",
  },
];

export const independentWork = {
  title: "Founder & sole developer",
  org: "RyannSuite",
  description:
    "Design, build and ship a suite of web apps end to end — RyannPlan, RyannPace and RyannReceipt — from database and APIs to UI, deployed on Cloudflare.",
};

export const otherProjects: OtherProject[] = [
  {
    name: "Knowledge Hub",
    context: "Hack Day, Multimedia University · team project",
    description:
      "A student-sourced study platform where peers share tutorials and past-year papers, with AI auto-filling and note summarisation to organise content.",
    stack: ["PHP", "JavaScript"],
    repoUrl: "https://github.com/Yongqx-0313/Student-Sources-Study-Material-Platform",
  },
  {
    name: "Robot War Simulator",
    context: "Coursework",
    description:
      "A turn-based 2D battlefield game with robot upgrades and evolving abilities, built on OOP with abstract base classes for modular movement and attack logic.",
    stack: ["C++"],
  },
];
