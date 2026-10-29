"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";
import { buttonClasses } from "@/components/ui/button";

export function CopyEmailButton({ email }: { email: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");

  useEffect(() => {
    if (status === "idle") return;
    const t = setTimeout(() => setStatus("idle"), 2000);
    return () => clearTimeout(t);
  }, [status]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
  }

  return (
    <button type="button" onClick={copy} className={buttonClasses({ variant: "secondary" })}>
      {status === "copied" ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
      {status === "copied" ? "Copied!" : "Copy email"}
      <span role="status" aria-live="polite" className="sr-only">
        {status === "copied" ? "Email address copied to clipboard" : status === "failed" ? "Couldn't copy — please select the address manually" : ""}
      </span>
    </button>
  );
}
