import type { RankRow } from "@/components/RankIndex";
import type { CmpRow } from "@/components/ComparisonTable";
import type { RankVariant } from "@/components/RankChip";
import type { CategoryItem } from "@/components/CategoriesStrip";

/**
 * Review-database data layer.
 *
 * The repo already ships a rich `posts.ts` with full pillar prose; the
 * Wirecutter-style home and comparison view need a parallel
 * score-forward record for each compound. This file is the source of
 * truth for that surface. Score values are the editorially-set v1.2
 * methodology scores (see `/methodology`).
 *
 * Each entry's `slug` matches a post in `posts.ts` so the "Read review"
 * link lands on the existing review template.
 */

export type ReviewEntry = {
  slug: string;
  rank: number;
  variant: RankVariant;
  name: string;
  alias?: string;
  oneLineVerdict: string;
  longVerdict: string;
  score: {
    evidence: number;
    mechanism: number;
    human: number;
    vendor: number;
    safety: number;
  };
  total: number;
  category: string;
  fdaStatus: string;
  wadaStatus: string;
  pros: string[];
  cons: string[];
  alternatives: string[];
  references: { label: string; url: string }[];
  lastUpdated: string;
  body: string;
};

const ENTRIES: ReviewEntry[] = [
  {
    slug: "bpc-157",
    rank: 1,
    variant: "our-pick",
    name: "BPC-157",
    alias: "Body Protection Compound 157",
    oneLineVerdict:
      "The most-studied research peptide in rodents. Human evidence remains thin and the FDA narrowed its compounding pathway in 2023.",
    longVerdict:
      "Fifty-plus rodent papers, one published human pilot (Chang 2014, n=12), one active US Phase 1 listing. The mechanism story is coherent. The human story is not yet there.",
    score: { evidence: 7.8, mechanism: 8.2, human: 4.0, vendor: 6.5, safety: 7.0 },
    total: 6.8,
    category: "tendon-and-tissue-repair",
    fdaStatus: "Removed from 503A list (2023)",
    wadaStatus: "Plausible S0 — sanctions reported",
    pros: [
      "Largest preclinical literature of any research peptide we cover.",
      "Mechanism (angiogenesis, growth-factor modulation) is consistent with established cell biology, not back-fitted.",
      "Two registered Phase 1 trials lifted the human-data score from a flat zero in v1.1.",
    ],
    cons: [
      "Single published human pilot was n=12, open-label, oral route.",
      "Most preclinical work originates from one Zagreb research program — replication from independent labs is the missing piece.",
      "FDA's 2023 503A category change closes the cleanest US compounding pathway.",
      "Counterfeit and underdose incidents in research-channel supply.",
    ],
    alternatives: ["tb-500", "ghk-cu-peptide", "thymosin-alpha-1"],
    references: [
      { label: "Staresinic et al. 2003 — J Orthop Res", url: "https://pubmed.ncbi.nlm.nih.gov/12919876/" },
      { label: "Chang et al. 2014 — Vojnosanitski Pregled", url: "https://pubmed.ncbi.nlm.nih.gov/25518352/" },
      { label: "ClinicalTrials.gov — BPC-157 listings", url: "https://clinicaltrials.gov/search?term=BPC-157" },
    ],
    lastUpdated: "2026-04-21",
    body: "The BPC-157 file is, on paper, the strongest in the research-peptide category. More than fifty preclinical papers cover tendon-to-bone healing, gut ulceration, and crush-injury models, and the published mechanism (angiogenesis with growth-factor modulation, plus nitric-oxide system interaction) is consistent with what cell biology would predict. The catch is that the published human file is one open-label oral pilot of twelve patients in ulcerative colitis — Chang et al. 2014 — and a single registered Phase 1 in the US. That gap between rodent volume and human evidence is the entire reason BPC-157 sits at #1 with a 6.8, not a 9. The methodology v1.2 weights human data at 25% precisely because we do not want a peptide with one paper in humans to outrank a compound with three Phase 2s. The 2023 FDA decision removing BPC-157 from the 503A bulk-substances list is also load-bearing here: it does not change the science but it does change the legal pathway in the US, which v1.2 captures under regulatory posture. We rate BPC-157 #1 because it is the best-documented option in a category where the bar is low — not because it is proven.",
  },
  {
    slug: "tb-500",
    rank: 2,
    variant: "budget",
    name: "TB-500",
    alias: "Thymosin Beta-4 fragment",
    oneLineVerdict:
      "The actin-binding biology is real; what most online sources sell as TB-500 is a fragment, not the full thymosin beta-4 protein.",
    longVerdict:
      "Picked for the recovery-and-tendon shelf when budget matters. The full TB-4 protein has small-trial data; the synthetic fragment that ships as TB-500 does not.",
    score: { evidence: 6.4, mechanism: 7.5, human: 3.2, vendor: 5.8, safety: 6.5 },
    total: 5.9,
    category: "tendon-and-tissue-repair",
    fdaStatus: "Not approved",
    wadaStatus: "Prohibited (S0)",
    pros: [
      "Actin-sequestering mechanism is textbook cell biology — the science is not invented.",
      "Lower price point than BPC-157 in research-channel supply, hence the budget pick.",
      "Some Phase 1/2 data exists for the parent thymosin beta-4 in wound and corneal indications.",
    ],
    cons: [
      "The marketed 'TB-500' is a synthetic fragment; trial data on TB-4 does not transfer cleanly.",
      "WADA explicitly prohibits TB-500 — competitive athletes have been sanctioned.",
      "Counterfeit incidence in research-channel supply higher than BPC-157.",
    ],
    alternatives: ["bpc-157", "ghk-cu-peptide", "thymosin-alpha-1"],
    references: [
      { label: "Goldstein et al. 2012 — thymosin beta-4 review", url: "https://pubmed.ncbi.nlm.nih.gov/22640435/" },
      { label: "WADA Prohibited List 2026", url: "https://www.wada-ama.org/en/prohibited-list" },
    ],
    lastUpdated: "2026-04-22",
    body: "TB-500 is the budget pick for tendon and connective-tissue work because the underlying biology — G-actin sequestration, cell migration, modulation of inflammatory cytokines — is well-established cell biology, not a marketing back-fit. The complication is that almost every online source treats 'TB-500' and 'thymosin beta-4' as interchangeable, and they are not. TB-4 is the full 43-residue protein with published Phase 1 and Phase 2 data in corneal injury and dermal wound healing. TB-500 is a synthetic short-fragment derivative that ships through research-peptide channels with very little of its own clinical literature. We score the file under TB-500 the marketed compound, not TB-4 the protein, which is why the human-data column reads 3.2 and not 6.5. WADA has prohibited TB-500 by name since 2014 and athletes have been sanctioned, which v1.2 captures in the regulatory posture column.",
  },
  {
    slug: "ghk-cu-peptide",
    rank: 3,
    variant: "upgrade",
    name: "GHK-Cu",
    alias: "Copper tripeptide",
    oneLineVerdict:
      "The cleanest evidence file in the database — peer-reviewed cosmetic and wound work, plus topical formulations available outside the research channel.",
    longVerdict:
      "Upgrade pick for skin and dermal applications. Topical cosmetic formulations are available legitimately, which sidesteps most of the vendor-trust problem.",
    score: { evidence: 8.6, mechanism: 8.5, human: 6.8, vendor: 8.2, safety: 8.4 },
    total: 8.1,
    category: "skin-hair-and-derm",
    fdaStatus: "Cosmetic ingredient (legal)",
    wadaStatus: "Not listed",
    pros: [
      "Forty-plus published human studies including double-blind cosmetic trials.",
      "Established mechanism — copper transport plus collagen and elastin upregulation.",
      "Available in legitimate cosmetic formulations, which removes the vendor-counterfeit risk that drags BPC-157 and TB-500 down.",
      "WADA does not list GHK-Cu, regulatory pathway is clean.",
    ],
    cons: [
      "Most human work is topical and short follow-up.",
      "Injectable GHK-Cu protocols are still in research-use territory.",
    ],
    alternatives: ["bpc-157", "tb-500", "thymosin-alpha-1"],
    references: [
      { label: "Pickart et al. 2012 — GHK-Cu wound and dermal review", url: "https://pubmed.ncbi.nlm.nih.gov/22762268/" },
    ],
    lastUpdated: "2026-04-23",
    body: "GHK-Cu is the highest-scoring entry in the database and the upgrade pick when budget is not the constraint and the use case is dermal. Forty-plus human studies (cosmetic short-trial work, topical wound healing, hair density) sit behind a mechanism that is properly published — copper transport into the cell with downstream collagen and elastin upregulation. Crucially, GHK-Cu can be sourced as a topical cosmetic formulation through ordinary retail channels, which collapses the vendor-trust risk that pulls BPC-157 and TB-500 down by a full point each. The score gap between #1 and #3 is real, and we want readers to see it: GHK-Cu earns 8.1 because it has both the evidence and the legal supply chain. BPC-157 leads the category by name recognition, not by score.",
  },
  {
    slug: "retatrutide",
    rank: 4,
    variant: "runner-up",
    name: "Retatrutide",
    alias: "LY-3437943, Eli Lilly triple-agonist",
    oneLineVerdict:
      "Phase 3 obesity drug from Eli Lilly. Real human data, real regulatory pathway — but not yet approved, and research-channel supply is unsafe.",
    longVerdict:
      "Runner-up because the legitimate route is a Phase 3 trial enrollment, not a research-peptide order. The human data is excellent.",
    score: { evidence: 8.9, mechanism: 8.8, human: 8.4, vendor: 3.1, safety: 6.5 },
    total: 7.4,
    category: "metabolic-and-glp1",
    fdaStatus: "Phase 3 (Eli Lilly TRIUMPH program)",
    wadaStatus: "Not currently listed",
    pros: [
      "GLP-1 / GIP / glucagon triple agonism — the most-studied molecular mechanism in active obesity development.",
      "Phase 2 data (Jastreboff et al. 2023 NEJM) showed mean weight loss exceeding semaglutide and tirzepatide.",
      "Pivotal Phase 3 (TRIUMPH) is enrolling — a legitimate access pathway exists.",
    ],
    cons: [
      "Not FDA-approved as of April 2026; expected 2027–2028.",
      "Research-channel supply is the only non-trial source and counterfeit incidence is high.",
      "Long-term safety data is not yet published.",
    ],
    alternatives: ["semaglutide", "tirzepatide", "cagrilintide"],
    references: [
      { label: "Jastreboff et al. 2023 — NEJM (Phase 2)", url: "https://pubmed.ncbi.nlm.nih.gov/37356458/" },
      { label: "ClinicalTrials.gov — TRIUMPH-1", url: "https://clinicaltrials.gov/search?term=retatrutide+TRIUMPH" },
    ],
    lastUpdated: "2026-04-24",
    body: "Retatrutide is the entry where the methodology v1.2 weighting structure earns its keep. The human-data score is the highest of any compound in the database — Phase 2 NEJM publication, ongoing pivotal Phase 3, weight-loss endpoints that beat semaglutide and tirzepatide. But the vendor-trust score is 3.1, the worst on the page, because the only non-trial supply is the research-channel grey market and counterfeit incidence is high. Composite score 7.4 puts retatrutide at #4, behind compounds with worse evidence files but cleaner supply chains. The right read is: enroll in the Phase 3 if you qualify; do not order from a research vendor.",
  },
  {
    slug: "semaglutide",
    rank: 5,
    variant: "also-ran",
    name: "Semaglutide",
    alias: "Ozempic, Wegovy, Rybelsus",
    oneLineVerdict:
      "FDA-approved GLP-1 with the clean regulatory pathway. Belongs in PepTips, not Pepvise — listed here for context only.",
    longVerdict:
      "An also-tested entry. Approved drugs are out-of-scope for Pepvise's research-peptide review focus, but the comparison is useful for retatrutide context.",
    score: { evidence: 9.2, mechanism: 9.0, human: 9.4, vendor: 9.0, safety: 8.5 },
    total: 9.0,
    category: "metabolic-and-glp1",
    fdaStatus: "FDA-approved (T2D + obesity)",
    wadaStatus: "Not currently listed",
    pros: [
      "FDA-approved indications, both T2D and obesity.",
      "Largest published human-trial corpus of any compound on this page.",
      "Cardiovascular outcomes data published.",
    ],
    cons: [
      "GI side-effect burden is the published reason for Phase 3 dropout.",
      "Approved-drug economics put it outside the research-peptide review scope; covered for cross-reference only.",
    ],
    alternatives: ["retatrutide", "tirzepatide", "cagrilintide"],
    references: [
      { label: "Wilding et al. 2021 — STEP 1 trial", url: "https://pubmed.ncbi.nlm.nih.gov/33567185/" },
    ],
    lastUpdated: "2026-04-25",
    body: "Semaglutide is included as an also-tested anchor at the top of the metabolic shelf so readers can calibrate the scoring. A fully approved drug with a SELECT cardiovascular outcomes trial behind it scores 9.0 on the v1.2 methodology — and that is the ceiling. Everything below 9.0 is paying for missing evidence or missing supply integrity. When BPC-157 sits at 6.8, the gap to 9.0 is the gap between 'most-studied research peptide' and 'fully approved drug'. We surface that gap rather than hide it.",
  },
];

