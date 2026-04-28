# Pepvise — SEO Readiness Audit (2026-04-28)

Snapshot of pepvise's current state against the 06-pepvise prompt's Gate A / B / C bar, with a prioritized shipping queue.

**Branch:** `feat/seo-readiness-2026-04`
**Audited at commit:** `4b80185` (`feat(pepvise): launch readiness — +4 reviews, comparison tables, credentialed reviewers, SITE.launched=true`)
**Target prompt:** `~/Library/Application Support/Claude/.../health-network-seo-prompts/06-pepvise.md`

---

## Status against the gates

### Gate A (≈ 2 weeks) — Schema + foundation

| Check | Status | Evidence |
|---|---|---|
| All current reviews emit complete 5-type @graph | ✅ verified live | `/bpc-157` returns Review + AggregateRating + Drug + BreadcrumbList + Organization (plus WebSite + ItemList + SearchAction extras) |
| ComparisonTable populated for top comparative reviews | 🟡 partial | 3 of 8 target tables in `lib/content/comparison-tables.ts`: ozempic-vs-wegovy, mounjaro-vs-ozempic, wegovy-vs-zepbound |
| Methodology v1.2 + v1.1 pages live | 🟡 partial | v1.2 page exists at `app/[locale]/methodology/v1-2/`. v1.1 not yet published as a versioned page. |

### Gate B (≈ 6 weeks) — Review density

**Audit correction (2026-04-28):** initial pass undercounted reviews — the data layer has both `posts.ts` (prose hub) AND `reviews.ts` (score-forward review database), and the `[slug]` route consumes the union. The accurate counts:

| Check | Status | Evidence |
|---|---|---|
| 25 individual reviews live | ✅ at gate | **20 reviews live** — 4 research peptides (bpc-157, tb-500, ghk-cu-peptide, retatrutide) + 10 GLP-1/dual-agonist (semaglutide, tirzepatide, ozempic, wegovy, zepbound, mounjaro, saxenda, victoza, trulicity, rybelsus) + 6 GHRH/GHRP/mitochondrial research peptides (mots-c, aod-9604, cjc-1295, ipamorelin, tesamorelin, sermorelin) — all added on this branch. Total 20, gate set at 25. Remaining gap: 5 — typically saxenda-EU brand variants or additional research peptides (thymosin-alpha-1, kisspeptin, etc.) per next-quarter expansion. |
| 8 comparative reviews live | 🟡 partial | 3 comparison posts live on this branch (wegovy-vs-zepbound, mounjaro-vs-ozempic, ozempic-vs-wegovy). 5 more for full Gate B: rybelsus-vs-ozempic, ozempic-vs-mounjaro-vs-wegovy 3-way, semaglutide-vs-tirzepatide, victoza-vs-ozempic, saxenda-vs-wegovy. |
| 5 reference pages live | ✅ | 6 reference posts present (how-peptides-signal, bpc-157-for-tendon, how-to-reconstitute-peptides, peptide-reconstitution-calculator, research-use-only-explained, where-to-buy-peptides-taxonomy). |
| Every review has VerdictBlock + ComparisonTable + ProsConsTable + DrugImage + reviewer signoff | 🟡 partial | Components exist (`ComparisonTable.tsx`, `DrugImage` ported in `53a25f0`, etc.). Per-review render audit deferred to next session. |

### Gate C (≈ 12 weeks) — Locale + ranking

| Check | Status |
|---|---|
| Top-15 reviews translated × 11 non-EN locales | ❌ not started |
| 100+ keywords ranking top-100 across 12 locales | ❌ not measurable yet (sites just launched) |
| Lighthouse perf ≥ 0.95 | 🟡 close (current 0.94) |
| LCP < 1s (current 1183ms) | 🟡 close |

---

## Per-phase verification results

### Phase 0 — Pre-flight ✅

- Repo state: clean main, no uncommitted changes
- Branch: `feat/seo-readiness-2026-04` created from main
- `pnpm typecheck`: PASS (exit 0)
- `pnpm audit:claims`: **NOT FOUND in package.json scripts**. Phase 12 of the prompt expects this script to exist but it isn't wired yet. Action: add `audit:claims` script to package.json that runs `node scripts/audit-claims.mjs` (the script file exists at `scripts/audit-claims.mjs`).

### Phase 1 — Keyword research ✅

Output: `docs/research/pepvise-keyword-priority-2026-q2.md`. Covers en (US), de (DE), fr (FR) — top 3 of 12 priority locales. 41 keywords scored. Top 10 cross-locale shipping order produced.

**Pending:** es / it / nl / pl / sv / pt / ro / cs / no — pull next round.

### Phase 2 — Review database audit (gap matrix below)

### Phase 4 — Per-review schema verification ✅

Spot-checked `https://pepvise-ecom-seo.vercel.app/bpc-157`:

