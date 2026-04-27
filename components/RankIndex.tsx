import { Link } from "@/i18n/navigation";
import { RankBug, RankChip, type RankVariant } from "./RankChip";
import { ScoreBar } from "./ScoreBar";

/**
 * RankIndex — the home page lead. A numbered, ranked list of top
 * reviews. Each row carries:
 *   - rank bug (#1, #2, …)
 *   - rank chip (OUR PICK / BUDGET / UPGRADE)
 *   - compound name (serif headline, 18px)
 *   - one-line verdict
 *   - mini score bars (Evidence + Safety)
 *   - composite score (large mono numeric, right)
 *   - "Read review →" affordance
 *
 * Rows are alternating-tinted, dense, hover-highlighted, and link to
 * the full review.
 */
export type RankRow = {
  rank: number;
  variant: RankVariant;
  variantLabel: string;
  slug: string;
  name: string;
  alias?: string;
  verdict: string;
  evidence: number;
  safety: number;
  total: number;
};

export function RankIndex({
  rows,
  copy,
}: {
  rows: RankRow[];
  copy: {
    eyebrow: string;
    heading: string;
    caption: string;
    colRank: string;
    colName: string;
    colSummary: string;
    colEvidence: string;
    colSafety: string;
    colTotal: string;
    readReview: string;
  };
}) {
  return (
    <section className="border-y border-rule bg-paper">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-12 md:py-16">
        <header className="mb-8 md:mb-10 max-w-3xl">
          <div className="eyebrow mb-2.5">{copy.eyebrow}</div>
          <h2 className="font-serif text-[1.7rem] md:text-[2rem] leading-[1.15] text-ink">
            {copy.heading}
          </h2>
          <p className="mt-3 text-[14.5px] text-ink-soft leading-[1.55] max-w-2xl">
            {copy.caption}
          </p>
        </header>

        <div className="border border-rule overflow-hidden">
          <div
            role="row"
            className="hidden md:grid bg-paper-soft border-b-2 border-ink caps-data"
            style={{
              gridTemplateColumns:
                "60px minmax(220px, 1.5fr) 2fr 160px 160px 100px 110px",
            }}
          >
            <div className="px-3 py-3" role="columnheader">{copy.colRank}</div>
            <div className="px-3 py-3" role="columnheader">{copy.colName}</div>
            <div className="px-3 py-3" role="columnheader">{copy.colSummary}</div>
            <div className="px-3 py-3" role="columnheader">{copy.colEvidence}</div>
            <div className="px-3 py-3" role="columnheader">{copy.colSafety}</div>
            <div className="px-3 py-3 text-right tnum" role="columnheader">{copy.colTotal}</div>
            <div className="px-3 py-3 sr-only" role="columnheader">{copy.readReview}</div>
          </div>

          {rows.map((row, idx) => (
            <Link
              key={row.slug}
              href={`/${row.slug}` as never}
              className="group block border-b border-rule-soft last:border-b-0 transition-colors hover:bg-[rgba(31,95,63,0.04)] focus:outline-none focus-visible:bg-[rgba(31,95,63,0.06)]"
              style={{
                background: idx % 2 === 1 ? "rgba(242, 241, 236, 0.45)" : undefined,
              }}
            >
              <div
                className="grid items-center md:grid-cols-[60px_minmax(220px,1.5fr)_2fr_160px_160px_100px_110px] grid-cols-[60px_1fr] py-4 px-3 gap-y-2 gap-x-3"
              >
                <div className="row-span-3 md:row-auto">
                  <RankBug n={row.rank} />
                </div>

                <div className="md:px-0">
                  <div className="mb-1.5">
                    <RankChip variant={row.variant} label={row.variantLabel} />
                  </div>
                  <div className="font-serif text-[1.05rem] leading-tight text-ink group-hover:text-forest transition-colors">
                    {row.name}
                  </div>
                  {row.alias && (
                    <div className="caps-data text-ink-soft mt-1">{row.alias}</div>
                  )}
                </div>

                <div className="text-[14px] leading-[1.5] text-ink-soft md:px-0">
                  {row.verdict}
                </div>

                <div className="md:px-0">
                  <ScoreBar value={row.evidence} label={copy.colEvidence} />
                </div>

                <div className="md:px-0">
                  <ScoreBar value={row.safety} label={copy.colSafety} />
                </div>

                <div className="md:px-0 text-right">
                  <span className="mono tnum tabular-nums text-[1.4rem] font-semibold text-forest">
                    {row.total.toFixed(1)}
                  </span>
                  <span className="mono tnum text-ink-soft text-[12px]">/10</span>
                </div>

                <div className="md:px-0 md:text-right">
                  <span className="caps-data text-forest group-hover:text-forest-deep">
                    {copy.readReview} <span aria-hidden>→</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