export function reviewBySlug(slug: string): ReviewEntry | undefined {
  return ENTRIES.find((e) => e.slug === slug);
}

export function allReviews(): ReviewEntry[] {
  return [...ENTRIES].sort((a, b) => a.rank - b.rank);
}

export function topPicks(n: number): ReviewEntry[] {
  return allReviews().slice(0, n);
}

export function rankRows(
  variantLabels: {
    "our-pick": string;
    budget: string;
    upgrade: string;
    "runner-up": string;
    "also-ran": string;
  },
): RankRow[] {
  return allReviews().map((e) => ({
    rank: e.rank,
    variant: e.variant,
    variantLabel: variantLabels[e.variant],
    slug: e.slug,
    name: e.name,
    alias: e.alias,
    verdict: e.oneLineVerdict,
    evidence: e.score.evidence,
    safety: e.score.safety,
    total: e.total,
  }));
}

export function comparisonRows(): CmpRow[] {
  return allReviews()
    .slice(0, 4)
    .map((e) => ({
      rank: e.rank,
      slug: e.slug,
      name: e.name,
      alias: e.alias,
      evidence: e.score.evidence,
      mechanism: e.score.mechanism,
      human: e.score.human,
      vendor: e.score.vendor,
      safety: e.score.safety,
      total: e.total,
    }));
}