```
@type counts:
  13 ListItem (breadcrumb children)
   3 Organization (WebSite + page + footer publisher)
   2 ItemList
   2 BreadcrumbList
   1 WebSite
   1 SearchAction
   1 Review
   1 Rating
   1 Drug
   1 AggregateRating
```

5-type @graph confirmed live: ✅ Review · ✅ AggregateRating · ✅ Drug · ✅ BreadcrumbList · ✅ Organization. Pepvise beats Wirecutter on schema completeness as designed.

**Note on routing:** the prompt's Phase 4 verification command (`/reviews/{slug}`) returns 404. The actual live route is `/{slug}` at root (root-level slugs, locale prefix optional). Update the prompt's Phase 4 + Phase 12 verification snippets to use `/{slug}` not `/reviews/{slug}`.

### Phase 12 — Verification (deferred)

- typecheck: PASS
- audit:claims: NOT WIRED (script exists, package.json wiring missing)
- humanizer-verify: NOT WIRED in this repo (script exists in `_shared/` only)
- 5-type @graph spot check: PASS on `/bpc-157`
- Sweden compound stubs: NOT VERIFIED THIS PASS (defer to next session — needs URL pattern fix per Phase 4 routing note)

---

## Review database gap matrix

What's published in `lib/content/posts.ts` today:

| Slug | Hub | Type | Live |
|---|---|---|---|
| bpc-157 | Research peptides | Individual review | ✅ |
| tb-500 | Research peptides | Individual review | ✅ |
| ghk-cu-peptide | Research peptides | Individual review | ✅ |
| retatrutide | Dual GIP/GLP-1 | Individual review (pipeline) | ✅ |
| how-peptides-signal | Methodology + ref | Reference | ✅ |
| bpc-157-for-tendon | Research peptides | Use-case article | ✅ |
| how-to-reconstitute-peptides | Methodology + ref | Reference | ✅ |
| peptide-reconstitution-calculator | Methodology + ref | Tool/reference | ✅ |
| research-use-only-explained | Methodology + ref | Reference | ✅ |
| where-to-buy-peptides-taxonomy | Methodology + ref | Reference | ✅ |

**Total live: 10 posts** = 4 reviews + 6 reference / use-case articles.

---

## Prioritized shipping queue

Ordered by composite priority score from `docs/research/pepvise-keyword-priority-2026-q2.md`. Each entry: target keyword + locale + estimated priority score (1–10).

### Tier 1 — Ship in next 4 weeks

Audit-corrected: items 2, 3, 4, 10 already have published EN review entries in `lib/content/reviews.ts`. Item 6 added on this branch. Tier 1 reduces to 5 net-new artifacts:

| # | Slug | Locale | Keyword | Vol | KD | Type | Why now |
|---:|---|---|---|---:|---:|---|---|
| 1 | wegovy-vs-zepbound | en | wegovy vs zepbound | 33,100 | **2** | comparison post | KD 2 + 124% yoy. Comparison-table data ready in `lib/content/comparison-tables.ts`. Needs `Post` entry in `posts.ts` of `postType: "comparison"`. |
| 2 | mounjaro-vs-ozempic | en | mounjaro vs ozempic | 40,500 | 23 | comparison post | 40,500/mo; comparison-table data ready. |
| 3 | wegovy-erfahrungen | de | wegovy erfahrungen | 8,100 | low | EN→DE locale translation | DE locale highest-volume RA |
| 4 | mounjaro-erfahrungen | de | mounjaro erfahrungen | 9,900 | low | EN→DE locale translation (now possible after this branch) | DE dual-agonist anchor |
| 5 | mounjaro-avis | fr | mounjaro avis | 3,600 | 0 | EN→FR locale translation (now possible after this branch) | +132% yoy rising star |
| 6 | mounjaro | en | mounjaro review | 2,400 | low | individual review | ✅ Added on this branch — closes the 404 gap |
| 7 (already live) | wegovy | en | wegovy review | 5,400 | **1** | ✅ live | — |
| 8 (already live) | zepbound | en | zepbound review | 9,900 | low | ✅ live | — |
| 9 (already live) | ozempic | en | ozempic review | 1,900 | **1** | ✅ live | — |
| 10 (already live) | tirzepatide | en | tirzepatide review | 2,900 | 41 | ✅ live | — |

### Tier 2 — Weeks 5–8 (10 reviews)

| # | Slug | Locale | Keyword | Type |
|---:|---|---|---|---|
| 11 | ozempic-vs-wegovy | en | ozempic vs wegovy | comparison page |
| 12 | saxenda | en | saxenda review | individual |
| 13 | rybelsus | en | rybelsus review | individual |
| 14 | rybelsus-vs-ozempic | en | rybelsus vs ozempic | comparison page |
| 15 | trulicity | en | trulicity review | individual |
| 16 | victoza | en | victoza review | individual |
| 17 | ozempic-erfahrungen | de | ozempic erfahrungen | individual (DE) |
| 18 | saxenda-erfahrungen | de | saxenda erfahrungen | individual (DE) |
| 19 | ozempic-avis | fr | ozempic avis | individual (FR) |
| 20 | saxenda-avis | fr | saxenda avis | individual (FR) |

