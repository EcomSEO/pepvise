/**
 * LastTestedLine — "Last tested April 26, 2026" caption.
 *
 * Sits in VerdictBlock, RankIndex rows (when there's room), the footer
 * of ReviewCard, and on category pages. 14px text-secondary mono caption
 * with a tiny dot-mark glyph for scannability.
 *
 * The phrase "Last tested" is intentional — Wirecutter, Rtings, and
 * Consumer Reports all anchor on it. Reviewers test, scores age, and
 * users want to see the freshness signal.
 */
export function LastTestedLine({
  date,
  label,
  className = "",
}: {
  date: string;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`inline-flex items-baseline gap-1.5 text-[12.5px] text-ink-soft ${className}`}
    >
      <span aria-hidden className="block w-1 h-1 bg-forest rounded-full self-center" />
      <span>{label}</span>
      <time className="mono tnum text-ink" dateTime={date}>
        {formatDate(date)}
      </time>
    </div>
  );
}

function formatDate(iso: string): string {
  const d = new Date(iso + "T00:00:00Z");
  if (isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}
