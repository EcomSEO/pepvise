import Link from "next/link";
import { hubs } from "@/lib/content/hubs";
import { Eyebrow } from "@/components/editorial/Eyebrow";
import { DotRule } from "@/components/editorial/DotRule";

/**
 * 404 — literary-science "entry missing from the ledger".
 * Header + Footer come from app/layout.tsx (which includes the
 * MedicalDisclaimerStrip at the top via <Header />).
 */
export default function NotFound() {
  return (
    <main>
      <section className="border-b border-inknavy/15">
        <div className="mx-auto max-w-3xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
          <Eyebrow tone="oxblood">404 &middot; Reference missing</Eyebrow>
          <h1 className="display-headline mt-5 text-[2.4rem] sm:text-5xl md:text-[3.6rem]">
            This entry <em>isn&rsquo;t</em> in the ledger.
          </h1>

          <div className="prose mt-10 max-w-none">
            <p className="font-serif italic text-[1.2rem] text-inknavy/85 leading-[1.55]">
              Every compound on PepVise has a row &mdash; preclinical, human
              pilot, phase trial, FDA status. The page you were looking for does
              not, which means one of two things: the citation has moved, or it
              was never catalogued here in the first place.
            </p>
            <p className="text-[15.5px] text-charcoal/85 leading-[1.75]">
              Try the hub index below. Each hub opens onto the literature we
              actually read &mdash; PubMed, ClinicalTrials.gov, FDA documents
              &mdash; re-verified quarterly and graded on the same four tiers.
              If a compound or mechanism you expected to find is missing, it is
              likely in the reading pile, not the archive.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-inknavy/15 bg-paper">
        <div className="mx-auto max-w-3xl px-6 py-14 md:py-16">
          <Eyebrow tone="oxblood">The table of contents</Eyebrow>
          <h2 className="font-serif text-[1.7rem] md:text-[2.1rem] text-inknavy mt-3 leading-[1.15]">
            Start from one of the five hubs.
          </h2>

          <ul className="mt-8 border-t border-inknavy/15">
            {hubs.map((hub, i) => (
              <li
                key={hub.slug}
                className="border-b border-inknavy/15"
              >
                <Link
                  href={`/guides/${hub.slug}`}
                  className="group flex items-start gap-5 py-5 hover:bg-bone/60 transition px-2 -mx-2"
                >
                  <span className="rank-numeral !text-[2.2rem] shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <div className="font-serif text-[1.2rem] text-inknavy leading-tight group-hover:text-oxblood transition">
                      {hub.name}
                    </div>
                    <p className="mt-1 text-[14px] text-charcoal/75 leading-[1.6]">
                      {hub.oneLiner}
                    </p>
                  </div>
                  <span
                    aria-hidden
                    className="caps-label text-oxblood self-center hidden sm:inline"
                  >
                    Open &rarr;
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Link href="/" className="btn-primary">
              Back to the masthead
              <span aria-hidden>&rarr;</span>
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
