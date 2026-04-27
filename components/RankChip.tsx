/**
 * RankChip — the signature Wirecutter-style yellow OUR PICK ribbon.
 *
 * Variants:
 *   - our-pick     → solid signal-yellow with black dot bullet
 *   - budget       → paper-soft with a black hairline border
 *   - upgrade      → solid forest-green, paper text
 *   - runner-up    → outlined, transparent
 *   - also-ran     → outlined, used for #5+ rows
 *
 * The chip never carries a number — the number lives in the adjacent
 * `<RankBug>`. Copy is locale-driven.
 */
export type RankVariant =
  | "our-pick"
  | "budget"
  | "upgrade"
  | "runner-up"
  | "also-ran";

export function RankChip({ variant, label }: { variant: RankVariant; label: string }) {
  return (
    <span className="rank-chip" data-variant={variant}>
      {label}
    </span>
  );
}

export function RankBug({ n }: { n: number }) {
  return <span className="rank-bug">{n}</span>;
}
