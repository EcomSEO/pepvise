# pepvise.com

Research-peptide literature analysis. Next.js 14 source for **pepvise.com**.

Read [CLAUDE.md](./CLAUDE.md) first — the legal/editorial framing lives there.

## Local dev
```bash
pnpm install
pnpm dev       # http://localhost:3001
pnpm build
```

## Deploy
Auto-deploys to Vercel on push to `main`. Keep `SITE.launched = false` until:
- Healthcare regulatory attorney review is complete
- Pre-commit hook blocking peptide-vendor URLs is active
- Credentialed MD/PharmD reviewer identified for month-9 onboarding
- Launch checklist in `docs/site-spec.md` §9 is green

## The legal posture
1. Site-wide MedicalDisclaimerFooter on every page
2. Per-post research-context disclaimer on every compound post
3. Dedicated `/medical-disclaimer` page
4. **Zero peptide-vendor affiliate links — forever**
5. Evidence Ledger required on every compound profile

## Key docs
- `content/brand-book.md` — voice, Alex persona, research-context framing
- `docs/topical-map.md` — 12 compound profiles + 150 posts
- `docs/site-spec.md` — IA, 8 templates, Evidence Ledger component spec
- `docs/sample-briefs.md` — 5 anchor briefs incl. BPC-157 pillar
- `docs/affiliate-partners.md` — narrow corridor, zero peptide vendors
- `docs/competitive-analysis.md` — SERP wedge analysis
