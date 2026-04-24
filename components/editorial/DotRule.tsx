import { Reveal } from "./Reveal";

/**
 * Simple hairline rule used between sections in body copy.
 *
 * Ledger-style: the left rail draws in from the left, then the oxblood dot
 * tick appears at the end. Triggered on scroll-into-view by <Reveal>.
 */
export function DotRule({ className = "" }: { className?: string }) {
  return (
    <Reveal
      as="div"
      className={`ledger-rule-animated flex items-center gap-3 text-inknavy/30 ${className}`}
    >
      <span aria-hidden className="rule-track h-px flex-1 bg-inknavy/15" />
      <span aria-hidden className="rule-dot h-1 w-1 rounded-full bg-oxblood/70" />
      <span aria-hidden className="rule-dot h-1 w-1 rounded-full bg-oxblood/40" />
      <span aria-hidden className="rule-dot h-1 w-1 rounded-full bg-oxblood/70" />
      <span aria-hidden className="rule-track h-px flex-1 bg-inknavy/15" />
    </Reveal>
  );
}

export function ThinRule({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`h-px w-full bg-inknavy/15 ${className}`} />
  );
}

/**
 * Oxblood-accented rule used inside the masthead — nods to the Evidence
 * Ledger's signature oxblood accent bar. Animated: the oxblood bar draws in
 * from the left, the dot ticks, and the long hairline completes.
 */
export function LedgerRule({ className = "" }: { className?: string }) {
  return (
    <Reveal
      as="div"
      className={`ledger-rule-animated flex items-center gap-4 ${className}`}
    >
      <span aria-hidden className="rule-track h-[2px] w-10 bg-oxblood" />
      <span aria-hidden className="rule-dot h-1.5 w-1.5 rounded-full bg-oxblood" />
      <span aria-hidden className="rule-track h-px flex-1 bg-inknavy/15" />
    </Reveal>
  );
}
