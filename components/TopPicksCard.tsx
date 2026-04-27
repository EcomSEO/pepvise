import { Link } from "@/i18n/navigation";
import type { ReviewEntry } from "@/lib/content/reviews";
import { RankBug } from "./RankChip";

/**
 * TopPicksCard — the "at-a-glance" panel that sits in the right column
 * of the home hero. Three rows: rank bug, compound name, one-line
 * verdict, composite score. Beneath: a small "See full ranking" link.
 *
 * This is the differentiator vs the typical magazine-cover hero —
 * readers see the answer (top 3 picks) above the fold without
 * scrolling to the rank index.
 */
export function TopPicksCard({
  entries,
  variantLabels,
  copy,
}: {
  entries: ReviewEntry[];
  variantLabels: Record<string, string>;
  copy: { heading: string; ctaSeeAll: string };
}) {
  return (
    <div className="border border-rule bg-paper">
      <div className="px-4 py-3 border-b-2 border-ink bg-paper-soft flex items-baseline justify-between">
        <span className="caps-data text-ink">{copy.heading}</span>
        <span className="caps-data text-ink-soft">Top 3</span>
      </div>
      <ul>
        {entries.map((e, idx) => (
          <li
            key={e.slug}
            className="border-b border-rule-soft last:border-b-0"
            style={{ background: idx % 2 === 1 ? "rgba(242, 241, 236, 0.45)" : undefined }}
          >
            <Link
              href={`/${e.slug}` as never}
              className="grid grid-cols-[28px_1fr_auto] items-center gap-3 px-4 py-3 group hover:bg-[rgba(31,95,63,0.04)]"
            >
              <RankBug n={e.rank} />
              <div className="min-w-0">
                <div className="caps-data text-ink-soft mb-0.5 truncate">
                  {variantLabels[e.variant] ?? e.variant}
                </div>
                <div className="font-serif text-[14.5px] text-ink leading-tight group-hover:text-forest transition-colors truncate">
                  {e.name}
                </div>
              </div>
              <div className="text-right shrink-0">
                <span className="mono tnum text-forest text-[18px] font-semibold leading-none">
                  {e.total.toFixed(1)}
                </span>
                <span className="mono tnum text-ink-soft text-[10.5px] block leading-none mt-0.5">
                  /10
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="px-4 py-2.5 border-t border-rule-soft bg-paper-soft">
        <Link
          href={"/#rank-index" as never}
          className="caps-data text-forest hover:text-forest-deep"
        >
          {copy.ctaSeeAll} <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}
