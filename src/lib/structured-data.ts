import { education } from "@/content/experience";
import { activeSocials, site } from "@/content/site";
import type { Project } from "@/types/content";
import { absoluteUrl } from "@/lib/utils";

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.owner.fullName,
    alternateName: site.owner.name,
    jobTitle: site.owner.role,
    email: `mailto:${site.email}`,
    url: absoluteUrl("/"),
    alumniOf: { "@type": "CollegeOrUniversity", name: education[0].org.replace(/\s*\(.*\)$/, "") },
    sameAs: activeSocials.map((s) => s.href),
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.brand,
    url: absoluteUrl("/"),
    email: site.email,
    founder: { "@type": "Person", name: site.owner.fullName },
  };
}

export function softwareApplicationSchema(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.name,
    description: project.description,
    applicationCategory: project.schemaCategory,
    operatingSystem: "Web",
    url: project.liveUrl ?? absoluteUrl(`/apps/${project.slug}/`),
    image: absoluteUrl(project.logo),
    screenshot: project.screenshots.map((s) => absoluteUrl(s.src)),
    featureList: project.features,
    // Only claimed when the app itself says it is free.
    ...(project.free && { offers: { "@type": "Offer", price: "0", priceCurrency: "MYR" } }),
    author: { "@type": "Person", name: site.owner.fullName },
    publisher: { "@type": "Organization", name: site.brand },
  };
}
