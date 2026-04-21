# PepVise — Claude Code Guide

Source of truth for how pepvise.com is built.

## What this repo is
Next.js 14 site at **pepvise.com** — research-peptide literature analysis. Citation-heavy. Scholarly. Zero vendor links.

## Stack
- Next.js 14 App Router, TypeScript, Tailwind
- Brand tokens: `inknavy #192642, bone #F0EBE0, oxblood #7A2E3B, slate #5A6374`
- Fonts: Newsreader or Tiempos Text (headlines) + Inter (body) + IBM Plex Mono (numerics)

## Legal framing — NON-NEGOTIABLE
1. Site-wide `<MedicalDisclaimerFooter>` on every page (never remove)
2. `<PostReviewStamp>` on every compound post (research-context disclaimer)
3. Dedicated `/medical-disclaimer` page linked from footer
4. **ZERO affiliate links to peptide vendors. Site-ending if crossed.**
5. No dosing prescriptions ever ("dose ranges reported in literature," never "take X")
6. Citations ≥ 3 per pillar (PubMed, clinicaltrials.gov, FDA only)

## Signature components (planned, stubbed)
- `<EvidenceLedger>` — 4-row strength summary per compound (Preclinical / Human pilot / Phase X / Approved)
- `<EvidenceLedgerMaster>` — homepage grid of all compounds
- `<PreclinicalStudiesTable>`, `<HumanTrialsTable>`
- Peptide Reconstitution Calculator (shared lib with InjectCompass, research-context wrapper)

Evidence Ledger data is on each post in `lib/content/posts.ts` under `evidenceLedger`. Render the component post-launch.

## Launch flag
`lib/content/site.ts` → `SITE.launched` — keep `false` until healthcare regulatory attorney review + credentialed MD/PharmD reviewer identified (per `docs/site-spec.md` §9).

## Commands
```bash
pnpm install
pnpm dev       # http://localhost:3001
pnpm build
```

## What not to do
- Flip `SITE.launched` early
- Add any peptide vendor affiliate link — EVER. Pre-commit hook should block.
- Recommend a specific peptide for human use
- Publish compound content without Evidence Ledger data
- Use the word "miracle," "secret," "shocking"
- Write dosing prescriptions

## Pointers
- Voice + audience: `content/brand-book.md`
- 150 posts: `docs/topical-map.md`
- Evidence Ledger spec: `docs/site-spec.md` §3
- Affiliate boundaries (critical): `docs/affiliate-partners.md`
- Sample briefs: `docs/sample-briefs.md`
- SERP wedge: `docs/competitive-analysis.md`
