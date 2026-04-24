import type { Metadata } from "next";
import { EmailCapture } from "@/components/EmailCapture";
import { pageMetadata } from "@/lib/seo";
import { Eyebrow } from "@/components/editorial/Eyebrow";
import { LedgerRule } from "@/components/editorial/DotRule";

export const metadata: Metadata = pageMetadata({
  title: "The Dispatch",
  description:
    "One calm, cited email a week. A compound, a trial, or a regulatory update — read and analyzed. Free. Unsubscribe anytime.",
  path: "/newsletter",
});

export default function NewsletterPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <Eyebrow tone="oxblood">The Dispatch</Eyebrow>
      <h1 className="display-headline mt-3 text-4xl md:text-5xl leading-[1.08]">
        One calm, cited email a week.
      </h1>
      <LedgerRule className="mt-8" />
      <p className="mt-10 font-serif italic text-[1.25rem] text-inknavy/85 leading-[1.55]">
        One compound, one new trial, or one regulatory update &mdash; read and
        analyzed in roughly the time it takes to finish a coffee.
      </p>
      <p className="mt-6 text-[16.5px] text-charcoal/90 leading-[1.8]">
        No upsells, no affiliate placements, no 4,000-word emails. The reader
        on the other side of this list already knows the Wikipedia entry and
        the Examine.com stub. We try to add the third thing &mdash; the trial
        we read, the effect size that surprised us, the regulatory detail most
        coverage missed.
      </p>
      <p className="mt-5 text-[16.5px] text-charcoal/90 leading-[1.8]">
        Subscribers also receive{" "}
        <strong className="text-inknavy font-semibold">
          The 2026 Peptide Evidence Ledger
        </strong>{" "}
        &mdash; a 12-page PDF covering ten major compounds with the same
        four-tier framework we use on every profile: Preclinical / Human pilot
        / Phase trial / FDA status. Updated quarterly.
      </p>
      <EmailCapture
        variant="end-of-article"
        headline="Get the 2026 Peptide Evidence Ledger."
        subhead="Add your email and we'll send the PDF right away."
      />
    </main>
  );
}
