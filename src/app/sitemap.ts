import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { absoluteUrl } from "@/lib/utils";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/resume/", "/changelog/", "/privacy/", "/terms/", "/support/"];
  return [
    ...pages.map((path) => ({
      url: absoluteUrl(path),
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.6,
    })),
    ...projects.map((p) => ({
      url: absoluteUrl(`/apps/${p.slug}/`),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
