import Link from "next/link";
import { activeSocials, site } from "@/content/site";
import { socialIcons } from "@/components/icons";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Logo } from "@/components/logo";
import { MobileNav } from "./mobile-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md print:hidden">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" aria-label={`${site.brand} home`} className="rounded-lg">
          <Logo />
        </Link>
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-1">
          {activeSocials.map((s) => {
            const Icon = socialIcons[s.label];
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:inline-flex"
              >
                <Icon size={16} />
                <span className="sr-only">{s.label} (opens in a new tab)</span>
              </a>
            );
          })}
          <ThemeToggle />
          <MobileNav items={site.nav} />
        </div>
      </Container>
    </header>
  );
}
