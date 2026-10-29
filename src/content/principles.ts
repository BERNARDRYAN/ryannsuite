import type { Step } from "@/types/content";

// "How I build" — each principle is backed by what the live apps actually do.
export const principles: (Step & { evidence: string })[] = [
  {
    title: "Useful before you sign up",
    description: "Open the app and get value in seconds. Accounts add sync — they're never the price of entry.",
    evidence: "RyannPace and RyannReceipt work instantly with no account.",
  },
  {
    title: "Private by default",
    description: "Keep people's data on their own device unless they choose otherwise.",
    evidence: "RyannPace reads activity files on-device; RyannReceipt keeps receipts in your browser until you back up.",
  },
  {
    title: "Local details done right",
    description: "Small things that make an app feel made for you, not translated for you.",
    evidence: "SST, service charge and 5-sen rounding in RyannReceipt, RM budgets in RyannPlan, English and 中文 in RyannPace.",
  },
  {
    title: "Shipped, not just built",
    description: "Every app is designed, built, deployed and maintained by me, from database to UI.",
    evidence: "Three apps live on Cloudflare, two of them installable as PWAs.",
  },
];
