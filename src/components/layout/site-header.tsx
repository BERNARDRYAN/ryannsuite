import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { MobileNav } from "./mobile-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md print:hidden">
      <Container className="flex h-16 items-center justify-between gap-4">
        {/* TODO: swap the text wordmark for the RyannSuite logo once it exists. */}
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Ryann<span className="text-primary">Suite</span>
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
          <ThemeToggle />
          <MobileNav items={site.nav} />
        </div>
      </Container>
    </header>
  );
}
