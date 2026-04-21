# PepVise — Site Build Spec

Pairs with `content/pepvise/brand-book.md`, `docs/topical-maps/pepvise.md`, `docs/pepvise-sample-briefs.md`, `docs/pepvise-affiliate-partners.md`, `docs/pepvise-competitive-analysis.md`, `docs/pepvise-research.md`, and `CLAUDE.md`.

**Defining component:** `<EvidenceLedger>` — renders the strength-of-evidence summary for every compound profile. This is the site's signature artifact.

---

## 1. Information architecture

### URL structure

```
https://pepvise.com/
https://pepvise.com/{slug}                      # post at root
https://pepvise.com/guides/{hub-slug}            # hub landing
https://pepvise.com/peptide-reconstitution-calculator   # THE tool (research-context wrapper)
https://pepvise.com/about
https://pepvise.com/editorial-standards
https://pepvise.com/medical-disclaimer
https://pepvise.com/research-use-framework       # pepvise-specific trust page
https://pepvise.com/methodology                  # pepvise-specific trust page
https://pepvise.com/privacy / /terms / /affiliate-disclosure / /contact / /newsletter
https://pepvise.com/sitemap.xml / /robots.txt / /llms.txt / /feed.xml
```

Hub slugs:
- `guides/compound-profiles`
- `guides/mechanism-and-science`
- `guides/evidence-reviews`
- `guides/reconstitution-and-practical`
- `guides/safety-regulation-markets`

### Canonical rules

Same as other sites: self-canonical, no trailing slash, www → apex 301, http → https 301.

**Cross-site canonical strategy (per research doc §14):**
- Any "how to inject [compound]" content **canonicals to injectcompass.com** (the technique layer)
- Any "reconstitution calculator" with patient-education framing canonicals to injectcompass.com
- PepVise owns: compound profiles, evidence reviews, mechanism, research-context reconstitution, regulatory/safety content

### Global navigation (header)

```
[Logo]   Compounds ▾   Evidence ▾   Tools ▾   About                    [Get the Evidence Ledger]

Compounds dropdown:
  BPC-157, TB-500, GHK-Cu, CJC-1295, Ipamorelin, MOTS-c, Retatrutide, Thymosin, + "All compounds →"

Evidence dropdown:
  Evidence reviews by indication — tendon, gut, skin, longevity, weight, cognition
  Mechanism & science
  Regulatory framework

Tools dropdown:
  Peptide Reconstitution Calculator
  Evidence Ledger (all compounds)
  Side-Effect Ledger (master)
```

Mobile: hamburger → full-screen flat-list.

### Footer (4 columns)

Col 1 — Compounds (12 top compound links) | Col 2 — Guides (5 hubs) | Col 3 — About (About, Editorial Standards, Medical Disclaimer, Methodology, Research-Use Framework, Contact) | Col 4 — Fine print (Privacy, Terms, Affiliate Disclosure)

Bottom strip:
`© 2026 PepVise · Not medical advice · We do not sell peptides · Full Medical Disclaimer`

---

## 2. Page templates

8 templates:

### A — HomePage
Hero ("Research peptides, cited and clear") → Featured Evidence Ledger (master: 10 compounds color-coded) → 5 hub cards → Latest evidence reviews → Email capture → Trust strip → Medical disclaimer footer → Footer.

### B — HubPage
Standard structure. Hub hero → pillar cards → clusters grid → email capture → disclaimer → footer.

### C — CompoundProfileTemplate (signature)
The site's defining template.
1. Breadcrumbs + H1
2. Review stamp
3. **Legal & Medical Disclaimer block** (non-removable, research-use-only language)
4. **EvidenceLedger component** — full-width card, 4 rows:
   - Preclinical animal: [strength indicator] + summary count of studies
   - Human pilot: [strength indicator] + n count + trial names
   - Phase X: [strength indicator] + active/completed trials
   - FDA-approved indication: [present/absent] + indication if applicable
5. 80-word summary
6. What the compound is (molecular overview)
7. Mechanism (preclinical framing)
8. Human data walkthrough (if any)
9. Preclinical data table (with citations)
10. Discourse vs literature ("Claim X is common — here's what's actually published")
11. FDA status + regulatory context
12. Side effects reported in literature
13. Open questions
14. FAQ (schema-marked)
15. Related reading (cross-links)
16. Sources (12-15 citations)
17. Author bio + credentialed reviewer byline

