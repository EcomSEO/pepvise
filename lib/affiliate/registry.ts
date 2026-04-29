/**
 * Pepvise affiliate registry.
 *
 * Per the 2026-04-29 monetization lock and the site-ending affiliate
 * boundary in `CLAUDE.md`, this registry contains:
 *
 *   - Lab-testing services (LetsGetChecked, Everlywell)
 *   - Continuous glucose monitors (Levels, Lingo / Stelo)
 *   - Supplements (non-peptide)
 *
 * It MUST NOT contain:
 *
 *   - Peptide vendors (research-channel grey-market suppliers)
 *   - Telehealth GLP-1 prescribers
 *   - Compounding pharmacies
 *
 * Linking to any of those is a site-ending violation per the affiliate
 * boundary in `lib/content/affiliate-disclosure.ts`. The pre-commit
 * hook should block edits that introduce a peptide-vendor or
 * telehealth-prescriber URL into this file.
 *
 * Schema follows the network-wide bridge-monetization pattern: every
 * link starts as a third-party affiliate (`thirdPartyUrl`), and when
 * the owned shop launches the same `productKey` swaps to the
 * first-party URL automatically (no body rewrites needed).
 */

export type AffiliateLink = {
  productKey: string;
  brand: string;
  /** Human-readable product name. */
  name: string;
  /** Affiliate URL with the configured tag (Amazon Associates etc.). */
  thirdPartyUrl: string;
  /** Display label for the affiliate badge. */
  thirdPartyLabel: "Amazon" | "Direct" | "LetsGetChecked" | "Everlywell" | "Levels" | "Abbott";
  /** Populated when the owned shop ships the SKU. */
  ownedShopUrl?: string;
  /** Estimated owned-shop launch date (ISO-8601), informational only. */
  ownedShopAvailableFromDate?: string;
  /** Category for editorial routing. */
  category: "lab-testing" | "cgm" | "supplements";
  /** Short editorial blurb rendered by `<AffiliateLink>`. */
  blurb: string;
};

/**
 * Amazon Associates tag — placeholder until Fabian provisions the real
 * one. Tracks incorrectly under this default; safe to deploy.
 */
const AMAZON_TAG = "pepvise-20";

const amazonUrl = (asin: string) =>
  `https://www.amazon.com/dp/${asin}/?tag=${AMAZON_TAG}`;

export const AFFILIATES: Record<string, AffiliateLink> = {
  // ── Lab testing ────────────────────────────────────────────────────
  "lgc-testosterone": {
    productKey: "lgc-testosterone",
    brand: "LetsGetChecked",
    name: "Testosterone Test Kit",
    thirdPartyUrl: "https://www.letsgetchecked.com/home-testosterone-test/",
    thirdPartyLabel: "LetsGetChecked",
    category: "lab-testing",
    blurb:
      "At-home finger-prick testosterone panel. CLIA-certified lab; results in 2–5 days. Useful baseline before considering any growth-hormone-axis intervention.",
  },
  "lgc-thyroid": {
    productKey: "lgc-thyroid",
    brand: "LetsGetChecked",
    name: "Thyroid Test Kit",
    thirdPartyUrl: "https://www.letsgetchecked.com/home-thyroid-test/",
    thirdPartyLabel: "LetsGetChecked",
    category: "lab-testing",
    blurb:
      "TSH, T3, T4, antibodies. Relevant when reading research-peptide claims that touch on thyroid axis.",
  },
  "everlywell-metabolism": {
    productKey: "everlywell-metabolism",
    brand: "Everlywell",
    name: "Metabolism Test",
    thirdPartyUrl: "https://www.everlywell.com/products/metabolism-test/",
    thirdPartyLabel: "Everlywell",
    category: "lab-testing",
    blurb:
      "Cortisol, free testosterone, TSH. We use it as the cheapest credible baseline panel for readers self-investigating recovery and energy claims.",
  },

  // ── CGMs ───────────────────────────────────────────────────────────
  "levels-cgm": {
    productKey: "levels-cgm",
    brand: "Levels",
    name: "Levels CGM Program",
    thirdPartyUrl: "https://www.levelshealth.com/",
    thirdPartyLabel: "Levels",
    category: "cgm",
    blurb:
      "Continuous glucose monitor + nutrition app. The right tool for evaluating any compound that touches insulin sensitivity.",
  },
  "abbott-lingo": {
    productKey: "abbott-lingo",
    brand: "Abbott",
    name: "Lingo CGM (Stelo in US)",
    thirdPartyUrl: "https://www.hellolingo.com/",
    thirdPartyLabel: "Abbott",
    category: "cgm",
    blurb:
      "Over-the-counter CGM (US Stelo / EU Lingo). Same Abbott Libre sensor, consumer wrapper. Useful for self-monitoring without a prescription.",
  },

  // ── Supplements (non-peptide) ──────────────────────────────────────
  "thorne-creatine": {
    productKey: "thorne-creatine",
    brand: "Thorne",
    name: "Creatine Monohydrate",
    thirdPartyUrl: amazonUrl("B0019LRY8A"),
    thirdPartyLabel: "Amazon",
    category: "supplements",
    blurb:
      "NSF Certified for Sport. The most-studied performance supplement; we cite it whenever a peptide claim is benchmarked against creatine's evidence base.",
  },
  "thorne-vitamin-d": {
    productKey: "thorne-vitamin-d",
    brand: "Thorne",
    name: "Vitamin D / K2",
    thirdPartyUrl: amazonUrl("B0797KX8WJ"),
    thirdPartyLabel: "Amazon",
    category: "supplements",
    blurb:
      "Cholecalciferol + MK-4. We reference it in growth-hormone-axis reviews where vitamin D status modulates downstream signalling.",
  },
  "now-collagen-peptides": {
    productKey: "now-collagen-peptides",
    brand: "NOW Foods",
    name: "Hydrolyzed Collagen Peptides",
    thirdPartyUrl: amazonUrl("B07RFVCXSP"),
    thirdPartyLabel: "Amazon",
    category: "supplements",
    blurb:
      "Bovine type-I/III collagen — the legal-and-evidence-based comparator we use when a research peptide claims tendon or skin benefits.",
  },
};

/**
 * Lookup helper used by `<AffiliateLink>`. When the owned shop launches
 * for a given productKey, return the first-party URL; otherwise fall
 * back to the third-party affiliate URL.
 */
export function getAffiliate(
  productKey: string,
): { url: string; label: string; isOwned: boolean } | null {
  const a = AFFILIATES[productKey];
  if (!a) return null;
  if (a.ownedShopUrl) {
    return { url: a.ownedShopUrl, label: "Pepvise Shop", isOwned: true };
  }
  return { url: a.thirdPartyUrl, label: a.thirdPartyLabel, isOwned: false };
}

export function affiliatesByCategory(
  category: AffiliateLink["category"],
): AffiliateLink[] {
  return Object.values(AFFILIATES).filter((a) => a.category === category);
}
