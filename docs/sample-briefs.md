# PepVise — Sample Briefs

Five anchor briefs covering the main post types for pepvise.com: compound profile pillar, evidence review, mechanism explainer, reconstitution/practical, and safety/regulation.

**Source keyword data:** DataForSEO April 2026, via `docs/pepvise-research.md` §4.

**Legal framing reminder:** every post below carries the research-context disclaimer block (see `content/pepvise/brand-book.md` §6). Dosing language is "reported in literature" — never prescriptive.

---

## Brief 1: BPC-157 — What the Evidence Shows (compound profile pillar)

```markdown
---
slug: bpc-157
site: pepvise
hub: compound-profiles
post_type: compound_pillar
target_keyword: bpc 157
target_keyword_volume: 74000
target_keyword_difficulty: 44
secondary_keywords:
  - bpc 157 dosage (22100, kd 19)
  - bpc 157 side effects (9900, kd 25)
  - bpc 157 studies (3600, kd 20)
  - bpc 157 human trials (2400, kd 18)
  - bpc 157 mechanism (1900, kd 22)
  - pentadecapeptide bpc 157 (1300, kd 14)
search_intent: informational_evidence
serp_dominant_format: compound_profile_with_evidence
word_count_target: 3500
schema_types: [Article, MedicalWebPage, FAQPage]
internal_links:
  - evidence-reviews/bpc-157-for-tendon
  - evidence-reviews/bpc-157-for-gut
  - compound-profiles/tb-500
  - mechanism-science/peptide-half-life
  - reconstitution-practical/how-to-reconstitute-peptides
analyst: The Analyst
review_status: brief
generated_at: 2026-04-21
legal_framing: research_only_strict
medical_reviewer: required_by_month_9
has_evidence_ledger: true
---

## The opportunity
74,000 monthly US searches at KD 44. Top 10 is vendor-owned (Limitless Life, Amino Asylum, Tailor Made Compounding, Peptide Sciences) + thin Healthline + Examine.com stub + Reddit + PubMed abstract. No editorial site owns this SERP. Our wedge: the Evidence Ledger above the fold, mechanism explained properly, human-pilot analysis (there's ONE — Chang et al. 2014), FDA status clearly stated (removed from 503A compoundable list in 2023), and cross-linked evidence reviews for tendon and gut.

Realistic ranking: top-10 in 6-9 months, top-5 in 12-18 once credentialed reviewer is onboarded and backlinks accumulate.

## Search intent
- Primary intent: informational — reader wants to know what BPC-157 is and whether it's legit
- Dominant SERP format: overview post with mechanism + studies + claims
- Average word count of top 5: 2,800
- People Also Ask:
  - What is BPC-157 used for?
  - Does BPC-157 really work?
  - Is BPC-157 FDA-approved?
  - What are the side effects of BPC-157?
  - How long does BPC-157 stay in your system?
- Featured snippet target: 60-word paragraph stating what BPC-157 is + current evidence state

## Required structure
- H1 with primary keyword
- **Legal & Medical Disclaimer block** (standard PepVise language, non-removable)
- **Evidence Ledger component** above the fold:
  - Preclinical animal: Extensive (50+ rat/mouse studies, Croatian + Korean labs primarily)
  - Human pilot: 1 published (Chang et al. 2014, n=12, single-arm, open-label, oral)
  - Phase I/II: 1 active (2024 US listing, not yet reporting)
  - FDA-approved indication: None
  - 2023 status: FDA removed from 503A compoundable substances list
- 80-word intro summarizing the evidence state
- H2: What BPC-157 is — molecular overview (pentadecapeptide, PVKQE… sequence, derived from human gastric juice peptide)
- H2: Mechanism — what the preclinical literature describes (angiogenesis promotion, growth hormone/IGF-1 modulation, NO system interaction) with proper "preclinical" framing
- H2: The human data — Chang et al. 2014 walkthrough (design, outcome, limitations)
- H2: The preclinical data at a glance — table of 8-10 most-cited rat/mouse studies with indication, sample size, effect
- H2: What the discourse gets wrong — common claims vs what's actually published
- H2: FDA status + the 2023 compoundable-list removal
- H2: Side effects reported in literature (cross-link to Side-Effect Ledger master)
- H2: Open questions the field is watching
- H2: FAQ (schema-marked)
- H2: Related reading (internal links to evidence reviews, TB-500 comparison, mechanism post, reconstitution)
- Sources: 12-15 citations (PubMed, clinicaltrials.gov, FDA docs)

## Required citations
- Staresinic et al. 2003 (*J Orthop Res*) — tendon-bone junction in rats
- Krivic et al. 2006 (*J Orthop Res*) — Achilles tendon in rats
- Seiwerth et al. 2014 (*Curr Med Chem*) — pharmacokinetic review
- Chang et al. 2014 (*Vojnosanit Pregl*) — THE human pilot
- FDA 503A interim policy document 2023
- At least 2 review articles on BPC-157 mechanism
- Clinicaltrials.gov listing of active BPC-157 studies as of publication date

## Pinterest pin angles
1. "BPC-157: the evidence ledger"
2. "What the BPC-157 human data actually shows"
3. "BPC-157 mechanism, plainly"
4. "Save: the BPC-157 compound profile"

## Editor notes
- **The Evidence Ledger is the single most important element on this page.** It's what differentiates PepVise from every vendor site on the SERP.
- Chang et al. 2014 is the ONE published human pilot — treat it with full detail: design (single-arm, open-label), sample size (n=12), outcomes, limitations (no placebo, short follow-up, oral not injection). Do not gloss over the evidence gap.
- "Dose ranges reported in literature" phrasing is mandatory. "200-500 mcg daily extrapolated from rat dosing" is acceptable; "the recommended dose is 250 mcg twice daily" is not.
- FDA's 2023 removal from the 503A compoundable list is critical context. State it factually with the citation. Do not editorialize on whether that's good or bad policy.
- The "common claims vs what's published" section is the Reddit-shareable artifact. Structured: Claim → What's actually published → Our assessment.
- Cross-link aggressively to the TB-500 post (a natural comparison) and the two evidence-review posts (tendon + gut) for depth.
- No dosing protocol. No cycling advice. No stacking recommendations. The reader who wants those will not find them here, by design.
```

