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
  /**
   * Slug into the DRUGS manifest in `lib/content/drug-images.ts`. When set,
   * `<DrugImage>` renders the licensed Wikimedia product photo or
   * chemical-structure SVG in the verdict block.
   */
  primaryDrug?: string;
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
    primaryDrug: "bpc-157",
    oneLineVerdict:
      "The most-studied research peptide in rodents. Human evidence remains thin and the FDA narrowed its compounding pathway in 2023.",
    longVerdict:
      "Fifty-plus rodent papers, one published human pilot (Chang 2014, n=12), one active US Phase 1 listing. The mechanism story is coherent. The human story is not yet there.",
    score: { evidence: 7.8, mechanism: 8.2, human: 4.0, vendor: 6.5, safety: 7.0 },
    total: 6.8,
    category: "tendon-and-tissue-repair",
    fdaStatus: "Removed from 503A list (2023)",
    wadaStatus: "Plausible S0, sanctions reported",
    pros: [
      "Largest preclinical literature of any research peptide we cover.",
      "Mechanism (angiogenesis, growth-factor modulation) is consistent with established cell biology, not back-fitted.",
      "Two registered Phase 1 trials lifted the human-data score from a flat zero in v1.1.",
    ],
    cons: [
      "Single published human pilot was n=12, open-label, oral route.",
      "Most preclinical work originates from one Zagreb research program, replication from independent labs is the missing piece.",
      "FDA's 2023 503A category change closes the cleanest US compounding pathway.",
      "Counterfeit and underdose incidents in research-channel supply.",
    ],
    alternatives: ["tb-500", "ghk-cu-peptide", "thymosin-alpha-1"],
    references: [
      { label: "Staresinic et al. 2003, J Orthop Res", url: "https://pubmed.ncbi.nlm.nih.gov/12919876/" },
      { label: "Chang et al. 2014, Vojnosanitski Pregled", url: "https://pubmed.ncbi.nlm.nih.gov/25518352/" },
      { label: "ClinicalTrials.gov, BPC-157 listings", url: "https://clinicaltrials.gov/search?term=BPC-157" },
    ],
    lastUpdated: "2026-04-21",
    body: "The BPC-157 file is, on paper, the strongest in the research-peptide category. More than fifty preclinical papers cover tendon-to-bone healing, gut ulceration, and crush-injury models, and the published mechanism (angiogenesis with growth-factor modulation, plus nitric-oxide system interaction) is consistent with what cell biology would predict. The catch is that the published human file is one open-label oral pilot of twelve patients in ulcerative colitis, Chang et al. 2014, and a single registered Phase 1 in the US. That gap between rodent volume and human evidence is the entire reason BPC-157 sits at #1 with a 6.8, not a 9. The methodology v1.2 weights human data at 25% precisely because we do not want a peptide with one paper in humans to outrank a compound with three Phase 2s. The 2023 FDA decision removing BPC-157 from the 503A bulk-substances list is also load-bearing here: it does not change the science but it does change the legal pathway in the US, which v1.2 captures under regulatory posture. We rate BPC-157 #1 because it is the best-documented option in a category where the bar is low, not because it is proven.",
  },
  {
    slug: "tb-500",
    rank: 2,
    variant: "budget",
    name: "TB-500",
    primaryDrug: "tb-500",
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
      "Actin-sequestering mechanism is textbook cell biology, the science is not invented.",
      "Lower price point than BPC-157 in research-channel supply, hence the budget pick.",
      "Some Phase 1/2 data exists for the parent thymosin beta-4 in wound and corneal indications.",
    ],
    cons: [
      "The marketed 'TB-500' is a synthetic fragment; trial data on TB-4 does not transfer cleanly.",
      "WADA explicitly prohibits TB-500, competitive athletes have been sanctioned.",
      "Counterfeit incidence in research-channel supply higher than BPC-157.",
    ],
    alternatives: ["bpc-157", "ghk-cu-peptide", "thymosin-alpha-1"],
    references: [
      { label: "Goldstein et al. 2012, thymosin beta-4 review", url: "https://pubmed.ncbi.nlm.nih.gov/22640435/" },
      { label: "WADA Prohibited List 2026", url: "https://www.wada-ama.org/en/prohibited-list" },
    ],
    lastUpdated: "2026-04-22",
    body: "TB-500 is the budget pick for tendon and connective-tissue work because the underlying biology, G-actin sequestration, cell migration, modulation of inflammatory cytokines, is well-established cell biology, not a marketing back-fit. The complication is that almost every online source treats 'TB-500' and 'thymosin beta-4' as interchangeable, and they are not. TB-4 is the full 43-residue protein with published Phase 1 and Phase 2 data in corneal injury and dermal wound healing. TB-500 is a synthetic short-fragment derivative that ships through research-peptide channels with very little of its own clinical literature. We score the file under TB-500 the marketed compound, not TB-4 the protein, which is why the human-data column reads 3.2 and not 6.5. WADA has prohibited TB-500 by name since 2014 and athletes have been sanctioned, which v1.2 captures in the regulatory posture column.",
  },
  {
    slug: "ghk-cu-peptide",
    rank: 3,
    variant: "upgrade",
    name: "GHK-Cu",
    alias: "Copper tripeptide",
    primaryDrug: "ghk-cu",
    oneLineVerdict:
      "The cleanest evidence file in the database, peer-reviewed cosmetic and wound work, plus topical formulations available outside the research channel.",
    longVerdict:
      "Upgrade pick for skin and dermal applications. Topical cosmetic formulations are available legitimately, which sidesteps most of the vendor-trust problem.",
    score: { evidence: 8.6, mechanism: 8.5, human: 6.8, vendor: 8.2, safety: 8.4 },
    total: 8.1,
    category: "skin-hair-and-derm",
    fdaStatus: "Cosmetic ingredient (legal)",
    wadaStatus: "Not listed",
    pros: [
      "Forty-plus published human studies including double-blind cosmetic trials.",
      "Established mechanism, copper transport plus collagen and elastin upregulation.",
      "Available in legitimate cosmetic formulations, which removes the vendor-counterfeit risk that drags BPC-157 and TB-500 down.",
      "WADA does not list GHK-Cu, regulatory pathway is clean.",
    ],
    cons: [
      "Most human work is topical and short follow-up.",
      "Injectable GHK-Cu protocols are still in research-use territory.",
    ],
    alternatives: ["bpc-157", "tb-500", "thymosin-alpha-1"],
    references: [
      { label: "Pickart et al. 2012, GHK-Cu wound and dermal review", url: "https://pubmed.ncbi.nlm.nih.gov/22762268/" },
    ],
    lastUpdated: "2026-04-23",
    body: "GHK-Cu is the highest-scoring entry in the database and the upgrade pick when budget is not the constraint and the use case is dermal. Forty-plus human studies (cosmetic short-trial work, topical wound healing, hair density) sit behind a mechanism that is properly published, copper transport into the cell with downstream collagen and elastin upregulation. Crucially, GHK-Cu can be sourced as a topical cosmetic formulation through ordinary retail channels, which collapses the vendor-trust risk that pulls BPC-157 and TB-500 down by a full point each. The score gap between #1 and #3 is real, and we want readers to see it: GHK-Cu earns 8.1 because it has both the evidence and the legal supply chain. BPC-157 leads the category by name recognition, not by score.",
  },
  {
    slug: "retatrutide",
    rank: 4,
    variant: "runner-up",
    name: "Retatrutide",
    alias: "LY-3437943, Eli Lilly triple-agonist",
    // No free-licensed retatrutide product photo or structure on Commons yet
    // (compound is pre-approval, Eli Lilly retains imagery). DrugImage left
    // unset, component returns null safely.
    oneLineVerdict:
      "Phase 3 obesity drug from Eli Lilly. Real human data, real regulatory pathway, but not yet approved, and research-channel supply is unsafe.",
    longVerdict:
      "Runner-up because the legitimate route is a Phase 3 trial enrollment, not a research-peptide order. The human data is excellent.",
    score: { evidence: 8.9, mechanism: 8.8, human: 8.4, vendor: 3.1, safety: 6.5 },
    total: 7.4,
    category: "metabolic-and-glp1",
    fdaStatus: "Phase 3 (Eli Lilly TRIUMPH program)",
    wadaStatus: "Not currently listed",
    pros: [
      "GLP-1 / GIP / glucagon triple agonism, the most-studied molecular mechanism in active obesity development.",
      "Phase 2 data (Jastreboff et al. 2023 NEJM) showed mean weight loss exceeding semaglutide and tirzepatide.",
      "Pivotal Phase 3 (TRIUMPH) is enrolling, a legitimate access pathway exists.",
    ],
    cons: [
      "Not FDA-approved as of April 2026; expected 2027–2028.",
      "Research-channel supply is the only non-trial source and counterfeit incidence is high.",
      "Long-term safety data is not yet published.",
    ],
    alternatives: ["semaglutide", "tirzepatide", "cagrilintide"],
    references: [
      { label: "Jastreboff et al. 2023, NEJM (Phase 2)", url: "https://pubmed.ncbi.nlm.nih.gov/37356458/" },
      { label: "ClinicalTrials.gov, TRIUMPH-1", url: "https://clinicaltrials.gov/search?term=retatrutide+TRIUMPH" },
    ],
    lastUpdated: "2026-04-24",
    body: "Retatrutide is the entry where the methodology v1.2 weighting structure earns its keep. The human-data score is the highest of any compound in the database, Phase 2 NEJM publication, ongoing pivotal Phase 3, weight-loss endpoints that beat semaglutide and tirzepatide. But the vendor-trust score is 3.1, the worst on the page, because the only non-trial supply is the research-channel grey market and counterfeit incidence is high. Composite score 7.4 puts retatrutide at #4, behind compounds with worse evidence files but cleaner supply chains. The right read is: enroll in the Phase 3 if you qualify; do not order from a research vendor.",
  },
  {
    slug: "semaglutide",
    rank: 5,
    variant: "also-ran",
    name: "Semaglutide",
    primaryDrug: "ozempic",
    alias: "Ozempic, Wegovy, Rybelsus",
    oneLineVerdict:
      "FDA-approved GLP-1 with the clean regulatory pathway. Belongs in PepTips, not Pepvise, listed here for context only.",
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
      { label: "Wilding et al. 2021, STEP 1 trial", url: "https://pubmed.ncbi.nlm.nih.gov/33567185/" },
    ],
    lastUpdated: "2026-04-25",
    body: "Semaglutide is included as an also-tested anchor at the top of the metabolic shelf so readers can calibrate the scoring. A fully approved drug with a SELECT cardiovascular outcomes trial behind it scores 9.0 on the v1.2 methodology, and that is the ceiling. Everything below 9.0 is paying for missing evidence or missing supply integrity. When BPC-157 sits at 6.8, the gap to 9.0 is the gap between 'most-studied research peptide' and 'fully approved drug'. We surface that gap rather than hide it.",
  },
  {
    slug: "tirzepatide",
    rank: 6,
    variant: "also-ran",
    name: "Tirzepatide",
    primaryDrug: "tirzepatide",
    alias: "Mounjaro, Zepbound",
    oneLineVerdict:
      "FDA-approved GIP/GLP-1 dual agonist. The strongest weight-loss outcomes on the approved-drug shelf as of Q2 2026.",
    longVerdict:
      "An also-tested anchor at the top of the metabolic shelf. Methodology v1.2 caps approved-drug scores at 9.5 because the database is built for research-peptide comparison; tirzepatide is here to calibrate the ceiling, not to be ranked against compounded peptides.",
    score: { evidence: 9.4, mechanism: 9.2, human: 9.6, vendor: 9.5, safety: 8.7 },
    total: 9.3,
    category: "metabolic-and-glp1",
    fdaStatus: "FDA-approved (T2D 2022, chronic weight management 2023)",
    wadaStatus: "Not currently listed",
    pros: [
      "Dual GIP/GLP-1 mechanism produces larger weight loss than any other approved agent in head-to-head data (SURMOUNT-5, 2025).",
      "Both Mounjaro (T2D) and Zepbound (chronic weight management) labels published with full FDA review documents.",
      "Eli Lilly direct-to-pharmacy supply chain and US compounding pathway both better-controlled than the research-peptide grey market.",
    ],
    cons: [
      "GI side-effect burden during titration drives roughly 20% of patients off the drug in real-world clinics.",
      "Long-term cardiovascular outcomes trial (SURPASS-CVOT) reads out 2026; the cardiac data lags semaglutide's SELECT.",
      "Cost-of-medication remains a barrier outside negotiated insurance networks.",
    ],
    alternatives: ["semaglutide", "retatrutide", "cagrilintide"],
    references: [
      { label: "Jastreboff et al. 2022, SURMOUNT-1, NEJM", url: "https://pubmed.ncbi.nlm.nih.gov/35658024/" },
      { label: "Frias et al. 2021, SURPASS-2 (vs semaglutide), NEJM", url: "https://pubmed.ncbi.nlm.nih.gov/34370970/" },
      { label: "FDA Drugs@FDA, Mounjaro labeling and review docs", url: "https://www.accessdata.fda.gov/scripts/cder/daf/" },
      { label: "FDA Drugs@FDA, Zepbound labeling", url: "https://www.accessdata.fda.gov/scripts/cder/daf/" },
    ],
    lastUpdated: "2026-04-26",
    body: "Tirzepatide is the upper bound of the metabolic shelf. SURMOUNT-1 reported mean weight loss of 22.5% on the 15 mg arm at 72 weeks — larger than any other approved agent through Q2 2026, larger than every research peptide in this database. The mechanism story is also strong: dual GIP and GLP-1 agonism, with GIP contributing additional energy-expenditure effects beyond the GLP-1 satiety pathway. We rank tirzepatide #6 on the database and not #1 because methodology v1.2 caps approved-drug scoring at 9.5; the database exists to compare research peptides on the same yardstick, and dropping a 9.3 at the top is the calibration anchor. The gap between tirzepatide and BPC-157 (#1 of the research-peptide entries) is the gap between Phase 3 trials and rodent papers — that gap is what the methodology surfaces. Cost, side-effect titration, and long-term cardiovascular data are the legitimate criticisms; they're real but they don't move the score off the top.",
  },
  {
    slug: "ozempic",
    rank: 7,
    variant: "also-ran",
    name: "Ozempic",
    primaryDrug: "ozempic",
    alias: "semaglutide (T2D 0.5–2.0 mg)",
    oneLineVerdict:
      "Semaglutide brand-name for type-2 diabetes. Same molecule as Wegovy at lower target dose; weight loss is real but secondary to the indication.",
    longVerdict:
      "Brand-specific entry for the T2D label of semaglutide. Pepvise covers Ozempic distinct from Wegovy because the target dose, FDA-approved indication, real-world appetite-suppression profile, and clinical-context selection criteria are materially different even though the molecule is identical.",
    score: { evidence: 9.3, mechanism: 9.0, human: 9.4, vendor: 9.4, safety: 8.6 },
    total: 9.1,
    category: "metabolic-and-glp1",
    fdaStatus: "FDA-approved for type-2 diabetes (2017)",
    wadaStatus: "Not currently listed",
    pros: [
      "Largest semaglutide cohort in published practice — millions of patient-years, well-characterised side-effect profile.",
      "SUSTAIN trial program established the molecule's safety and HbA1c control at 0.5–2.0 mg/week.",
      "Cardiovascular benefit demonstrated in SUSTAIN-6 (Marso 2016).",
    ],
    cons: [
      "Off-label prescribing for weight management at the Ozempic dose underdoses against the Wegovy label evidence.",
      "Supply has been intermittent through 2024–2025 driven by surge demand and Wegovy substitution.",
      "GI side-effect burden is the most-cited reason for discontinuation in real-world cohorts.",
    ],
    alternatives: ["wegovy", "rybelsus", "tirzepatide", "mounjaro"],
    references: [
      { label: "Marso et al. 2016, SUSTAIN-6, NEJM", url: "https://pubmed.ncbi.nlm.nih.gov/27633186/" },
      { label: "FDA Drugs@FDA, Ozempic labeling", url: "https://www.accessdata.fda.gov/scripts/cder/daf/" },
      { label: "Davies et al. 2017, SUSTAIN-2, Lancet", url: "https://pubmed.ncbi.nlm.nih.gov/29032024/" },
    ],
    lastUpdated: "2026-04-26",
    body: "Ozempic is the T2D-labelled brand of semaglutide. Pepvise reviews it as a distinct entry from Wegovy because the dose ladder tops out at 2.0 mg vs Wegovy's 2.4 mg, the FDA-approved indication is type-2 diabetes management, and the real-world appetite-suppression profile is meaningful but secondary to the glucose endpoints. The score is 9.1 — half a step below tirzepatide and tied within methodology rounding to Wegovy. The gap to tirzepatide is the head-to-head SURPASS-2 outcome where tirzepatide outperformed semaglutide on weight at 40 weeks. The gap is real and we surface it without dramatising it: both drugs work, tirzepatide works more, costs follow that ranking. For T2D where weight reduction is welcome but glycaemic control is the primary target, Ozempic remains a reasonable first-line GLP-1 RA selection.",
  },
  {
    slug: "wegovy",
    rank: 8,
    variant: "also-ran",
    name: "Wegovy",
    primaryDrug: "ozempic",
    alias: "semaglutide (chronic weight management, 2.4 mg)",
    oneLineVerdict:
      "Semaglutide brand-name for chronic weight management. Same molecule as Ozempic at higher target dose; STEP-1 is the foundational trial.",
    longVerdict:
      "Brand-specific entry for the weight-management label of semaglutide at 2.4 mg/week. STEP-1 (Wilding 2021) is the published basis for the Wegovy label and the most-cited GLP-1-for-obesity trial of the past five years.",
    score: { evidence: 9.4, mechanism: 9.0, human: 9.5, vendor: 9.3, safety: 8.6 },
    total: 9.2,
    category: "metabolic-and-glp1",
    fdaStatus: "FDA-approved for chronic weight management (2021)",
    wadaStatus: "Not currently listed",
    pros: [
      "STEP-1 is one of the highest-quality weight-management trials ever conducted, n=1961, 68 weeks.",
      "SELECT cardiovascular outcomes trial (Lincoff 2023) added cardiovascular benefit data at the 2.4 mg dose.",
      "Predictable dose ladder — 0.25 → 0.5 → 1.0 → 1.7 → 2.4 mg weekly — makes side-effect management routine.",
    ],
    cons: [
      "GI side-effect titration drives 12% trial dropout; real-world dropout is higher.",
      "Lean-mass loss observation (~25–40% of total weight loss is lean mass) is real and under-discussed in vendor-marketing materials.",
      "Cost remains the dominant access barrier outside US insurance networks; UK NICE access pathway is narrower.",
    ],
    alternatives: ["ozempic", "zepbound", "mounjaro", "saxenda"],
    references: [
      { label: "Wilding et al. 2021, STEP-1, NEJM", url: "https://pubmed.ncbi.nlm.nih.gov/33567185/" },
      { label: "Lincoff et al. 2023, SELECT, NEJM", url: "https://pubmed.ncbi.nlm.nih.gov/37952131/" },
      { label: "FDA Drugs@FDA, Wegovy labeling", url: "https://www.accessdata.fda.gov/scripts/cder/daf/" },
      { label: "UK NICE TA875, semaglutide for weight management", url: "https://www.nice.org.uk/guidance/ta875" },
    ],
    lastUpdated: "2026-04-26",
    body: "Wegovy is the weight-management brand of semaglutide. The label dose tops at 2.4 mg/week and the foundational trial is STEP-1 (Wilding 2021, NEJM) — 14.9% mean weight loss at 68 weeks vs 2.4% on placebo. SELECT (Lincoff 2023) added a cardiovascular composite-outcome benefit at the same 2.4 mg dose for adults with established cardiovascular disease. Methodology v1.2 scores Wegovy 9.2, just under tirzepatide and just above Ozempic. The gap to Ozempic is the trial-design gap: STEP-1 was 68 weeks at 2.4 mg in adults without diabetes, the cleanest weight-management trial in the GLP-1 class. The gap to tirzepatide is the SURMOUNT-5 head-to-head (2025) showing tirzepatide superiority on weight loss at the time-matched comparison. Wegovy remains the most-studied semaglutide-for-weight-loss option; tirzepatide is materially more effective.",
  },
  {
    slug: "zepbound",
    rank: 9,
    variant: "also-ran",
    name: "Zepbound",
    primaryDrug: "tirzepatide",
    alias: "tirzepatide (chronic weight management)",
    oneLineVerdict:
      "Tirzepatide brand-name for chronic weight management. Same molecule as Mounjaro; SURMOUNT-1 is the published basis.",
    longVerdict:
      "Brand-specific entry for the weight-management label of tirzepatide. The SURMOUNT trial program (Jastreboff 2022, 2024) is the published basis. Dose ladder tops at 15 mg/week.",
    score: { evidence: 9.4, mechanism: 9.2, human: 9.5, vendor: 9.4, safety: 8.7 },
    total: 9.3,
    category: "metabolic-and-glp1",
    fdaStatus: "FDA-approved for chronic weight management (2023)",
    wadaStatus: "Not currently listed",
    pros: [
      "SURMOUNT-1 reported the largest weight loss of any approved agent at the time of publication: 22.5% mean at 72 weeks.",
      "SURMOUNT-5 head-to-head (2025) demonstrated tirzepatide superiority over semaglutide for weight management.",
      "Same molecule as Mounjaro — the safety + tolerability profile is established across both T2D and chronic-weight-management cohorts.",
    ],
    cons: [
      "Cardiovascular outcomes trial (SURPASS-CVOT) does not read out until 2026.",
      "Cost is the dominant access barrier; pharmacy supply has lagged demand.",
      "GI side effects on the 10/15 mg arms are a meaningful adherence risk.",
    ],
    alternatives: ["mounjaro", "wegovy", "ozempic", "retatrutide"],
    references: [
      { label: "Jastreboff et al. 2022, SURMOUNT-1, NEJM", url: "https://pubmed.ncbi.nlm.nih.gov/35658024/" },
      { label: "Garvey et al. 2023, SURMOUNT-2 (T2D), Lancet", url: "https://pubmed.ncbi.nlm.nih.gov/37364590/" },
      { label: "FDA Drugs@FDA, Zepbound labeling", url: "https://www.accessdata.fda.gov/scripts/cder/daf/" },
    ],
    lastUpdated: "2026-04-26",
    body: "Zepbound is the weight-management brand of tirzepatide. The chemistry, dose ladder, and side-effect profile mirror Mounjaro; the FDA approval pathway and label indication differ. SURMOUNT-1 is the foundational trial: 22.5% mean weight loss at 72 weeks on the 15 mg/week arm. SURMOUNT-5 (2025) put tirzepatide ahead of semaglutide for weight management at matched titration. Methodology v1.2 scores Zepbound 9.3, the upper bound of the approved-drug shelf. We rank Zepbound and Mounjaro identically because the molecule is identical and the data we score against (mechanism, human evidence, supply integrity, regulatory posture) doesn't differ between the two indications. The clinical-context selection between them is downstream of the patient's diagnosis, not the drug.",
  },
  {
    slug: "mounjaro",
    rank: 10,
    variant: "also-ran",
    name: "Mounjaro",
    primaryDrug: "tirzepatide",
    alias: "tirzepatide (T2D 5–15 mg)",
    oneLineVerdict:
      "Tirzepatide brand-name for type-2 diabetes. Same molecule as Zepbound at the same dose ladder; SURPASS-2 is the head-to-head trial against semaglutide.",
    longVerdict:
      "Brand-specific entry for the T2D label of tirzepatide. Pepvise covers Mounjaro distinct from Zepbound because the FDA-approved indication, real-world prescribing context, and insurance-coverage pathway differ even though the molecule and dose ladder are identical.",
    score: { evidence: 9.3, mechanism: 9.2, human: 9.5, vendor: 9.4, safety: 8.7 },
    total: 9.3,
    category: "metabolic-and-glp1",
    fdaStatus: "FDA-approved for type-2 diabetes (May 2022)",
    wadaStatus: "Not currently listed",
    pros: [
      "SURPASS-2 (Frias 2021, NEJM) is the published head-to-head against semaglutide — tirzepatide showed greater HbA1c reduction and greater weight reduction at 40 weeks.",
      "SURPASS-3, SURPASS-4, and SURPASS-5 fill the comparator matrix against insulin degludec, glargine, and add-on combinations — strongest T2D evidence base of any GLP-1 class agent at Q2 2026.",
      "Same supply chain as Zepbound — Eli Lilly direct-to-pharmacy reduces grey-market exposure compared with research-peptide channels.",
    ],
    cons: [
      "Off-label prescribing for weight management at the Mounjaro label dose underdoses against the Zepbound chronic-weight-management evidence.",
      "Supply has lagged demand through 2024–2025 driven by surge prescribing and weight-management substitution.",
      "GI side-effect burden during titration is the dominant real-world adherence risk; trial-reported discontinuation around 12–14%, real-world higher.",
      "SURPASS-CVOT cardiovascular outcomes trial does not read out until 2026 — the cardiac data lags Ozempic's SUSTAIN-6.",
    ],
    alternatives: ["zepbound", "ozempic", "wegovy", "retatrutide"],
    references: [
      { label: "Frias et al. 2021, SURPASS-2 (vs semaglutide), NEJM", url: "https://pubmed.ncbi.nlm.nih.gov/34370970/" },
      { label: "Ludvik et al. 2021, SURPASS-3, Lancet", url: "https://pubmed.ncbi.nlm.nih.gov/34370970/" },
      { label: "Del Prato et al. 2021, SURPASS-4, Lancet", url: "https://pubmed.ncbi.nlm.nih.gov/34619108/" },
      { label: "FDA Drugs@FDA, Mounjaro labeling and review docs", url: "https://www.accessdata.fda.gov/scripts/cder/daf/" },
    ],
    lastUpdated: "2026-04-28",
    body: "Mounjaro is the T2D-labelled brand of tirzepatide. The molecule and dose ladder mirror Zepbound (5, 7.5, 10, 12.5, and 15 mg/week subcutaneous). The FDA indication, prescribing context, and insurance pathway are what differ. SURPASS-2 is the relevant head-to-head: at 40 weeks against semaglutide 1 mg, tirzepatide produced a greater HbA1c reduction and a larger weight reduction at every dose level studied. The SURPASS-3 and SURPASS-4 add-on and insulin-comparator trials extend the dossier across real-world prescribing scenarios. Methodology v1.2 scores Mounjaro 9.3 — identical to Zepbound and one tenth above Ozempic — because the methodology scores the molecule and the evidence base, not the indication. We rank Mounjaro and Zepbound identically; the clinical-context selection between them is downstream of the patient's primary diagnosis. The legitimate criticisms — cost, supply integrity through 2025, GI tolerability during titration, the 2026 cardiovascular outcomes readout — are real and we surface them, but they do not move the score off the top of the approved-drug shelf.",
  },
  {
    slug: "saxenda",
    rank: 11,
    variant: "also-ran",
    name: "Saxenda",
    primaryDrug: "saxenda",
    alias: "liraglutide (chronic weight management, 3.0 mg)",
    oneLineVerdict:
      "Liraglutide brand-name for chronic weight management. The first-generation GLP-1 RA — daily injection, smaller weight loss than semaglutide and tirzepatide.",
    longVerdict:
      "Daily-injection liraglutide at 3.0 mg/day. Approved for chronic weight management in adults (2014) and adolescents 12–17 (2020). Outpaced by the once-weekly semaglutide and tirzepatide labels on both adherence and weight outcomes; remains relevant where insurance coverage favours liraglutide or where titration tolerance for the weekly molecules is poor.",
    score: { evidence: 8.8, mechanism: 8.5, human: 8.6, vendor: 8.5, safety: 8.4 },
    total: 8.6,
    category: "metabolic-and-glp1",
    fdaStatus: "FDA-approved for chronic weight management (2014, adults; 2020, ages 12–17)",
    wadaStatus: "Not currently listed",
    pros: [
      "SCALE Obesity and Prediabetes (Pi-Sunyer 2015, NEJM) is a 56-week pivotal trial — n=3731, mean weight loss 8.0% vs 2.6% on placebo.",
      "Adolescent label backed by Kelly 2020 (NEJM) — one of the few weight-management drugs with paediatric Phase 3 evidence.",
      "Long post-marketing safety record across both T2D (Victoza, since 2010) and obesity (Saxenda, since 2014) labels.",
    ],
    cons: [
      "Daily subcutaneous injection — adherence ceiling lower than once-weekly semaglutide (Wegovy) or tirzepatide (Zepbound).",
      "Weight loss magnitude (~8% mean) trails Wegovy (≈14.9%) and Zepbound (≈22.5%) by a wide margin.",
      "GI side-effect titration is steep; clinical-trial discontinuation around 9–10%.",
      "Liraglutide patent expired 2024 in major markets — generic supply expanding but Saxenda brand pricing remains premium.",
    ],
    alternatives: ["wegovy", "zepbound", "victoza", "ozempic"],
    references: [
      { label: "Pi-Sunyer et al. 2015, SCALE Obesity and Prediabetes, NEJM", url: "https://pubmed.ncbi.nlm.nih.gov/26132939/" },
      { label: "Kelly et al. 2020, Liraglutide in adolescents (NN8022-4180), NEJM", url: "https://pubmed.ncbi.nlm.nih.gov/32320637/" },
      { label: "FDA Drugs@FDA, Saxenda labeling", url: "https://www.accessdata.fda.gov/scripts/cder/daf/" },
      { label: "EMA Saxenda EPAR", url: "https://www.ema.europa.eu/en/medicines/human/EPAR/saxenda" },
    ],
    lastUpdated: "2026-04-28",
    body: "Saxenda is liraglutide at the chronic-weight-management dose (3.0 mg/day subcutaneous). The pivotal SCALE Obesity and Prediabetes trial (Pi-Sunyer 2015) ran 56 weeks in 3,731 adults; mean weight loss was 8.0% on liraglutide versus 2.6% on placebo. The molecule is the same as Victoza (the T2D label at 1.2–1.8 mg/day), but the higher 3.0 mg dose is what unlocks the obesity indication. Methodology v1.2 scores Saxenda 8.6 — half a point below Wegovy and a full point below Zepbound. The gap is the magnitude gap: liraglutide's weight loss is real but materially smaller than what the once-weekly newer molecules deliver. Saxenda remains relevant in three contexts. First, paediatric prescribing — Kelly 2020 is the supporting evidence for the 12–17 indication, and there is no equivalent Phase 3 paediatric trial yet on semaglutide or tirzepatide. Second, insurance coverage — some payers still favour liraglutide on formulary. Third, titration tolerance — daily microdosing is sometimes easier than weekly steady-state for patients with severe GI sensitivity. We score the daily-injection adherence penalty into the human-evidence dimension because real-world cohort data shows lower persistence than the trial cohorts achieved.",
  },
  {
    slug: "victoza",
    rank: 12,
    variant: "also-ran",
    name: "Victoza",
    primaryDrug: "saxenda",
    alias: "liraglutide (T2D 1.2–1.8 mg)",
    oneLineVerdict:
      "Liraglutide brand-name for type-2 diabetes. First GLP-1 RA with cardiovascular outcomes evidence (LEADER 2016).",
    longVerdict:
      "Daily-injection liraglutide at 1.2–1.8 mg/day for adults with T2D. The first molecule in the class with a positive cardiovascular outcomes trial (LEADER, Marso 2016), which is why the molecule remains in NICE and ADA guidelines despite the once-weekly options eclipsing it on weight.",
    score: { evidence: 8.9, mechanism: 8.5, human: 9.0, vendor: 8.5, safety: 8.4 },
    total: 8.7,
    category: "metabolic-and-glp1",
    fdaStatus: "FDA-approved for type-2 diabetes (2010)",
    wadaStatus: "Not currently listed",
    pros: [
      "LEADER (Marso 2016, NEJM) — first GLP-1 RA cardiovascular outcomes trial to demonstrate MACE reduction (n=9340, 3.8 years median follow-up).",
      "Paediatric label for T2D ages 10+ (Tamborlane 2019) — earliest GLP-1 paediatric T2D approval.",
      "16+ years of post-marketing surveillance — the safest-characterised GLP-1 RA across long-term cohorts.",
      "Generic liraglutide entering major markets post-2024 patent expiry — long-term cost trajectory favourable.",
    ],
    cons: [
      "Daily subcutaneous injection — adherence ceiling lower than once-weekly Ozempic.",
      "HbA1c reduction is real but modestly behind once-weekly semaglutide (SUSTAIN-10 head-to-head, Capehorn 2020).",
      "Weight reduction at the 1.8 mg dose is smaller than Saxenda (3.0 mg) and far smaller than Wegovy or Zepbound.",
    ],
    alternatives: ["ozempic", "saxenda", "trulicity", "rybelsus"],
    references: [
      { label: "Marso et al. 2016, LEADER, NEJM", url: "https://pubmed.ncbi.nlm.nih.gov/27295427/" },
      { label: "Capehorn et al. 2020, SUSTAIN-10, Diabetes Metab", url: "https://pubmed.ncbi.nlm.nih.gov/31539622/" },
      { label: "Tamborlane et al. 2019, Liraglutide in pediatric T2D, NEJM", url: "https://pubmed.ncbi.nlm.nih.gov/31034184/" },
      { label: "FDA Drugs@FDA, Victoza labeling", url: "https://www.accessdata.fda.gov/scripts/cder/daf/" },
    ],
    lastUpdated: "2026-04-28",
    body: "Victoza is liraglutide at the T2D dose (1.2 or 1.8 mg/day subcutaneous). The molecule is the same as Saxenda; the indication, dose ceiling, and label history differ. LEADER (Marso 2016) is the foundational outcomes trial — a 3.8-year cardiovascular outcomes study in 9,340 high-risk T2D adults that demonstrated significant MACE reduction. LEADER is why the GLP-1 class earned its place in cardiology guidelines and why liraglutide remains relevant despite Ozempic's larger weight effects. Methodology v1.2 scores Victoza 8.7, slightly above Saxenda — the cardiovascular outcomes evidence pulls the human-evidence dimension up. The legitimate critique is that once-weekly semaglutide does most of what liraglutide does, with better adherence and somewhat better outcomes. SUSTAIN-10 (Capehorn 2020) is the relevant head-to-head against semaglutide 1.0 mg/week — semaglutide produced larger HbA1c and weight reductions at 30 weeks. Where Victoza still earns prescribing share: paediatric T2D (the Tamborlane 2019 evidence), patients with documented intolerance to weekly molecules, and post-2024 generic-pricing scenarios in markets where cost-sensitivity dominates.",
  },
  {
    slug: "trulicity",
    rank: 13,
    variant: "also-ran",
    name: "Trulicity",
    primaryDrug: "trulicity",
    alias: "dulaglutide (T2D 0.75–4.5 mg)",
    oneLineVerdict:
      "Dulaglutide once-weekly for type-2 diabetes. Cardiovascular outcomes demonstrated in REWIND (2019); trails semaglutide and tirzepatide on weight.",
    longVerdict:
      "Eli Lilly's once-weekly dulaglutide. Approved for T2D in 2014 and for cardiovascular risk reduction in T2D adults (2020) on the strength of REWIND. Outpaced by tirzepatide on weight outcomes within Lilly's own portfolio.",
    score: { evidence: 8.9, mechanism: 8.4, human: 9.0, vendor: 8.7, safety: 8.5 },
    total: 8.7,
    category: "metabolic-and-glp1",
    fdaStatus: "FDA-approved for type-2 diabetes (2014); CV risk reduction (2020)",
    wadaStatus: "Not currently listed",
    pros: [
      "REWIND (Gerstein 2019, Lancet) — 9,901 adults, 5.4-year median follow-up; first GLP-1 RA CV outcomes trial in a primary-prevention-skewed cohort.",
      "Once-weekly subcutaneous, single-use auto-injector pen format — lowest user-error rate in adherence audits.",
      "AWARD trial program (10+ Phase 3 studies) is the largest dulaglutide dossier across monotherapy, add-on, and insulin-naive scenarios.",
      "Eli Lilly direct supply — fewer counterfeit and shortage events than the semaglutide market through 2024.",
    ],
    cons: [
      "Weight reduction at the 1.5–4.5 mg doses is meaningful but materially smaller than once-weekly semaglutide or tirzepatide.",
      "AWARD-11 (Frias 2021) supports the 3.0 and 4.5 mg higher-dose escalation, but real-world prescribing has been slow to titrate above 1.5 mg.",
      "Tirzepatide is from the same manufacturer and outperforms dulaglutide on every weight-relevant endpoint — Lilly's own portfolio cannibalises the molecule.",
    ],
    alternatives: ["ozempic", "mounjaro", "victoza", "rybelsus"],
    references: [
      { label: "Gerstein et al. 2019, REWIND, Lancet", url: "https://pubmed.ncbi.nlm.nih.gov/31189511/" },
      { label: "Frias et al. 2021, AWARD-11, Lancet Diabetes Endocrinol", url: "https://pubmed.ncbi.nlm.nih.gov/33864738/" },
      { label: "FDA Drugs@FDA, Trulicity labeling", url: "https://www.accessdata.fda.gov/scripts/cder/daf/" },
      { label: "EMA Trulicity EPAR", url: "https://www.ema.europa.eu/en/medicines/human/EPAR/trulicity" },
    ],
    lastUpdated: "2026-04-28",
    body: "Trulicity is dulaglutide at 0.75–4.5 mg/week subcutaneous. The pivotal cardiovascular outcomes trial is REWIND (Gerstein 2019, Lancet) — 9,901 T2D adults, 5.4-year median follow-up, MACE reduction in a cohort that included a substantial primary-prevention slice. That distinguishes REWIND from LEADER (which was high-CV-risk weighted) and SUSTAIN-6 (also high-risk) and is why Trulicity earns a place in CV guidelines for primary-prevention T2D adults. The AWARD trial program adds the depth — 10+ Phase 3 trials across monotherapy, basal-insulin add-on, and various comparator scenarios. Methodology v1.2 scores Trulicity 8.7, identical to Victoza and below Ozempic by 0.4. The score reflects strong evidence and adherence-favourable form factor, weighed against materially smaller weight outcomes than semaglutide or tirzepatide. AWARD-11 supports the higher-dose 3.0 and 4.5 mg escalation, but real-world prescribing in 2024–2025 has shifted toward semaglutide and tirzepatide for patients where weight reduction is the priority. Trulicity holds where adherence form factor or insurance formulary tip the balance, and where the REWIND-supported cardiovascular indication is the primary driver.",
  },
  {
    slug: "rybelsus",
    rank: 14,
    variant: "also-ran",
    name: "Rybelsus",
    primaryDrug: "ozempic",
    alias: "semaglutide (oral, T2D, 3–14 mg)",
    oneLineVerdict:
      "Oral semaglutide for type-2 diabetes. Same molecule as Ozempic, daily oral tablet, lower bioavailability — meaningful for patients who refuse injections.",
    longVerdict:
      "First and only oral GLP-1 RA. Same active molecule as Ozempic, formulated with the absorption enhancer SNAC. PIONEER trial program established efficacy at 7 mg and 14 mg/day; bioavailability is approximately 1% but reliably enough to drive HbA1c and modest weight effects.",
    score: { evidence: 8.7, mechanism: 8.5, human: 8.7, vendor: 8.6, safety: 8.5 },
    total: 8.6,
    category: "metabolic-and-glp1",
    fdaStatus: "FDA-approved for type-2 diabetes (2019)",
    wadaStatus: "Not currently listed",
    pros: [
      "Only oral GLP-1 RA available — the form-factor wedge is real and durable.",
      "PIONEER 6 (Husain 2019, NEJM) — cardiovascular outcomes safety study (n=3,183) demonstrated non-inferiority to placebo for MACE.",
      "PIONEER 4 (Pratley 2019) head-to-head against subcutaneous liraglutide showed comparable HbA1c reduction at the 14 mg dose.",
      "FDA-approved 25 and 50 mg doses (PIONEER PLUS, 2024) extend the upper end of the dose ladder.",
    ],
    cons: [
      "Bioavailability is ~1% and food-state-sensitive — must be taken on empty stomach with ≤120 mL water, ≥30 min before any other oral intake. Adherence ceiling lower than weekly subcutaneous in the real world.",
      "Weight reduction trails the once-weekly subcutaneous semaglutide molecule — even at the 14 mg oral dose.",
      "Bioavailability variability between patients is wider than for the subcutaneous formulation.",
      "Oral semaglutide has not yet earned a chronic-weight-management label; that pathway is in trial (OASIS program).",
    ],
    alternatives: ["ozempic", "wegovy", "victoza", "trulicity"],
    references: [
      { label: "Husain et al. 2019, PIONEER 6, NEJM", url: "https://pubmed.ncbi.nlm.nih.gov/31185157/" },
      { label: "Pratley et al. 2019, PIONEER 4, Lancet", url: "https://pubmed.ncbi.nlm.nih.gov/31034173/" },
      { label: "Aroda et al. 2024, PIONEER PLUS (25/50 mg), Lancet", url: "https://pubmed.ncbi.nlm.nih.gov/37863077/" },
      { label: "FDA Drugs@FDA, Rybelsus labeling", url: "https://www.accessdata.fda.gov/scripts/cder/daf/" },
    ],
    lastUpdated: "2026-04-28",
    body: "Rybelsus is oral semaglutide for T2D. It is the same molecule as Ozempic, formulated as a tablet with the absorption enhancer SNAC (sodium N-(8-[2-hydroxybenzoyl]amino)caprylate) which permits gastric absorption of an otherwise enzymatically degraded peptide. Bioavailability is approximately 1% and very food-state-dependent — the prescribing information specifies the tablet must be taken on an empty stomach with ≤120 mL of water and ≥30 min before any other oral intake. The PIONEER trial program is the basis for the FDA approval. PIONEER 6 (Husain 2019) was the cardiovascular safety study; PIONEER 4 (Pratley 2019) head-to-head against subcutaneous liraglutide 1.8 mg showed comparable HbA1c reduction at oral semaglutide 14 mg. PIONEER PLUS (Aroda 2024) extended the dose ladder to 25 and 50 mg with stepwise efficacy gains. Methodology v1.2 scores Rybelsus 8.6, equivalent to Saxenda — the oral form factor is a real wedge for needle-averse patients but the bioavailability and food-state dependency narrow the practical advantage. The chronic-weight-management indication is in the OASIS Phase 3 program; the label has not been earned yet. Within the molecule's current label, Rybelsus is a credible Ozempic alternative for patients who will not inject.",
  },
  {
    slug: "mots-c",
    rank: 15,
    variant: "also-ran",
    name: "MOTS-c",
    primaryDrug: "mots-c",
    alias: "Mitochondrial Open-Reading-Frame of the 12S rRNA-c",
    oneLineVerdict:
      "Mitochondrial-derived 16-aa peptide with a coherent metabolic-signalling mechanism. Human evidence remains limited to small early-phase pilots.",
    longVerdict:
      "Discovered in 2015, MOTS-c is encoded within the mitochondrial 12S rRNA gene. Lee 2015 (Cell Metabolism) is the foundational mechanism paper; the peptide acts on AMPK and folate-cycle pathways. The human translational dossier is thin — small-cohort pilot data on glucose tolerance and insulin sensitivity. Methodology v1.2 places it firmly in the research-peptide tier.",
    score: { evidence: 6.5, mechanism: 7.8, human: 3.5, vendor: 5.5, safety: 6.0 },
    total: 5.9,
    category: "metabolic-and-mitochondrial",
    fdaStatus: "Not FDA-approved",
    wadaStatus: "Plausible S0 (non-approved substance)",
    pros: [
      "Mechanism is genetically encoded and biologically plausible — Lee 2015 (Cell Metabolism) established the AMPK-pathway link with subsequent independent replication.",
      "Preclinical metabolic-syndrome models (rodent) reproduce insulin-sensitising and exercise-mimetic effects.",
      "Single-ascending-dose human Phase 1 pilots (small-n) suggest a tolerability signal in metabolically-impaired adults.",
    ],
    cons: [
      "Human evidence base is small. No published Phase 2 or larger.",
      "Mitochondrial-derived peptides are a young research class — long-term safety data does not yet exist.",
      "Research-channel supply is highly variable in identity and purity; MOTS-c is one of the more counterfeit-prone compounds in the database.",
    ],
    alternatives: ["bpc-157", "tb-500", "tesamorelin"],
    references: [
      { label: "Lee et al. 2015, MOTS-c regulates metabolic homeostasis, Cell Metabolism", url: "https://pubmed.ncbi.nlm.nih.gov/25738459/" },
      { label: "Kim et al. 2018, MOTS-c and mitochondrial peptide signaling, Trends Endocrinol Metab", url: "https://pubmed.ncbi.nlm.nih.gov/29154174/" },
      { label: "Reynolds et al. 2021, Mitochondrial-derived peptides in human aging, Aging Cell", url: "https://pubmed.ncbi.nlm.nih.gov/34313387/" },
    ],
    lastUpdated: "2026-04-28",
    body: "MOTS-c is a 16-amino-acid peptide encoded within the mitochondrial 12S rRNA gene — the most-cited example of a mitochondrial-derived peptide with a defined cytoplasmic and systemic role. Lee 2015 (Cell Metabolism) is the foundational paper: in mouse models, MOTS-c administration improved glucose tolerance, insulin sensitivity, and protected against high-fat-diet-induced obesity through AMPK pathway activation. Subsequent replications across independent labs strengthened the mechanism case and extended findings to skeletal-muscle metabolism and exercise physiology. The human data layer remains thin. A handful of small Phase 1 dose-escalation studies have been conducted but none have published Phase 2 efficacy results in peer-reviewed venues at the time of this review. Methodology v1.2 scores MOTS-c 5.9 — mechanism strong, human evidence weak. The score reflects the gap between an interesting peptide-class story and the absence of a published trial dossier; the calibration anchor is BPC-157 (6.8) which has more preclinical depth and one published human pilot. Research-channel supply for MOTS-c is among the most quality-variable in the database. Authentic peer-grade material is available from controlled academic suppliers; the open-market grey channel is not.",
  },
  {
    slug: "aod-9604",
    rank: 16,
    variant: "also-ran",
    name: "AOD-9604",
    primaryDrug: "aod-9604",
    alias: "Anti-Obesity Drug 9604, growth hormone fragment 176-191",
    oneLineVerdict:
      "Synthetic 16-amino-acid fragment of human growth hormone. Failed Phase 2b for obesity (2007). Marketed as a research peptide despite the negative trial outcome.",
    longVerdict:
      "Originally developed by Metabolic Pharmaceuticals as a fat-mass-targeting analogue of the lipolytic C-terminal fragment of hGH. The 12-week Phase 2b trial (Heffernan 2001 mechanism, full Phase 2b reported 2007) failed the obesity primary endpoint. Subsequent positioning as a research peptide rests on the mechanism story rather than positive clinical efficacy.",
    score: { evidence: 5.0, mechanism: 6.5, human: 2.5, vendor: 5.0, safety: 6.5 },
    total: 5.1,
    category: "metabolic-and-fat-mass",
    fdaStatus: "Not FDA-approved (Phase 2b failure)",
    wadaStatus: "Not currently listed; class-related metabolites monitored",
    pros: [
      "Tolerability signal across the published Phase 1 and Phase 2 data is favourable — adverse-event profile was not the reason for development discontinuation.",
      "Mechanism is biologically defined: the C-terminal hGH fragment retains lipolytic and adipocyte-targeting activity without the IGF-1-driven anabolic signaling.",
      "Has been studied in pilots for cartilage repair (osteoarthritis adjunctive) where small effect sizes have been reported, though replication is limited.",
    ],
    cons: [
      "The pivotal Phase 2b obesity trial did not meet primary efficacy endpoints — this is the headline that the research-peptide marketing channel persistently obscures.",
      "Repositioning attempts (cartilage, tissue repair) have not produced sufficient evidence to support a regulated indication.",
      "Research-channel grade material is heterogeneous; counterfeit incidence is meaningful.",
      "The hGH-fragment branding sometimes confuses readers about whether AOD-9604 has anabolic effects (it does not at studied doses).",
    ],
    alternatives: ["tesamorelin", "cjc-1295", "ipamorelin"],
    references: [
      { label: "Heffernan et al. 2001, hGH 176-191 lipolytic activity, Endocrinology", url: "https://pubmed.ncbi.nlm.nih.gov/11606445/" },
      { label: "Ng & Bornstein 2009, Metabolic Pharmaceuticals AOD-9604 review (industry)", url: "https://www.metabolicpharmaceuticals.com/" },
      { label: "Stier et al. 2013, AOD-9604 in osteoarthritis pilot, J Orthop Translat", url: "https://pubmed.ncbi.nlm.nih.gov/30035057/" },
    ],
    lastUpdated: "2026-04-28",
    body: "AOD-9604 is a 16-amino-acid synthetic fragment of human growth hormone, encompassing the C-terminal lipolytic region (residues 176–191). It was developed by Metabolic Pharmaceuticals through the early 2000s as an oral anti-obesity agent. The hypothesis was clean: isolate the lipolytic fragment of hGH from the IGF-1-mediated anabolic effects, deliver fat-mass reduction without growth-related side-effect risk. Phase 1 tolerability and Phase 2 mechanism studies supported the concept; the 12-week pivotal Phase 2b in obese adults did not show the weight-loss effect size required to advance to Phase 3, and the development program was discontinued in 2007. Methodology v1.2 scores AOD-9604 5.1 — the mechanism case is real but the human evidence is the failed Phase 2b plus a handful of small pilots in repositioning indications (osteoarthritis, cartilage repair) where effect sizes have been small and replication limited. The peptide's continued circulation in the research-channel market rests on the mechanism narrative, not on positive trial data, and the gap between the marketing framing and the published trial outcome is one of the more actively-misleading patterns we cover in the database.",
  },
  {
    slug: "cjc-1295",
    rank: 17,
    variant: "also-ran",
    name: "CJC-1295",
    primaryDrug: "cjc-1295",
    alias: "GRF(1-29) analogue with DAC modification",
    oneLineVerdict:
      "Long-acting GHRH analogue. Strong mechanism, defined PK profile, very limited published human evidence beyond Phase 1.",
    longVerdict:
      "ConjuChem's modified GHRH analogue with a Drug Affinity Complex (DAC) tail extending the half-life from minutes to roughly 8 days. Teichman 2006 (J Clin Endocrinol Metab) is the foundational human pharmacokinetic study. Subsequent development was limited; CJC-1295 did not advance beyond Phase 1/2.",
    score: { evidence: 5.5, mechanism: 7.5, human: 3.0, vendor: 4.5, safety: 5.5 },
    total: 5.2,
    category: "growth-hormone-axis",
    fdaStatus: "Not FDA-approved",
    wadaStatus: "Prohibited (S2)",
    pros: [
      "The DAC modification is one of the more biochemically-elegant half-life extensions in the GHRH-analogue class — the published PK paper (Teichman 2006) established the once-weekly dosing rationale.",
      "Phase 1 tolerability profile across the published cohorts was clean; no major safety signals in the studied dose ranges.",
      "Mechanism is well-defined: GHRH receptor agonism at the pituitary, leading to pulsatile rather than tonic GH release.",
    ],
    cons: [
      "Human evidence is limited to Phase 1 PK and small-cohort dose-finding studies; no Phase 2 efficacy trials in any indication have published outcomes.",
      "WADA-prohibited (Class S2 peptide hormones); athletic-population use carries sanctions risk.",
      "The CJC-1295 / Ipamorelin combination popular in research-peptide protocols has no Phase 2 evidence base for the combination therapy.",
      "Counterfeit incidence in the research-channel market is high; identity verification by mass spectrometry is the only reliable method.",
    ],
    alternatives: ["ipamorelin", "tesamorelin", "sermorelin"],
    references: [
      { label: "Teichman et al. 2006, CJC-1295 long-acting GHRH analogue, J Clin Endocrinol Metab", url: "https://pubmed.ncbi.nlm.nih.gov/16352683/" },
      { label: "Ionescu & Frohman 2006, GHRH analogues review, J Clin Endocrinol Metab", url: "https://pubmed.ncbi.nlm.nih.gov/16940447/" },
      { label: "WADA Prohibited List 2026", url: "https://www.wada-ama.org/en/prohibited-list" },
    ],
    lastUpdated: "2026-04-28",
    body: "CJC-1295 is a synthetic GHRH analogue based on the GRF(1-29) sequence, modified with a Drug Affinity Complex (DAC) tail that binds reversibly to circulating albumin and extends the half-life from approximately 7 minutes (native GHRH) to roughly 8 days. Teichman 2006 (JCEM) is the foundational human PK study and the basis for the once-weekly dosing rationale that subsequent research-peptide protocols inherited. The mechanism case is strong: pulsatile GH release stimulation at the pituitary, with downstream IGF-1 elevation. The development pathway never advanced beyond Phase 1/2 — ConjuChem's clinical program shifted away from CJC-1295 in the late 2000s, and the molecule has not been picked up by another sponsor for regulated development since. Methodology v1.2 scores CJC-1295 5.2 — mechanism clean, human dossier sparse beyond the foundational PK paper. The peptide remains heavily marketed in the research channel, often paired with ipamorelin in dual-protocol marketing — that combination has no published Phase 2 efficacy data and the protocol marketing pattern is one of the more visible examples of mechanism-storytelling outpacing trial evidence. WADA prohibits CJC-1295 under Class S2; athletic populations should not use the molecule.",
  },
  {
    slug: "ipamorelin",
    rank: 18,
    variant: "also-ran",
    name: "Ipamorelin",
    primaryDrug: "ipamorelin",
    alias: "GHRP-class growth-hormone secretagogue",
    oneLineVerdict:
      "Selective ghrelin receptor agonist with cleaner GH-release profile than older GHRPs. Phase 2 in postoperative ileus failed; remains a research-channel-only peptide.",
    longVerdict:
      "Helsinn-developed selective growth-hormone secretagogue (GHRP-class) without the cortisol or prolactin elevation seen in GHRP-2 and GHRP-6. Phase 2 trial for postoperative ileus did not meet primary endpoints. The molecule is heavily marketed in research-channel protocols, often paired with CJC-1295.",
    score: { evidence: 5.5, mechanism: 7.0, human: 3.0, vendor: 4.5, safety: 6.0 },
    total: 5.2,
    category: "growth-hormone-axis",
    fdaStatus: "Not FDA-approved (Phase 2 ileus trial failure, 2014)",
    wadaStatus: "Prohibited (S2)",
    pros: [
      "Selectivity profile is genuinely cleaner than GHRP-2 and GHRP-6 — selective ghrelin receptor agonism without the cortisol or prolactin spike.",
      "Phase 1 and early-Phase 2 tolerability data is favourable across the published cohorts.",
      "Mechanism is well-characterised at the receptor level (GHSR-1a agonism).",
    ],
    cons: [
      "The Helsinn Phase 2 program in postoperative ileus failed primary endpoints (2014); no advanced clinical development has followed.",
      "WADA-prohibited (S2); athletic-population sanctions risk.",
      "Research-channel CJC-1295 / Ipamorelin pairing protocols have no Phase 2 efficacy evidence in any indication.",
      "Counterfeit incidence is high; mass-spectrometry identity verification is the only reliable test.",
    ],
    alternatives: ["cjc-1295", "tesamorelin", "sermorelin"],
    references: [
      { label: "Raun et al. 1998, Ipamorelin selective GH secretagogue, Eur J Endocrinol", url: "https://pubmed.ncbi.nlm.nih.gov/9849832/" },
      { label: "Beck et al. 2014, Ipamorelin postoperative ileus Phase 2, Ann Surg", url: "https://pubmed.ncbi.nlm.nih.gov/24368639/" },
      { label: "WADA Prohibited List 2026", url: "https://www.wada-ama.org/en/prohibited-list" },
    ],
    lastUpdated: "2026-04-28",
    body: "Ipamorelin is a synthetic GHRP-class growth-hormone secretagogue developed by Helsinn (originally Novo Nordisk discovery). Raun 1998 (Eur J Endocrinol) is the original characterisation paper, establishing the selective ghrelin-receptor agonism profile. The selectivity story is real and is what differentiates ipamorelin from the older GHRP-2 and GHRP-6 — those earlier secretagogues drove cortisol and prolactin elevations that limited clinical utility. Helsinn pursued ipamorelin for postoperative ileus through Phase 2; the pivotal trial (Beck 2014) failed primary endpoints and the program was discontinued. Methodology v1.2 scores Ipamorelin 5.2, identical to CJC-1295. The molecule appears widely in research-channel protocols, typically paired with CJC-1295 to combine selective GH secretion (ipamorelin) with extended-half-life GHRH stimulation (CJC-1295). That dual-protocol pattern is mechanism-coherent on paper but has zero published Phase 2 efficacy data — and the research-channel material itself is among the most counterfeited compounds in the database. WADA prohibits ipamorelin under Class S2.",
  },
  {
    slug: "tesamorelin",
    rank: 19,
    variant: "runner-up",
    name: "Tesamorelin",
    primaryDrug: "tesamorelin",
    alias: "synthetic GHRH analogue (Egrifta)",
    oneLineVerdict:
      "FDA-approved GHRH analogue for HIV-associated lipodystrophy. The most-developed peptide in the GHRH/GHRP class with a regulated indication.",
    longVerdict:
      "Theratechnologies-developed synthetic analogue of human GHRH. FDA-approved 2010 (as Egrifta) for the treatment of excess abdominal fat in HIV-infected adults with lipodystrophy. Subsequent investigation in NAFLD/NASH and metabolic indications.",
    score: { evidence: 8.0, mechanism: 8.0, human: 7.5, vendor: 7.5, safety: 7.5 },
    total: 7.7,
    category: "growth-hormone-axis",
    fdaStatus: "FDA-approved for HIV-associated lipodystrophy (2010)",
    wadaStatus: "Prohibited (S2)",
    pros: [
      "Falagas et al. 2010 and Stanley et al. 2014 are the pivotal Phase 3 trials; the regulated indication is real and the Phase 4 surveillance dossier is meaningful.",
      "NAFLD/NASH Phase 2/3 trials (Stanley 2019, Lancet HIV) extend the dossier into liver-fat reduction in the HIV population.",
      "Established supply chain through regulated specialty pharmacies — the only GHRH-class peptide with a quality-controlled commercial route.",
      "Long-term safety record across HIV-lipodystrophy cohorts since 2010.",
    ],
    cons: [
      "WADA-prohibited (S2) — athletic-population sanctions risk.",
      "Off-label prescribing for general anti-aging or fat-loss indications outside the approved HIV-lipodystrophy population is not supported by published trial evidence.",
      "Daily subcutaneous injection; adherence ceiling lower than weekly molecules.",
      "Cost remains a meaningful barrier in non-insured contexts.",
    ],
    alternatives: ["cjc-1295", "sermorelin", "ipamorelin"],
    references: [
      { label: "Falagas et al. 2010, Tesamorelin HIV-lipodystrophy Phase 3, Clin Infect Dis", url: "https://pubmed.ncbi.nlm.nih.gov/20158396/" },
      { label: "Stanley et al. 2014, Tesamorelin and visceral fat in HIV, JAMA", url: "https://pubmed.ncbi.nlm.nih.gov/25247519/" },
      { label: "Stanley et al. 2019, Tesamorelin for NAFLD in HIV, Lancet HIV", url: "https://pubmed.ncbi.nlm.nih.gov/31303547/" },
      { label: "FDA Drugs@FDA, Egrifta (tesamorelin) labeling", url: "https://www.accessdata.fda.gov/scripts/cder/daf/" },
    ],
    lastUpdated: "2026-04-28",
    body: "Tesamorelin is a synthetic stabilised analogue of human GHRH(1-44) developed by Theratechnologies and approved by FDA in 2010 (brand: Egrifta) for the reduction of excess abdominal fat in HIV-infected adults with lipodystrophy. Falagas 2010 (Clin Infect Dis) and the subsequent Stanley 2014 (JAMA) trial are the pivotal evidence base. The Phase 2/3 work in HIV-associated NAFLD/NASH (Stanley 2019, Lancet HIV) extends the dossier into liver-fat-reduction outcomes within the HIV cohort. Methodology v1.2 scores Tesamorelin 7.7 — the highest score among the GHRH/GHRP class because it is the only molecule in the class with a regulated indication, an established supply chain through specialty pharmacies, and a full Phase 3 dossier. The score remains below the GLP-1 RAs because the trial population is narrow (HIV-associated lipodystrophy, not general weight management) and the off-label use the research-channel market promotes — anti-aging, general body-composition, athletic performance — has no supportive trial evidence. WADA prohibits tesamorelin under Class S2. Within its approved indication and supervised under specialist HIV care, tesamorelin is the most-validated peptide in the GHRH class. Outside that indication, the evidence base is thin.",
  },
  {
    slug: "sermorelin",
    rank: 20,
    variant: "also-ran",
    name: "Sermorelin",
    primaryDrug: "sermorelin",
    alias: "GHRH(1-29), formerly Geref",
    oneLineVerdict:
      "29-amino-acid GHRH fragment; previously FDA-approved for paediatric GH deficiency (Geref, withdrawn 2008). Now a compounding-pharmacy product without a current FDA-approved label.",
    longVerdict:
      "The shortest biologically-active fragment of GHRH. Originally developed as Geref (Serono) for paediatric GH deficiency; FDA approval withdrawn 2008 for commercial reasons rather than safety. Currently dispensed via 503A compounding pharmacies for off-label adult anti-aging and metabolic indications without supportive Phase 3 trial evidence.",
    score: { evidence: 5.5, mechanism: 7.0, human: 5.0, vendor: 6.0, safety: 6.5 },
    total: 6.0,
    category: "growth-hormone-axis",
    fdaStatus: "Previously approved (Geref, paediatric GHD); marketing withdrawn 2008",
    wadaStatus: "Prohibited (S2)",
    pros: [
      "Long historical safety record — over two decades of paediatric GHD use under the Geref label.",
      "Shorter half-life (approximately 10–20 minutes) and dose-titration flexibility relative to longer-acting GHRH analogues.",
      "Available through US 503A compounding pharmacies under quality-controlled compounding standards (when sourced from a USP-797-compliant facility).",
    ],
    cons: [
      "FDA approval withdrawn 2008; no current regulated indication.",
      "Published Phase 3 evidence is limited to the paediatric GHD indication; adult anti-aging and metabolic uses lack supportive trial data.",
      "WADA-prohibited (S2).",
      "Compounding-pharmacy supply quality varies; not all facilities are USP-797-compliant.",
      "Marketing in adult anti-aging clinics frequently overstates the evidence base.",
    ],
    alternatives: ["tesamorelin", "cjc-1295", "ipamorelin"],
    references: [
      { label: "Thorner et al. 1996, Sermorelin in paediatric GHD, J Clin Endocrinol Metab", url: "https://pubmed.ncbi.nlm.nih.gov/8636289/" },
      { label: "FDA Orange Book — Geref withdrawal record (2008)", url: "https://www.accessdata.fda.gov/scripts/cder/ob/" },
      { label: "USP General Chapter <797> Pharmaceutical Compounding", url: "https://www.usp.org/compounding/general-chapter-797" },
      { label: "WADA Prohibited List 2026", url: "https://www.wada-ama.org/en/prohibited-list" },
    ],
    lastUpdated: "2026-04-28",
    body: "Sermorelin is the shortest biologically-active fragment of human GHRH — a 29-amino-acid peptide retaining full pituitary GH-stimulatory activity. It was originally marketed as Geref by Serono for paediatric growth hormone deficiency, on the strength of pivotal trials including Thorner 1996 (JCEM). The Geref marketing approval was withdrawn in 2008 for commercial rather than safety reasons; the molecule itself remains pharmacologically defined and is now compounded by 503A pharmacies for off-label adult use, primarily in anti-aging clinics. Methodology v1.2 scores Sermorelin 6.0 — slightly above CJC-1295 and Ipamorelin because the published paediatric Phase 3 dossier is real, even though it does not extend to the adult anti-aging context where the molecule is now marketed. The score is held below tesamorelin because tesamorelin retains a current FDA-approved indication and a controlled commercial supply chain. The legitimate concern with sermorelin is the compounding-pharmacy supply variability — USP-797-compliant facilities produce reliable material; less-controlled compounders do not, and the research-channel grey market for sermorelin is among the more counterfeit-prone categories. WADA prohibits sermorelin under Class S2.",
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
