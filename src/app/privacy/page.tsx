// TODO: review before relying on this — not legal advice.
import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { DocPage } from "@/components/doc-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.brand} apps handle your data, in plain language.`,
  alternates: { canonical: "/privacy/" },
};

const appNames = projects.map((p) => p.name).join(", ");

export default function PrivacyPage() {
  return (
    <DocPage
      eyebrow={site.brand}
      title="Privacy Policy"
      lastUpdated="2026-10-30"
      intro={
        <p>
          This policy covers every app in the {site.brand} suite ({appNames}). It&apos;s written in plain language: what
          we keep, why, and how you can have it removed.
        </p>
      }
    >
      <h2>Who we are</h2>
      <p>
        {site.brand} is a set of apps designed, built and run by {site.owner.fullName}, an independent developer. When
        this policy says &quot;we&quot;, it means {site.owner.name}. You can reach us at{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2>What we may store</h2>
      <ul>
        <li>
          <strong>Account details</strong> — if you sign in, your email address and basic profile information from the
          sign-in provider you choose.
        </li>
        <li>
          <strong>Content you create</strong> — for example trips in RyannPlan, run details in RyannPace or expenses in
          RyannReceipt.
        </li>
        <li>
          <strong>Basic technical data</strong> — such as standard server logs kept by our hosting providers to keep the
          service running and secure.
        </li>
      </ul>

      <h2>How it&apos;s stored</h2>
      <p>
        The apps share one backend hosted on Supabase, which stores account and app data. The websites themselves are
        served by Cloudflare. These providers process data on our behalf to run the service.
      </p>

      <h2>What we don&apos;t do</h2>
      <ul>
        <li>We don&apos;t sell your data.</li>
        <li>We don&apos;t share your content with advertisers.</li>
        <li>We only use your data to provide and improve the apps you use.</li>
      </ul>

      <h2>Your choices and deletion</h2>
      <p>
        You can ask for a copy of your data, or for your account and everything linked to it to be deleted, by emailing{" "}
        <a href={`mailto:${site.email}?subject=Data%20deletion%20request`}>{site.email}</a> from the address on your
        account. We&apos;ll confirm once it&apos;s done.
      </p>

      <h2>Changes</h2>
      <p>
        If this policy changes, we&apos;ll update the date at the top of this page. For questions, see{" "}
        <Link href="/support/">Support</Link>.
      </p>
    </DocPage>
  );
}
