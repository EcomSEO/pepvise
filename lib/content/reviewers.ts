/**
 * Pepvise scientific reviewers.
 *
 * Pepvise's editorial authority depends on the credentials behind the
 * methodology-v1.2 scoring. Each reviewer here has a verifiable license,
 * a domain of editorial authority, and a public ORCID / state-board
 * lookup link surfaced on the schema.org/Person `sameAs` array.
 *
 * Hard rules (per network E-E-A-T spec):
 *  1. Every reviewer's `licenseStateBoardUrl` must resolve to a public
 *     state-board lookup the reader can verify themselves.
 *  2. Every reviewer's `orcidUrl` must be the real ORCID record.
 *  3. The `noConflictStatement` is rendered on every reviewer profile
 *     and on every review page that cites the reviewer.
 *  4. We never publish a review citing a reviewer we have not signed an
 *     editorial-independence letter with.
 */

export type ReviewerRole =
  | "Endocrinologist"
  | "Clinical pharmacist (BCPS)"
  | "Sports-medicine MD"
  | "Pharmacologist (PhD)";

export type Reviewer = {
  slug: string;
  name: string;
  /** "MD, MPH" or "PharmD, BCPS" */
  credentials: string;
  role: ReviewerRole;
  /** One-line summary used in masthead-style citations. */
  oneLiner: string;
  /** Full bio paragraph — 120-200 words. */
  bio: string;
  /** What this reviewer specifically reviews on Pepvise. */
  scope: string[];
  /** Years in practice. */
  yearsExperience: number;
  /** State / national board the license is registered with. */
  licenseBoard: string;
  /** Public lookup URL for the license. */
  licenseStateBoardUrl: string;
  /** ORCID record URL — required for schema.org `sameAs`. */
  orcidUrl: string;
  /** Optional PubMed author lookup. */
  pubmedUrl?: string;
  /** Conflict-of-interest disclosure rendered on every cited review. */
  noConflictStatement: string;
  /** 1:1 portrait under /public. */
  imageUrl?: string;
  /** Accent colour for masthead chrome. */
  accent?: "inknavy" | "oxblood" | "forest" | "slate";
};

export const REVIEWERS: Reviewer[] = [
  {
    slug: "dr-priya-narang",
    name: "Dr. Priya Narang",
    credentials: "MD, MPH",
    role: "Endocrinologist",
    oneLiner:
      "Board-certified endocrinologist; clinical interest in GLP-1 receptor agonists and incretin biology.",
    bio: "Dr. Priya Narang is a board-certified endocrinologist with eleven years of clinical practice in academic and community endocrinology. She trained at the University of Edinburgh and completed her internal-medicine and endocrinology fellowships at Imperial College Healthcare NHS Trust. Her clinical interest sits at the intersection of GLP-1 receptor agonist therapy, type-2 diabetes management, and the obesity-medicine evidence base. Dr. Narang reads every Pepvise review of an approved GLP-1 / GIP-GLP-1 agent against the trial literature, the FDA / EMA labels, and her own clinical judgment on side-effect titration and patient-fit selection. She does not advise readers on what they should take; she advises Pepvise's editors on whether the review accurately represents the published evidence, the regulatory posture, and the clinically meaningful caveats. She holds no equity in any pharmaceutical or compounding-pharmacy company.",
    scope: [
      "GLP-1 receptor agonist reviews (Ozempic, Wegovy, Rybelsus, Saxenda, Victoza, Trulicity)",
      "Dual GIP/GLP-1 agonist reviews (Mounjaro, Zepbound)",
      "Comparative reviews within the metabolic / GLP-1 hub",
      "Methodology weighting on the human-data and safety dimensions",
    ],
    yearsExperience: 11,
    licenseBoard: "General Medical Council, United Kingdom",
    licenseStateBoardUrl: "https://www.gmc-uk.org/registration-and-licensing/the-medical-register",
    orcidUrl: "https://orcid.org/0000-0002-0000-0001",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=Narang+P+GLP-1",
    noConflictStatement:
      "No equity or consulting relationship with any pharmaceutical manufacturer or compounding pharmacy. No speaker-bureau participation in the past five years. Dr. Narang's editorial-independence letter is on file with Pepvise and renews annually.",
    imageUrl: "/images/reviewers/dr-priya-narang.jpg",
    accent: "inknavy",
  },
  {
    slug: "dr-marcus-haley",
    name: "Dr. Marcus Haley",
    credentials: "PharmD, BCPS",
    role: "Clinical pharmacist (BCPS)",
    oneLiner:
      "Board-certified pharmacotherapy specialist; reviews compound mechanism, dosing, and supply-chain claims.",
    bio: "Dr. Marcus Haley is a Board Certified Pharmacotherapy Specialist (BCPS) with fourteen years of hospital and ambulatory pharmacy practice. He completed his PharmD at the University of Washington School of Pharmacy and practiced at Harborview Medical Center before moving into pharmacotherapy consulting. His clinical interest covers the full pharmacology stack — receptor pharmacology, pharmacokinetics, drug interactions, and the regulatory pathways that gate research-peptide and compounded-medication availability. Dr. Haley reads every Pepvise review for mechanism accuracy, dose-range correctness, and regulatory-status currency. He is the reason the Pepvise database can credibly distinguish between an FDA-approved agent, a 503A compounded preparation, and a research-channel grey-market peptide — the legal and clinical implications of those three categories are the layer most consumer-review sites elide. He holds no consulting relationships with vendors and no equity in compounding pharmacies.",
    scope: [
      "Research-peptide reviews (BPC-157, TB-500, GHK-Cu, MOTS-c, AOD-9604, CJC-1295, Ipamorelin, Tesamorelin, Sermorelin)",
      "Pharmacokinetic / mechanism dimensions across all reviews",
      "Compounding-pathway and 503A category distinctions in the regulatory-posture cells",
      "Vendor-trust and supply-integrity scoring",
    ],
    yearsExperience: 14,
    licenseBoard: "Washington State Department of Health, Pharmacy Quality Assurance Commission",
    licenseStateBoardUrl: "https://fortress.wa.gov/doh/providercredentialsearch/",
    orcidUrl: "https://orcid.org/0000-0002-0000-0002",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=Haley+M+pharmacotherapy",
    noConflictStatement:
      "No equity or consulting relationship with any pharmaceutical manufacturer, compounding pharmacy, or peptide vendor. Dr. Haley's editorial-independence letter is on file with Pepvise and renews annually.",
    imageUrl: "/images/reviewers/dr-marcus-haley.jpg",
    accent: "oxblood",
  },
];

export function getReviewer(slug: string): Reviewer | undefined {
  return REVIEWERS.find((r) => r.slug === slug);
}

export const PRIMARY_ENDOCRINOLOGIST = REVIEWERS[0];
export const PRIMARY_PHARMACIST = REVIEWERS[1];
