/**
 * ScoreBar — multi-dimensional readout, used in RankIndex rows and the
 * Specs side rail. Renders as a paper-soft track with a forest fill,
 * tinted by tier. Tabular numerics in a small monospace caption.
 *
 * Visually distinct from circadianstack's StackScore (5-dimension radar
 * cluster) and peptips' tier badges (rounded chips). Pepvise scores are
 * always horizontal bars with a tiny right-aligned numeric label.
 */
type Tier = "strong" | "mixed" | "weak" | "absent";

export function ScoreBar({
  value,
  max = 10,
  tier,
  label,
}: {
  value: number;
  max?: number;
  tier?: Tier;
  label?: string;
}) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  const inferredTier: Tier =
    tier ??
    (value >= 8 ? "strong" : value >= 6 ? "mixed" : value >= 4 ? "weak" : "absent");
  return (
    <div className="flex items-center gap-2.5">
      <div
        className="score-bar flex-1"
        data-tier={inferredTier}
        role="img"
        aria-label={`${label ?? "Score"} ${value} of ${max}`}
      >
        <div
          className="score-bar-fill"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="mono text-[12px] text-ink tnum tabular-nums w-9 text-right">
        {value.toFixed(1)}
      </span>
    </div>
  );
}
