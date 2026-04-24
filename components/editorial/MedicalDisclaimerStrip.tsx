import Link from "next/link";

/**
 * MedicalDisclaimerStrip — site-wide mandatory strip rendered ABOVE the masthead
 * on every page. Quiet inknavy strip, oxblood link accent, small-caps framing.
 * Non-removable per CLAUDE.md and brand-book §6.
 */
export function MedicalDisclaimerStrip({
  variant = "top",
}: {
  variant?: "top" | "footer";
}) {
  if (variant === "footer") {
    return (
      <div className="bg-inknavy border-t border-oxblood/40">
        <div className="mx-auto max-w-6xl px-6 py-5 text-[12.5px] text-bone/85 leading-[1.6]">
          <p>
            <strong className="text-bone">For educational and research purposes only.</strong>{" "}
            Many peptides discussed on PepVise are labeled "for research use only"
            and are not FDA-approved for human use outside of clinical trials.
            Nothing on this site is medical advice, a dosing prescription, or a
            purchase recommendation. Consult a licensed physician operating within
            FDA-compliant pathways before any use.{" "}
            <Link
              href="/medical-disclaimer"
              className="text-oxblood underline decoration-oxblood/60 hover:decoration-oxblood underline-offset-4"
            >
              Read the full disclaimer →
            </Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-inknavy text-bone">
      <div className="mx-auto max-w-6xl px-6 py-2 flex items-center justify-center gap-3 text-[11px] tracking-[0.16em] uppercase">
        <span aria-hidden className="h-1 w-1 rounded-full bg-oxblood" />
        <span>For educational &amp; research purposes only</span>
        <span aria-hidden className="text-bone/40">·</span>
        <Link
          href="/medical-disclaimer"
          className="text-oxblood hover:text-bone transition underline underline-offset-4 decoration-oxblood/60"
        >
          Full medical disclaimer
        </Link>
      </div>
    </div>
  );
}
