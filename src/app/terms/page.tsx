// TODO: review before relying on this — not legal advice.
import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { DocPage } from "@/components/doc-page";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `The plain-language terms for using ${site.brand} apps.`,
  alternates: { canonical: "/terms/" },
};

export default function TermsPage() {
  return (
    <DocPage
      eyebrow={site.brand}
      title="Terms of Use"
      lastUpdated="2026-10-30"
      intro={<p>The short version: use the apps fairly, keep your account safe, and we&apos;ll do our best to keep things running.</p>}
    >
      <h2>Using the apps</h2>
      <p>
        These terms apply to all {site.brand} apps. By using them you agree to these terms and to our{" "}
        <Link href="/privacy/">Privacy Policy</Link>.
      </p>

      <h2>Your account</h2>
      <ul>
        <li>You&apos;re responsible for activity on your account and for keeping your sign-in secure.</li>
        <li>Please don&apos;t use the apps for anything unlawful, or try to disrupt or misuse the service.</li>
      </ul>

      <h2>Your content</h2>
      <p>
        What you create in the apps stays yours. We only store and process it to provide the service to you.
      </p>

      <h2>No warranty</h2>
      <p>
        The apps are provided &quot;as is&quot; by an independent developer. We work to keep them reliable, but we
        can&apos;t guarantee they&apos;ll always be available or error-free, and we aren&apos;t liable for losses caused
        by using them. Keep your own copy of anything important.
      </p>

      <h2>Changes and ending</h2>
      <p>
        We may update these terms or change, pause or retire an app. If that affects your data, we&apos;ll aim to give
        notice. You can stop using the apps and ask for your data to be deleted at any time.
      </p>

      <h2>Contact</h2>
      <p>
        Questions? Email <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>.
      </p>
    </DocPage>
  );
}