---

## Brief 2: BPC-157 for Tendon Repair — Literature Review (evidence review)

```markdown
---
slug: bpc-157-for-tendon
site: pepvise
hub: evidence-reviews
post_type: evidence_review
target_keyword: bpc 157 tendon
target_keyword_volume: 3600
target_keyword_difficulty: 21
secondary_keywords:
  - bpc 157 tendon repair (880, kd 16)
  - bpc 157 achilles (720, kd 14)
  - bpc 157 rotator cuff (590, kd 15)
  - bpc 157 for injury (1900, kd 22)
  - bpc 157 healing studies (480, kd 13)
search_intent: informational_evidence
serp_dominant_format: literature_review
word_count_target: 2800
schema_types: [Article, MedicalWebPage, FAQPage]
internal_links:
  - compound-profiles/bpc-157
  - evidence-reviews/bpc-157-for-gut
  - mechanism-science/how-peptides-signal
analyst: The Analyst
review_status: brief
generated_at: 2026-04-21
legal_framing: research_only_strict
has_evidence_ledger: partial
---

## The opportunity
3,600/month at KD 21. SERP is mostly vendor content + Reddit. Nobody ships a proper literature review with inclusion criteria + effect-size summary + limitations. This is the classic PepVise wedge: Cochrane-adjacent format in a niche Cochrane doesn't cover.

## Search intent
- Primary intent: informational — reader (often injured, often athlete) wants to know if BPC-157 is real for tendon healing
- Dominant SERP format: narrative post with study mentions
- Average word count: 2,200
- People Also Ask:
  - Does BPC-157 heal torn tendons?
  - How long does it take for BPC-157 to work?
  - Can BPC-157 fix a rotator cuff tear?
  - What does BPC-157 do to tendons?
- Featured snippet target: paragraph describing the evidence state for tendon specifically

## Required structure
- H1 with primary keyword
- Legal & medical disclaimer
- Evidence Ledger (partial — scoped to tendon indication)
- 80-word summary of the evidence state for tendon
- H2: Inclusion criteria — how we selected studies (preclinical: mammalian tendon models; human: peer-reviewed prospective studies only; excluded: case reports, in vitro, unpublished)
- H2: Preclinical evidence synthesis — 8-10 studies in a table (study, model, effect size, limitations)
  - Staresinic et al. 2003 (tendon-bone junction, rat)
  - Krivic et al. 2006 (Achilles, rat)
  - Staresinic et al. 2006 (quadriceps, rat)
  - Chang et al. 2011 (tendon-bone, rat)
  - Plus 4-6 more, all cited
- H2: Mechanism — what the preclinical literature suggests (angiogenesis, cell migration, fibroblast proliferation)
- H2: Human evidence — none in tendon specifically, the extrapolation problem discussed
- H2: Comparator-peptide evidence (TB-500 for recovery — brief mention, cross-link)
- H2: What this means for practice
  - What's defensibly claimed: preclinical evidence is substantial and mechanistically coherent
  - What isn't yet claimed: human-validated efficacy for tendon repair
  - What a physician operating in FDA-compliant pathways might consider
- H2: Open research questions
- H2: FAQ (schema-marked)
- Sources: all studies cited with PubMed links

## Required citations
- All studies mentioned in the tables (8-10)
- At least one systematic-review-adjacent article on tendon healing peptides
- Clinicaltrials.gov search for "BPC-157 AND tendon" as of publication date

## Pinterest pin angles
1. "BPC-157 for tendon repair — the literature review"
2. "What the rat studies actually show (tendon)"
3. "Save: the BPC-157 tendon evidence table"

## Editor notes
- **This is the "Cochrane-adjacent" post that defines the Evidence Reviews hub.** Nail the format here; all other indication reviews follow this template.
- Table format: Study / Model / Dose (if relevant) / Outcome measure / Effect size / Limitations
- The "what this means for practice" section MUST remain descriptive — "a physician might consider" — not prescriptive.
- Note: Croatia + Korea lead this research. Mention the geographic concentration honestly — it's a limitation to pretending the field is broader than it is.
- Cross-link to the BPC-157 pillar (#1) from the "what this means" section. Reader should be able to bounce between evidence review and compound profile freely.
```

