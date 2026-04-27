"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Eyebrow } from "@/components/editorial/Eyebrow";
import { DotRule } from "@/components/editorial/DotRule";

/**
 * Error boundary — literary-science, calm.
 * Header + Footer come from app/layout.tsx (inclusive of the
 * MedicalDisclaimerStrip at the top).
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log to the console for local debugging; production telemetry
    // would plug in here.
    // eslint-disable-next-line no-console
    console.error("PepVise error boundary:", error);
  }, [error]);

  return (
    <main>
      <section className="border-b border-inknavy/15">
        <div className="mx-auto max-w-3xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
          <Eyebrow tone="oxblood">Error &middot; Something slipped</Eyebrow>
          <h1 className="display-headline mt-5 text-[2.4rem] sm:text-5xl md:text-[3.6rem]">
            Something broke <em>on our side.</em>
          </h1>

          <div className="prose mt-10 max-w-none">
            <p className="font-serif italic text-[1.2rem] text-inknavy/85 leading-[1.55]">
              A small rupture in the page &mdash; a component failed to render,
              a reference refused to resolve. The ledger itself is intact; the
              binding briefly came apart.
            </p>
            <p className="text-[15.5px] text-charcoal/85 leading-[1.75]">
              Reload the page to retry. If the same entry keeps stumbling,
              return to the masthead and find the profile from the hub index.
              Our editors re-verify every trial and citation on a quarterly
              cadence &mdash; occasional errors are noted in the revision log.
            </p>

            {error?.digest && (
              <p className="mono text-[12px] text-slate mt-6 tnum">
                Reference: {error.digest}
              </p>
            )}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => reset()}
              className="btn-primary"
            >
              Try again
              <span aria-hidden>&rarr;</span>
            </button>
            <Link href="/" className="btn-secondary">
              Back to home
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-10">
          <DotRule />
          <p className="text-center caps-label text-slate mt-6">
            Ledger &middot; Vol. I &middot; No. 01
          </p>
        </div>
      </section>
    </main>
  );
}
