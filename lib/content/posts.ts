export type PostType = "pillar" | "comparison" | "cluster" | "listicle";

export type Post = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  hub: string;
  postType: PostType;
  publishedAt: string;
  updatedAt: string;
  readingTime: number;
  status: "draft" | "stub" | "published";
  ourPick?: { name: string; tier: string; reason: string };
  products?: Array<{ rank: number; name: string; tier: string; summary: string }>;
  items?: Array<{ rank: number; name: string; summary: string }>;
  faq?: Array<{ q: string; a: string }>;
  sources?: Array<{ label: string; url: string }>;
  featured?: boolean;
  medicalDisclaimer?: "required" | "light";
  evidenceLedger?: {
    preclinical: "strong" | "moderate" | "weak" | "absent";
    humanPilot: "strong" | "moderate" | "weak" | "absent";
    phaseTrial: "strong" | "moderate" | "weak" | "absent";
    fdaApproved: "approved" | "not-approved";
    notes?: string;
  };
};

export const posts: Post[] = [
  {
    slug: "bpc-157",
    title: "BPC-157, What the Evidence Shows",
    h1: "BPC-157, what the evidence shows",
    description:
      "Evidence Ledger for BPC-157: 50+ preclinical studies, 1 human pilot (Chang 2014, n=12), 1 active Phase trial, FDA removed from 503A list in 2023.",
    hub: "compound-profiles",
    postType: "pillar",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 16,
    status: "published",
    featured: true,
    medicalDisclaimer: "required",
    evidenceLedger: {
      preclinical: "strong",
      humanPilot: "weak",
      phaseTrial: "weak",
      fdaApproved: "not-approved",
      notes: "Removed from FDA 503A compoundable list in 2023",
    },
    ourPick: {
      name: "Peptide Protocols: Volume One (William A. Seeds, MD)",
      tier: "Reference text",
      reason:
        "The closest thing to a practitioner reference that actually catalogs the published BPC-157 preclinical literature with author citations, rather than restating Reddit dosing folklore. We cite Seeds the way we cite any secondary reference, useful for discourse mapping, not for protocol. Read it alongside the primary papers it points to, not instead of them.",
    },
    products: [
      {
        rank: 1,
        name: "Peptide Protocols: Volume One, William A. Seeds, MD",
        tier: "Reference text",
        summary:
          "A practitioner-oriented compendium that gathers BPC-157, TB-500, and related compounds with citations to the underlying Croatian and Korean literature. Useful for understanding how clinicians in the compounded-peptide space talk about BPC-157, with the caveat that Seeds writes for a prescriber audience and the book is not a substitute for the primary papers.",
      },
      {
        rank: 2,
        name: "Outlive, Peter Attia, MD (with Bill Gifford)",
        tier: "Popular-science background",
        summary:
          "Attia is one of the most-cited voices the Alex-persona reader already trusts, and Outlive sets the standard for how to reason about preclinical data, effect sizes, and the gap between mouse models and human endpoints. It does not cover BPC-157 directly, but the reasoning framework is the point.",
      },
      {
        rank: 3,
        name: "Pharmacokinetics and Pharmacodynamics of Peptide Therapeutics (open-access reviews via PubMed)",
        tier: "Primary literature",
        summary:
          "For readers who want the PK layer under the claims: Seiwerth et al. 2014 in Current Medicinal Chemistry is the most-cited single pharmacokinetic review of BPC-157. Free to read via most institutional and public PubMed Central access points.",
      },
      {
        rank: 4,
        name: "Clinicaltrials.gov, 'BPC-157' search",
        tier: "Primary registry",
        summary:
          "The honest place to check what Phase trials exist on any given date. As of April 2026, a small number of US-based Phase 1 listings appear; most are not yet reporting. A saved search is a better source than any blog summary, including ours. [VERIFY current count on access date]",
      },
    ],
    faq: [
      {
        q: "Is BPC-157 FDA-approved for any indication?",
        a: "No. BPC-157 has no FDA-approved indication in humans. In 2023, FDA removed BPC-157 from the category of bulk drug substances eligible for use in 503A pharmacy compounding, a category change that effectively narrowed the legal pathway for US compounding pharmacies to dispense it. It remains available as a research chemical labeled for non-human use, which is the regulatory posture most published studies have operated under.",
      },
      {
        q: "How strong is the human evidence for BPC-157?",
        a: "Thin. The most-cited human report, Chang et al. 2014 in Vojnosanitski Pregled, was a small single-arm open-label study (n=12) of an oral formulation in ulcerative colitis, not an injection study, not placebo-controlled, not powered for the injury-healing claims the compound is best known for online. Clinicaltrials.gov shows a handful of Phase 1 listings active or recently initiated. Treat claims about 'proven' human efficacy as preclinical extrapolation.",
      },
      {
        q: "Why are almost all the BPC-157 studies from Croatia?",
        a: "Because a single Zagreb-based research program, led by Predrag Sikiric and colleagues at the University of Zagreb School of Medicine, has authored the majority of the preclinical literature since the mid-1990s. That is a geographic and investigator concentration, which matters for external validity. Independent replication from unrelated labs is one of the open questions the field is still working through.",
      },
      {
        q: "What does the preclinical evidence actually cover?",
        a: "Rat and mouse models of tendon injury (Staresinic et al. 2003; Krivic et al. 2006), gut ulceration, muscle crush injury, and assorted vascular and inflammatory endpoints. The preclinical volume is genuinely substantial, more than 50 published papers, and mechanistically coherent around angiogenesis, growth-factor modulation, and nitric-oxide system interactions. 'Coherent in rodents' is not the same claim as 'efficacious in humans'.",
      },
      {
        q: "Is BPC-157 on the WADA prohibited list?",
        a: "BPC-157 is not listed by name in the current World Anti-Doping Agency Prohibited List, but WADA's S0 category covers substances not approved by any regulatory authority for human therapeutic use, and BPC-157 plausibly falls under S0 interpretation. Competitive athletes have tested positive for BPC-157 and faced sanctions. Anyone in a WADA-tested sport should assume it is prohibited and confirm with their federation before anything else.",
      },
      {
        q: "Why is PepVise not giving a dose?",
        a: "Because a dose recommendation from a website is not a substitute for a prescription from a licensed physician working within FDA-compliant pathways, and because the dose most online sources repeat, 250 to 500 micrograms daily, is extrapolated from rat milligram-per-kilogram work, not from a human dose-finding trial. We describe what has been published. We do not tell readers what to administer. That is the line we hold.",
      },
    ],
    sources: [
      {
        label: "Staresinic et al. 2003, J Orthop Res, tendon-to-bone healing in rats",
        url: "https://pubmed.ncbi.nlm.nih.gov/12919876/",
      },
      {
        label: "Krivic et al. 2006, J Orthop Res, Achilles tendon in rats",
        url: "https://pubmed.ncbi.nlm.nih.gov/16514664/",
      },
      {
        label: "Seiwerth et al. 2014, Current Medicinal Chemistry, BPC-157 pharmacology review",
        url: "https://pubmed.ncbi.nlm.nih.gov/24164197/",
      },
      {
        label: "Chang et al. 2014, Vojnosanitski Pregled, human pilot, oral BPC-157",
        url: "https://pubmed.ncbi.nlm.nih.gov/25518352/",
      },
      {
        label: "FDA, Bulk Drug Substances Nominated for 503A Compounding (Category 2 listings, 2023) [VERIFY direct URL at review]",
        url: "https://www.fda.gov/drugs/human-drug-compounding/bulk-drug-substances-nominations-received-use-compounding-under-section-503a-fdc-act",
      },
      {
        label: "ClinicalTrials.gov, BPC-157 active listings",
        url: "https://clinicaltrials.gov/search?term=BPC-157",
      },
    ],
  },
  {
    slug: "tb-500",
    title: "TB-500, The Field Guide",
    h1: "TB-500, the field guide",
    description:
      "TB-500 vs Thymosin Beta-4 (same compound), mechanism, the preclinical tendon and recovery literature, and where the human data is thin.",
    hub: "compound-profiles",
    postType: "pillar",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 14,
    status: "published",
    medicalDisclaimer: "required",
    evidenceLedger: {
      preclinical: "moderate",
      humanPilot: "absent",
      phaseTrial: "absent",
      fdaApproved: "not-approved",
      notes: "Thymosin Beta-4 (the parent molecule) has completed small clinical trials in wound and ocular indications; TB-500 as marketed in research channels is a synthetic fragment and has not.",
    },
    ourPick: {
      name: "Lehninger Principles of Biochemistry (8th ed.)",
      tier: "Textbook",
      reason:
        "TB-500 conversations go sideways fast because few online sources distinguish the full thymosin beta-4 protein from the synthetic fragment sold as 'TB-500'. Lehninger is the plain-language reference for actin, G-actin sequestration, and the cytoskeletal biology that TB-500 discussions hinge on. We cite it the way we cite any reference textbook, not as a claim about the compound, but as a baseline for talking about it correctly.",
    },
    products: [
      {
        rank: 1,
        name: "Lehninger Principles of Biochemistry (Nelson & Cox)",
        tier: "Textbook",
        summary:
          "The actin-binding mechanism that the thymosin beta-4 literature rests on is textbook cell biology. Any post or forum thread that treats TB-500 as 'anabolic' is skipping this layer. Lehninger is the default reference for undergraduate and graduate pharmacology courses for a reason.",
      },
      {
        rank: 2,
        name: "Outlive, Peter Attia, MD",
        tier: "Popular-science background",
        summary:
          "Attia's framework for distinguishing preclinical promise from human-validated efficacy is directly applicable to the TB-500 literature, which is heavy on preclinical wound-healing models and light on randomized human endpoints. Read it for the reasoning, not for TB-500 specifics.",
      },
      {
        rank: 3,
        name: "PubMed saved search, 'thymosin beta 4' filter: Clinical Trial",
        tier: "Primary literature",
        summary:
          "Filtering PubMed by publication type to 'Clinical Trial' collapses a noisy literature into the small subset of published human studies on thymosin beta-4 (primarily in wound healing, pressure ulcers, and ocular surface indications). It is the fastest way to see how little of the TB-500 discourse is grounded in human trial data.",
      },
    ],
    faq: [
      {
        q: "Is TB-500 the same thing as thymosin beta-4?",
        a: "Not quite, and the distinction matters. Thymosin beta-4 is a 43-amino-acid naturally occurring peptide. TB-500, as marketed in the research-chemical channel, is typically a synthetic fragment representing the actin-binding region of thymosin beta-4. Some papers and vendors use the names interchangeably, which causes a lot of downstream confusion. When reading a study, check the molecular description in methods before assuming it is the same molecule being sold online.",
      },
      {
        q: "What does the preclinical literature actually show?",
        a: "Animal models of cardiac ischemia (Bock-Marquette et al. 2004 in Nature), corneal injury, dermal wound healing, and peripheral nerve injury show thymosin beta-4 accelerating repair-associated endpoints. The mechanism narrative centers on G-actin sequestration, cell migration, and angiogenesis. 'Preclinical' is doing a lot of work in that sentence: effect sizes in mouse wound models do not translate one-to-one to human tendon or ligament outcomes.",
      },
      {
        q: "Has thymosin beta-4 ever been in human trials?",
        a: "Yes, the parent protein has. Small Phase 1 and Phase 2 trials have been published in pressure-ulcer and ocular-surface indications, largely sponsored by RegeneRx Biopharmaceuticals. None have produced a single Phase 3 registrational outcome that would support an FDA approval, and none used the fragment sold as 'TB-500' in research channels. The human data exists, but it is small, old, and in different indications than the online discourse emphasizes.",
      },
      {
        q: "Is it true that racehorses get TB-500?",
        a: "Historically, yes. TB-500 has a documented veterinary use pattern in racehorses, which is one reason the compound entered the human biohacking conversation. Most racing jurisdictions prohibit it in competition and routinely test for it. The veterinary pharmacology is relevant context for the discourse but is not evidence of human safety or efficacy.",
      },
      {
        q: "What does PepVise think of the 'BPC-157 plus TB-500 stack' claim?",
        a: "There is essentially no peer-reviewed human data on combining BPC-157 and TB-500, and almost none on either compound individually at Phase 3 scale. The 'stack' framing is a bodybuilding-forum convention, not a published protocol. We cover what is in the literature. What two underdeveloped compounds do in combination in an uncontrolled self-experiment is outside the scope of anything we would treat as evidence.",
      },
    ],
    sources: [
      {
        label: "Bock-Marquette et al. 2004, Nature, thymosin beta-4 and cardiac repair",
        url: "https://pubmed.ncbi.nlm.nih.gov/15525992/",
      },
      {
        label: "Goldstein et al. 2012, Expert Opinion on Biological Therapy, thymosin beta-4 review",
        url: "https://pubmed.ncbi.nlm.nih.gov/22804680/",
      },
      {
        label: "Philp & Kleinman 2010, Expert Opinion on Biological Therapy, animal wound-healing review",
        url: "https://pubmed.ncbi.nlm.nih.gov/20055691/",
      },
      {
        label: "ClinicalTrials.gov, thymosin beta-4 listings",
        url: "https://clinicaltrials.gov/search?term=thymosin+beta+4",
      },
      {
        label: "WADA Prohibited List, current year [VERIFY edition on access]",
        url: "https://www.wada-ama.org/en/prohibited-list",
      },
    ],
  },
  {
    slug: "ghk-cu-peptide",
    title: "GHK-Cu, Evidence and Hype",
    h1: "GHK-Cu, evidence and hype",
    description:
      "Copper peptide signaling, the topical RCT evidence for hair and skin, and the gap between topical and injectable claims.",
    hub: "compound-profiles",
    postType: "pillar",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 13,
    status: "published",
    medicalDisclaimer: "required",
    evidenceLedger: {
      preclinical: "moderate",
      humanPilot: "moderate",
      phaseTrial: "weak",
      fdaApproved: "not-approved",
      notes: "Topical cosmetic formulations have randomized human data; injectable preparations do not.",
    },
    ourPick: {
      name: "Pickart & Margolina review (Int J Mol Sci 2018)",
      tier: "Open-access review",
      reason:
        "The most citation-dense single review of the GHK-Cu literature, authored by the tripeptide's original describer (Loren Pickart). Read critically, Pickart is not an external evaluator of the molecule he discovered, but it is the starting index to the preclinical and clinical papers every GHK-Cu conversation eventually cites. Open-access, free.",
    },
    products: [
      {
        rank: 1,
        name: "Pickart & Margolina 2018, International Journal of Molecular Sciences",
        tier: "Primary review",
        summary:
          "Open-access review covering GHK-Cu's skin, hair, and cellular-aging literature. Author is the 1970s-era original describer of the tripeptide. Useful as a literature index, with the caveat that advocacy and description are hard to separate when the reviewer is also the discoverer.",
      },
      {
        rank: 2,
        name: "The Beauty of Dirty Skin, Whitney Bowe, MD",
        tier: "Popular dermatology",
        summary:
          "A dermatologist-written popular book that covers peptide cosmetics in the broader context of evidence-based skincare. Not a GHK-Cu monograph, but it is the register in which Sarah-persona readers get introduced to copper peptide claims without the bodybuilding-forum framing.",
      },
      {
        rank: 3,
        name: "ConsumerLab, Topical Skincare Ingredient Reports",
        tier: "Independent testing",
        summary:
          "For readers who want to know whether a given topical product actually contains meaningful GHK-Cu versus trace amounts, ConsumerLab's ingredient-verification reports are the independent source. Subscription-based, no affiliate.",
      },
      {
        rank: 4,
        name: "FDA, Cosmetic Ingredient Review database",
        tier: "Regulatory reference",
        summary:
          "The CIR panel has reviewed copper peptides as cosmetic ingredients. Their monographs are the authoritative source on topical-use safety assessments, distinct from drug-approval review.",
      },
    ],
    faq: [
      {
        q: "What is GHK-Cu actually?",
        a: "GHK is a tripeptide (glycyl-L-histidyl-L-lysine) originally isolated from human plasma in the 1970s by Loren Pickart. GHK-Cu is the copper-bound complex, which is the form most of the skin and hair literature studies. The molecule binds copper with high affinity and is thought to act as a copper shuttle into cells, which is the mechanistic frame almost every downstream claim depends on.",
      },
      {
        q: "Is there real randomized evidence for GHK-Cu on skin?",
        a: "For topical cosmetic formulations, yes, small randomized studies of copper-peptide creams have reported improvements in fine lines, skin thickness, and photodamage endpoints (for example, Leyden et al. 2002 and later work reviewed by Pickart & Margolina 2018). The studies are small, industry-linked, and use proprietary formulations, so effect-size pooling is limited. 'Some randomized human evidence on topical, under-powered and industry-influenced' is the honest summary.",
      },
      {
        q: "Is there evidence that GHK-Cu regrows hair?",
        a: "Topical GHK-Cu formulations have appeared in small hair-regrowth studies, often in combination with other ingredients, with modest effect sizes. None of this evidence approaches the quality of the finasteride or minoxidil RCT literature, and most of the comparative framing online overstates what was measured. As of April 2026 there is no FDA-approved GHK-Cu product for androgenetic alopecia.",
      },
      {
        q: "What about injected GHK-Cu?",
        a: "This is where the claim-to-evidence gap is largest. The randomized human data is for topical formulations. Injected GHK-Cu in the research-chemical channel has essentially no published randomized human trials, the injection-route claims rest on preclinical rodent work and user-reported anecdote. Treating injected GHK-Cu as if it inherits the topical evidence base is a category error.",
      },
      {
        q: "Why has the keyword volume for 'GHK-Cu peptide' spiked so much recently?",
        a: "DataForSEO flagged roughly a 1,000% year-over-year jump in search volume for 'ghk cu peptide' in the April 2026 snapshot. The spike tracks with a broader wellness-community discovery cycle (podcasts, Substacks, TikTok dermatology) rather than any new clinical data. When search volume runs ahead of the evidence base, the discourse usually outpaces the literature, which is why PepVise exists.",
      },
      {
        q: "Is GHK-Cu safe topically?",
        a: "The Cosmetic Ingredient Review panel has assessed copper peptides as topical cosmetic ingredients. Adverse events in the topical literature are typically mild and local (irritation, contact dermatitis in sensitized individuals). Systemic safety of injected preparations is a separate question that the topical safety data does not answer, and the research-chemical supply chain adds purity and labeling uncertainty on top of that.",
      },
    ],
    sources: [
      {
        label: "Pickart & Margolina 2018, Int J Mol Sci, GHK-Cu review (open access)",
        url: "https://pubmed.ncbi.nlm.nih.gov/29986520/",
      },
      {
        label: "Leyden et al. 2002, J Cosmet Dermatol, copper peptide facial cream RCT",
        url: "https://pubmed.ncbi.nlm.nih.gov/17147561/",
      },
      {
        label: "Badenhorst et al. 2016, Int J Cosmet Sci, peptide cosmetic review",
        url: "https://pubmed.ncbi.nlm.nih.gov/26663064/",
      },
      {
        label: "Cosmetic Ingredient Review, Copper Peptides Safety Assessment [VERIFY current edition]",
        url: "https://www.cir-safety.org/ingredients",
      },
      {
        label: "ClinicalTrials.gov, GHK-Cu listings",
        url: "https://clinicaltrials.gov/search?term=GHK-Cu",
      },
    ],
  },
  {
    slug: "retatrutide",
    title: "Retatrutide, What the Early Trials Say",
    h1: "Retatrutide, what the early trials say",
    description:
      "Triple GLP-1/GIP/glucagon agonism, the Phase 2 weight-loss data, comparison to tirzepatide, and the Phase 3 outlook.",
    hub: "compound-profiles",
    postType: "pillar",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 15,
    status: "published",
    medicalDisclaimer: "required",
    evidenceLedger: {
      preclinical: "strong",
      humanPilot: "strong",
      phaseTrial: "moderate",
      fdaApproved: "not-approved",
      notes: "Phase 2 data published 2023 (Jastreboff et al., NEJM) showed ~24% weight loss at 48 weeks at the highest dose; Phase 3 TRIUMPH program ongoing. [VERIFY Phase 3 readout dates]",
    },
    ourPick: {
      name: "Jastreboff et al. 2023, New England Journal of Medicine",
      tier: "Primary trial publication",
      reason:
        "Retatrutide is the rare research peptide where the best source is the published Phase 2 paper itself. Jastreboff et al. 2023 in NEJM is the triple-agonist obesity trial (n=338) that produced the ~24% weight-loss numbers everyone is citing. Read the actual paper, the CONSORT tables, and the safety section before forming a view.",
    },
    products: [
      {
        rank: 1,
        name: "Jastreboff et al. 2023, NEJM Phase 2 retatrutide paper",
        tier: "Primary trial",
        summary:
          "The 48-week randomized, double-blind, placebo-controlled Phase 2 trial in adults with obesity without diabetes, funded by Eli Lilly. Roughly 24% body-weight reduction at the highest dose. Secondary endpoints and adverse-event profile are in the supplement. This is the paper everything else cites.",
      },
      {
        rank: 2,
        name: "Rubino et al. 2024, Lancet Diabetes & Endocrinology, retatrutide in type 2 diabetes [VERIFY citation on access]",
        tier: "Primary trial",
        summary:
          "The companion Phase 2 trial in adults with type 2 diabetes. HbA1c and weight outcomes, different dosing arms. Useful for readers comparing retatrutide head-to-head against tirzepatide in diabetes rather than obesity.",
      },
      {
        rank: 3,
        name: "Good Energy, Casey Means, MD",
        tier: "Popular-science context",
        summary:
          "Not a retatrutide book, but a readable frame for the metabolic-health reasoning that GLP-1-class drugs operate on. Useful orientation for readers new to GIP, glucagon, and the incretin system before reading the primary papers.",
      },
      {
        rank: 4,
        name: "FDA Drugs@FDA, Mounjaro (tirzepatide) labeling and review docs",
        tier: "Regulatory reference",
        summary:
          "Retatrutide's approvable pathway is being evaluated against tirzepatide's, and the Mounjaro approval package is the closest regulatory analogue. Reading the labeling plus the medical review gives a realistic picture of what a retatrutide approval package will need to look like.",
      },
    ],
    faq: [
      {
        q: "What is retatrutide?",
        a: "Retatrutide (LY3437943) is an investigational once-weekly injectable developed by Eli Lilly that is a triple agonist of the GLP-1, GIP, and glucagon receptors. GLP-1 and GIP are the two incretin hormones targeted by semaglutide and tirzepatide respectively; glucagon receptor agonism is the newer piece and is thought to contribute additional weight-loss and lipid-lowering effects. As of April 2026, retatrutide is not FDA-approved and is only available inside the Phase 3 trial program.",
      },
      {
        q: "How much weight loss did the Phase 2 trial actually show?",
        a: "In Jastreboff et al. 2023 (NEJM), adults with obesity on the highest retatrutide dose (12 mg weekly) saw mean body-weight reduction of roughly 24.2% at 48 weeks, versus 2.1% on placebo. That is numerically larger than the Phase 3 tirzepatide obesity results at the same time horizon, but Phase 2 effect sizes frequently shrink in Phase 3, cross-trial comparisons are hazardous, and 'retatrutide beats tirzepatide' is a premature framing until TRIUMPH reports.",
      },
      {
        q: "How is retatrutide different from semaglutide and tirzepatide?",
        a: "Semaglutide (Ozempic, Wegovy) is a single GLP-1 agonist. Tirzepatide (Mounjaro, Zepbound) is a dual GLP-1/GIP agonist. Retatrutide adds glucagon receptor agonism, which paradoxically contributes to weight loss via increased energy expenditure and hepatic effects rather than lower glucose. The triple-agonist mechanism is what the field is watching, both for efficacy and for whether the glucagon component carries new adverse-event signals at scale.",
      },
      {
        q: "What are the safety signals so far?",
        a: "In Phase 2, the adverse-event profile was dominated by gastrointestinal effects, nausea, diarrhea, vomiting, constipation, at the pattern and rates broadly consistent with the incretin class. The glucagon-related questions the field is watching include effects on heart rate, liver enzymes, and lipids, all of which the Phase 2 paper addresses briefly in the supplement. Longer-term and larger-scale signals will come out of the Phase 3 TRIUMPH program.",
      },
      {
        q: "Can I get retatrutide outside the trials?",
        a: "Not through FDA-compliant channels. Retatrutide is an investigational compound, enrollment-only. Research-chemical vendors selling material labeled 'retatrutide' are not supplying trial-grade drug, and the purity, identity, and sterility of research-channel preparations are not audited to regulatory standards. This is the clearest example in our current coverage of why the 'research use only' label is doing real work.",
      },
      {
        q: "When will retatrutide be approved?",
        a: "Eli Lilly's Phase 3 TRIUMPH program is the pathway. Based on publicly announced trial timelines (ClinicalTrials.gov filings and company guidance), first Phase 3 readouts are anticipated through 2026 and into 2027, with an FDA submission likely following the primary-endpoint reporting. [VERIFY current TRIUMPH milestones against ClinicalTrials.gov and company earnings disclosures at review.]",
      },
    ],
    sources: [
      {
        label: "Jastreboff et al. 2023, NEJM, retatrutide Phase 2 in obesity",
        url: "https://pubmed.ncbi.nlm.nih.gov/37366315/",
      },
      {
        label: "Rosenstock et al. 2023, Lancet, retatrutide Phase 2 in type 2 diabetes",
        url: "https://pubmed.ncbi.nlm.nih.gov/37356447/",
      },
      {
        label: "Coskun et al. 2022, Cell Metabolism, retatrutide preclinical pharmacology",
        url: "https://pubmed.ncbi.nlm.nih.gov/35908562/",
      },
      {
        label: "ClinicalTrials.gov, TRIUMPH program (retatrutide Phase 3)",
        url: "https://clinicaltrials.gov/search?term=retatrutide",
      },
      {
        label: "FDA Drugs@FDA, Mounjaro (tirzepatide) approval package for regulatory analogue context",
        url: "https://www.accessdata.fda.gov/scripts/cder/daf/",
      },
    ],
  },
  {
    slug: "how-peptides-signal",
    title: "How Peptides Signal, A Primer for Informed Readers",
    h1: "How peptides signal",
    description:
      "Amino acid chains, receptor binding, signaling cascades, a rigorous but accessible explainer of peptide pharmacology.",
    hub: "mechanism-and-science",
    postType: "pillar",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 14,
    status: "published",
    medicalDisclaimer: "light",
    ourPick: {
      name: "Lehninger Principles of Biochemistry (8th ed., Nelson & Cox)",
      tier: "Textbook",
      reason:
        "The default undergraduate and graduate reference for the biochemistry our posts keep leaning on, peptide structure, receptor binding, signaling cascades. When we reference GPCRs or tyrosine kinase receptors in a compound profile, Lehninger is the layer underneath. We recommend it the way any pharmacology course recommends it: as the baseline vocabulary.",
    },
    products: [
      {
        rank: 1,
        name: "Lehninger Principles of Biochemistry (Nelson & Cox)",
        tier: "Textbook",
        summary:
          "The standard reference for chapters on amino acids, peptide bonds, receptor signaling, and enzyme kinetics. Approximately one semester of reading, and the investment pays off across every peptide profile on the site.",
      },
      {
        rank: 2,
        name: "Molecular Biology of the Cell (Alberts et al., 7th ed.)",
        tier: "Textbook",
        summary:
          "Deeper coverage of signal transduction, GPCR cycling, and receptor internalization. Overlaps with Lehninger but sits closer to the cell-biology side of peptide pharmacology. Alberts is readable enough for motivated non-specialists.",
      },
      {
        rank: 3,
        name: "Goodman & Gilman's Pharmacological Basis of Therapeutics",
        tier: "Reference text",
        summary:
          "The drug-mechanism reference. Not a light read, but the chapter on peptide and protein therapeutics is the closest equivalent to a canonical source for how peptides are developed into drugs versus how they act at the molecular level.",
      },
      {
        rank: 4,
        name: "Khan Academy, Receptor and Signaling modules (free)",
        tier: "Free primer",
        summary:
          "For readers who want the GPCR cascade and second-messenger system explained in ten-minute video chunks before opening Lehninger, Khan's MCAT-level biology and biochemistry modules are accurate and free.",
      },
    ],
    items: [
      {
        rank: 1,
        name: "Peptides are short amino-acid chains, usually under 50 residues",
        summary:
          "By convention, 'peptide' describes chains up to roughly 50 amino acids; longer chains get called proteins. The distinction is not mechanistic but size-related, and it matters because peptides are small enough to be synthesized chemically but large enough to fold, bind receptors, and carry real pharmacology.",
      },
      {
        rank: 2,
        name: "Most therapeutic peptides bind G-protein-coupled receptors (GPCRs)",
        summary:
          "GLP-1, GIP, glucagon, somatostatin, growth-hormone-releasing hormone, the big drug-development wins in peptides are mostly GPCR agonists or antagonists. Rockman & Koch 2002 in Nature is the classical review on GPCR signaling as a therapeutic target.",
      },
      {
        rank: 3,
        name: "Receptor binding is a shape-fit problem, not a strength problem",
        summary:
          "A peptide's affinity for its receptor is about three-dimensional fit and charge complementarity, not size or dose. This is why small structural tweaks (one amino acid swap, one fatty-acid tail) can turn a native peptide into a drug, semaglutide is essentially GLP-1 with stability modifications.",
      },
      {
        rank: 4,
        name: "Native peptides are degraded fast, that is why half-life engineering matters",
        summary:
          "Endogenous GLP-1 has a half-life of about two minutes. Semaglutide has a half-life of about a week. The difference is almost entirely about protecting the molecule from dipeptidyl peptidase-4 and albumin-binding to slow renal clearance. Peptide drug development is largely half-life engineering.",
      },
      {
        rank: 5,
        name: "Oral bioavailability is the single hardest problem in peptide drug design",
        summary:
          "Peptides are chewed up by stomach acid, pancreatic enzymes, and intestinal peptidases before they reach circulation. Oral semaglutide (Rybelsus) gets about 1% bioavailability and requires a permeation enhancer. Most peptides remain injectable for this reason, not because injection is preferred.",
      },
      {
        rank: 6,
        name: "Receptor downregulation is a real pharmacological constraint",
        summary:
          "Chronic agonism frequently triggers receptor internalization and desensitization, which is why pulse-dosing strategies exist for some growth-hormone secretagogues and why GLP-1 agonists don't lose efficacy as readily (different receptor-cycling kinetics). The downregulation question is one the thoughtful practitioner literature takes seriously.",
      },
      {
        rank: 7,
        name: "'Signaling peptides' versus 'therapeutic peptides' is a useful distinction",
        summary:
          "Signaling peptides (GHK, BPC-157, thymosin beta-4) are framed by their preclinical mechanism literature as modulating local repair processes. Therapeutic peptides (GLP-1 agonists, PTH analogues, calcitonin) are developed with specific pharmacodynamic endpoints and regulatory approval. The discourse frequently blurs the two.",
      },
      {
        rank: 8,
        name: "Subcutaneous injection is the default route for a reason",
        summary:
          "SubQ avoids first-pass hepatic metabolism, provides a slow absorption depot, and is compatible with patient self-administration. Intramuscular and intravenous routes exist for specific use cases but are not the default. This is covered in any pharmacokinetics textbook and is the basis for most published peptide protocols.",
      },
      {
        rank: 9,
        name: "Peptide immunogenicity is a design constraint and a clinical problem",
        summary:
          "Because peptides can be recognized as foreign, antibody formation over time is a known class issue, especially for non-native sequences. This shows up in long-term trials as gradual efficacy loss and occasionally as hypersensitivity. It is one of the open questions for any peptide entering a long-duration indication.",
      },
      {
        rank: 10,
        name: "Route matters: topical versus injected is not a minor variant",
        summary:
          "GHK-Cu is the cleanest example, topical formulations have small randomized trials, injected preparations do not. Applying topical evidence to injected use (or vice versa) is a category error. Always check the route in the methods section of any paper before extrapolating.",
      },
      {
        rank: 11,
        name: "Receptor selectivity drives both efficacy and side effects",
        summary:
          "Retatrutide's triple-agonism at GLP-1, GIP, and glucagon receptors illustrates the tradeoff: broader receptor coverage recruits more metabolic pathways, but also more class-wide side effects. Selectivity is a dial, not a binary.",
      },
      {
        rank: 12,
        name: "Pharmacokinetics and pharmacodynamics are different questions",
        summary:
          "PK is what the body does to the drug (absorption, distribution, metabolism, excretion). PD is what the drug does to the body (receptor occupancy, downstream effect, duration of effect). Every peptide discussion benefits from separating the two, the BPC-157 preclinical literature, for example, has more PD work than mature PK work, which is one reason dose extrapolation to humans is contested.",
      },
    ],
    faq: [
      {
        q: "What is the actual difference between a peptide and a protein?",
        a: "Size, by convention. Peptides are typically under 50 amino acids; proteins are longer and fold into more elaborate tertiary structures. The biochemistry textbooks (Lehninger, Alberts) draw the line around 50 residues, though the cutoff is fuzzy. Mechanistically, peptides bind receptors the same way proteins do, via shape and charge complementarity, but their shorter length makes them easier to synthesize and modify for drug development.",
      },
      {
        q: "Why do most peptides need to be injected?",
        a: "Because the gastrointestinal tract is evolutionarily designed to digest peptides. Stomach acid denatures them, pancreatic enzymes cleave them, and the remaining fragments rarely cross the intestinal epithelium intact. Injectable routes (most often subcutaneous) bypass the gut entirely. Oral peptide formulations exist, Rybelsus is the production example, but they require substantial formulation engineering and still hit only low single-digit bioavailability.",
      },
      {
        q: "What is a GPCR and why does it keep coming up?",
        a: "G-protein-coupled receptors are a large family of cell-surface receptors that pass signals to intracellular G proteins, which in turn trigger second-messenger cascades (cAMP, inositol trisphosphate, others). A large fraction of therapeutic peptides, GLP-1 agonists, somatostatin analogues, oxytocin, vasopressin, act through GPCRs. 'GPCR cascade' is biochemistry's most productive drug-discovery target class.",
      },
      {
        q: "Why does half-life matter so much?",
        a: "Because a drug that is cleared in minutes cannot be dosed on a convenient schedule, and because the relationship between receptor occupancy and therapeutic effect depends on how long circulating concentrations stay above threshold. Native peptides are usually cleared fast; therapeutic peptide drug design is largely about extending half-life (via fatty-acid tails, PEGylation, Fc-fusion, or albumin binding) to reach weekly or longer dosing intervals.",
      },
      {
        q: "How should I read a peptide paper as a non-specialist?",
        a: "Start with the methods section, route of administration, species, dose, duration, outcome measure. Then the primary endpoint. Then the figures. The discussion section is where investigators editorialize; read it last, skeptically. This is the Cochrane reading order and it works for anyone evaluating a new compound. Claims in the abstract or headline that are not supported by the methods and results are the most common failure mode in the peptide discourse.",
      },
    ],
    sources: [
      {
        label: "Lehninger Principles of Biochemistry, Nelson & Cox (8th ed.)",
        url: "https://www.macmillanlearning.com/college/us/product/Lehninger-Principles-of-Biochemistry/p/1319228003",
      },
      {
        label: "Rockman & Koch 2002, Nature, GPCR signaling review",
        url: "https://pubmed.ncbi.nlm.nih.gov/11805846/",
      },
      {
        label: "Lau et al. 2015, J Med Chem, semaglutide half-life engineering",
        url: "https://pubmed.ncbi.nlm.nih.gov/26308095/",
      },
      {
        label: "Buckley et al. 2018, Sci Transl Med, oral semaglutide bioavailability",
        url: "https://pubmed.ncbi.nlm.nih.gov/30429357/",
      },
      {
        label: "Molecular Biology of the Cell, Alberts et al. (7th ed.)",
        url: "https://wwnorton.com/books/9780393884821",
      },
    ],
  },
  {
    slug: "bpc-157-for-tendon",
    title: "BPC-157 for Tendon Repair, Literature Review",
    h1: "BPC-157 for tendon repair",
    description:
      "Inclusion criteria, 8-10 preclinical studies tabulated, the human evidence gap, and an honest assessment of the tendon claims.",
    hub: "evidence-reviews",
    postType: "cluster",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 12,
    status: "published",
    medicalDisclaimer: "required",
    evidenceLedger: {
      preclinical: "strong",
      humanPilot: "absent",
      phaseTrial: "absent",
      fdaApproved: "not-approved",
      notes: "No human tendon trials published or registered as of April 2026. The entire tendon evidence base is rat and mouse.",
    },
    ourPick: {
      name: "ClinicalTrials.gov, 'BPC-157 AND tendon' saved search",
      tier: "Primary registry",
      reason:
        "The single most useful thing any reader can do before accepting a tendon-repair claim is to check the registry themselves. As of April 2026, the 'BPC-157 AND tendon' search returns zero completed human trials. That null result is more informative than any secondary summary, including ours. [VERIFY count on access date]",
    },
    products: [
      {
        rank: 1,
        name: "ClinicalTrials.gov, BPC-157 AND tendon saved search",
        tier: "Primary registry",
        summary:
          "The honest starting point for anyone assessing BPC-157's tendon evidence. Free, indexed by the NIH, and updated continuously. We link to it because the null result is the point.",
      },
      {
        rank: 2,
        name: "Peptide Protocols: Volume One, William A. Seeds, MD",
        tier: "Reference text",
        summary:
          "Seeds' book is the clearest articulation of how the compounded-peptide clinical community talks about BPC-157 for injury. Read critically, it is a practitioner book, not an evidence review, but it is the mental model that patients hear from their physicians, and it cites the Croatian preclinical work.",
      },
      {
        rank: 3,
        name: "The Sports Gene, David Epstein",
        tier: "Popular-science background",
        summary:
          "Not a BPC-157 book, but the best readable frame for why effect sizes in sports-medicine interventions are so hard to measure and why small-N case-series claims almost never replicate in large randomized trials. Useful context for reading the tendon preclinical literature without overclaiming.",
      },
    ],
    items: [
      {
        rank: 1,
        name: "Staresinic et al. 2003, tendon-to-bone junction (rat, J Orthop Res)",
        summary:
          "Rat model of quadriceps tendon-to-bone detachment. BPC-157-treated animals showed faster tendon reattachment and greater tensile strength versus controls at two-week follow-up. Single institution, small N, no placebo-control mechanism beyond vehicle.",
      },
      {
        rank: 2,
        name: "Krivic et al. 2006, Achilles tendon transection (rat, J Orthop Res)",
        summary:
          "Rat Achilles transection model. BPC-157 treatment accelerated macroscopic and histologic healing. One of the most-cited studies in the tendon-specific literature. Same Zagreb institutional group.",
      },
      {
        rank: 3,
        name: "Staresinic et al. 2006, quadriceps tendon (rat, J Pharmacol Sci) [VERIFY journal]",
        summary:
          "Follow-up from the 2003 group examining quadriceps tendon healing under multiple dosing regimens. Finding: accelerated healing in BPC-157 groups. Methodologically consistent with the 2003 study; independent replication from non-Zagreb groups is the field's open question.",
      },
      {
        rank: 4,
        name: "Chang et al. 2011, tendon fibroblast migration (in vitro, J Appl Physiol)",
        summary:
          "In-vitro cell-culture work showing BPC-157 promoting tendon fibroblast outgrowth and migration. Mechanistically consistent with the in-vivo tendon results, though in-vitro effects at supraphysiological concentrations do not reliably predict in-vivo outcomes.",
      },
      {
        rank: 5,
        name: "Cerovecki et al. 2010, medial collateral ligament (rat)",
        summary:
          "Expansion of the tendon-adjacent soft-tissue literature into ligament. Same pattern: accelerated healing in BPC-157 arms, single-institution.",
      },
      {
        rank: 6,
        name: "Sikiric et al. 2018, comprehensive mechanism review",
        summary:
          "Summary review by the original investigator group covering tendon, gut, and vascular mechanisms. Useful as a literature index; not an independent evaluation. Read as primary-source advocacy, not as meta-analysis.",
      },
      {
        rank: 7,
        name: "Gwyer et al. 2019, Cell Tissue Res, narrative review of BPC-157 in musculoskeletal repair",
        summary:
          "Independent narrative review from a non-Zagreb group synthesizing the musculoskeletal literature. Concludes the preclinical evidence is 'promising' but explicitly flags the absence of human data as a ranging limitation. Useful outside-in assessment.",
      },
      {
        rank: 8,
        name: "Pevec et al. 2010, peripheral nerve (rat, adjacent indication)",
        summary:
          "Not tendon-specific but methodologically informative: same research program applying BPC-157 to nerve crush injury with similar positive findings. Establishes the breadth of the preclinical claim space.",
      },
      {
        rank: 9,
        name: "Chang et al. 2014, the single human pilot (Vojnosanitski Pregled)",
        summary:
          "The only published human study of BPC-157. n=12, oral administration, ulcerative colitis endpoint, not tendon. We include it here to mark the boundary: the tendon-specific human evidence base is empty, and applying the Chang 2014 design to tendon endpoints would be extrapolation.",
      },
      {
        rank: 10,
        name: "ClinicalTrials.gov, BPC-157 registry check, April 2026",
        summary:
          "No completed human trials for BPC-157 in tendon indications. A small number of early-phase listings exist for other indications. [VERIFY current counts on access date]. The registry null result is the most important data point in this table.",
      },
    ],
    faq: [
      {
        q: "Does BPC-157 heal torn tendons in humans?",
        a: "There is no published human trial of BPC-157 for tendon repair. Every specific 'BPC-157 heals tendons' claim online is extrapolation from rat Achilles and quadriceps tendon models. The rat literature is substantial and mechanistically coherent; the human evidence base for tendon specifically is empty. Treat 'BPC-157 healed my rotator cuff' anecdotes as anecdote, not as evidence that generalizes.",
      },
      {
        q: "Why is the preclinical evidence so heavily concentrated in one research program?",
        a: "Because a single research program at the University of Zagreb, led since the mid-1990s by Predrag Sikiric, has authored the majority of BPC-157 papers, including most of the tendon work. This is both a strength (deep methodological consistency) and a weakness (limited independent replication from unrelated labs). Gwyer et al. 2019 is one of the few reviews from outside the Zagreb group and is worth reading specifically for that reason.",
      },
      {
        q: "What outcome measures do the rat tendon studies use?",
        a: "A mix of macroscopic healing grades, histologic scoring of collagen organization, and biomechanical tensile-strength testing. The biomechanical endpoints are the most interpretable, 'force to failure' is a clean number. What these endpoints do not measure is the thing patients care about: return to sport, persistent function, re-rupture rate. Rat endpoints and patient endpoints are different questions.",
      },
      {
        q: "Is there any route-of-administration data that matters?",
        a: "Most rat studies used intraperitoneal or intragastric administration. The oral dose used in Chang et al. 2014 (the non-tendon human pilot) was 50 mcg/kg. Injectable subcutaneous administration, the most common route in the research-chemical channel, has not been directly compared head-to-head with oral or intraperitoneal at human scale in a tendon endpoint. The route assumption in online discussion frequently outruns the route evidence.",
      },
      {
        q: "What would actually change PepVise's assessment?",
        a: "A published, adequately-powered, placebo-controlled randomized trial of BPC-157 in a defined tendon indication (Achilles, rotator cuff, patellar) with clinically meaningful outcomes (return to activity, re-rupture, patient-reported function) at 6-12 months. That trial does not exist. When it does, we will update. Until then, the tendon-repair claim sits at 'strong preclinical signal, no human validation', the evidence ledger has not moved in five years.",
      },
    ],
    sources: [
      {
        label: "Staresinic et al. 2003, J Orthop Res, rat tendon-to-bone",
        url: "https://pubmed.ncbi.nlm.nih.gov/12919876/",
      },
      {
        label: "Krivic et al. 2006, J Orthop Res, rat Achilles",
        url: "https://pubmed.ncbi.nlm.nih.gov/16514664/",
      },
      {
        label: "Gwyer et al. 2019, Cell and Tissue Research, BPC-157 musculoskeletal review",
        url: "https://pubmed.ncbi.nlm.nih.gov/31236620/",
      },
      {
        label: "Sikiric et al. 2018, Journal of Physiology and Pharmacology, BPC-157 mechanism review",
        url: "https://pubmed.ncbi.nlm.nih.gov/30821260/",
      },
      {
        label: "Chang et al. 2014, Vojnosanitski Pregled, human pilot (gut, not tendon)",
        url: "https://pubmed.ncbi.nlm.nih.gov/25518352/",
      },
      {
        label: "ClinicalTrials.gov, 'BPC-157 tendon' saved search",
        url: "https://clinicaltrials.gov/search?term=BPC-157+tendon",
      },
    ],
  },
  {
    slug: "how-to-reconstitute-peptides",
    title: "How to Reconstitute Peptides, the Literature-Based Guide",
    h1: "How to reconstitute peptides",
    description:
      "Step-numbered reconstitution procedure with research-context framing. Pairs with InjectCompass's patient-education version.",
    hub: "reconstitution-and-practical",
    postType: "pillar",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 10,
    status: "published",
    medicalDisclaimer: "required",
    ourPick: {
      name: "USP General Chapter <797> on Pharmaceutical Compounding, Sterile Preparations",
      tier: "Standards reference",
      reason:
        "The USP <797> framework is the standards document that licensed pharmacies follow for sterile reconstitution. It is not a home-use guide, and we are not recommending home reconstitution as a practice. We cite USP <797> because it defines what 'correct' looks like, and any actual peptide administration should be happening under a workflow at least inspired by those standards, which is almost always a licensed pharmacy's workflow, not a kitchen counter.",
    },
    products: [
      {
        rank: 1,
        name: "USP General Chapter <797>, Sterile Compounding Standards",
        tier: "Standards reference",
        summary:
          "The authoritative US standard for sterile preparation. Published by the United States Pharmacopeia. Behind a paywall for the full text, but publicly summarized in multiple FDA and board-of-pharmacy guidance documents. The background we reference when we talk about what 'properly reconstituted' means.",
      },
      {
        rank: 2,
        name: "PepVise Peptide Reconstitution Calculator (internal)",
        tier: "Digital tool",
        summary:
          "Our research-context calculator, takes peptide mass and bacteriostatic-water volume, returns concentration and volume-per-unit-dose from a published protocol. Client-side, unit-tested math, no data retention. The companion to this guide.",
      },
      {
        rank: 3,
        name: "Consumer-grade microgram scales (for research context only)",
        tier: "Lab equipment",
        summary:
          "Readers researching the reconstitution literature frequently ask about mass verification. Laboratory-grade microgram balances exist for research workflows; no consumer kitchen scale is suitable for sub-milligram precision. This is a capability question, not a product endorsement, and nothing in this section implies research-chemical reconstitution is appropriate outside a licensed setting.",
      },
      {
        rank: 4,
        name: "USP-grade bacteriostatic water (licensed pharmacy source)",
        tier: "Pharmaceutical reference",
        summary:
          "Bacteriostatic water for injection is a USP-monographed product: sterile water with 0.9% benzyl alcohol as a preservative. It is a prescription product in the US, sourced through licensed pharmacies. Research-chemical channel 'bac water' of uncertain provenance is a recurring purity concern flagged in the literature on counterfeit injectables.",
      },
    ],
    items: [
      {
        rank: 1,
        name: "Step 1: Verify the starting material",
        summary:
          "A reconstitution procedure is only as good as the input material. Published research protocols operate on drug-substance with a known identity, potency, and purity established by Certificate of Analysis. Research-chemical material often carries a vendor COA of variable rigor. The first step is not pipetting, it is deciding whether the material you have is material the published protocol actually describes.",
      },
      {
        rank: 2,
        name: "Step 2: Confirm the target concentration from a published protocol",
        summary:
          "The reconstitution math is unambiguous: peptide mass in milligrams divided by diluent volume in milliliters equals concentration in mg/mL. The question is which concentration the underlying published protocol actually used. The Chang 2014 BPC-157 pilot used oral 50 mcg/kg; most Zagreb preclinical work is reported in mg/kg in rats. Translating those to a human reconstitution target is where published protocols and online discourse diverge.",
      },
      {
        rank: 3,
        name: "Step 3: Use USP-grade bacteriostatic water, not sterile water",
        summary:
          "Bacteriostatic water (0.9% benzyl alcohol) suppresses microbial growth during multi-day vial use; plain sterile water does not. USP-grade BAC water is a licensed-pharmacy product. Research protocols frequently specify BAC water explicitly because the experiment relies on consistent vial integrity over days.",
      },
      {
        rank: 4,
        name: "Step 4: Introduce diluent along the vial wall, slowly",
        summary:
          "Lyophilized peptide is a delicate, often static-clumped powder. Dropping diluent directly onto the pellet can foam the preparation, damage fragile peptide chains, and introduce air bubbles that alter measured volume. Standard pharmacy practice is slow addition against the vial wall, followed by a brief rest period, not shaking.",
      },
      {
        rank: 5,
        name: "Step 5: Swirl gently, do not shake",
        summary:
          "Vigorous shaking denatures peptides by unfolding secondary structure at the air-water interface. A gentle swirl dissolves the pellet without mechanical damage. This is textbook lab technique and consistent across every published peptide reconstitution protocol.",
      },
      {
        rank: 6,
        name: "Step 6: Inspect for clarity and particulates",
        summary:
          "Correctly reconstituted peptide solutions are typically clear and particulate-free. Visible cloudiness or undissolved material is a disqualifying finding, either the material is off-spec, the diluent is wrong, or the reconstitution technique damaged the peptide. The USP <790> visible particulates framework is the relevant standard.",
      },
      {
        rank: 7,
        name: "Step 7: Refrigerate between 2 and 8 degrees Celsius",
        summary:
          "Most reconstituted peptides are stable for days to weeks in refrigeration and hours at room temperature. Freezing reconstituted solution is frequently contraindicated because freeze-thaw cycles degrade peptide chains. Specifics vary by peptide; published stability data for the exact compound is the reliable source, not vendor marketing.",
      },
      {
        rank: 8,
        name: "Step 8: Date and label the vial",
        summary:
          "Every reconstituted vial in a published protocol is labeled with the compound, concentration, reconstitution date, and beyond-use date. This is not bureaucracy, it is what prevents dose errors in a workflow that will run for weeks. USP <797> codifies the labeling requirements for licensed compounding.",
      },
      {
        rank: 9,
        name: "Step 9: Calculate volume per dose from the published protocol, not from a forum",
        summary:
          "The calculator under the Peptide Reconstitution Calculator URL does the math: once you know the concentration and the published-protocol target dose, volume per administration is a one-line calculation. Online forum 'dose' numbers are frequently extrapolations from rat studies converted to human mg/kg without the translational pharmacokinetic work, and they should not be treated as equivalent to published protocol dosing.",
      },
      {
        rank: 10,
        name: "Step 10: Discard at the beyond-use date",
        summary:
          "Even under refrigeration, BAC-water-reconstituted peptides have a finite usable period, typically 14 to 28 days depending on the molecule and the preservation system. Published protocols specify beyond-use dates explicitly. Beyond that window, microbial, oxidative, and hydrolytic degradation compound, and continuing to administer is outside the protocol envelope.",
      },
    ],
    faq: [
      {
        q: "Is PepVise telling me to reconstitute peptides at home?",
        a: "No. This guide describes the reconstitution procedure as it appears in published research protocols and as it is performed in licensed compounding pharmacies. It is an educational reference, not an instruction to replicate it outside a licensed setting. Any actual peptide administration should be through a licensed physician operating within FDA-compliant pathways, which typically means a 503A compounding pharmacy dispensing a properly reconstituted preparation. The procedure is described here because understanding it is part of being a calibrated reader of the literature.",
      },
      {
        q: "What is the difference between bacteriostatic water and sterile water?",
        a: "Bacteriostatic water contains 0.9% benzyl alcohol, which inhibits microbial growth and allows a reconstituted vial to be used over multiple days. Sterile water for injection has no preservative and is intended for single-use. Published peptide protocols that use a multi-day reconstituted vial almost always specify bacteriostatic water. Both are USP-monographed prescription products in the US, sourced through licensed pharmacies, not through research-chemical suppliers.",
      },
      {
        q: "Why does shaking a peptide vial matter?",
        a: "Peptides are held in their active conformation by relatively weak hydrogen bonds and hydrophobic interactions. Vigorous shaking introduces air-water interfaces that preferentially denature the peptide at the foam surface, reducing the concentration of correctly folded material. Gentle swirling dissolves the lyophilized pellet without that damage. This is standard laboratory technique, the instruction is in every published peptide reconstitution protocol.",
      },
      {
        q: "How accurate does my volume measurement need to be?",
        a: "Accuracy depends on the concentration and the target dose from the published protocol. At typical research-peptide concentrations, a low-dead-space insulin syringe with clear gradation markings gets within a few microliters, which is usually sufficient. Volumetric pipettes achieve higher precision and are standard in lab work. The larger practical error is not measurement precision but mismatches between the intended concentration and the actual concentration if the starting material's potency is uncertain.",
      },
      {
        q: "Can I trust a vendor's Certificate of Analysis?",
        a: "COAs vary in rigor. Third-party independent testing (HPLC purity, mass spectrometry identity confirmation) from an accredited lab is the gold standard; vendor-generated COAs without independent verification are lower-quality evidence. The counterfeit-peptide literature documents repeated findings of material that did not match its label. If the workflow matters, the COA chain matters, and a vendor-only COA without independent assay is a known risk factor.",
      },
    ],
    sources: [
      {
        label: "USP General Chapter <797>, Pharmaceutical Compounding, Sterile Preparations",
        url: "https://www.usp.org/compounding/general-chapter-797",
      },
      {
        label: "USP Monograph, Bacteriostatic Water for Injection",
        url: "https://www.usp.org/",
      },
      {
        label: "FDA, Compounding Quality Act / 503A and 503B overview",
        url: "https://www.fda.gov/drugs/guidance-compliance-regulatory-information/human-drug-compounding",
      },
      {
        label: "Manning et al. 2010, Pharm Res, stability of protein pharmaceuticals review",
        url: "https://pubmed.ncbi.nlm.nih.gov/20333463/",
      },
      {
        label: "USP General Chapter <790>, Visible Particulates in Injections",
        url: "https://www.usp.org/",
      },
    ],
  },
  {
    slug: "peptide-reconstitution-calculator",
    title: "Peptide Reconstitution Calculator",
    h1: "Peptide Reconstitution Calculator",
    description:
      "Research-context calculator, peptide mg plus bacteriostatic-water volume to mg/mL concentration, unit output, and visual syringe.",
    hub: "reconstitution-and-practical",
    postType: "pillar",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 6,
    status: "published",
    medicalDisclaimer: "required",
    ourPick: {
      name: "The PepVise Reconstitution Calculator (this page)",
      tier: "Digital tool",
      reason:
        "The tool this page exists to host. The math is inherited from our shared calculator library and is unit-tested: peptide mass in milligrams divided by bacteriostatic-water volume in milliliters equals concentration in mg/mL, and target-dose volume is target-dose divided by concentration. That is the entire calculation. Everything else on this page is context, disclaimer, and the citation chain for why each step is specified the way it is.",
    },
    products: [
      {
        rank: 1,
        name: "PepVise Reconstitution Calculator",
        tier: "Digital tool (this page)",
        summary:
          "Client-side React calculator. Inputs: peptide mass (mg), diluent volume (mL), target dose from published protocol. Outputs: concentration (mg/mL), volume per dose (mL), equivalent insulin-syringe unit marking. Unit-tested math; no server-side data retention.",
      },
      {
        rank: 2,
        name: "InjectCompass Patient-Education Calculator (sister site)",
        tier: "Digital tool",
        summary:
          "Same underlying math, different framing. InjectCompass renders the calculator for a patient-education context (compounded-peptide prescription holders). PepVise renders the same math under the research-protocol frame. We keep both because the audiences are different; we do not recommend one over the other for any given reader, pick the frame that matches the reader's actual situation.",
      },
      {
        rank: 3,
        name: "USP <1160>, Pharmaceutical Calculations in Prescription Compounding",
        tier: "Standards reference",
        summary:
          "The USP chapter on the math that licensed pharmacies use for compounding calculations. Our calculator implements the same arithmetic, with the important difference that a calculator on the internet is not a licensed pharmacist. Readers verifying the math against the standard should find them aligned.",
      },
    ],
    items: [
      {
        rank: 1,
        name: "The calculation is simple, the context is not",
        summary:
          "Concentration = mass / volume. Dose volume = dose / concentration. That is the entire arithmetic. The reason this page runs longer than four lines is that the inputs to the calculation (which mass, which volume, which target dose) are the hard part, and each input has a published-protocol source that matters.",
      },
      {
        rank: 2,
        name: "The calculator assumes accurate input mass",
        summary:
          "Every output is only as accurate as the declared mass on the starting vial. Research-chemical vendor labeling accuracy has been flagged in the counterfeit-peptide literature, most notably in independent assay work showing meaningful deviations from declared potency. The calculator cannot detect wrong input.",
      },
      {
        rank: 3,
        name: "Target-dose volume is in milliliters, units matter",
        summary:
          "An insulin syringe's markings are in units (100 units = 1 mL for U-100 syringes). The calculator cross-displays mL and insulin-syringe units because dose errors of 10x happen when readers confuse the two. This is a known and documented failure mode in the injectable-therapy literature.",
      },
      {
        rank: 4,
        name: "Published protocol dose is the reference, not Reddit dose",
        summary:
          "The 'dose' input should come from the published paper for the compound and indication in question, not from an aggregated forum recommendation. The difference matters most for compounds like BPC-157, where the online 'standard dose' is an extrapolation from rat mg/kg work rather than a published human-protocol value.",
      },
      {
        rank: 5,
        name: "Reconstitution volume is a design choice, not a fixed value",
        summary:
          "Most protocols specify a concentration, not a fixed diluent volume. Choosing how much bacteriostatic water to add is the researcher's decision within the constraint that the resulting concentration matches the protocol. More diluent equals more volume per dose equals easier measurement at the cost of more total injection volume. The calculator handles either starting point.",
      },
      {
        rank: 6,
        name: "Beyond-use date is not optional",
        summary:
          "A reconstituted vial has a finite usable period, often 14 to 28 days under refrigeration, shorter at room temperature. The calculator does not enforce this, but the published protocols do. Storing a reconstituted solution beyond the protocol's stability data is outside the protocol.",
      },
      {
        rank: 7,
        name: "The calculator does not verify purity",
        summary:
          "No arithmetic on the internet can tell you whether the starting material is what the label says it is. Third-party independent assay (HPLC, mass spectrometry) is the only way to verify identity and purity. The calculator's output assumes the input is correct.",
      },
      {
        rank: 8,
        name: "The calculator is unit-tested",
        summary:
          "The underlying math library is shared with InjectCompass and has unit tests covering dimensional analysis, edge cases (zero volume, negative inputs), and rounding behavior. We publish the test suite alongside the calculator because a calculator with unverified math is worse than no calculator.",
      },
      {
        rank: 9,
        name: "The calculator does not recommend a dose",
        summary:
          "The calculator takes a dose as an input. It does not generate one. It does not suggest one. It does not 'optimize' one. The dose comes from the published protocol for the specific compound and indication the user is researching. Any implementation that generates dose recommendations has crossed from calculator to advice, and that is not what this tool is.",
      },
      {
        rank: 10,
        name: "The calculator is an educational reference, not a prescription",
        summary:
          "A calculator on the internet cannot substitute for a licensed physician reconciling a published protocol with an individual patient's circumstances. This is the line everything on this page sits behind.",
      },
    ],
    faq: [
      {
        q: "Is this calculator an FDA-approved medical device?",
        a: "No. It is an educational reference that implements arithmetic published in reconstitution protocols and documented in USP pharmaceutical-compounding chapters. It is not software that has been submitted to or cleared by the FDA. It is not a substitute for a licensed pharmacist's compounding workflow. The arithmetic is the same in both cases; the accountability, oversight, and accuracy verification are not.",
      },
      {
        q: "Why does the calculator show insulin-syringe units as well as mL?",
        a: "Because insulin-syringe unit markings (U-100: 100 units equals 1 mL) are the most common gradation on the syringes used in published subcutaneous peptide protocols, and confusing mL with units is a documented failure mode that produces 10-fold dose errors. Showing both values cross-verified against each other reduces that class of error. It does not eliminate it.",
      },
      {
        q: "What inputs does the calculator not accept?",
        a: "It does not take compound names and does not look up doses. It takes mass, volume, and target dose, all numeric inputs the user has to source themselves. This is deliberate. A calculator that auto-populated doses by compound name would be a dose-recommendation tool, and a dose-recommendation tool is not within the PepVise editorial scope. The user brings the protocol; the calculator does the arithmetic.",
      },
      {
        q: "Can I use the calculator for any peptide?",
        a: "The arithmetic is compound-agnostic, concentration is mass over volume regardless of what the mass is. What varies by compound is the appropriate starting concentration, the solvent (bacteriostatic water, sterile water, saline), the stability window, and the target dose from the protocol. Those choices belong to the reader and the underlying published protocol, not to the calculator.",
      },
      {
        q: "Does the calculator store my inputs?",
        a: "No. The calculator is client-side: inputs are processed in the browser and are not transmitted to PepVise servers or any third party. There is no user account, no save state, and no analytics tied to calculator inputs. That is a deliberate privacy choice for a tool that deals with an area the regulatory framework treats seriously.",
      },
    ],
    sources: [
      {
        label: "USP General Chapter <1160>, Pharmaceutical Calculations in Compounding",
        url: "https://www.usp.org/",
      },
      {
        label: "USP General Chapter <797>, Sterile Compounding Standards",
        url: "https://www.usp.org/compounding/general-chapter-797",
      },
      {
        label: "FDA, Human Drug Compounding overview",
        url: "https://www.fda.gov/drugs/guidance-compliance-regulatory-information/human-drug-compounding",
      },
      {
        label: "Institute for Safe Medication Practices, Insulin Syringe Unit/mL Error Alerts",
        url: "https://www.ismp.org/",
      },
      {
        label: "Manning et al. 2010, Pharm Res, stability of protein pharmaceuticals",
        url: "https://pubmed.ncbi.nlm.nih.gov/20333463/",
      },
    ],
  },
  {
    slug: "research-use-only-explained",
    title: "\"Research Use Only\", What It Actually Means",
    h1: "Research use only",
    description:
      "FDA's position on research-use-only labeling, the 503A/503B distinction, the 2023 enforcement actions, and what this framing means for buyers.",
    hub: "safety-regulation-markets",
    postType: "pillar",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 12,
    status: "published",
    medicalDisclaimer: "required",
    ourPick: {
      name: "FDA, Compliance Policy Guide and the 2023 bulk-substances decisions",
      tier: "Primary regulatory source",
      reason:
        "The only source worth citing on what 'research use only' means in the FDA's framework is the FDA. The agency's compliance policy guides, warning letters, and the 2023 category-2 decisions on peptide bulk substances are the primary record. Every popular article on RUO is a summary of these documents. Read the documents, not the summaries.",
    },
    products: [
      {
        rank: 1,
        name: "FDA Drugs@FDA, official approval and labeling database",
        tier: "Primary regulatory source",
        summary:
          "The FDA's public database of approved drugs, labeling, and regulatory review documents. It is also the clearest way to verify that a given compound is (or is not) FDA-approved for human use, the 'search Drugs@FDA' test is a usable shortcut for any RUO-adjacent claim.",
      },
      {
        rank: 2,
        name: "FDA, Human Drug Compounding (503A / 503B) landing page",
        tier: "Primary regulatory source",
        summary:
          "The FDA's own overview of the compounding framework, including the Category 1/2/3 bulk-substance decisions that directly affect peptide availability through 503A pharmacies. The 2023 decision on BPC-157 is indexed here.",
      },
      {
        rank: 3,
        name: "Bad Blood, John Carreyrou",
        tier: "Popular book",
        summary:
          "Not a peptide book, but the clearest popular-press account of what happens when a lab-use product gets marketed outside its labeled scope. The Theranos story is a case study in 'research-use-only' that was allowed to drift into patient-use territory without the corresponding regulatory clearance. Useful mental model.",
      },
      {
        rank: 4,
        name: "WADA Prohibited List (current edition)",
        tier: "Regulatory reference",
        summary:
          "The World Anti-Doping Agency's Prohibited List includes S0 ('non-approved substances'), a category that captures many research-chemical-channel peptides. For athletes, the RUO-label discussion is not abstract: it is the difference between a tested-positive and a not-tested-positive outcome.",
      },
    ],
    items: [
      {
        rank: 1,
        name: "'Research Use Only' is a labeling convention, not a legal safe harbor",
        summary:
          "The RUO designation is a label signaling that a product is intended for in-vitro or animal research, not human use. It is not an FDA-issued exemption. Sellers cannot use 'RUO' as a shield for marketing a product for human administration, the FDA has been explicit on this since at least the 2013 guidance to in-vitro diagnostic manufacturers and has reinforced it through enforcement against peptide vendors.",
      },
      {
        rank: 2,
        name: "RUO is different from Investigational Use Only (IUO)",
        summary:
          "IUO designates a product actively in an FDA-authorized clinical investigation (IND or IDE). RUO has no such pathway. A product under IUO has some regulatory visibility; a product labeled RUO that is marketed for human use has, in the FDA's view, crossed into unapproved-drug territory.",
      },
      {
        rank: 3,
        name: "RUO is different from what a 503A pharmacy does",
        summary:
          "A 503A compounding pharmacy operating with a valid prescription uses bulk drug substances that are on the FDA's approved category-1 list, or that have a USP monograph, or that meet specific statutory criteria. This is a regulated activity under state board of pharmacy oversight. RUO material through a research-chemical supplier is a different supply chain and a different legal frame, not 503A, not a pharmacy, no prescription.",
      },
      {
        rank: 4,
        name: "The 2023 FDA category-2 decisions reshaped peptide compounding",
        summary:
          "In 2023, the FDA moved several peptide bulk substances (including BPC-157) into category 2 of the 503A bulk-substances evaluation, effectively meaning the agency had significant safety concerns that excluded them from 503A compounding eligibility. This is the most important single regulatory development in research peptides in the last five years.",
      },
      {
        rank: 5,
        name: "Enforcement actions are real and ongoing",
        summary:
          "FDA warning letters to research-peptide and compounded-peptide vendors have recurred through 2023 and 2024. The letters cite unapproved-new-drug violations, misbranded drug violations, and misleading labeling. They are public records, and Drugs@FDA and the FDA Warning Letters database are the primary sources.",
      },
      {
        rank: 6,
        name: "State-level regulation adds variation",
        summary:
          "Boards of pharmacy regulate compounding at the state level, and state enforcement varies considerably. California, Texas, and Florida have been more active in compounding oversight; other states have been more permissive. 'Legal in my state' is a specific question that needs a specific state-level answer.",
      },
      {
        rank: 7,
        name: "The research-exemption myth",
        summary:
          "A recurring claim in research-peptide forums is that personal-use research-chemical purchases are protected by a 'research exemption'. The FDA's regulatory framework has no such personal-research exemption. The gap between the claim and the regulation is wide; the fact that enforcement is uneven does not change the legal framework.",
      },
      {
        rank: 8,
        name: "Customs and import issues are a separate risk layer",
        summary:
          "Importing RUO peptides into the US raises customs-level questions independent of FDA drug regulation. The FDA's Division of Import Operations has refused entry to unapproved drug imports; whether any given shipment is inspected is probabilistic, but the framework is established.",
      },
      {
        rank: 9,
        name: "WADA sees RUO as irrelevant to sport",
        summary:
          "For athletes subject to WADA testing, the RUO label on a vendor site is not a defense. S0 of the Prohibited List explicitly covers substances not approved for human therapeutic use. A positive test for a research-channel peptide is a positive test regardless of the label on the purchase.",
      },
      {
        rank: 10,
        name: "International frameworks are not interchangeable",
        summary:
          "The UK's MHRA, Canada's Health Canada, Australia's TGA, and the European Medicines Agency each have their own unapproved-drug frameworks. 'Legal in Canada' and 'legal in the UK' are specific claims that require specific agency-level verification. The assumption that research-peptide legality is uniform across jurisdictions is incorrect.",
      },
      {
        rank: 11,
        name: "RUO is relevant to insurance, malpractice, and liability exposure",
        summary:
          "For physicians, prescribing an RUO-labeled compound outside a licensed compounding pathway exposes the prescriber to state medical-board and malpractice-insurance scrutiny. Many professional liability policies exclude coverage for use of unapproved drugs outside an authorized clinical investigation. This is a real practical constraint, not theoretical.",
      },
      {
        rank: 12,
        name: "The label, in short, does not mean what many readers want it to mean",
        summary:
          "RUO is a signal from the seller about intended use. It is not FDA approval for human use, not a safe harbor from regulation, not a clinical research authorization, and not a legal pathway for patient administration. The honest reading of RUO is 'this was not evaluated or approved for human use, and marketing or using it as if it were is outside the regulatory framework.'",
      },
    ],
    faq: [
      {
        q: "If a peptide is labeled 'for research use only,' can I legally buy it?",
        a: "In the US, purchase of RUO-labeled chemicals for actual research is not per se illegal, but several complications stack on top. Marketing RUO material with implied human-use intent triggers FDA concerns. Importing through customs adds an independent regulatory layer. The narrow pathway 'purchased RUO for laboratory research by a qualified researcher' is legal; the broader pattern 'purchased RUO and injected it' is outside that pathway and is the posture FDA enforcement has targeted.",
      },
      {
        q: "What changed in 2023 with the FDA and peptides?",
        a: "The FDA's ongoing evaluation of bulk drug substances for 503A compounding eligibility placed several peptides, including BPC-157, into category 2, meaning the agency identified significant safety concerns that made them ineligible for use in 503A pharmacy compounding. That is the specific regulatory action that tightened the legal pathway for compounded peptide access in the US and shifted much of the supply into the RUO research-chemical channel.",
      },
      {
        q: "Is 'peptide therapy' through a compounding pharmacy the same as buying research chemicals?",
        a: "No. Compounded peptides dispensed through a 503A pharmacy, with a valid prescription from a licensed physician, operate under state board of pharmacy oversight and FDA compounding regulations. Research-chemical RUO purchases do not. Post-2023, some peptides are no longer 503A-eligible, which narrowed the overlap. The distinction between 'prescription compounded peptide' and 'research-chemical RUO peptide' is substantial and frequently elided in online discussion.",
      },
      {
        q: "What about SARMs and other compounds in the same channel?",
        a: "SARMs (selective androgen receptor modulators) have a different regulatory history, the FDA has issued multiple warnings specifically about SARM marketing and the FTC has pursued enforcement against SARM sellers. The regulatory framework concepts are similar (unapproved-drug status, labeling as 'research chemicals'), but the peptide and SARM categories are legally distinct. This post is specifically about peptide RUO. SARM regulation deserves its own treatment.",
      },
      {
        q: "So is PepVise saying peptides are illegal?",
        a: "Not exactly, the picture is more textured. Compounded peptides dispensed by a licensed pharmacy under a valid prescription within 503A rules are legal where those conditions are met. Peptides in active FDA-authorized clinical trials are legal within the trial. RUO research-channel purchases marketed for human use operate outside the FDA-approved framework, and enforcement exists. 'The label on the vial does not determine the legality of what you do with it' is the honest summary.",
      },
      {
        q: "What is the closest thing to a legal pathway for accessing peptides?",
        a: "For compounds that are still 503A-eligible, the pathway is: licensed physician assessing the patient, writing a prescription for a compounded preparation, a 503A pharmacy dispensing it, with proper informed consent and follow-up. The narrower the compound's approved-use scope, the more scrutiny that prescription gets. PepVise does not refer to specific clinics or prescribers in this post, the pathway is the framework, not a directory.",
      },
    ],
    sources: [
      {
        label: "FDA, Human Drug Compounding landing page",
        url: "https://www.fda.gov/drugs/guidance-compliance-regulatory-information/human-drug-compounding",
      },
      {
        label: "FDA, Bulk Drug Substances Evaluation for 503A Compounding",
        url: "https://www.fda.gov/drugs/human-drug-compounding/bulk-drug-substances-nominations-received-use-compounding-under-section-503a-fdc-act",
      },
      {
        label: "FDA, Warning Letters database",
        url: "https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/compliance-actions-and-activities/warning-letters",
      },
      {
        label: "FDA, Drugs@FDA approved drug search",
        url: "https://www.accessdata.fda.gov/scripts/cder/daf/",
      },
      {
        label: "WADA Prohibited List, S0 Non-approved substances [VERIFY current edition]",
        url: "https://www.wada-ama.org/en/prohibited-list",
      },
      {
        label: "FDA Compliance Policy Guide 400.210, Research Use Only Products",
        url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents",
      },
    ],
  },
  {
    slug: "where-to-buy-peptides-taxonomy",
    title: "Where to Buy Peptides, The Taxonomy of Vendors",
    h1: "Where to buy peptides, the taxonomy",
    description:
      "Research-chemical suppliers versus compounding pharmacies versus underground sellers, the legal framework and red flags. No vendor directory.",
    hub: "safety-regulation-markets",
    postType: "cluster",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 14,
    status: "published",
    medicalDisclaimer: "required",
    ourPick: {
      name: "FDA Warning Letters database (peptide and compounding entries)",
      tier: "Primary regulatory source",
      reason:
        "Any PepVise reader evaluating where peptides come from should be reading FDA warning letters directly rather than vendor-review blogs. The warning letters name specific vendors, cite specific violations, and are the clearest public record of which business models the agency considers non-compliant. The database is free, searchable, and more informative than any third-party vendor-review post.",
    },
    products: [
      {
        rank: 1,
        name: "FDA Warning Letters database",
        tier: "Primary regulatory source",
        summary:
          "Free, searchable federal record of FDA enforcement correspondence. Filtering for peptide and compounding entries reveals the public pattern of enforcement, which is the data every 'best peptide vendor' roundup is trying to obscure.",
      },
      {
        rank: 2,
        name: "State Board of Pharmacy lookups (direct to state boards)",
        tier: "Primary regulatory source",
        summary:
          "Each state's Board of Pharmacy maintains a license-verification tool. Claimed '503A compounding pharmacy' status is checkable in about thirty seconds at the state level. Most research-chemical vendors are not pharmacies and do not appear in any pharmacy registry.",
      },
      {
        rank: 3,
        name: "ClinicalTrials.gov",
        tier: "Primary registry",
        summary:
          "The registry is the clean way to separate peptides in active FDA-authorized trials from peptides in the research-chemical channel. If a compound has active Phase 2 or 3 trials, they are indexed here. The absence of trials is as informative as their presence.",
      },
      {
        rank: 4,
        name: "Goodman & Gilman's Pharmacological Basis of Therapeutics",
        tier: "Reference text",
        summary:
          "For readers who want to understand why the regulatory framework exists in the form it does, what the difference between 'approved for indication' and 'off-label use' actually looks like in the clinical literature. Not a peptide book, but the reasoning framework.",
      },
    ],
    items: [
      {
        rank: 1,
        name: "FDA-approved prescription drugs (Category A)",
        summary:
          "Peptides approved for specific human indications, semaglutide, tirzepatide, liraglutide, teriparatide, desmopressin, sermorelin (historically), among others. Distributed through normal prescription channels. Regulated at every step. No ambiguity. Not the category most research-peptide discussion is about.",
      },
      {
        rank: 2,
        name: "503A compounding pharmacy output (Category B)",
        summary:
          "Licensed pharmacies compounding patient-specific preparations against a valid prescription, using bulk substances that are category-1-approved or meet statutory criteria. Subject to state board of pharmacy oversight and FDA inspection. Post-2023, several peptides, including BPC-157, are no longer 503A-eligible, narrowing this category.",
      },
      {
        rank: 3,
        name: "503B outsourcing facility output (Category C)",
        summary:
          "FDA-registered outsourcing facilities producing compounded drugs in larger volumes, typically for clinic and hospital settings. Subject to current Good Manufacturing Practice (cGMP) requirements. More heavily regulated than 503A; produces some compounded peptide products in specific clinical contexts.",
      },
      {
        rank: 4,
        name: "Research-chemical suppliers (Category D)",
        summary:
          "Vendors labeling product 'for research use only', typically selling lyophilized vials through e-commerce sites. Not pharmacies. No prescription required. No pharmacy-board oversight. Varying Certificate of Analysis quality, varying purity, varying shipping practices. The largest category by web presence and the one most research-peptide discussion actually refers to.",
      },
      {
        rank: 5,
        name: "Vendor-owned 'educational' content farms (Category E)",
        summary:
          "Blogs and review sites that ostensibly educate about peptides but are owned by or affiliated with specific vendors. Indistinguishable from Category D except by ownership. The SERP for most peptide terms is dominated by this category. PepVise exists specifically because editorial voice in this space should not be vendor-owned.",
      },
      {
        rank: 6,
        name: "Telehealth peptide clinics (Category F)",
        summary:
          "Online medical services bundling a consult with a peptide prescription, often via partner 503A pharmacies. The range of rigor is wide, some are legitimate licensed physician practices operating within compounding rules, others are prescription-mill setups with perfunctory consults. The distinction requires reading each clinic's specific compliance posture, not brand-level assumption.",
      },
      {
        rank: 7,
        name: "Underground and gray-market sellers (Category G)",
        summary:
          "Sellers operating outside any regulatory framework, social media DMs, encrypted chat groups, peer-to-peer. No labeling, no documentation, no recourse. The highest-risk category across every dimension (purity, identity, legal exposure, counterfeit risk). The category that serious safety-conscious readers avoid most carefully.",
      },
      {
        rank: 8,
        name: "Counterfeit and relabeled products",
        summary:
          "Cutting across Categories D-G: material that claims to be one compound and is actually another, or claims a purity it does not have. Independent assay studies have documented meaningful counterfeit rates in injectable-chemical channels. The counterfeit problem is not an edge case; it is a recurring finding in the literature.",
      },
      {
        rank: 9,
        name: "International mail-order operations",
        summary:
          "Vendors shipping from jurisdictions with different regulatory frameworks. Adds customs-level risk on top of supply-chain risk. The FDA's Import Operations division has refused entry to unapproved drug shipments. Probabilistic enforcement is not a legal framework.",
      },
      {
        rank: 10,
        name: "Red flag: claims of 'pharmaceutical grade' without a pharmacy license",
        summary:
          "A vendor using 'pharmaceutical grade' language while not holding any pharmacy license is making a claim the regulatory framework does not support. 'Pharmaceutical grade' has a specific meaning tied to USP monographs and cGMP manufacturing. A research-chemical vendor is not manufacturing to that standard regardless of the marketing copy.",
      },
      {
        rank: 11,
        name: "Red flag: vendor-generated Certificates of Analysis only",
        summary:
          "COAs generated by the vendor itself, without independent third-party assay by an accredited laboratory, are weak evidence. The gold standard is HPLC purity and mass-spectrometry identity confirmation from an independent lab. Vendor-only COAs are an input to consider, not verification.",
      },
      {
        rank: 12,
        name: "Red flag: marketing language describing human use",
        summary:
          "RUO-labeled material marketed with references to dosing, protocols, cycling, or human outcomes is the specific pattern FDA enforcement targets. It indicates the vendor is selling for a use the label explicitly excludes. This pattern correlates with weaker compliance on every other dimension.",
      },
    ],
    faq: [
      {
        q: "Will PepVise recommend a peptide vendor?",
        a: "No. Ever. This is the hardest editorial line at PepVise and it is not a commercial choice, it is what lets the site be trusted on everything else. We do not recommend research-chemical vendors, compounding pharmacies, or telehealth peptide clinics. We describe the taxonomy, the regulatory framework, and the red flags. The specific decision of where to obtain a compound is between a reader and their licensed physician, operating within the compliance framework their situation demands.",
      },
      {
        q: "Is there really a difference between a '503A pharmacy' and a 'research-chemical supplier'?",
        a: "Yes, a substantial one. A 503A pharmacy holds state board of pharmacy licensure, dispenses against valid patient-specific prescriptions, uses permitted bulk drug substances, and is subject to FDA inspection. A research-chemical supplier holds none of those things. Verifying a claimed 503A pharmacy is a thirty-second check on the state board's license lookup. Verifying a research-chemical vendor's claims is substantially harder because there is rarely an analogous registry.",
      },
      {
        q: "What is the single most informative red flag?",
        a: "Vendors who market RUO-labeled material with explicit references to human dosing, injection protocols, or cycling schedules. That pattern is the exact conduct FDA enforcement has targeted in 2023-2024 warning letters, and it correlates with weaker practice on purity, identity, and shipping. If a vendor's marketing describes how to use the product in humans, the RUO label is performative and the compliance posture is weak.",
      },
      {
        q: "How does someone verify a Certificate of Analysis?",
        a: "Ideally: by requesting the independent third-party assay report (HPLC purity, mass spectrometry identity), identifying the accredited laboratory that performed it, and verifying the lab's credentials. Vendor-generated COAs without independent lab identification are weak evidence. Some independent assay services will run a sample for a fee; this is expensive but is the actual verification step, rather than a visual check on a PDF.",
      },
      {
        q: "What about compounded peptides from a telehealth clinic?",
        a: "Telehealth peptide prescribing spans a real range of rigor. The questions to ask are specific: is the prescribing physician licensed in the patient's state, is the dispensing pharmacy a properly licensed 503A entity, is there actual patient-specific evaluation (not a checkbox form), is there informed consent, and is there follow-up. A clinic that can answer those questions substantively is operating inside the framework. A clinic that cannot is closer to Category D with a medical-costume on.",
      },
      {
        q: "Why not just publish which vendors are good?",
        a: "Because we have no independent assay operation, no ongoing audit of any vendor, and no way to verify purity at any given shipment. A 'best vendor' recommendation from PepVise would be exactly the kind of content the site was founded to replace, the vendor-owned 'educational' post dressed as editorial. The taxonomy, the red flags, and the regulatory framework are what we can speak to with integrity. The specific purchase decision is not.",
      },
    ],
    sources: [
      {
        label: "FDA, Human Drug Compounding (503A/503B) overview",
        url: "https://www.fda.gov/drugs/guidance-compliance-regulatory-information/human-drug-compounding",
      },
      {
        label: "FDA, Warning Letters database",
        url: "https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/compliance-actions-and-activities/warning-letters",
      },
      {
        label: "FDA, Bulk Drug Substances Evaluation for 503A Compounding",
        url: "https://www.fda.gov/drugs/human-drug-compounding/bulk-drug-substances-nominations-received-use-compounding-under-section-503a-fdc-act",
      },
      {
        label: "NABP, National Association of Boards of Pharmacy (state license lookup hub)",
        url: "https://nabp.pharmacy/",
      },
      {
        label: "FDA Office of Regulatory Affairs, Import Operations overview",
        url: "https://www.fda.gov/industry/import-program-resources",
      },
      {
        label: "USP General Chapter <797>, Sterile Compounding Standards",
        url: "https://www.usp.org/compounding/general-chapter-797",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
export function postsByHub(hubSlug: string): Post[] {
  return posts.filter((p) => p.hub === hubSlug);
}
export function latestPosts(limit = 6): Post[] {
  return [...posts].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1)).slice(0, limit);
}
export function featuredPost(): Post | undefined {
  return posts.find((p) => p.featured);
}
export function relatedPosts(post: Post, limit = 3): Post[] {
  return posts.filter((p) => p.hub === post.hub && p.slug !== post.slug).slice(0, limit);
}
