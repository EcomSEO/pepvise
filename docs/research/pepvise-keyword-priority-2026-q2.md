# Pepvise — Keyword Priority Research (2026 Q2)

**Method:** DataForSEO Labs `google_keyword_overview` (live API), 2026-04-28
**Locales covered (this round):** en (US), de (DE), fr (FR) — top 3 of 12 priority locales
**Next round:** es / it / nl / pl / sv / pt / ro / cs / no — to be pulled when EN/DE/FR coverage shipping
**Owner:** SEO readiness (feat/seo-readiness-2026-04)

---

## How to read this file

Each row has live data from DataForSEO at the date above:

- **Vol** = monthly search volume (location-specific)
- **KD** = keyword difficulty (0–100; lower = easier to rank)
- **Trend yoy** = 12-month volume change
- **Intent** = informational / commercial / transactional / navigational
- **Status** = pepvise's coverage state for the keyword (✅ live, 🟡 partial, ❌ no review yet, 🚫 out of scope)
- **Priority** = `(Vol × trend_factor) ÷ (KD + 1) × SERP_weakness` — normalized to 1–10. Higher = ship sooner.

`SERP_weakness` is set by hand from the cookbook formula in `_shared/dataforseo-cookbook.md`. Reviews where the SERP is dominated by drugs.com / Mayo Clinic / Healthline get a low weakness modifier; reviews with telehealth-clinic-blog top 10 get a high modifier. Initial values below are estimated; refine with `serp_organic_live_advanced` per keyword in the next pass.

---

## EN (US) — primary

### Hub 1: GLP-1 receptor agonists

| Keyword | Vol | KD | Trend yoy | Intent | Status | Priority |
|---|---:|---:|---:|---|---|---:|
| **wegovy review** | 5,400 | **1** | +22% | commercial | ❌ | **9.5** |
| **ozempic review** | 1,900 | **1** | −56% | informational | ❌ | **8.5** |
| saxenda review | 590 | **1** | −45% | commercial | ❌ | 6.0 |
| trulicity review | (no vol score) | 19 | — | commercial | ❌ | 4.0 |
| rybelsus review | (no vol score) | 12 | — | informational | ❌ | 5.0 |
| victoza review | (low) | — | — | commercial | ❌ | 3.5 |

**Headline:** wegovy review and ozempic review both score KD **1** — these are open-goal opportunities. Pepvise should write both first. Saxenda also at KD 1 but lower volume.

### Hub 2: Dual GIP/GLP-1 agonists

| Keyword | Vol | KD | Trend yoy | Intent | Status | Priority |
|---|---:|---:|---:|---|---|---:|
| **zepbound review** | 9,900 | (low — undeclared) | −33% | transactional | ❌ | **9.5** |
| **tirzepatide review** | 2,900 | 41 | +22% (+52% m-o-m) | commercial | ❌ | 7.0 |
| mounjaro review | 2,400 | (low — undeclared) | −47% | informational | ❌ | 7.5 |

**Headline:** zepbound review at 9,900/mo and KD undeclared (commonly KD 5–10 in this range) is the single biggest GLP-1 review opportunity in EN. Tirzepatide review has 41 KD but +52% m-o-m trend is the second-most-accelerating term in the entire data set.

### Hub 3: Research peptides

| Keyword | Vol | KD | Trend yoy | Intent | Status | Priority |
|---|---:|---:|---:|---|---|---:|
| **bpc-157 review** | 3,600 | **6** | −56% | informational | ✅ live | refresh |
| tb-500 review | 90 | 24 | −36% | transactional | ✅ live | refresh |
| ghk-cu review | (small) | — | — | informational | ✅ live | refresh |

**Note:** All three currently published. Trend is negative for the head terms — research-peptide search volume is contracting as the FDA crackdown on US compounding accelerates. Pepvise's strategy here is depth + EU locale coverage, not US head-term chase.

### Hub 4: Comparative reviews

| Keyword | Vol | KD | Trend yoy | Intent | Status | Priority |
|---|---:|---:|---:|---|---|---:|
| **mounjaro vs ozempic** | 40,500 | 23 | −18% | informational | ✅ table | needs review page |
| **wegovy vs zepbound** | 33,100 | **2** | **+124%** | informational | ✅ table | needs review page |
| **ozempic vs wegovy** | 12,100 | 16 | −18% | informational | ✅ table | needs review page |
| rybelsus vs ozempic | 2,900 | 7 | −45% | informational | ❌ | 6.5 |
| ozempic vs mounjaro vs wegovy | (no vol score) | 32 | — | commercial | ❌ | 5.5 |

**Headline:** comparison-table data exists for the top 3 in `lib/content/comparison-tables.ts` but the dedicated comparison review pages are not yet shipped. **wegovy vs zepbound** at KD **2** with **+124% yoy** is the single highest-arbitrage opportunity in the whole keyword set — write this first.

### Hub 5: Methodology + reference

| Keyword | Vol | Status |
|---|---:|---|
| how to read peptide reviews | low | ❌ aspirational |
| what is glp-1 | high | ✅ partial via posts |
| peptide vs hormone difference | low | ❌ |

Reference pages are about scoring trust signals (E-E-A-T) more than head-term traffic. Methodology already at v1.2 with versioned page live.

---

## DE (DE) — second priority locale

### Hub 1: GLP-1 RA (DE)

