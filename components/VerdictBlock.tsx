import { Link } from "@/i18n/navigation";
import { RankChip, type RankVariant } from "./RankChip";

/**
 * VerdictBlock — sits at the top of every review. A bordered callout
 * with a forest left rail. Carries:
 *
 *   - rank chip (OUR PICK / BUDGET / etc.)
 *   - compound name
 *   - huge tabular score (e.g. 8.4 / 10)
 *   - one-line verdict
 *   - "Last updated <date>" + "How we score" link
 *
 * Uses .verdict-block / .verdict-score CSS classes.
 */
export function VerdictBlock({
  rank,
  variant,
  variantLabel,
  name,
  alias,
  score,
  verdict,
  lastUpdated,
  copy,
}: {
  rank: number;
  variant: RankVariant;
  variantLabel: string;
  name: string;
  alias?: string;
  score: number;
  verdict: string;
  lastUpdated: string;
  copy: {
    rank: string;
    score: string;
    verdictLabel: string;
    lastUpdated: string;
    methodologyLink: string;
  };
}) {
  return (
    <aside className="verdict-block">
      <div className="flex flex-wrap items-start justify-between gap-x-8 gap-y-5">
        <div className="flex-1 min-w-[260px]">
          <div className="flex flex-wrap items-center gap-2 mb-2.5">
            <span className="caps-data text-ink-soft">
              {copy.rank} #{rank}
            </span>
            <RankChip variant={variant} label={variantLabel} />
          </div>
          <h2 className="font-serif text-[1.55rem] md:text-[1.85rem] leading-tight text-ink">
            {name}
          </h2>
          {alias && <div className="caps-data text-ink-soft mt-1">{alias}</div>}
          <p className="mt-3 text-[15px] leading-[1.55] text-ink max-w-xl">
            <span className="caps-data text-forest mr-2">{copy.verdictLabel}.</span>
            {verdict}
          </p>
        </div>
        <div className="flex flex-col items-end shrink-0">
          <div className="caps-data text-ink-soft mb-1">{copy.score}</div>
          <div className="flex items-baseline">
            <span className="verdict-score">{score.toFixed(1)}</span>
            <span className="verdict-score-suffix">/10</span>
          </div>
        </div>
      </div>
      <div className="mt-5 pt-4 border-t border-rule-soft flex flex-wrap items-center justify-between gap-3 text-[12.5px] text-ink-soft">
        <span className="tnum">
          {copy.lastUpdated.replace("{date}", lastUpdated)}
        </span>
        <Link
          href={"/methodology" as never}
          className="text-forest hover:text-forest-deep underline underline-offset-2"
        >
          {copy.methodologyLink} →
        </Link>
      </div>
    </aside>
  );
}
