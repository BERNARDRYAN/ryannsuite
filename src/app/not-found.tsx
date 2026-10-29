import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

const lines = [
  { item: "PAGE YOU WANTED", price: "0.00" },
  { item: "SEARCHING", price: "0.00" },
  { item: "MORE SEARCHING", price: "0.00" },
];

/** A 404 printed as an 80 mm thermal receipt — a nod to RyannReceipt. */
export default function NotFound() {
  return (
    <Container className="flex justify-center py-16 sm:py-24">
      <div className="receipt-edge w-full max-w-[20rem] bg-card px-6 pt-8 pb-10 font-mono text-sm text-foreground shadow-lg ring-1 ring-border">
        <p className="text-center text-base font-semibold tracking-widest">{site.brand.toUpperCase()}</p>
        <p className="text-center text-xs text-muted-foreground">ERROR RECEIPT · NO. 404</p>
        <hr className="my-4 border-dashed" />
        <ul className="space-y-1">
          {lines.map((l) => (
            <li key={l.item} className="flex justify-between gap-4">
              <span>{l.item}</span>
              <span>{l.price}</span>
            </li>
          ))}
        </ul>
        <hr className="my-4 border-dashed" />
        <div className="flex justify-between text-base font-semibold">
          <span>TOTAL</span>
          <span>404</span>
        </div>
        <p className="mt-1 text-xs text-muted-foreground">STATUS: PAGE NOT FOUND</p>
        <hr className="my-4 border-dashed" />
        <h1 className="text-center text-base font-semibold">This page doesn&apos;t exist.</h1>
        <p className="mt-1 text-center text-xs text-muted-foreground">It may have moved, or the link has a typo.</p>
        <p className="mt-5 text-center">
          <Link href="/" className="inline-block rounded-full bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90">
            Back to home
          </Link>
        </p>
        <p className="mt-6 text-center text-xs tracking-[0.3em] text-muted-foreground">THANK YOU</p>
      </div>
    </Container>
  );
}