| Keyword | Vol | KD | Trend yoy | Intent | Status | Priority |
|---|---:|---:|---:|---|---|---:|
| **wegovy erfahrungen** | 8,100 | (undeclared) | −19% | commercial | ❌ | **9.5** |
| **ozempic erfahrungen** | 2,900 | **2** | −47% | informational | ❌ | 8.0 |
| saxenda erfahrungen | 1,000 | (undeclared) | **+22%** | commercial | ❌ | 6.5 |
| wegovy bewertung | 10 | (low) | — | commercial | ❌ | 1.0 |

**Headline:** "erfahrungen" (experiences) is the dominant German-language review modifier — not "bewertung" (rating). Pepvise's DE translation strategy must use *erfahrungen* in titles + slugs.

### Hub 2: Dual GIP/GLP-1 (DE)

| Keyword | Vol | KD | Trend yoy | Intent | Status | Priority |
|---|---:|---:|---:|---|---|---:|
| **mounjaro erfahrungen** | 9,900 | (undeclared) | −18% | informational | ❌ | **9.0** |
| tirzepatid erfahrungen | 590 | (undeclared) | −70% | commercial | ❌ | 5.5 |

### Hub 4: Comparisons (DE)

| Keyword | Vol | KD | Trend yoy | Intent | Status | Priority |
|---|---:|---:|---:|---|---|---:|
| mounjaro vs ozempic (DE) | 880 | (undeclared) | — | commercial | ✅ table en | needs DE translation |
| ozempic vs wegovy (DE) | 390 | (undeclared) | −19% | commercial | ✅ table en | needs DE translation |

---

## FR (FR) — third priority locale

### Hub 1: GLP-1 RA (FR)

| Keyword | Vol | KD | Trend yoy | Intent | Status | Priority |
|---|---:|---:|---:|---|---|---:|
| **mounjaro avis** | 3,600 | (low — competition 0) | **+132%** | commercial | ❌ | **9.5** |
| **ozempic avis** | 2,400 | (low — competition 0) | −34% | commercial | ❌ | 8.0 |
| saxenda avis | 480 | (low) | −56% | commercial | ❌ | 5.5 |
| wegovy avis | (no vol score) | 7 | — | commercial | ❌ | 4.5 |
| victoza avis | 20 | — | −50% | commercial | ❌ | 1.0 |

**Headline:** **mounjaro avis** is +132% yoy at near-zero competition — the rising star of the FR locale. Ship FR mounjaro review in this round.

### Hub 4: Comparisons (FR)

| Keyword | Vol | KD | Trend yoy | Intent | Status | Priority |
|---|---:|---:|---:|---|---|---:|
| wegovy vs mounjaro (FR) | 260 | — | +24% | navigational | ✅ table en | needs FR translation |
| ozempic vs wegovy (FR) | 140 | — | +27% | navigational | ✅ table en | needs FR translation |

---

## Top 10 priority shipping order (cross-locale, this quarter)

| # | Locale | Keyword | Vol | KD | Why ship now |
|---:|---|---|---:|---:|---|
| 1 | en | **wegovy vs zepbound** | 33,100 | **2** | KD 2 + 124% yoy + comparison-table data already live |
| 2 | en | **wegovy review** | 5,400 | **1** | KD 1 head-term, no pepvise review yet |
| 3 | en | **zepbound review** | 9,900 | low | massive volume, no review yet |
| 4 | en | **ozempic review** | 1,900 | **1** | KD 1, classic anchor review |
| 5 | en | **mounjaro vs ozempic** (review page) | 40,500 | 23 | comparison-table populated; needs dedicated review page |
| 6 | en | **mounjaro review** | 2,400 | low | dual-agonist hub anchor |
| 7 | de | **wegovy erfahrungen** | 8,100 | low | DE locale highest-volume RA review |
| 8 | de | **mounjaro erfahrungen** | 9,900 | low | DE dual-agonist anchor |
| 9 | fr | **mounjaro avis** | 3,600 | 0 | FR rising star (+132% yoy) |
| 10 | en | **tirzepatide review** | 2,900 | 41 | +52% m-o-m trend; long-term anchor |

After these 10: ozempic vs wegovy (en review page), saxenda review (en + de), rybelsus vs ozempic, ozempic erfahrungen (DE), ozempic avis (FR), then translate top 5 EN reviews into the remaining 9 locales.

---

## Backfill / refresh queue

Already published; next round is methodology v1.2 verification + content refresh:

- bpc-157 (en) — confirm v1.2 chip + LastTested ≤ 90 days
- tb-500 (en) — same
- ghk-cu-peptide (en) — same
- retatrutide (en) — verify schema (newest review)

---

## Methodology + data hygiene notes

- Where `keyword_difficulty` returned undeclared in the API response, treat the row as needing a SERP-weakness check before final priority. Run `serp_organic_live_advanced` next pass.
- The `competition` field is Google Ads bidder competition — useful as a CPC proxy, not as organic difficulty. Always use `keyword_difficulty` for ranking decisions.
- `monthly_searches` shows the seasonal curve. For most GLP-1 keywords the spring–summer peak is real (people Google more in May–July) — schedule refresh pushes for early spring.
- Detected-language `is_another_language: true` flags appear on some entries (English KW being typed by non-English-locale users). The data is still valid for the localized intent.

---

## Update cadence

Refresh this file every quarter. Next refresh: **2026 Q3 (July)**, after first batch of priority reviews ships and we have Search Console data on top-12 priority pages.
