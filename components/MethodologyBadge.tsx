import { Link } from "@/i18n/navigation";

/**
 * MethodologyBadge — small pill that travels with every score.
 *
 * Mint-on-forest pill with the methodology version and a tiny external-
 * link glyph that lands on /methodology/v1-2. Drops next to verdict
 * scores, score columns, and the rank index header.
 *
 * Beats Wirecutter on trust signal density: Wirecutter has a
 * "tested by" byline; we expose the methodology version on every
 * scored surface, link to a versioned changelog, and bind the version
 * to the actual data.
 */
export function MethodologyBadge({
  version,
  label,
  href = "/methodology",
  variant = "default",
}: {
  version: string;
  label: string;
  href?: string;
  variant?: "default" | "ghost";
}) {
  const cls =
    variant === "ghost"
      ? "inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.14em] uppercase text-forest hover:text-forest-deep underline underline-offset-2 decoration-forest/40 hover:decoration-forest"
      : "inline-flex items-center gap-1.5 px-2 py-1 bg-[#EEF5F0] text-forest border border-forest/15 hover:bg-forest hover:text-paper transition-colors text-[10.5px] font-bold tracking-[0.14em] uppercase";
  return (
    <Link href={href as never} className={cls}>
      <span aria-hidden className="block w-1.5 h-1.5 bg-forest rounded-full shrink-0 mt-px" />
      <span>
        {label} <span className="mono tnum">{version}</span>
      </span>
      <span aria-hidden className="text-[9px] mt-px">↗</span>
    </Link>
  );
}
