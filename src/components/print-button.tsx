"use client";

import { buttonClasses } from "@/components/ui/button";

export function PrintButton({ children }: { children: React.ReactNode }) {
  return (
    <button type="button" onClick={() => window.print()} className={buttonClasses({ variant: "secondary" })}>
      {children}
    </button>
  );
}
