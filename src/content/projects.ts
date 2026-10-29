import type { Project } from "@/types/content";

/**
 * The RyannSuite apps. To add an app, append one object here — routes, showcase,
 * sitemap, JSON-LD, share images and the support page all pick it up automatically.
 *
 * Copy, features and stack were taken from each live app (checked 30 Oct 2026).
 * Screenshots live in public/projects/<slug>/ (16:9, plus a 720px `-sm` thumb).
 */
export const projects: Project[] = [
  {
    slug: "ryannplan",
    name: "RyannPlan",
    tagline: "Plan, budget and settle group trips in one place.",
    description:
      "RyannPlan is a group travel planner. Everyone in the trip shares one workspace for the itinerary, the budget and every expense, then settles up with clear balances and payment proof — with AI suggestions that respect the budget.",
    category: "Group travel",
    schemaCategory: "TravelApplication",
    status: "live",
    liveUrl: "https://ryannplan.pages.dev/",
    repoUrl: null,
    accent: "magenta",
    logo: "/projects/ryannplan/logo.png",
    highlights: ["Group trips", "Shared budgets", "AI suggestions"],
    features: [
      "Shared trip workspace for members, plans and costs",
      "Day-by-day itinerary the whole group can follow",
      "Expense tracking against a live shared budget",
      "Balance summary that shows who owes what",
      "Payment proof uploads for transparent settlement",
      "Budget-aware AI travel recommendations",
    ],
    howItWorks: [
      { title: "Create a trip", description: "Set the destination and dates, then invite your group." },
      { title: "Plan the itinerary", description: "Organise activities into one shared plan." },
      { title: "Track expenses", description: "Log who paid, what was shared and how the budget is moving." },
      { title: "Settle payments", description: "Review balances, upload proof and close out the trip." },
    ],
    stack: ["Vite", "Supabase", "Cloudflare Workers (API)", "Cloudflare Pages", "Google sign-in"],
    screenshots: [
      {
        src: "/projects/ryannplan/screenshot-1.webp",
        thumb: "/projects/ryannplan/screenshot-1-sm.webp",
        alt: "RyannPlan landing page with an active Kuala Lumpur trip showing budget, spending and planned activities",
        caption: "One workspace per trip: budget, members and activities at a glance.",
      },
      {
        src: "/projects/ryannplan/screenshot-2.webp",
        thumb: "/projects/ryannplan/screenshot-2-sm.webp",
        alt: "RyannPlan feature grid: shared workspace, itinerary, expenses, balances, payment proof and AI recommendations",
        caption: "Everything a group trip needs, from planning to settlement.",
      },
    ],
    privacyNotes:
      "RyannPlan needs an account (email or Google sign-in) so a group can share a trip. Trips, itineraries, expenses and any payment-proof images you upload are stored so your group can see them. Your data is never sold.",
  },
  {
    slug: "ryannpace",
    name: "RyannPace",
    tagline: "Turn your run into a magazine-cover poster.",
    description:
      "RyannPace turns an activity file from your watch into an editorial-grade poster for Instagram Stories and your feed. Drop in a GPX, FIT or TCX export, pick a template and palette, and export a crisp image in seconds — right in your browser.",
    category: "Running",
    schemaCategory: "SportsApplication",
    status: "live",
    liveUrl: "https://ryannpace.ryannpace-app.workers.dev/",
    repoUrl: null,
    accent: "vermilion",
    logo: "/projects/ryannpace/logo.svg",
    highlights: ["Free", "No sign-up", "Runs on-device"],
    features: [
      "Reads GPX, FIT and TCX from Strava, Garmin, Coros, Suunto and Apple Watch",
      "Six templates: Editorial, Cyberpunk, Minimal, Race Bib, Retro Mag and Stats Card",
      "Three formats (9:16, 4:5, 1:1) and twenty-six palettes",
      "Exports a crisp 2160 × 3840 PNG, or shares straight from your phone",
      "Activity files are read on your device, never uploaded",
      "Available in English and 中文",
    ],
    howItWorks: [
      { title: "Drop your activity", description: "Distance, pace, elevation and heart rate fill themselves in." },
      { title: "Style it", description: "Pick a template, palette and format; every change previews live." },
      { title: "Export & share", description: "Download the PNG or send it straight to Instagram or WhatsApp." },
    ],
    stack: ["Next.js", "React", "Cloudflare Workers", "PWA", "Google sign-in"],
    screenshots: [
      {
        src: "/projects/ryannpace/screenshot-1.webp",
        thumb: "/projects/ryannpace/screenshot-1-sm.webp",
        alt: "RyannPace landing page: 'Your run, printed like a magazine cover' beside three sample run posters",
        caption: "Editorial posters made from a single activity file.",
      },
      {
        src: "/projects/ryannpace/screenshot-2.webp",
        thumb: "/projects/ryannpace/screenshot-2-sm.webp",
        alt: "RyannPace studio with a file drop zone, presets and templates beside a live poster preview",
        caption: "The studio: drop a file, style it, export.",
      },
    ],
    privacyNotes:
      "Activity files are read on your device and never uploaded. Signing in is optional — it's only needed to save presets and keep a gallery of your posters.",
    free: true,
  },
  {
    slug: "ryannreceipt",
    name: "RyannReceipt",
    tagline: "Track spending fast; print a retro receipt anytime.",
    description:
      "RyannReceipt is an expense tracker with a retro thermal-receipt maker built in. Log an expense in one tap, see where your money goes, split bills with friends, and turn any expense into a real-looking 80 mm receipt.",
    category: "Finance",
    schemaCategory: "FinanceApplication",
    status: "live",
    liveUrl: "https://ryannreceipt.ryannsuite.workers.dev/",
    repoUrl: null,
    accent: "ink",
    logo: "/projects/ryannreceipt/logo.png",
    highlights: ["Free", "No account needed", "Works offline"],
    features: [
      "One-tap expense logging that remembers shops and categories",
      "Monthly totals, categories and an optional budget",
      "Bill splitting with friends",
      "Warranty reminders for anything expiring in the next 30 days",
      "Realistic 80 mm or 58 mm receipts with SST/VAT, service charge and 5-sen rounding",
      "Export as PNG, a roll-sized PDF, or print to a thermal printer",
    ],
    howItWorks: [
      { title: "Add an expense", description: "Type the amount and what it was for." },
      { title: "See where it goes", description: "Today, this month, budgets and categories at a glance." },
      { title: "Keep the receipt", description: "Turn any expense into a printed-style receipt, PDF or image." },
    ],
    stack: ["Next.js", "React", "Zustand", "jsPDF", "Cloudflare Workers", "PWA (offline)"],
    screenshots: [
      {
        src: "/projects/ryannreceipt/screenshot-1.webp",
        thumb: "/projects/ryannreceipt/screenshot-1-sm.webp",
        alt: "RyannReceipt landing page beside a printed-style kopitiam receipt coming out of a thermal printer",
        caption: "Expense tracking with a receipt printer built in.",
      },
      {
        src: "/projects/ryannreceipt/screenshot-2.webp",
        thumb: "/projects/ryannreceipt/screenshot-2-sm.webp",
        alt: "RyannReceipt receipt maker: step-by-step shop details form next to a live receipt preview",
        caption: "The receipt maker: shop, items, payment, look.",
      },
    ],
    privacyNotes:
      "Works without an account — your receipts stay in your browser. If you choose to sign in with Google, they're backed up and synced across your devices.",
    free: true,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