### D — EvidenceReviewTemplate
Cochrane-adjacent. Inclusion criteria → preclinical synthesis (table) → human synthesis (table) → limitations → open questions → our assessment → FAQ → sources.

### E — MechanismTemplate
Educational technical post. Cleaner than CompoundProfile — no Evidence Ledger. Direct-answer intro → mechanism sections → examples → cross-links.

### F — CalculatorPage (Reconstitution Calculator)
Inherits from InjectCompass's CalculatorPage pattern. Research-context banner instead of patient-education banner.

### G — RegulationTemplate
For safety/regulation posts. Intro → legal framework → enforcement examples → international variation → what this means for X audience → FAQ.

### H — TrustPageTemplate
Clean reading layout (same as other sites).

---

## 3. Component inventory

Everything from InjectCompass plus:

### Defining components
- `<EvidenceLedger>` — 4-row strength-of-evidence summary. Props: compound, preclinical, humanPilot, phaseX, approved. Colorcoded strength (strong-green/moderate-amber/weak-red/absent-gray). Screenshot-friendly for Twitter sharing.
- `<EvidenceLedgerMaster>` — grid view of ledgers across multiple compounds, homepage feature
- `<PreclinicalStudiesTable>` — standardized table: study, model, dose, outcome, effect size, limitations
- `<HumanTrialsTable>` — similar for human trials
- `<ResearchContextBanner>` — the standard pepvise "not FDA-approved for human use" banner at the top of every compound post
- `<DiscourseVsLiteratureBlock>` — structured component for "common claim vs what's published"
- `<RegulatoryTimeline>` — for the FDA enforcement / regulatory history posts
- `<SideEffectLedger>` — master reference component (entry rows per compound)

### Shared with other peptide-cluster sites
- `<PeptideReconstitutionCalculator>` — shared library, rendered with pepvise research-context wrapper

---

## 4. SEO technical spec

### Meta tag patterns

| Page | Title | Description |
|---|---|---|
| Home | `PepVise — Research peptides, cited and clear` | `Citation-heavy literature analysis of BPC-157, TB-500, GHK-Cu, Retatrutide, and the research-peptide category. Evidence Ledger on every compound. No sales.` |
| Compound | `{Compound} — What the Evidence Shows | PepVise` | "Evidence Ledger for {compound}: preclinical data, human trials, FDA status, mechanism. Cited, calm, not for purchase." |
| Evidence review | `{Compound} for {Indication}: Literature Review | PepVise` | Cochrane-adjacent synthesis — inclusion criteria, effect sizes, limitations |
| Mechanism | `{Topic} — A Primer for Informed Readers | PepVise` | Technical explainer, textbook-level depth |

### Schema by template

| Template | Schema |
|---|---|
| Home | `Organization` + `WebSite` + `SearchAction` |
| Hub | `CollectionPage` + `BreadcrumbList` |
| Compound profile | `Article` + `MedicalWebPage` + `FAQPage` + `DrugDescription` (where FDA-approved) + `BreadcrumbList` |
| Evidence review | `Article` + `MedicalWebPage` + `FAQPage` + `BreadcrumbList` |
| Mechanism | `Article` + `FAQPage` |
| Calculator | `Article` + `SoftwareApplication` + `HowTo` + `FAQPage` |
| Regulation | `Article` + `FAQPage` |

### robots.txt

Pre-launch: Disallow all. Post-launch: standard allow + AI crawlers (GPTBot, ClaudeBot, PerplexityBot explicit allow).

### llms.txt

Standard format. Highlighting compound profiles + tools + evidence reviews.

### Internal linking

- Every compound profile → at least one evidence review in its cluster + the calculator + the mechanism primer
- Every evidence review → the compound profile + the mechanism primer
- Every mechanism post → linked from all compound profiles as "for background"
- Cross-site: any compound-specific technique content on PepTips canonicals to InjectCompass (not duplicated on PepVise either)

### Core Web Vitals

- LCP < 2.5s
- INP < 200ms
- CLS < 0.05
- JS bundle for a compound profile < 120KB gzipped

---

## 5. Calculator / Evidence Ledger engineering requirements

### EvidenceLedger component

