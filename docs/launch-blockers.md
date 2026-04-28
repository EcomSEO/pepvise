# Pepvise — Launch Blockers (2026-04-28)

What stands between pepvise.com today and "leave it alone for 3 months and just upload content."

Status as of branch `feat/seo-readiness-2026-04` @ `37f3dd2`.

---

## TL;DR

**Three blockers. Two are 30-minute tasks. One is the merge.**

| Blocker | Owner | Time | Status |
|---|---|---|---|
| 1. Merge `feat/seo-readiness-2026-04` PR | Fabian | 5 min | ❌ open — review + merge |
| 2. Fill operator placeholders (3 files) | Fabian | 30 min | ❌ pending Fabian/legal |
| 3. Set Vercel env vars (Beehiiv + Neon) | Fabian | 15 min | ❌ pending |

After those three, pepvise is in pure content-upload mode. The current build, schema, EU compliance, audit:claims gate, and 20-review database are production-ready. The blockers below are all single-input gaps that Claude Code cannot fill autonomously.

---

## Blocker 1 — Merge the SEO-readiness PR

**Branch:** `feat/seo-readiness-2026-04`
**Last commit:** `37f3dd2`
**PR URL:** https://github.com/EcomSEO/pepvise/pull/new/feat/seo-readiness-2026-04

**What ships on merge:**
- 11 new GLP-1/dual-agonist + research-peptide reviews
- 3 new comparison posts (wegovy-vs-zepbound, mounjaro-vs-ozempic, ozempic-vs-wegovy)
- audit:claims script wired into pnpm + 2 false-positive markers added
- Q2 2026 keyword priority research file
- SEO readiness audit doc
- `SITE.databaseEntries` bumped from 9 to 20

**On deploy:** `/mounjaro` flips from 404 to 200, plus 15 other new pages go live. Sitemap auto-regenerates from the union of `posts.ts` and `reviews.ts`.

**Action:** review the PR, merge to main. Vercel auto-deploys.

---

## Blocker 2 — Operator placeholders (legal pages)

These are TTDSG §5 (German Telemedia Act) and GDPR Art 13/14 requirements. Without them filled, the EU sites are non-compliant.

### File 1: `lib/content/impressum.ts`

```ts
operator: "[Operator Name]",  // ← needs the legal entity name
// + address fields below — verify all `[Address]` placeholders
```

What to fill: the registered business name + full registered address as it appears on official corporate filings. If the legal entity is a private individual, that person's full legal name + service address (not a P.O. box). German Impressum law is strict about completeness.

### File 2: `lib/content/privacy-policy.ts`

```ts
const OPERATOR = "[Operator Name]";   // line 27
const ADDRESS = "[Address]";          // line 28
const CONTACT_EMAIL = "privacy@pepvise.com";  // line 26 — verify mailbox is reachable
```

What to fill: same operator + address as Impressum. Verify that `privacy@pepvise.com` actually delivers to a monitored inbox before launch — DSR (data-subject-request) emails carry GDPR response-time obligations (1 month).

### File 3: `lib/content/terms.ts`

```ts
const JURISDICTION = "[Operator's chosen jurisdiction]";  // line 13
```

What to fill: the legal jurisdiction governing the Terms of Service. Typically the country/state where the operator is incorporated. For an EU-based operator, this is usually the member state of incorporation.

### Recommended: lawyer review

Per `00-master-orchestration.md` §"Operator placeholders": budget $300–800 for a one-time healthcare-attorney review of Terms + Medical Disclaimer + Privacy Policy before public launch. This is not optional for a YMYL peptide-information site — the regulatory exposure justifies the spend once.

---

## Blocker 3 — Vercel environment variables

These are ops-environment, not code. Set them in the Vercel dashboard for the `pepvise-ecom-seo` project.

| Env var | Value | Used by |
|---|---|---|
| `BEEHIIV_API_KEY` | API key from Beehiiv dashboard | Newsletter form submission |
| `BEEHIIV_PUBLICATION_ID` | Publication ID from Beehiiv | Newsletter form submission |
| `NEON_DATABASE_URL` | Postgres connection string from Neon project | Per-site analytics + event tracking |

Without these:
- Newsletter signups fail silently (form submits but no list growth)
- Analytics events don't store (no per-page-view tracking, no affiliate-click tracking)

The repo doesn't ship a `.env.example` template. Quickest path: create one alongside this commit, or paste the keys directly into Vercel's "Environment Variables" UI for production scope.

---

## Not-blocking, but worth knowing

These don't prevent the 3-month content-only window — they're nice-to-haves for the next iteration.

### Methodology v1.1 page

Versioning rule: each review's methodology pill should resolve to a versioned page. The `v1-2` page exists; the `v1-1` page does not. No current review is scored against v1.1 (all 20 entries are `lastUpdated: 2026-04-26` or later, scored under v1.2), so no pill resolves to a 404 today. But if you ever bump to v1.3, the pattern needs the historical v1.2 page kept live and the v1.3 page added — and the same applies retroactively if you re-score anything against v1.1.

### 5 more comparison posts to fully hit Gate B

Comparison count is currently 3 of the prompt's 8-comparison Gate B target. The remaining 5: rybelsus-vs-ozempic, semaglutide-vs-tirzepatide, victoza-vs-ozempic, saxenda-vs-wegovy, and the 3-way ozempic-vs-mounjaro-vs-wegovy. None are blocking but each adds ranked-keyword surface area.

### Lighthouse 0.95 / LCP <1s

Current 0.94 / 1183ms. Closing the gap requires: a font subset audit, a JS bundle audit, and possibly a server-component conversion of any client islands on the home and review templates. Phase 11 of the prompt. Estimate: 2–4 hours of focused optimization.

### Real reviewer credentials

`lib/content/reviewers.ts` has 4 reviewer entries with `licenseStateBoardUrl` and `orcidUrl` fields populated. **Verify each URL resolves to a real public board lookup + real ORCID record before public launch.** This is the single biggest E-E-A-T lever pepvise has — a YMYL site where the reviewer credentials don't verify undermines the whole methodology framing.

### kie.ai photography manifest (Phase 9)

The hero + category atmosphere shots per Phase 9 of the prompt have not been generated. Current placeholders work but a brand-quality refresh would help. Bounded task — generate from the 6-shot manifest in the prompt.

### Sweden compound-stub verification

Per Phase 7, the Sweden-restricted-compound stubs at `/sv/{slug}` for compounded-semaglutide, melanotan-i, melanotan-ii, bpc-157, tb-500 should return `x-robots-tag: noindex` plus a localised compliance notice. The compliance code is shipped (`lib/compliance/sweden-restrictions.ts`); the URL routing convention needs one round of live verification before next launch announcement.

---

## After the 3 blockers are cleared

You're in **append-only content mode**. See `docs/content-upload-runbook.md` for the workflow. TL;DR: edit `lib/content/reviews.ts` or `lib/content/posts.ts`, push to main, Vercel rebuilds. No MDX compilation, no separate database, no schema migrations. The data layer is the source of truth and the file format is documented.

---

## Pointers

- Content upload workflow: `docs/content-upload-runbook.md`
- SEO readiness audit: `docs/seo-readiness-audit-2026-04.md`
- Q2 keyword priority: `docs/research/pepvise-keyword-priority-2026-q2.md`
- Master orchestration (network-wide): `~/Library/Application Support/Claude/.../health-network-seo-prompts/00-master-orchestration.md`
