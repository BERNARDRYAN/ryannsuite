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
        <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>.
      </p>

      <h2>What we may store</h2>
      <ul>
        <li>
          <strong>Account details</strong> — if you sign in, your email address and basic profile information from the
          sign-in provider you choose.
        </li>
        <li>
          <strong>Content you create</strong> — for example trips, expenses and payment-proof images in RyannPlan, saved
          presets and posters in RyannPace, or backed-up receipts in RyannReceipt.
        </li>
        <li>
          <strong>Basic technical data</strong> — such as standard server logs kept by our hosting providers to keep the
          service running and secure.
        </li>
      </ul>

      <h2>Where it&apos;s kept, app by app</h2>
      <ul>
        <li>
          <strong>RyannPlan</strong> needs an account. Trips, itineraries, expenses and uploaded payment proof are stored
          in a Supabase database so everyone in your group can see them. AI travel recommendations use the trip details
          you&apos;ve entered to generate suggestions. {/* TODO: name the AI provider used for recommendations. */}
        </li>
        <li>
          <strong>RyannPace</strong> reads your activity files on your device; they are never uploaded. If you sign in,
          your saved presets and poster gallery are stored with your account.
        </li>
        <li>
          <strong>RyannReceipt</strong> works without an account and keeps receipts in your browser. If you sign in with
          Google, they&apos;re backed up and synced across your devices.
        </li>
      </ul>
      <p>
        All apps are served by Cloudflare. Our hosting and database providers process data on our behalf only to run
        the service.
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
        <a href={`mailto:${site.supportEmail}?subject=Data%20deletion%20request`}>{site.supportEmail}</a> from the address on your
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