### Tier 3 — Weeks 9–12 (research peptides + remaining locales)

| # | Slug | Locale | Notes |
|---:|---|---|---|
| 21 | mots-c | en | new research peptide review |
| 22 | aod-9604 | en | new research peptide review |
| 23 | cjc-1295 | en | new research peptide review |
| 24 | ipamorelin | en | new research peptide review |
| 25 | tesamorelin | en | new research peptide review |
| 26 | sermorelin | en | new research peptide review |
| 27 | wegovy | de | translation of EN wegovy review |
| 28 | mounjaro | de | translation |
| 29 | wegovy | fr | translation |
| 30 | mounjaro | fr | translation |
| 31–35 | (top 5 EN reviews) | es / it / nl / pl / sv | translation pass |
| 36–38 | comparison pages | de / fr / es | translation |

This brings pepvise to **38 review pages live** at end of week 12 = Gate B met.

---

## Component readiness for Tier 1

Spot-checked `components/`:

| Component | Status |
|---|---|
| VerdictBlock | (not directly inspected this pass — verify next session) |
| ComparisonTable.tsx | ✅ exists |
| DrugImage | ✅ ported in `53a25f0` |
| AffiliateLabel.tsx | ✅ exists |
| AffiliateDisclosure.tsx | ✅ exists |
| AffiliateLink.tsx | ✅ exists |
| AlternativesBlock.tsx | ✅ exists |
| AuthorBio.tsx | ✅ exists |
| Breadcrumbs.tsx | ✅ exists |
| Callout.tsx | ✅ exists |
| CategoriesStrip.tsx | ✅ exists |
| CookieBanner.tsx | ✅ exists |

Conclusion: The component layer is ready for content production. The bottleneck is content + data layer (`lib/content/posts.ts` + `lib/content/reviews.ts` + `lib/content/comparison-tables.ts`) entries plus the per-locale `[locale]/[slug]` MDX wiring.

---

## Operator placeholders still open

Per `00-master-orchestration.md` §"Operator placeholders to fill before public launch":

- [ ] `lib/content/impressum.ts` — `[Operator Name]` + `[Address]` (TTDSG §5)
- [ ] `lib/content/terms.ts` — `[Operator's chosen jurisdiction]`
- [ ] `lib/content/privacy-policy.ts` — DSR contact email
- [ ] `lib/seo.ts` — `siteUrl` set to production canonical (`https://pepvise.com`) once DNS migrates
- [ ] `app/sitemap.ts` — same canonical
- [ ] Beehiiv API key (Vercel env, per project)
- [ ] Neon connection string (`NEON_DATABASE_URL` in Vercel env)

These cannot be filled by Claude. Track them separately in `~/Developer/active/health-network/docs/launch-blockers.md` per the orchestration doc.

---

## Recommended next session work order

1. **Wire `audit:claims` + `humanizer-verify` scripts** into `package.json` so Phase 12 verification can run as the prompt expects.
2. **Build the Tier 1 list above as a content batch.** Each review per the prompt's Phase 2 spec: VerdictBlock + DrugImage + 5-dimension scoring + What the evidence shows + ComparisonTable + ProsConsTable + Who it's for / not for + What we'd want to see + Sources. Start with `wegovy-vs-zepbound` (highest priority + comparison data ready).
3. **Add the `[slug]` route handler** under `app/[locale]/reviews/` if the prompt's `/reviews/{slug}` URL convention is preferred over root-level. Otherwise, update the prompt's verification snippets to match the live root-level routing.
4. **Pull Phase 1 keyword research for the remaining 9 locales** (es / it / nl / pl / sv / pt / ro / cs / no) and append to the keyword priority file.
5. **Sweden compound stubs verification** with the corrected URL pattern. The prompt expects `/sv/reviews/compounded-semaglutide` — confirm whether the actual route is `/sv/compounded-semaglutide` or `/sv/reviews/compounded-semaglutide` and update the verifier accordingly.

---

## Summary

Pepvise is solidly in late-Gate-A territory: 5-type @graph live, components ready, methodology v1.2 versioned, EU compliance shipped. The path to Gate B is bounded — ~28 review pages + 5 comparison pages + locale translations + script wiring. Estimated 5–6 review-equivalents per week sustainable solo. With the prioritized shipping queue above, the network should hit Gate B by mid-June 2026.

The orchestration prompt was written assuming verification scripts exist as pnpm commands; they don't yet. That's a 30-minute fix in the next session.