- Renders 4 rows: preclinical / human pilot / Phase X / FDA-approved
- Each row shows a strength indicator (icon + color) + summary text + optional tooltip for source detail
- Must screenshot cleanly at 1200×630 for Twitter cards
- Fully static; no interactivity required (sharing via URL is enough)
- Accessible: ARIA labels, colorblind-safe (icon reinforces color)

### Peptide Reconstitution Calculator

Inherits from InjectCompass's shared math library (`packages/calculators/peptide-math.ts`):
- Same unit tests, same rounding rules, same conservatism
- Pepvise wrapper adds research-context banner instead of patient-education banner
- No dosing recommendation language — only reconstitution math
- All inputs labeled as "as described in published research protocols"

### Side-Effect Ledger

- Static data file: `lib/content/side-effects.ts`
- Table-rendered with: compound, reported adverse event, frequency in literature (where reported), citation
- Sortable, searchable
- Every entry cites a specific trial or case report
- FDA MedWatch and EMA post-marketing data integrated where available

---

## 6. Trust pages — key content

### 6.1 About (`/about`)

Opens with the site's mission ("Research peptides, cited and clear"). What we do (literature analysis, evidence ledgers, mechanism explainers, reconstitution math). What we don't (sell, recommend, prescribe, affiliate-link to vendors). How to reach us.

### 6.2 Editorial Standards (`/editorial-standards`)

- Sourcing: PubMed, clinicaltrials.gov, FDA docs. No Healthline as source. Secondary sources only to characterize discourse.
- Evidence Ledger is non-negotiable on every compound post
- No dosing prescriptions — language is "dose ranges reported in literature"
- No peptide-vendor affiliates — zero, ever
- Healthcare regulatory attorney review pre-launch + credentialed reviewer by month 9
- Corrections policy (dated, public, transparent)
- AI tooling disclosure

### 6.3 Medical Disclaimer (`/medical-disclaimer`)

Full-length disclaimer page. Key language:
- "Nothing on PepVise is medical advice"
- "Many compounds discussed are labeled for research use only and not FDA-approved for human use"
- "Peptide administration outside FDA-compliant clinical pathways may be illegal depending on jurisdiction"
- "Always consult a licensed physician operating within FDA-compliant pathways"
- Red-flag list (signs to seek immediate medical attention)

### 6.4 Research-Use Framework (`/research-use-framework`) — pepvise-specific

Deep explanation of:
- What "research use only" labeling means (FDA perspective)
- The legal framework around compounded peptides (503A/503B)
- The 2023 FDA enforcement actions on peptide vendors
- How physicians in FDA-compliant pathways access peptides (compounding pharmacies with prescription)
- What patients should know before engaging with research-use-only compounds
- International regulatory variation (EU, Canada, Australia)

### 6.5 Methodology (`/methodology`)

- How we synthesize evidence (inclusion criteria, study grading)
- How the Evidence Ledger works (what counts as Strong/Moderate/Weak/Absent)
- How we cite (primary sources only for health claims)
- How we version content (update notes, dated revisions)
- Schema strategy

### 6.6 Privacy / Terms / Affiliate Disclosure / Contact

Standard templates with pepvise brand + domain + medical framing.

---

## 7. Homepage copy

### Hero
**H1:** Research peptides, cited and clear.
**Subhead:** Calm, citation-heavy analysis of BPC-157, TB-500, GHK-Cu, Retatrutide, and the rest of the research-peptide category. Evidence Ledger on every compound. No sales. No dosing prescriptions. No vendor links.
**Primary CTA:** Browse the Evidence Ledger →
**Secondary CTA:** Read the BPC-157 profile

### Featured: Evidence Ledger Master
Grid of 10 compound cards. Each card: compound name + 4-row miniature Evidence Ledger. Clicking opens the full compound profile.

### Trust strip
- **Primary sources only.** PubMed, clinicaltrials.gov, FDA. No Healthline as source.
- **No peptide vendors.** We do not sell, recommend, or affiliate-link any peptide seller.
- **Evidence Ledger on every compound.** Not buried. Above the fold.

### Email capture
**Headline:** Get the 2026 Peptide Evidence Ledger.
**Subhead:** A 12-page PDF summary of where 10 major compounds sit — Preclinical / Human pilot / Phase X / Approved. Updated quarterly. Free.

---

## 8. Lead magnet — "The 2026 Peptide Evidence Ledger" PDF

