"use client";

import { FormEvent, useState } from "react";

export function EmailCapture({
  headline = "Get the 2026 Peptide Evidence Ledger.",
  subhead = "A 12-page PDF summary of where 10 major compounds sit — Preclinical / Human pilot / Phase trial / FDA status. Updated quarterly. Free.",
  variant = "inline",
  buttonLabel = "Send me the Ledger",
}: {
  headline?: string;
  subhead?: string;
  variant?: "inline" | "end-of-article";
  buttonLabel?: string;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">(
    "idle"
  );

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 400));
    setStatus("ok");
  }

  const wrapper =
    variant === "end-of-article"
      ? "my-12 p-8 rounded-sm bg-paper border border-inknavy/15 relative overflow-hidden"
      : "my-8 p-8 rounded-sm bg-bone-deep/40 border border-inknavy/15 relative overflow-hidden";

  return (
    <section id="email-capture" className={wrapper}>
      <div className="absolute top-0 left-0 w-1 h-full bg-oxblood" />
      <div className="text-center">
        <h2 className="font-serif text-[1.5rem] md:text-[1.8rem] text-inknavy leading-tight">
          {headline}
        </h2>
        <p className="mt-3 font-serif italic text-[1.05rem] text-inknavy/80 max-w-xl mx-auto leading-[1.55]">
          {subhead}
        </p>
      </div>
      {status === "ok" ? (
        <p className="mt-6 text-center text-oxblood font-serif italic text-lg">
          Thanks &mdash; check your inbox for the Ledger.
        </p>
      ) : (
        <form
          onSubmit={onSubmit}
          className="mt-6 flex flex-col sm:flex-row gap-2 justify-center max-w-md mx-auto"
        >
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 rounded-sm border border-inknavy/25 px-4 py-3 bg-bone focus:border-oxblood focus:outline-none text-[15px]"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-primary disabled:opacity-50"
          >
            {status === "loading" ? "Sending…" : buttonLabel}
          </button>
        </form>
      )}
      <p className="mt-4 text-[11.5px] text-slate max-w-md mx-auto text-center leading-[1.6]">
        By subscribing, you agree to our{" "}
        <a
          href="/privacy"
          className="underline decoration-oxblood/50 hover:decoration-oxblood underline-offset-2"
        >
          Privacy Policy
        </a>
        . One calm, cited email a week. Unsubscribe anytime.
      </p>
    </section>
  );
}
