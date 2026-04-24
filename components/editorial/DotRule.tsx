/**
 * Simple hairline rule used between sections in body copy.
 */
export function DotRule({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`flex items-center gap-3 text-inknavy/30 ${className}`}
    >
      <span className="h-px flex-1 bg-inknavy/15" />
      <span className="h-1 w-1 rounded-full bg-oxblood/70" />
      <span className="h-1 w-1 rounded-full bg-oxblood/40" />
      <span className="h-1 w-1 rounded-full bg-oxblood/70" />
      <span className="h-px flex-1 bg-inknavy/15" />
    </div>
  );
}

export function ThinRule({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`h-px w-full bg-inknavy/15 ${className}`} />
  );
}

/**
 * Oxblood-accented rule used inside the masthead — nods to the Evidence Ledger's
 * signature oxblood accent bar.
 */
export function LedgerRule({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`flex items-center gap-4 ${className}`}>
      <span className="h-[2px] w-10 bg-oxblood" />
      <span className="h-1.5 w-1.5 rounded-full bg-oxblood" />
      <span className="h-px flex-1 bg-inknavy/15" />
    </div>
  );
}
