import { Eyebrow } from "./editorial/Eyebrow";

/**
 * SourcesList — literature-heavy, footnote-style presentation.
 * Numbered in monospace with oxblood accents. PubMed / clinicaltrials.gov /
 * FDA links are the first-class citizens on PepVise.
 */
export function SourcesList({
  sources,
}: {
  sources: Array<{ label: string; url: string }>;
}) {
  if (!sources || sources.length === 0) return null;

  return (
    <section className="mt-14 pt-10 border-t-2 border-inknavy/20" id="sources">
      <Eyebrow tone="oxblood">The sources</Eyebrow>
      <h2 className="font-serif text-[1.75rem] md:text-[2rem] text-inknavy mt-2 mb-2 leading-tight">
        References cited on this page.
      </h2>
      <p className="text-[13.5px] text-slate leading-[1.6] max-w-[58ch] mb-6">
        PubMed, ClinicalTrials.gov, and FDA documents only. Secondary sources
        appear when needed to characterize public discourse, never as a source
        for a clinical claim.
      </p>
      <ol className="space-y-3 border-t border-inknavy/10 pt-5">
        {sources.map((s, i) => (
          <li
            key={i}
            className="grid grid-cols-[auto_1fr] gap-4 pb-3 border-b border-inknavy/10 last:border-b-0"
          >
            <span className="mono text-[13px] text-oxblood tnum pt-0.5 shrink-0">
              [{String(i + 1).padStart(2, "0")}]
            </span>
            <a
              href={s.url}
              rel="noopener nofollow"
              target="_blank"
              className="text-[14.5px] text-inknavy hover:text-oxblood leading-[1.6] underline decoration-oxblood/50 underline-offset-4 decoration-1 hover:decoration-oxblood"
            >
              {s.label}
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
