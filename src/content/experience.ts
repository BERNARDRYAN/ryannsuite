import type { ExperienceItem, OtherProject } from "@/types/content";

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
    note: "CGPA 3.75 / 4.00", // TODO: update to the final CGPA once released.
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
    context: "Hack Day, Multimedia University",
    description:
      "A student-sourced study platform where peers share tutorials and past-year papers, with AI auto-filling and note summarisation to organise content.",
    stack: [], // TODO: add the tech used at Hack Day.
  },
  {
    name: "Robot War Simulator",
    context: "Coursework",
    description:
      "A turn-based 2D battlefield game with robot upgrades and evolving abilities, built on OOP with abstract base classes for modular movement and attack logic.",
    stack: ["C++"],
  },
  {
    name: "Course Registration Application",
    context: "Coursework",
    description: "A desktop app that digitalises student enrolment and enforces class limits.",
    stack: ["Python", "Tkinter", "SQLite"],
  },
];
