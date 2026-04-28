import { Link } from "@/i18n/navigation";
import { Eyebrow } from "./editorial/Eyebrow";
import {
  PRIMARY_ENDOCRINOLOGIST,
  PRIMARY_PHARMACIST,
} from "@/lib/content/reviewers";

export function AuthorBio() {
  return (
    <section className="mt-14 p-7 md:p-8 bg-paper border border-inknavy/15 rounded-sm relative">
      <div className="absolute top-0 left-0 w-1 h-full bg-oxblood" />
      <Eyebrow tone="oxblood">The masthead</Eyebrow>
      <h3 className="font-serif text-[1.3rem] text-inknavy mt-2 mb-3 leading-tight">
        About The Pepvise Editorial Team
      </h3>
      <p className="text-[15px] text-charcoal/85 leading-[1.75]">
        The Pepvise Editorial Team is a small group of researchers and science
        writers reading the peer-reviewed peptide literature and translating it
        into calm, cited analysis. We do not sell peptides, recommend peptides,
        or tell readers what to administer. We describe what has been measured,
        by whom, at what scale, with what effect size.
      </p>
      <p className="mt-4 text-[15px] text-charcoal/85 leading-[1.75]">
        Compound reviews are signed off by{" "}
        <Link
          href={`/reviewers/${PRIMARY_ENDOCRINOLOGIST.slug}`}
          className="text-oxblood underline decoration-oxblood/40 hover:decoration-oxblood"
        >
          {PRIMARY_ENDOCRINOLOGIST.name}, {PRIMARY_ENDOCRINOLOGIST.credentials}
        </Link>{" "}
        (endocrinologist) and{" "}
        <Link
          href={`/reviewers/${PRIMARY_PHARMACIST.slug}`}
          className="text-oxblood underline decoration-oxblood/40 hover:decoration-oxblood"
        >
          {PRIMARY_PHARMACIST.name}, {PRIMARY_PHARMACIST.credentials}
        </Link>{" "}
        (board-certified clinical pharmacist). Both hold verifiable state-board
        licenses and have signed editorial-independence letters with us. See{" "}
        <Link
          href="/reviewers"
          className="text-inknavy underline decoration-inknavy/30 hover:decoration-inknavy"
        >
          the full editorial board &rarr;
        </Link>
      </p>
    </section>
  );
}