export const CATEGORIES: CategoryItem[] = [
  { slug: "tendon-and-tissue-repair", name: "Tendon & tissue repair", count: 6 },
  { slug: "metabolic-and-glp1", name: "Metabolic / GLP-1 class", count: 5 },
  { slug: "skin-hair-and-derm", name: "Skin, hair & derm", count: 4 },
  { slug: "cognitive-and-neuro", name: "Cognitive & neuro", count: 3 },
  { slug: "growth-and-recomposition", name: "Growth & body composition", count: 4 },
];

export type PipelineEntry = {
  slug: string;
  name: string;
  alias?: string;
  stage:
    | "Drafting"
    | "Editor review"
    | "Citation pack"
    | "Pre-publication hold"
    | "Methodology dependency";
  editor: string;
  targetPub: string;
};

export const PIPELINE: PipelineEntry[] = [
  { slug: "cjc-1295", name: "CJC-1295", alias: "with DAC", stage: "Editor review", editor: "S. Han", targetPub: "2026-05-08" },
  { slug: "ipamorelin", name: "Ipamorelin", stage: "Citation pack", editor: "S. Han", targetPub: "2026-05-15" },
  { slug: "tirzepatide", name: "Tirzepatide", alias: "Mounjaro, Zepbound", stage: "Drafting", editor: "M. Otieno", targetPub: "2026-05-22" },
  { slug: "mots-c", name: "MOTS-c", stage: "Methodology dependency", editor: "S. Han", targetPub: "2026-06-05" },
  { slug: "epithalon", name: "Epithalon", alias: "Epitalon", stage: "Drafting", editor: "M. Otieno", targetPub: "2026-06-12" },
  { slug: "thymosin-alpha-1", name: "Thymosin α1", stage: "Editor review", editor: "S. Han", targetPub: "2026-06-19" },
  { slug: "selank", name: "Selank", stage: "Pre-publication hold", editor: "M. Otieno", targetPub: "2026-07-03" },
  { slug: "semax", name: "Semax", stage: "Pre-publication hold", editor: "M. Otieno", targetPub: "2026-07-10" },
];