---

## Brief 3: How Peptides Signal — A Primer for Informed Readers (mechanism pillar)

```markdown
---
slug: how-peptides-signal
site: pepvise
hub: mechanism-science
post_type: mechanism_pillar
target_keyword: how peptides work
target_keyword_volume: 2900
target_keyword_difficulty: 28
secondary_keywords:
  - peptide signaling (1900, kd 22)
  - peptide mechanism of action (1600, kd 25)
  - what is a peptide (14800, kd 45)
  - how do peptides affect the body (1300, kd 20)
  - peptide pharmacology (880, kd 18)
search_intent: educational_technical
serp_dominant_format: explainer_with_diagrams
word_count_target: 3200
schema_types: [Article, FAQPage]
internal_links:
  - mechanism-science/peptide-half-life
  - mechanism-science/peptide-bioavailability
  - compound-profiles/bpc-157
  - compound-profiles/ghk-cu-peptide
analyst: The Analyst
review_status: brief
generated_at: 2026-04-21
legal_framing: research_only
---

## The opportunity
2,900/month at KD 28. Seed term "what is a peptide" is 14,800 at KD 45 — too competitive, but captured via the primary target. Top 10 is mostly undergraduate biology-adjacent (Healthline, WebMD, BiologyDictionary). None of them are rigorous enough for Alex-persona readers OR accessible enough for Sarah-persona. Wedge: rigorous explanation with citations, illustrated with simple SVG diagrams, sized to be skimmable but deep on demand.

## Required structure
- H1
- Legal disclaimer (lighter — this is mechanism, not compound-specific)
- 60-word direct answer: peptides are short amino-acid chains that signal via receptor binding, with effects that differ fundamentally from small-molecule drugs in several respects covered below
- H2: What a peptide is (molecular definition, length range, amino acid basics)
- H2: How peptides differ from proteins (size, folding, function)
- H2: Signaling — the receptor-binding basics
- H2: Agonists, antagonists, partial agonists — explained
- H2: Receptor classes relevant to peptides (GPCRs, tyrosine kinase receptors, nuclear receptors)
- H2: Downstream signaling cascades — the 3-4 most-cited pathways in peptide pharmacology
- H2: Why routes of administration matter (oral degradation, injection bypass)
- H2: Half-life, bioavailability — the PK basics (cross-link to dedicated posts)
- H2: The difference between signaling and therapeutic peptides
- H2: Selected examples — BPC-157 (brief), GLP-1 (brief), oxytocin (brief)
- H2: FAQ (schema-marked)
- Sources: biochemistry textbook references + landmark pharmacology reviews

## Required citations
- Lehninger Principles of Biochemistry (or equivalent textbook)
- Landmark review on peptide pharmacology
- Specific studies cited for receptor class examples

## Pinterest pin angles
1. "How peptides signal — a primer"
2. "Peptides vs proteins — the explainer"
3. "Save: the peptide signaling primer"

## Editor notes
- This is a foundational post. It gets linked from every compound profile as the "for background" link.
- Include at least 3 simple SVG diagrams: amino acid chain → peptide → protein; receptor binding cartoon; GPCR cascade simple version.
- No compound-specific dosing, no applications. This is mechanism + pharmacology only.
- Target an intelligent non-specialist reader. Not dumb, not condescending.
```

