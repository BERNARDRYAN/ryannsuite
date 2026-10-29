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
