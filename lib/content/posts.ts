export type PostType = "pillar" | "comparison" | "cluster" | "listicle";

export type Post = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  hub: string;
  postType: PostType;
  publishedAt: string;
  updatedAt: string;
  readingTime: number;
  status: "draft" | "stub" | "published";
  ourPick?: { name: string; tier: string; reason: string };
  products?: Array<{ rank: number; name: string; tier: string; summary: string }>;
  items?: Array<{ rank: number; name: string; summary: string }>;
  faq?: Array<{ q: string; a: string }>;
  sources?: Array<{ label: string; url: string }>;
  featured?: boolean;
  medicalDisclaimer?: "required" | "light";
  evidenceLedger?: {
    preclinical: "strong" | "moderate" | "weak" | "absent";
    humanPilot: "strong" | "moderate" | "weak" | "absent";
    phaseTrial: "strong" | "moderate" | "weak" | "absent";
    fdaApproved: "approved" | "not-approved";
    notes?: string;
  };
};

export const posts: Post[] = [
  {
    slug: "bpc-157",
    title: "BPC-157 — What the Evidence Shows",
    h1: "BPC-157 — what the evidence shows",
    description:
      "Evidence Ledger for BPC-157: 50+ preclinical studies, 1 human pilot (Chang 2014, n=12), 1 active Phase trial, FDA removed from 503A list in 2023.",
    hub: "compound-profiles",
    postType: "pillar",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 16,
    status: "stub",
    featured: true,
    medicalDisclaimer: "required",
    evidenceLedger: { preclinical: "strong", humanPilot: "weak", phaseTrial: "weak", fdaApproved: "not-approved", notes: "Removed from FDA 503A compoundable list in 2023" },
  },
  {
    slug: "tb-500",
    title: "TB-500 — The Field Guide",
    h1: "TB-500 — the field guide",
    description:
      "TB-500 vs Thymosin Beta-4 (same compound), mechanism, the preclinical tendon + recovery literature, and where the human data is thin.",
    hub: "compound-profiles",
    postType: "pillar",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 14,
    status: "stub",
    medicalDisclaimer: "required",
    evidenceLedger: { preclinical: "moderate", humanPilot: "absent", phaseTrial: "absent", fdaApproved: "not-approved" },
  },
  {
    slug: "ghk-cu-peptide",
    title: "GHK-Cu — Evidence and Hype",
    h1: "GHK-Cu — evidence and hype",
    description:
      "Copper peptide signaling, the RCT evidence for hair and skin, and the gap between topical vs injectable claims.",
    hub: "compound-profiles",
    postType: "pillar",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 13,
    status: "stub",
    medicalDisclaimer: "required",
    evidenceLedger: { preclinical: "moderate", humanPilot: "moderate", phaseTrial: "weak", fdaApproved: "not-approved", notes: "Topical skin/hair formulations have RCT data" },
  },
  {
    slug: "retatrutide",
    title: "Retatrutide — What the Early Trials Say",
    h1: "Retatrutide — what the early trials say",
    description:
      "SURMOUNT-5 Phase 2 data, mechanism (triple GLP-1/GIP/glucagon agonist), comparison to tirzepatide, and the Phase 3 outlook.",
    hub: "compound-profiles",
    postType: "pillar",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 15,
    status: "stub",
    medicalDisclaimer: "required",
    evidenceLedger: { preclinical: "strong", humanPilot: "strong", phaseTrial: "moderate", fdaApproved: "not-approved", notes: "Phase 2 SURMOUNT-5 showed ~24% weight loss; Phase 3 in progress" },
  },
  {
    slug: "how-peptides-signal",
    title: "How Peptides Signal — A Primer for Informed Readers",
    h1: "How peptides signal",
    description:
      "Amino acid chains, receptor binding, signaling cascades — a rigorous but accessible explainer of peptide pharmacology.",
    hub: "mechanism-and-science",
    postType: "pillar",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 14,
    status: "stub",
  },
  {
    slug: "bpc-157-for-tendon",
    title: "BPC-157 for Tendon Repair — Literature Review",
    h1: "BPC-157 for tendon repair",
    description:
      "Inclusion criteria, 8-10 preclinical studies tabulated, human evidence gap, our assessment of the tendon claims.",
    hub: "evidence-reviews",
    postType: "cluster",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 12,
    status: "stub",
    medicalDisclaimer: "required",
  },
  {
    slug: "how-to-reconstitute-peptides",
    title: "How to Reconstitute Peptides — the Literature-Based Guide",
    h1: "How to reconstitute peptides",
    description:
      "Step-numbered reconstitution procedure with research-context framing. Pairs with InjectCompass's patient-education version.",
    hub: "reconstitution-and-practical",
    postType: "pillar",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 10,
    status: "stub",
    medicalDisclaimer: "required",
  },
  {
    slug: "peptide-reconstitution-calculator",
    title: "Peptide Reconstitution Calculator",
    h1: "Peptide Reconstitution Calculator",
    description:
      "Research-context calculator — peptide mg + bac water volume → mg/mL concentration, unit output, visual syringe.",
    hub: "reconstitution-and-practical",
    postType: "pillar",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 6,
    status: "stub",
    medicalDisclaimer: "required",
  },
  {
    slug: "research-use-only-explained",
    title: "\"Research Use Only\" — What It Actually Means",
    h1: "Research use only",
    description:
      "FDA's position on research-use-only labeling, the 503A/503B distinction, the 2023 enforcement actions, and what this means for buyers.",
    hub: "safety-regulation-markets",
    postType: "pillar",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 12,
    status: "stub",
  },
  {
    slug: "where-to-buy-peptides-taxonomy",
    title: "Where to Buy Peptides — The Taxonomy of Vendors",
    h1: "Where to buy peptides — the taxonomy",
    description:
      "Research-chemical suppliers vs compounding pharmacies vs underground sellers — the legal framework and red flags. No vendor directory.",
    hub: "safety-regulation-markets",
    postType: "cluster",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 14,
    status: "stub",
  },
];

export function getPost(slug: string): Post | undefined { return posts.find((p) => p.slug === slug); }
export function postsByHub(hubSlug: string): Post[] { return posts.filter((p) => p.hub === hubSlug); }
export function latestPosts(limit = 6): Post[] { return [...posts].sort((a,b) => (a.publishedAt < b.publishedAt ? 1 : -1)).slice(0, limit); }
export function featuredPost(): Post | undefined { return posts.find((p) => p.featured); }
export function relatedPosts(post: Post, limit = 3): Post[] { return posts.filter((p) => p.hub === post.hub && p.slug !== post.slug).slice(0, limit); }
