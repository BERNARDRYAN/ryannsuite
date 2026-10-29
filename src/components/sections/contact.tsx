import { Mail } from "lucide-react";
import { activeSocials, site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ExternalLink } from "@/components/ui/external-link";
import { CopyEmailButton } from "@/components/copy-email-button";
import { socialIcons } from "@/components/icons";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-16 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-12 text-center sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -bottom-24 mx-auto h-48 max-w-lg rounded-full bg-primary/15 blur-3xl"
          />
          <p className="font-mono text-xs font-medium tracking-widest text-primary uppercase">Contact</p>
          <h2 id="contact-heading" className="mt-2 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Let&apos;s talk
          </h2>
          <p className="mx-auto mt-3 max-w-md text-lg text-pretty text-muted-foreground">
            Questions about the apps, opportunities, or just want to say hi? My inbox is open.
          </p>
          <p className="mt-6 font-mono text-sm break-all sm:text-base">{site.email}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button href={`mailto:${site.email}`}>
              <Mail aria-hidden="true" />
              Send an email
            </Button>
            <CopyEmailButton email={site.email} />
          </div>
          {activeSocials.length > 0 && (
            <ul className="mt-8 flex justify-center gap-5 text-sm text-muted-foreground">
              {activeSocials.map((s) => {
                const Icon = socialIcons[s.label];
                return (
                  <li key={s.label}>
                    <ExternalLink href={s.href} showIcon={false} className="gap-1.5 hover:text-foreground">
                      <Icon size={16} />
                      {s.label}
                    </ExternalLink>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </Container>
    </section>
  );
}
