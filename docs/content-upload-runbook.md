# Pepvise — Content Upload Runbook

**Audience:** anyone who wants to add a review, comparison, cluster, or listicle to pepvise without touching React, schema, or routing.

**Premise:** the data layer is the source of truth. Edit a TypeScript object, commit, push. Vercel rebuilds, the page goes live, schema regenerates, sitemap updates, internal links wire up.

---

## The two files you'll edit

| File | What lives here | When to use |
|---|---|---|
| `lib/content/reviews.ts` | Score-forward review-database entries | Individual compound reviews — "X review" pages with VerdictBlock + score + pros/cons |
| `lib/content/posts.ts` | Long-form prose posts (pillar / comparison / cluster / listicle) | Comparison posts (X-vs-Y), cluster articles, listicles, reference content |

A single review can have BOTH a `reviews.ts` entry (for the score-forward database) AND a `posts.ts` entry (for the long-form prose). The `[slug]` route checks `reviews.ts` first, falls back to `posts.ts`. So to add JUST a quick review, `reviews.ts` alone is enough.

---

## Adding a new individual review (most common)

**Goal:** new page at `https://pepvise.com/{slug}` with full Wirecutter-style review database treatment.

### 1. Open `lib/content/reviews.ts`

### 2. Append a new entry to the `ENTRIES` array (before the closing `];`)

Copy this template, fill in every field, paste before the `];`:

```ts
{
  slug: "new-compound-name",                   // kebab-case, becomes URL
  rank: 21,                                     // next sequential number
  variant: "also-ran",                          // our-pick | runner-up | budget | upgrade | also-ran
  name: "Compound Name",                        // brand or generic (display name)
  primaryDrug: "compound-key",                  // matches a key in lib/content/drug-images.ts (optional)
  alias: "alternate name or compound class",
  oneLineVerdict:
    "One-sentence summary that appears on the review-database index.",
  longVerdict:
    "Two- or three-sentence expansion of the verdict for the page top.",
  score: {
    evidence: 7.0,    // 0–10, methodology v1.2 dimension scoring
    mechanism: 7.0,
    human: 5.0,
    vendor: 6.0,
    safety: 6.5,
  },
  total: 6.3,                                   // weighted average; see /methodology/v1-2
  category: "category-slug",                    // for filtering on the index
  fdaStatus: "Status as of {date}",
  wadaStatus: "Class S0/S2/Not listed",
  pros: [
    "Specific, citable strength.",
    "Specific, citable strength.",
    "Specific, citable strength.",
  ],
  cons: [
    "Specific, citable limitation.",
    "Specific, citable limitation.",
    "Specific, citable limitation.",
  ],
  alternatives: ["other-compound-slug-1", "other-compound-slug-2"],
  references: [
    { label: "Author et al. YEAR, Trial, Journal", url: "https://pubmed.ncbi.nlm.nih.gov/PMID/" },
    { label: "FDA Drugs@FDA, Brand labeling", url: "https://www.accessdata.fda.gov/scripts/cder/daf/" },
    // ≥ 3 references per Pepvise CLAUDE.md
  ],
  lastUpdated: "2026-MM-DD",
  body: "One paragraph (200–400 words) of substantive prose. State the foundational trial. State the methodology score and why. State the legitimate critique. Use 'literature shows / trials report' framing — never 'you should' or 'this will'. Cite PMID or FDA in-line where helpful.",
},
```

### 3. Verify

```bash
pnpm typecheck       # must pass
pnpm audit:claims    # must pass — no forbidden-claim words
```

### 4. Commit + push

```bash
git add lib/content/reviews.ts
git commit -m "content(reviews): add {compound name}"
git push
```

Vercel auto-deploys. Page goes live in ~2 minutes. Sitemap regenerates. Schema (Review + AggregateRating + Drug + BreadcrumbList + Organization) emits automatically. The review appears on `/reviews`, `/comparisons`, and any hub it qualifies for.

---

## Adding a comparison post (X vs Y)

**Goal:** new page at `https://pepvise.com/{x}-vs-{y}` with ComparisonTemplate render.

### 1. Open `lib/content/posts.ts`

### 2. Append a new entry to the `posts` array

```ts
{
  slug: "compound-x-vs-compound-y",
  title: "Compound X vs. Compound Y, the Pepvise Comparison",
  h1: "Compound X vs. Compound Y: the head-to-head verdict",
  description:
    "Methodology v1.2 comparison of compound X and compound Y. {What the comparison covers}. ~150 chars.",
  hub: "evidence-reviews",
  postType: "comparison",
  publishedAt: "2026-MM-DD",
  updatedAt: "2026-MM-DD",
  readingTime: 12,                              // estimate, used in metadata
  status: "published",
  medicalDisclaimer: "required",
  ourPick: {
    name: "Pick name (or 'Indication-driven — no single winner')",
    tier: "Primary trial — TRIAL-NAME",
    reason:
      "Two- or three-sentence reasoning grounded in trial data. Why this is the pick, what the counter-case is, what shifts the recommendation.",
  },
  products: [
    {
      rank: 1,
      name: "Compound X (full name + dose + route)",
      tier: "Primary trial — TRIAL-NAME",
      summary:
        "150–250 word summary. Trial citation. Effect sizes. Methodology v1.2 score. What the legitimate criticisms are.",
    },
    {
      rank: 2,
      name: "Compound Y (full name + dose + route)",
      tier: "Primary trial — TRIAL-NAME",
      summary:
        "150–250 word summary, parallel structure to compound X.",
    },
  ],
  faq: [
    { q: "Question 1?", a: "Answer 1, 50–100 words, cited where possible." },
    { q: "Question 2?", a: "Answer 2." },
    { q: "Question 3?", a: "Answer 3." },
    { q: "Question 4?", a: "Answer 4." },
    { q: "Question 5?", a: "Answer 5." },
  ],
  sources: [
    { label: "Author et al. YEAR, Trial, Journal", url: "https://pubmed.ncbi.nlm.nih.gov/PMID/" },
    { label: "FDA Drugs@FDA, Compound X labeling", url: "https://www.accessdata.fda.gov/scripts/cder/daf/" },
    { label: "Pepvise methodology v1.2", url: "/methodology/v1-2" },
    // 6+ sources for a comparison post
  ],
},
```

