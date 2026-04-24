import { SITE } from "@/lib/content/site";

function currentDate() {
  const d = new Date();
  return d.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

/**
 * Masthead dateline — "Ledger · Vol. I · No. 01 · Date · pepvise.com".
 * Explicitly nods to the Evidence Ledger wedge.
 */
export function Dateline({
  className = "",
  showDomain = true,
}: {
  className?: string;
  showDomain?: boolean;
}) {
  return (
    <div className={`dateline flex items-center flex-wrap gap-2 md:gap-3 ${className}`}>
      <span className="text-oxblood font-semibold">{SITE.dateline}</span>
      <span aria-hidden className="text-inknavy/40">·</span>
      <span>{SITE.volume}</span>
      <span aria-hidden className="text-inknavy/40">·</span>
      <span>{SITE.issue}</span>
      <span aria-hidden className="text-inknavy/40">·</span>
      <span>{currentDate()}</span>
      {showDomain && (
        <>
          <span aria-hidden className="text-inknavy/40 hidden md:inline">·</span>
          <span className="hidden md:inline">
            {SITE.url.replace(/^https?:\/\//, "")}
          </span>
        </>
      )}
    </div>
  );
}
