type Item = { label: string; detail: string };

const defaultItems: Item[] = [
  {
    label: "Evidence tier",
    detail:
      "We grade the literature on four tiers, High (replicated RCTs or meta-analyses), Moderate (multiple trials with mixed findings), Low (a single pilot or case series), and Anecdotal (preclinical only, no human data). The tier appears on every compound profile beside the claim it supports.",
  },
  {
    label: "Trial stage",
    detail:
      "Where a compound sits in the human development pipeline is recorded as Preclinical, Phase 1, Phase 2, or Phase 3+. We pull the current stage from ClinicalTrials.gov and the EU Clinical Trials Register on access date and re-verify quarterly.",
  },
  {
    label: "Regulatory status",
    detail:
      "We state the FDA posture plainly, approved for indication X, or labeled for research use only, or removed from the 503A list, or investigational under a specific IND. Regulatory status changes; every post carries a review date.",
  },
  {
    label: "Where we're uncertain",
    detail:
      "Every compound profile closes with a named uncertainty section, the question we can't answer from the current literature, the trial we'd want to see, the effect size we'd treat as a real signal. Uncertainty is not a failure mode here; it's load-bearing.",
  },
];

/**
 * MethodologyBlock, PepVise's adapted 4-part wedge. Trial stage / Evidence tier /
 * Regulatory status / Where we're uncertain. This is the analytic scaffold.
 */
export function MethodologyBlock({
  items = defaultItems,
  title = "How we read the literature",
}: {
  items?: Item[];
  title?: string;
}) {
  return (
    <section className="my-12 bg-paper border border-inknavy/15 rounded-sm p-7 md:p-9 relative">
      <div className="absolute top-0 left-0 w-1 h-full bg-oxblood" />
      <div className="flex items-center gap-3 mb-5">
        <span className="h-2 w-2 rounded-full bg-oxblood" />
        <span className="caps-label text-oxblood">Methodology</span>
      </div>
      <h2 className="font-serif text-2xl md:text-[1.7rem] text-inknavy mb-7 leading-tight">
        {title}
      </h2>
      <dl className="grid md:grid-cols-2 gap-x-10 gap-y-6">
        {items.map((item) => (
          <div key={item.label}>
            <dt className="eyebrow text-inknavy mb-1.5">{item.label}</dt>
            <dd className="text-[15px] text-charcoal/85 leading-[1.7]">
              {item.detail}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
