import Link from "next/link";
import { MedicalDisclaimerStrip } from "./editorial/MedicalDisclaimerStrip";

/**
 * Re-export the canonical site-wide strip under the legacy name used by layout.tsx.
 * The actual strip lives in components/editorial/MedicalDisclaimerStrip.tsx so it
 * can be rendered above the masthead as well as in the footer.
 */
export function MedicalDisclaimerFooter() {
  return <MedicalDisclaimerStrip variant="footer" />;
}

export function PostReviewStamp({ reviewedOn }: { reviewedOn: string }) {
  const formatted = new Date(reviewedOn).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <aside
      role="note"
      className="my-8 border-l-[3px] border-oxblood bg-oxblood/5 pl-5 pr-5 py-5 rounded-r-sm"
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="h-1.5 w-1.5 rounded-full bg-oxblood" />
        <span className="caps-label text-oxblood">
          Editorial review · {formatted}
        </span>
      </div>
      <p className="text-[15px] text-charcoal/90 leading-[1.7]">
        This post is literature analysis published for educational and research
        purposes only. Nothing here is medical advice, a dosing prescription, or
        a purchase recommendation. Many compounds discussed are labeled for
        research use only and are not FDA-approved for human use. Consult a
        licensed physician operating within FDA-compliant pathways before any
        use. Read the full{" "}
        <Link
          href="/medical-disclaimer"
          className="text-oxblood underline underline-offset-4"
        >
          medical disclaimer
        </Link>
        .
      </p>
    </aside>
  );
}
