import Link from "next/link";
import { SITE } from "@/lib/content/site";

/**
 * PepVise wordmark — literary serif with a small-caps subtitle.
 * "PepVise" in Newsreader with italic "Vise" accent + "A JOURNAL OF PEPTIDE LITERATURE"
 */
export function Wordmark({
  size = "md",
  asLink = true,
  showSubtitle = false,
  className = "",
}: {
  size?: "sm" | "md" | "lg" | "xl";
  asLink?: boolean;
  showSubtitle?: boolean;
  className?: string;
}) {
  const sizeClass =
    size === "xl"
      ? "text-5xl md:text-[4.5rem]"
      : size === "lg"
      ? "text-4xl md:text-[3.25rem]"
      : size === "sm"
      ? "text-xl"
      : "text-[1.6rem]";

  const subSize =
    size === "xl" || size === "lg"
      ? "text-[10px] md:text-[11px]"
      : "text-[9px] md:text-[10px]";

  const inner = (
    <span className={`inline-flex flex-col ${className}`}>
      <span className="inline-flex items-baseline">
        <span
          className={`font-serif ${sizeClass} text-inknavy font-semibold tracking-tight`}
          style={{ fontVariationSettings: '"opsz" 72' }}
        >
          Pep
        </span>
        <span
          className={`font-serif ${sizeClass} text-oxblood font-semibold italic tracking-tight`}
          style={{ fontVariationSettings: '"opsz" 72' }}
        >
          Vise
        </span>
      </span>
      {showSubtitle && (
        <span
          className={`${subSize} mt-1 tracking-[0.28em] uppercase text-slate font-medium`}
        >
          {SITE.subtitle}
        </span>
      )}
    </span>
  );

  if (!asLink) return inner;
  return (
    <Link href="/" aria-label="PepVise — home" className="inline-block">
      {inner}
    </Link>
  );
}
