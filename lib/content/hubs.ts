export type Hub = {
  slug: string;
  name: string;
  shortName: string;
  oneLiner: string;
  thesis: string;
};

export const hubs: Hub[] = [
  {
    slug: "compound-profiles",
    name: "Compound Profiles",
    shortName: "Compounds",
    oneLiner: "BPC-157, TB-500, GHK-Cu, Retatrutide, and more — each opens with the Evidence Ledger.",
    thesis: "One pillar per major compound. Evidence Ledger, mechanism, human data, discourse, open questions. Never a dosing prescription.",
  },
  {
    slug: "mechanism-and-science",
    name: "Mechanism & Science",
    shortName: "Mechanism",
    oneLiner: "Biochemistry, PK/PD, signaling, stability — reference content across compounds.",
    thesis: "The biochemistry and pharmacology reference content readers return to across multiple compound posts.",
  },
  {
    slug: "evidence-reviews",
    name: "Evidence Reviews",
    shortName: "Evidence",
    oneLiner: "Literature reviews organized by indication — Cochrane-adjacent synthesis.",
    thesis: "Cochrane-adjacent literature synthesis by indication — inclusion criteria, effect sizes, limitations, our assessment.",
  },
  {
    slug: "reconstitution-and-practical",
    name: "Reconstitution & Practical",
    shortName: "Reconstitution",
    oneLiner: "Research-context reconstitution, storage, handling, purity verification.",
    thesis: "Same rigor as InjectCompass's practical hub, but framed as research-workflow education, not patient self-administration.",
  },
  {
    slug: "safety-regulation-markets",
    name: "Safety, Regulation, Markets",
    shortName: "Regulation",
    oneLiner: "FDA status, 503A/503B compounding, counterfeit risks, vendor taxonomy.",
    thesis: "The legal and regulatory landscape — 'research use only' labeling, compounding pharmacy regulation, counterfeit red flags. Informational taxonomy, never purchase guidance.",
  },
];

export function getHub(slug: string): Hub | undefined {
  return hubs.find((h) => h.slug === slug);
}
