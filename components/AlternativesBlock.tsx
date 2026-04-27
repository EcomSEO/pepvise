import { Link } from "@/i18n/navigation";
import type { ReviewEntry } from "@/lib/content/reviews";

/**
 * AlternativesBlock — "If pick #1 doesn't fit, try…" 3-up mini cards.
 *
 * Polished version of what was inline in ReviewTemplate. Each card
 * carries the rank chip token + variant label, the compound name, the
 * one-line verdict (clamped 2 lines), and the composite score.
 *
 * Wirecutter ships a 3-up "Other good office chairs" block; we add the
 * variant chip + score so the alternative carries methodology weight,
 * not just a name.
 */
export function AlternativesBlock({
  entries,
  variantLabels,
  copy,
}: {
  entries: ReviewEntry[];
  variantLabels: Record<string, string>;
  copy: { heading: string; caption: string };
}) {
  if (!entries.length) return null;
  return (
    <section id="alternatives" className="my-12">
      <h3 className="font-serif text-[1.25rem] mb-2 text-ink">{copy.heading}</h3>
      <p className="text-[13.5px] text-ink-soft mb-4 max-w-prose">{copy.caption}</p>
      <ul className="grid sm:grid-cols-3 gap-3">
        {entries.map((alt) => (
          <li key={alt.slug}>
            <Link
              href={`/${alt.slug}` as never}
              className="block border border-rule-soft hover:border-ink p-4 group transition-colors h-full"
            >
              <div className="flex items-center justify-between mb-2.5">
                <span className="caps-data text-ink-soft">
                  #{alt.rank} · {variantLabels[alt.variant] ?? alt.variant}
                </span>
                <span className="mono tnum text-forest text-[15px] font-semibold">
                  {alt.total.toFixed(1)}
                </span>
              </div>
              <div className="font-serif text-[16px] text-ink group-hover:text-forest transition-colors leading-snug">
                {alt.name}
              </div>
              {alt.alias && (
                <div className="caps-data text-ink-soft mt-1">{alt.alias}</div>
              )}
              <p className="text-[13px] text-ink-soft mt-2.5 line-clamp-2 leading-snug">
                {alt.oneLineVerdict}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
