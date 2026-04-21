# PepVise — Affiliate Partner Reference

**The hardest line in the network, repeated for emphasis:** **No affiliate links to peptide vendors, compounded peptide pharmacies, or research-peptide suppliers. Zero. Forever.** This rule is non-negotiable and site-ending if crossed. It is enforced by a pre-commit hook that blocks commits containing URLs matching known vendor patterns.

PepVise's affiliate monetization is deliberately narrow. The site's trust premium depends on editorial independence from the vendor category it covers.

---

## 1. What we can affiliate

| Category | Examples | Network | Rate |
|---|---|---|---|
| **Books** | Peter Attia's *Outlive*, Rhonda Patrick's recommended reading, Ben Greenfield's books, textbooks on peptide pharmacology | Amazon Associates | 3-4% |
| **Adjacent supplements** (non-peptide, evidence-backed, for readers who want related categories) | Thorne (creatine, omega-3, magnesium), Pure Encapsulations, Designs for Health, Momentous, Transparent Labs | Impact.com, direct | 10-15% |
| **Lab equipment** (for research-context readers) | Scale accuracy, storage vials, lab notebooks, USP-grade bacteriostatic water (from licensed pharmacy compounders, NOT from peptide retailers) | Amazon, lab supply | 2-5% |
| **Cold-chain storage** | Mini fridges, temperature data loggers, insulated travel cases | Amazon, some direct | 3-10% |
| **Testing kits (general health)** | At-home blood biomarker panels (Inside Tracker, Function Health, etc.) | Impact.com, direct | 10-20% per signup |
| **Podcast sponsorships / physician referral** (premium, disclosed) | Licensed physician referrals to FDA-compliant peptide therapy providers (not telehealth peptide-selling clinics — legitimate MD practices that comply with 503A) | Referral fee basis, fully disclosed | Variable |

---

## 2. Revenue mix (month 12 target: $4-8k/mo per research §9)

| Stream | Month 12 target | Notes |
|---|---|---|
| Newsletter sponsorship | $3-4k/mo | 10k+ subs × 4 sends × $60-100 CPM. High-income biohacker audience. |
| Premium PDFs | $1-3k/mo | "The 2026 BPC-157 Evidence Report" ($29), "The GHK-Cu Literature Review" ($29), etc. Q3 2026 onward. |
| Adjacent supplement affiliate | $500-1.5k/mo | Creatine, omega-3, magnesium, NAD precursors — evidence-backed only |
| Book affiliate | $200-500/mo | Amazon Associates — low margin, steady |
| Physician referral | $300-1k/mo | Fully disclosed, to FDA-compliant practices only |
| **Total** | **$4-8k/mo** | Per research roadmap |

**Note:** display ads are NOT part of the revenue model. Ever. They signal the wrong editorial posture.

---

## 3. Premium PDFs — the high-margin tier

The strategic monetization wedge for pepvise is **premium research reports**. The audience (Alex-persona, high-income biohacker) has genuine willingness-to-pay for depth that free blog posts can't provide.

### Roadmap (post-launch)

| Month | Title | Price |
|---|---|---|
| Q3 2026 | The 2026 BPC-157 Evidence Report (40-page deep-dive) | $29 |
| Q4 2026 | The 2026 Retatrutide Development Report | $29 |
| Q1 2027 | The 2027 Peptide Landscape Report (annual) | $39 |
| Q2 2027 | The GHK-Cu Literature Review (hair + skin + systemic) | $29 |

Each report is 30-60 pages, fully cited, designed as a single PDF + web-accessible version for subscribers. Updated annually. Subscribers to free newsletter get 20% discount + early access.

### Writing approach

- Written by The Analyst
- Reviewed by the credentialed MD/PharmD (once onboarded, month 9+)
- 15-30 citations per report
- Evidence Ledger format expanded with more detail than the free compound profiles
- Include a "methodology" section showing how the evidence was synthesized

---

## 4. Newsletter sponsorship

Target sponsor categories (no conflicts):
- Blood biomarker testing (Inside Tracker, Function Health, Marek Health)
- Evidence-backed supplement brands (Thorne, Momentous, Transparent Labs)
- Longevity-adjacent services (continuous glucose monitors, DEXA referrals)
- Cold-chain / lab equipment brands
- Book publishers (for peptide/pharmacology/biohacking books)

**Forbidden sponsors:**
- Any peptide seller, research or compounded
- Telehealth clinics selling peptide prescriptions
- "Peptide coaching" services
- Supplement brands with weak third-party testing
- Drug manufacturers (potential conflict with compound coverage)
- Crypto / financial products (audience mismatch + regulatory risk)