### 3. (Optional) Add a comparison table

If you want the sortable `<ComparisonTable>` to render with row data, add an entry to `lib/content/comparison-tables.ts` keyed by the same slug. Pattern:

```ts
"compound-x-vs-compound-y": {
  columns: ["compound-x", "compound-y"],
  rows: [
    { attribute: "Active ingredient", values: { "compound-x": "...", "compound-y": "..." } },
    // ... 8–12 rows
  ],
  sources: [...],
},
```

### 4. Verify, commit, push (same as review workflow)

---

## Adding a cluster post (deep-dive, single topic)

**Goal:** long-form post at `https://pepvise.com/{slug}` rendered via ClusterTemplate.

Same pattern as comparison post but `postType: "cluster"`. Drop the `products[]` field; populate `items[]` instead if the post is structured as numbered/bulleted findings, or just fill the `body` field with a single prose block. The ClusterTemplate handles the rest.

---

## Adding a listicle (numbered ranking)

`postType: "listicle"`. Use the `items[]` field with `{rank, name, summary}` per item. ListicleTemplate renders.

---

## Forbidden-words audit

`pnpm audit:claims` blocks language that violates EU Regulation 1924/2006 (medicinal claims) and country-specific overlays. Forbidden patterns include `treats`, `cures`, `heals`, `prevents disease`, `prevents cancer` (English), plus equivalents in DE, FR, IT, ES, NL, PL, SV, PT, RO, CS, NO.

If you genuinely need one of these words idiomatically (e.g. "X treats Y as a class of drugs"), add this comment on the line above:

```ts
// audit-claims:allow — explanation of why this is not a medical claim
```

The marker allowlists the line + the next 8 lines. Use sparingly.

---

## Naming + slug conventions

- kebab-case always (`compound-name`, not `compoundName` or `compound_name`)
- Slug matches the highest-volume target keyword where reasonable
- For comparisons: `{compound-x}-vs-{compound-y}` in alphabetical order
- For brand/generic split (e.g. Ozempic + Wegovy = same molecule): one entry per brand, alias points at the molecule
- Never include dates in slugs (stale-looking on refresh; use `updatedAt` field)

---

## Methodology version pill

Every review is scored against a methodology version. Current is v1.2 (`SITE.methodologyVersion` in `lib/content/site.ts`). When you change the scoring rubric materially:

1. Bump version in `SITE.methodologyVersion` (v1.2 → v1.3)
2. Create new versioned page at `app/[locale]/methodology/v1-3/page.tsx`
3. Keep the old page (`v1-2`, `v1-1`) live — old reviews still reference it
4. New reviews carry the new version pill automatically; existing reviews keep their pre-bump pill until you re-score them

Document the change in `docs/methodology-changelog.md` (create if absent).

---

## Translation workflow (next quarter)

Translations live in `i18n/dictionaries/{locale}.json`. The `[locale]/[slug]` route renders the same `Post` or `ReviewEntry` data layer in the locale-appropriate language UI. Per-post translation of `title`, `description`, `body`, and `oneLineVerdict` for non-EN locales is currently handled by either:

(a) hand-translating into a parallel `i18n/content/{locale}/posts.ts` map (clean separation, longer file count), or
(b) adding a `translations: { de: { title, body, ... }, fr: {...} }` field to each entry (one-file-per-content-slug, more complex types).

Pepvise has not yet committed to one approach. When you start the localisation push, pick (a) for clarity unless dictionary maintenance becomes painful.

---

## Don't forget

- **No peptide vendor links.** Ever. Pre-commit hook should block. Site-ending if crossed.
- **No dosing prescriptions.** "Trials report 5–15 mg/week," never "take 10 mg/week."
- **Generic + brand on first mention.** "semaglutide (Ozempic, Wegovy)" — always both the first time the molecule appears in a post.
- **Citations or cut.** Every factual claim has a primary source.
- **One original sentence per H2.** Methodology requirement.
- **Refresh `lastUpdated`** when you edit an existing entry.
- **Never link to other sites in the network publicly.** plasticfreelab, peptips, injectcompass, larderlab, circadianstack, thatcleanchef stay strictly separate.

---

## Pointers

- Network constitution: `~/Developer/active/health-network/CLAUDE.md`
- Pepvise CLAUDE.md: `./CLAUDE.md`
- Brand book: `./content/brand-book.md`
- Methodology v1.2: `/methodology/v1-2` (web) or `app/[locale]/methodology/v1-2/page.tsx` (source)
- Reviewers: `lib/content/reviewers.ts`
- Drug images manifest: `lib/content/drug-images.ts`
- SEO readiness audit: `docs/seo-readiness-audit-2026-04.md`
- Launch blockers: `docs/launch-blockers.md`