---

## Brief 4: Peptide Reconstitution Calculator (tool + pillar)

```markdown
---
slug: peptide-reconstitution-calculator
site: pepvise
hub: reconstitution-practical
post_type: pillar_with_calculator
target_keyword: peptide reconstitution calculator
target_keyword_volume: 12100
target_keyword_difficulty: 18
secondary_keywords:
  - peptide calculator (201000, kd 19) [cross-link canonical to injectcompass for this broader term]
  - how to reconstitute peptides (3600, kd 15)
  - how much bac water (720, kd 8)
  - peptide concentration calculator (480, kd 10)
search_intent: tool_use
serp_dominant_format: calculator_with_explainer
word_count_target: 1500_plus_calculator
schema_types: [Article, SoftwareApplication, FAQPage, HowTo]
internal_links:
  - reconstitution-practical/how-to-reconstitute-peptides
  - reconstitution-practical/bacteriostatic-water
  - mechanism-science/peptide-bioavailability
canonical_strategy: pepvise owns the "reconstitution calculator" term with research-context frame; injectcompass owns the broader "peptide calculator" with patient-education frame. Cross-link liberally.
analyst: The Analyst
review_status: brief
generated_at: 2026-04-21
legal_framing: research_only_strict
---

## The opportunity
12,100/month at KD 18. A gift. Top 10 is vendor calculators again. Our calculator + research-context framing + visual syringe + citation-backed methodology page ranks top-5 in 60-90 days.

## Required structure
- H1
- Legal & Medical Disclaimer block (research-use-only framing prominent)
- **Calculator in the first screen** — client-side React, inputs + outputs + visual syringe SVG + research-context banner below output
- Safety banner: "This calculator is an educational reference for reading published research protocols. It is not a dose recommendation. Any peptide administration should be within FDA-compliant pathways under licensed physician supervision."
- H2: How this calculator works (the math)
- H2: Worked example with a compound studied in the literature (BPC-157 in the Chang 2014 protocol — cite directly)
- H2: Why volume + concentration matters (brief PK explanation)
- H2: Assumptions the calculator makes
- H2: When the output needs verification
- H2: Research-context frame — what this calculator doesn't do (doesn't tell you what to inject, doesn't recommend any compound, doesn't override your prescriber)
- H2: FAQ (schema-marked)

## Required citations
- USP reconstitution standards
- Chang et al. 2014 for the worked example
- At least one published reconstitution protocol

## Editor notes
- **Canonical strategy:** PepVise owns this URL and this keyword. InjectCompass owns `/peptide-calculator` (the broader SERP, same math, patient-handout framing). Both calculators should use the same tested math library (`packages/calculators/peptide-math.ts`), different wrappers.
- The research-context framing is distinct from InjectCompass's patient-education framing. Same math, different audience posture.
- Embed the calculator; don't link out. The calculator IS the content.
- Unit-tested math required (inherit from the shared library).
```