12-page PDF. One page per compound (10 compounds) + intro + methodology. Each compound page: compound name, molecular overview (1 paragraph), Evidence Ledger (4 rows), key citations.

Updated quarterly. Version date in filename. Subscribers receive re-send on each update (opt-out available).

Welcome email sequence (3 emails, 7 days):
- Email 1: PDF delivery + "how to read the Evidence Ledger"
- Email 2 (Day 3): the compound most subscribers' eyes go to first (BPC-157) — link to full profile
- Email 3 (Day 7): the compound most over-hyped in public discourse (often retatrutide or GHK-Cu) — link to full profile

Day 8+: weekly digest — one compound, one new trial, or one evidence update per week.

---

## 9. Launch checklist

- [ ] Domain resolves to Vercel, SSL
- [ ] All 9 trust pages live including Research-Use Framework + Methodology
- [ ] At least 10 compound profiles live with Evidence Ledger rendering
- [ ] Peptide Reconstitution Calculator live + unit-tested
- [ ] Side-Effect Ledger skeleton live
- [ ] MedicalWebPage + Article schema on all compound posts
- [ ] robots.txt, sitemap.xml, llms.txt, feed.xml
- [ ] Cookie banner
- [ ] Email capture wired to Beehiiv
- [ ] 2026 Peptide Evidence Ledger PDF generated + delivered on signup
- [ ] Welcome sequence tested
- [ ] Analytics wired (Neon)
- [ ] Medical disclaimer footer site-wide
- [ ] Core Web Vitals green
- [ ] Search Console + Bing verified
- [ ] **Healthcare regulatory attorney review complete** (required, non-negotiable)
- [ ] Credentialed reviewer (MD/PharmD) identified for month-9 onboarding
- [ ] Zero peptide-vendor affiliate links exist anywhere in the codebase (grep check in CI)

---

## 10. Content at launch (10 Wave 1 posts)

1. BPC-157 — what the evidence shows (pillar)
2. TB-500 — the field guide (pillar)
3. GHK-Cu — evidence and hype (pillar)
4. Retatrutide — what the early trials say (pillar)
5. BPC-157 for tendon — literature review
6. BPC-157 for gut — literature review
7. How peptides signal (mechanism pillar)
8. How to reconstitute peptides (practical pillar)
9. Peptide Reconstitution Calculator (tool)
10. "Research use only" — what it actually means

Plus the Side-Effect Ledger master reference and the Evidence Ledger Master (homepage feature).

---

## 11. Handoff to Claude Code

> Read `CLAUDE.md`, `content/pepvise/brand-book.md`, `docs/topical-maps/pepvise.md`, `docs/pepvise-sample-briefs.md`, `docs/pepvise-affiliate-partners.md`, `docs/pepvise-competitive-analysis.md`, `docs/pepvise-research.md`, and `docs/pepvise-site-spec.md`. Scaffold a standalone Next.js 14 app at `~/Developer/active/pepvise-standalone` following the peptips/injectcompass medical-framing pattern.
>
> Implement:
> - 8 page templates: Home, Hub, **CompoundProfile** (signature), **EvidenceReview**, Mechanism, **Calculator**, Regulation, TrustPage
> - The `<EvidenceLedger>` component (4-row strength summary with color/icon indicators, screenshot-friendly)
> - `<EvidenceLedgerMaster>` homepage grid
> - `<PreclinicalStudiesTable>`, `<HumanTrialsTable>`, `<DiscourseVsLiteratureBlock>`, `<SideEffectLedger>`, `<RegulatoryTimeline>`
> - Shared Peptide Reconstitution Calculator library (shared with InjectCompass, research-context wrapper here)
> - Site-wide Medical Disclaimer footer (required)
> - robots.ts, sitemap.ts, llms.txt/route.ts, feed.xml
> - All 9 trust pages including Research-Use Framework + Methodology
> - Homepage with Evidence Ledger Master feature
> - 10 post stubs per §10 + the Side-Effect Ledger master + Evidence Ledger Master
> - SITE.launched = false
>
> Brand tokens: `ink-navy #192642, bone #F0EBE0, oxblood #7A2E3B, slate #5A6374, charcoal #1A1A1A`. Fonts: Newsreader or Tiempos Text (headlines) + Inter (body) + IBM Plex Mono (Evidence Ledger numerics).
>
> Commit as `feat: initial pepvise site — evidence ledger, compound profiles, reconstitution calculator`.
