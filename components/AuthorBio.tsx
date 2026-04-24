import { Eyebrow } from "./editorial/Eyebrow";

export function AuthorBio() {
  return (
    <section className="mt-14 p-7 md:p-8 bg-paper border border-inknavy/15 rounded-sm relative">
      <div className="absolute top-0 left-0 w-1 h-full bg-oxblood" />
      <Eyebrow tone="oxblood">The masthead</Eyebrow>
      <h3 className="font-serif text-[1.3rem] text-inknavy mt-2 mb-3 leading-tight">
        About The PepVise Editorial Team
      </h3>
      <p className="text-[15px] text-charcoal/85 leading-[1.75]">
        The PepVise Editorial Team is a small group of researchers and science
        writers reading the peer-reviewed peptide literature and translating it
        into calm, cited analysis. We do not sell peptides, recommend peptides,
        or tell readers what to administer. We describe what has been measured,
        by whom, at what scale, with what effect size. We are adding a named MD
        or PharmD to our masthead by month 9; until then, treat our analysis as
        one well-sourced data point to discuss with your physician.
      </p>
    </section>
  );
}
