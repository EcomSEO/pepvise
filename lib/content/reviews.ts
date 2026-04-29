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
      { label: "Sosne et al. 2010, thymosin beta-4 corneal wound healing Phase 2, Br J Ophthalmol", url: "https://pubmed.ncbi.nlm.nih.gov/20656998/" },
      { label: "Crockford et al. 2010, thymosin beta-4 dermal wound trial, Ann N Y Acad Sci", url: "https://pubmed.ncbi.nlm.nih.gov/20955316/" },
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
      { label: "Pickart et al. 2012, GHK-Cu wound and dermal review, Biomed Res Int", url: "https://pubmed.ncbi.nlm.nih.gov/22762268/" },
      { label: "Pickart & Margolina 2018, GHK-Cu in skin remodelling, Cosmetics", url: "https://www.mdpi.com/2079-9284/5/4/65" },
      { label: "Trumbore et al. 2018, GHK-Cu hair regrowth, J Cosmet Dermatol", url: "https://pubmed.ncbi.nlm.nih.gov/29377432/" },
      { label: "Park et al. 2016, GHK-Cu mechanism in collagen synthesis, Int J Mol Sci", url: "https://pubmed.ncbi.nlm.nih.gov/27089334/" },
    ],
    lastUpdated: "2026-04-23",
    body: "GHK-Cu is the highest-scoring entry in the database and the upgrade pick when budget is not the constraint and the use case is dermal. Forty-plus human studies (cosmetic short-trial work, topical wound healing, hair density) sit behind a mechanism that is properly published, copper transport into the cell with downstream collagen and elastin upregulation. Crucially, GHK-Cu can be sourced as a topical cosmetic formulation through ordinary retail channels, which collapses the vendor-trust risk that pulls BPC-157 and TB-500 down by a full point each. The score gap between #1 and #3 is real, and we want readers to see it: GHK-Cu earns 8.1 because it has both the evidence and the legal supply chain. BPC-157 leads the category by name recognition, not by score.",
  },
  // GLP-1 / incretin entries (retatrutide, semaglutide, tirzepatide, ozempic,
  // wegovy, zepbound, mounjaro, saxenda, victoza, trulicity, rybelsus)
  // moved to peptips per 2026-04-29 topic-boundary lock — pepvise covers
  // research peptides only. 301 redirects in next.config.mjs.
  {
    slug: "mots-c",
    rank: 4,
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
    body: "MOTS-c is a 16-amino-acid peptide encoded within the mitochondrial 12S rRNA gene. It is the most-cited example of a mitochondrial-derived peptide with a defined cytoplasmic and systemic role. Lee 2015 (Cell Metabolism) is the foundational paper: in mouse models, MOTS-c administration improved glucose tolerance, insulin sensitivity, and protected against high-fat-diet-induced obesity through AMPK pathway activation. Subsequent replications across independent labs strengthened the mechanism case and extended findings to skeletal-muscle metabolism and exercise physiology. The human data layer remains thin. A handful of small Phase 1 dose-escalation studies have been conducted but none have published Phase 2 efficacy results in peer-reviewed venues at the time of this review. Methodology v1.2 scores MOTS-c 5.9. The mechanism is strong, the human evidence is weak. The score is the gap between an interesting peptide-class story and the absence of a published trial dossier; the calibration anchor is BPC-157 (6.8) which has more preclinical depth and one published human pilot. Research-channel supply for MOTS-c is among the most quality-variable in the database. Authentic peer-grade material is available from controlled academic suppliers; the open-market grey channel is not.",
  },
  {
    slug: "aod-9604",
    rank: 5,
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
    body: "AOD-9604 is a 16-amino-acid synthetic fragment of human growth hormone, taken from the C-terminal lipolytic region (residues 176–191). Metabolic Pharmaceuticals developed it through the early 2000s as an oral anti-obesity agent. The hypothesis was clean: isolate the lipolytic fragment of hGH from the IGF-1-mediated anabolic effects, deliver fat-mass reduction without growth-related side-effect risk. Phase 1 tolerability and Phase 2 mechanism studies supported the concept. The 12-week Phase 2b in obese adults then did not show the weight-loss effect size required to advance to Phase 3, and the development program was discontinued in 2007. Methodology v1.2 scores AOD-9604 5.1. The mechanism case is real, but the human evidence is the failed Phase 2b plus a handful of small pilots in repositioning indications (osteoarthritis, cartilage repair) where effect sizes have been small and replication limited. The peptide's continued circulation in the research-channel market rests on the mechanism narrative, not on positive trial data. The gap between the marketing framing and the published trial outcome is one of the more actively-misleading patterns we cover in the database.",
  },
  {
    slug: "cjc-1295",
    rank: 6,
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
    rank: 7,
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
    body: "Ipamorelin is a synthetic GHRP-class growth-hormone secretagogue developed by Helsinn (originally a Novo Nordisk discovery). Raun 1998 (Eur J Endocrinol) is the original characterisation paper. It defined the selective ghrelin-receptor agonism profile that differentiates ipamorelin from the older GHRP-2 and GHRP-6, both of which drove cortisol and prolactin elevations that limited clinical utility. Helsinn pursued ipamorelin for postoperative ileus through Phase 2. The pivotal trial (Beck 2014) failed primary endpoints and the program was discontinued. Methodology v1.2 scores Ipamorelin 5.2, identical to CJC-1295. The molecule appears widely in research-channel protocols, typically paired with CJC-1295 to combine selective GH secretion (ipamorelin) with extended-half-life GHRH stimulation (CJC-1295). That dual-protocol pattern is mechanism-coherent on paper but has zero published Phase 2 efficacy data, and the research-channel material itself is among the most counterfeited compounds in the database. WADA prohibits ipamorelin under Class S2.",
  },
  {
    slug: "tesamorelin",
    rank: 8,
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
    rank: 9,
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
  { slug: "tendon-and-tissue-repair", name: "Tendon & tissue repair", count: 2 },
  { slug: "skin-hair-and-derm", name: "Skin, hair & derm", count: 1 },
  { slug: "metabolic-and-mitochondrial", name: "Metabolic & mitochondrial", count: 2 },
  { slug: "growth-hormone-axis", name: "Growth-hormone axis", count: 4 },
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
  { slug: "epithalon", name: "Epithalon", alias: "Epitalon", stage: "Drafting", editor: "M. Otieno", targetPub: "2026-06-12" },
  { slug: "thymosin-alpha-1", name: "Thymosin α1", stage: "Editor review", editor: "S. Han", targetPub: "2026-06-19" },
  { slug: "selank", name: "Selank", stage: "Pre-publication hold", editor: "M. Otieno", targetPub: "2026-07-03" },
  { slug: "semax", name: "Semax", stage: "Pre-publication hold", editor: "M. Otieno", targetPub: "2026-07-10" },
];
