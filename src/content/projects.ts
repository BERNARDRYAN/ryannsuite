import type { Project } from "@/types/content";

/**
 * The RyannSuite apps. To add an app, append one object here — routes, cards,
 * sitemap, JSON-LD and the support page all pick it up automatically.
 *
 * TODO: add real screenshots at public/projects/<slug>/screenshot-1.png (16:9) — missing files show placeholder frames.
 * TODO: confirm each app's accent colour matches its own branding.
 */
export const projects: Project[] = [
  {
    slug: "ryannplan",
    name: "RyannPlan",
    tagline: "Plan your trips day by day, in one place.",
    description:
      "RyannPlan is a travel itinerary planner. It turns a loose list of places, bookings and ideas into a clear day-by-day plan you can check at a glance while you're on the road.",
    category: "Travel",
    status: "live",
    liveUrl: null, // TODO: RyannPlan live URL
    repoUrl: null,
    accent: "sky",
    icon: "Plane",
    // TODO: confirm each feature matches the shipped app.
    features: [
      "Build trips as a day-by-day itinerary",
      "Add places, times and notes to each stop",
      "Keep everything for a trip together in one view",
      "Sign in to keep your trips with your account",
    ],
    stack: ["Supabase"], // TODO: confirm frontend stack (e.g. Next.js, TypeScript, Tailwind CSS)
    screenshots: ["/projects/ryannplan/screenshot-1.png", "/projects/ryannplan/screenshot-2.png"],
    privacyNotes:
      "Your account email and the trips you create are stored so you can access them again. Trip data is never sold or shared for advertising.",
  },
  {
    slug: "ryannpace",
    name: "RyannPace",
    tagline: "Turn your run into a clean, shareable pace poster.",
    description:
      "RyannPace is a running pace poster generator. Enter the details of a run or race and it lays them out as a poster that's ready to save and share.",
    category: "Running",
    status: "live",
    liveUrl: null, // TODO: RyannPace live URL
    repoUrl: null,
    accent: "orange",
    icon: "Footprints",
    // TODO: confirm each feature matches the shipped app.
    features: [
      "Enter distance and time to work out your pace",
      "Lay your run out as a clean poster",
      "Save the poster as an image to share",
      "Designed for race results and personal bests",
    ],
    stack: ["Supabase"], // TODO: confirm frontend stack
    screenshots: ["/projects/ryannpace/screenshot-1.png", "/projects/ryannpace/screenshot-2.png"],
    privacyNotes:
      "Run details you enter are used to generate your poster. If you sign in, saved data is tied to your account email and is never sold.",
  },
  {
    slug: "ryannreceipt",
    name: "RyannReceipt",
    tagline: "Track spending on a retro thermal receipt.",
    description:
      "RyannReceipt is an expense tracker styled like an 80 mm thermal receipt. Logging a purchase feels like adding a line to a till roll, and your totals print out the way a shop would.",
    category: "Finance",
    status: "live",
    liveUrl: null, // TODO: RyannReceipt live URL
    repoUrl: null,
    accent: "emerald",
    icon: "Receipt",
    // TODO: confirm each feature matches the shipped app.
    features: [
      "Log expenses as line items on a receipt",
      "See running totals the way a till would print them",
      "Retro 80 mm thermal-receipt look and monospace type",
      "Sign in to keep your expenses with your account",
    ],
    stack: ["Supabase"], // TODO: confirm frontend stack
    screenshots: ["/projects/ryannreceipt/screenshot-1.png", "/projects/ryannreceipt/screenshot-2.png"],
    privacyNotes:
      "The expenses you log and your account email are stored so you can see your history. Financial entries are never sold or used for advertising.",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
