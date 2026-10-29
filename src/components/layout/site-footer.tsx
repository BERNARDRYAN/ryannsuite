import Link from "next/link";
import { Mail } from "lucide-react";
import { activeSocials, site } from "@/content/site";
import { Container } from "@/components/ui/container";
import { ExternalLink } from "@/components/ui/external-link";
import { socialIcons } from "@/components/icons";

const legalLinks = [
  { label: "Privacy", href: "/privacy/" },
  { label: "Terms", href: "/terms/" },
  { label: "Support", href: "/support/" },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border print:hidden">
      <Container className="flex flex-col gap-6 py-10 text-sm text-muted-foreground sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-1">
          <p>
            © {new Date().getFullYear()} {site.brand}
          </p>
          <p>Built by {site.owner.name}</p>
        </div>
        <div className="flex flex-col gap-3 sm:items-end">
          <div className="flex flex-wrap items-center gap-4">
            <a href={`mailto:${site.email}`} className="inline-flex items-center gap-1.5 hover:text-foreground">
              <Mail aria-hidden="true" className="size-4" />
              {site.email}
            </a>
            {activeSocials.map((s) => {
              const Icon = socialIcons[s.label];
              return (
                <ExternalLink key={s.label} href={s.href} showIcon={false} className="hover:text-foreground">
                  <Icon size={16} />
                  {s.label}
                </ExternalLink>
              );
            })}
          </div>
          <nav aria-label="Legal">
            <ul className="flex gap-4">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