---

## Brief 5: "Research Use Only" — What It Actually Means (safety/regulation pillar)

```markdown
---
slug: research-use-only-explained
site: pepvise
hub: safety-regulation-markets
post_type: regulation_pillar
target_keyword: research use only peptides
target_keyword_volume: 880
target_keyword_difficulty: 14
secondary_keywords:
  - research peptides legal (1300, kd 18)
  - are research peptides legal (720, kd 15)
  - research chemical peptides (480, kd 12)
  - research use only label (320, kd 10)
  - fda peptide rules (590, kd 17)
search_intent: informational_legal
serp_dominant_format: explainer_with_regulatory_detail
word_count_target: 2400
schema_types: [Article, FAQPage]
internal_links:
  - safety-regulation-markets/compounding-pharmacies
  - safety-regulation-markets/fda-503a-503b
  - safety-regulation-markets/where-to-buy-peptides-taxonomy
  - compound-profiles/bpc-157
analyst: The Analyst
review_status: brief
generated_at: 2026-04-21
legal_framing: regulatory_education
---

## The opportunity
Lower volume (880/mo at KD 14) but foundational. Every compound post's disclaimer references the "research use only" label — this post explains what that label actually means. Low SERP competition; easy top-5 ranking. Critical for establishing PepVise's editorial credibility on regulation.

## Required structure
- H1
- Opening PepVise legal disclaimer
- 80-word direct answer: "research use only" is a labeling designation used by chemical suppliers to indicate a product is not intended for human use and has not been approved by FDA or equivalent agencies for human administration; the legal implications are specific and often misunderstood
- H2: What the label literally means (FDA labeling rules, Research Use Only vs Investigational Use Only vs Not Approved)
- H2: What the label does NOT mean (it's not a universal waiver; it doesn't authorize human use; it doesn't exempt sellers from FTC rules on claims)
- H2: The legal framework
  - FDA's position on research-use-only substances marketed with implied human-use intent
  - The 2023 FDA enforcement letters to peptide vendors
  - State-level regulatory variation
  - The compounding pharmacy distinction (research-use-only vs 503A/503B compounds — these are different)
- H2: What this means for buyers (descriptive, not prescriptive)
- H2: The FDA's 2023 actions on peptide vendors — a timeline
- H2: International variation (Canada, EU, Australia) — summary
- H2: WADA's banned-substance list — peptides that are banned in competition
- H2: The "physician compliance" pathway — how some patients access peptides legally (through compounding pharmacies with physician prescription, under 503A)
- H2: FAQ (schema-marked)

## Required citations
- FDA guidance documents on research use only labeling
- FDA's 2023 enforcement letters (specific, cited)
- WADA Prohibited List current year
- Cochrane or FDA review of 503A compounding rules

## Editor notes
- **This is legal-adjacent content. Healthcare regulatory attorney review required before publication.** Per research doc §10.
- Tone: legal-journalist. Describe the framework. Don't advocate for or against.
- Cite FDA primary sources. Do not cite Healthline or WebMD characterizations of FDA policy.
- The 2023 FDA enforcement letters are worth a sidebar or callout — they're concrete examples of how the agency acts when research-use-only is marketed for human use.
- No dosing, no compound recommendations. This is purely regulatory framework.
- Cross-link to the "Where to Buy Peptides" taxonomy post (#122) and the FDA 503A/503B explainer (#124).
```