Format: one sponsor per newsletter, clearly labeled "This week's sponsor:" with 60-80 words of disclosure, link `rel="sponsored"`. Visually distinct from editorial.

---

## 5. Physician referral (specialized, disclosed)

Some readers will want to engage with peptides through FDA-compliant pathways — licensed physicians who prescribe compounded peptides through 503A pharmacies under proper medical supervision.

PepVise can refer readers to a vetted list of such physicians, fully disclosed as referral relationships. Requirements:
- Physician must operate within FDA-compliant framework (503A compounding, proper prescription workflow)
- Physician must agree to PepVise editorial review of their patient materials
- No kickbacks for specific prescription volumes — flat referral fee only
- Fully disclosed on the referral page + every related post
- Physician must commit to informed consent documentation

This is a slow-growth, high-trust revenue stream. Launch post-month 6 after the credentialed-reviewer pipeline is also active.

---

## 6. Adjacent supplement affiliate — the careful category

We affiliate-link to *non-peptide* supplements when they're:
1. Evidence-backed in the literature we cite
2. Third-party tested (Informed Sport, NSF Certified, ConsumerLab)
3. Relevant to the reader's goal as discussed in a post

Examples:
- Creatine monohydrate (evidence-rich; links to Bulk Supplements, Transparent Labs, Thorne)
- Omega-3 (Carlson, Nordic Naturals, Momentous)
- Magnesium glycinate (Thorne, Pure Encapsulations, Doctor's Best)
- NAD precursors — NMN / NR (careful: hype-heavy, use only when literature supports the claim in the post)

**Crossover with other sites in the network:** Larderlab covers supplement buying guides in detail. PepVise cross-links to Larderlab for the "if you want a non-peptide supplement comparison, here's our sister site" recommendation. This deepens cross-site authority.

---

## 7. Compliance checklist per affiliate page

- [ ] FTC affiliate disclosure above the product mention (via `<AffiliateDisclosure>`)
- [ ] Every affiliate `<a>` has `rel="sponsored nofollow noopener"` (via `<AffiliateLink>`)
- [ ] No peptide-vendor URLs (enforced by pre-commit hook)
- [ ] Prices dated when shown (via `<PriceAsOf>`)
- [ ] Editorial context clearly distinguishes "mentioned in literature" from "we recommend buying"
- [ ] Cross-link to relevant evidence review for full context

---

## 8. Application order

**Month 1:** no affiliate links. Build content + Evidence Ledger + Reconstitution Calculator.

**Month 2 (10+ posts live):**
- Amazon Associates (books, cold-chain, lab gear)
- Impact.com → Thorne, Momentous, Function Health, Inside Tracker

**Month 4:**
- Direct programs: Transparent Labs, Legion, Marek Health (if evaluated and approved)
- Newsletter sponsorship outreach (first cohort: month 6 onward)

**Month 6+:**
- Physician referral program launch (slow, careful, 2-3 physicians first)
- Premium PDF #1 launch (post-credentialed-reviewer, target Q3 2026)

**Never:** any peptide vendor, any telehealth peptide-selling clinic, any "peptide coaching" service.

---

## 9. The pre-commit hook that enforces the vendor-link ban

Per the CI safety requirements:

```bash
# .husky/pre-commit
# Block any commit containing known peptide-vendor URLs
PEPTIDE_VENDOR_PATTERNS=(
  "aminoasylum.com"
  "limitlesslifepeptides.com"
  "tailormadecompounding.com"
  "peptidesciences.com"
  "bluesky-peptides.com"
  "researchpeptidesforsale"
  # ... expand list as new vendors emerge
)

for pattern in "${PEPTIDE_VENDOR_PATTERNS[@]}"; do
  if git diff --cached | grep -qi "$pattern"; then
    echo "ERROR: Peptide vendor URL detected: $pattern"
    echo "PepVise policy forbids peptide-vendor affiliate links."
    exit 1
  fi
done
```

Additionally, quarterly manual audits check for any new vendor URLs.

---

## 10. Why this works (the meta argument)

PepVise's monetization corridor is narrower than any other site in the network. But:

1. **The audience is high-income.** Biohackers who read Evidence Ledgers + listen to Attia + buy $400/month worth of supplements.
2. **Newsletter CPMs are 2-3× standard.** Sponsor CPM on this audience ($60-100) vs mainstream health newsletters ($20-40).
3. **Premium PDFs compound.** A $29 report sold to 200 readers = $5,800. Doesn't require constant re-acquisition. Library compounds.
4. **Editorial integrity IS the moat.** If we affiliate-linked to any peptide vendor, the site's value collapses. The narrow corridor is the feature, not the bug.

$4-8k/mo blended is lower than other sites in the network. But it's stable, high-trust, and compounds year-over-year as the library of premium content grows.
