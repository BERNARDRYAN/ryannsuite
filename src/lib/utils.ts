import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { site } from "@/content/site";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Absolute URL on the site's canonical domain (`site.url`). */
export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}

/** "2026-10-30" → "30 October 2026" (UTC, so build machines in any timezone agree). */
export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
