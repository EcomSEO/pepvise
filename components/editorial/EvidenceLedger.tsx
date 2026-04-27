import type { Post } from "@/lib/content/posts";
import { TierBadge, type EvidenceTier } from "./TierBadge";
import { Reveal } from "./Reveal";

type Strength = "strong" | "moderate" | "weak" | "absent";
type FdaStatus = "approved" | "not-approved";

const strengthToTier: Record<Strength, EvidenceTier> = {
  strong: "High",
  moderate: "Moderate",
  weak: "Low",
  absent: "Anecdotal",
};

const strengthToSummary: Record<Strength, string> = {
  strong: "Multiple replicated findings",
  moderate: "Multiple studies, mixed findings",
  weak: "Single pilot or case series",
  absent: "No published studies yet",
};

/**
 * EvidenceLedger, the site's signature component.
 *
 * Renders at the top of every compound pillar and cluster post as a structured
 * definition list showing: Compound, Preclinical (animal), Human pilot (N=?),
 * Phase, Approved for X, and an Evidence tier badge.
 *
 * Oxblood accent bar on the left; inknavy header; bone body.
 * Screenshot-friendly at 1200x630 for Twitter.
 */
export function EvidenceLedger({
  post,
  compoundName,
}: {
  post: Post;
  compoundName?: string;
}) {
  if (!post.evidenceLedger) return null;
  const { preclinical, humanPilot, phaseTrial, fdaApproved, notes } =
    post.evidenceLedger;

  const displayName =
    compoundName ?? post.title.replace(/\s+, .*$/, "").replace(/\s+[-–].*$/, "");

  const overallTier: EvidenceTier =
    fdaApproved === "approved"
      ? "High"
      : strengthToTier[humanPilot] === "High"
      ? "High"
      : strengthToTier[phaseTrial] === "High"
      ? "High"
      : strengthToTier[humanPilot] === "Moderate"
      ? "Moderate"
      : strengthToTier[preclinical] === "High"
      ? "Low"
      : strengthToTier[preclinical] === "Moderate"
      ? "Low"
      : "Anecdotal";

  return (
    <Reveal
      as="aside"
      className="ledger-card my-10 max-w-ledger"
      // Stagger the tier-chip scale-pulse a beat after the card lands.
      threshold={0.25}
    >
      <div className="sr-only" role="note">
        {`Evidence Ledger for ${displayName}`}
      </div>
      {/* Header */}
      <div className="ledger-head pl-7">
        <div className="flex items-baseline justify-between gap-4 flex-wrap">
          <div>
            <p className="caps-label text-bone/70 mb-1">Evidence Ledger</p>
            <p className="font-serif text-[1.6rem] md:text-[1.85rem] text-bone leading-tight italic">
              {displayName}
            </p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="caps-label text-bone/60">Overall tier</span>
            <TierBadge tier={overallTier} />
          </div>
        </div>
        <p className="text-[12.5px] text-bone/60 mt-3 font-sans">
          State of the published literature as of{" "}
          {new Date(post.updatedAt).toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })}
          . Sourced from PubMed, ClinicalTrials.gov, and FDA documents.
        </p>
      </div>

      {/* Body rows */}
      <dl className="divide-y divide-inknavy/10">
        <LedgerRow
          label="Preclinical"
          secondary="Animal / in vitro studies"
          strength={preclinical}
        />
        <LedgerRow
          label="Human pilot"
          secondary="Single-arm or small open-label"
          strength={humanPilot}
        />
        <LedgerRow
          label="Phase trial"
          secondary="Phase 2 / 3 randomized"
          strength={phaseTrial}
        />
        <LedgerFdaRow status={fdaApproved} />
      </dl>

      {notes && (
        <div className="px-7 py-4 bg-oxblood/5 border-t border-inknavy/10">
          <p className="caps-label text-oxblood mb-1">Notable</p>
          <p className="text-[14px] text-charcoal/90 leading-relaxed">{notes}</p>
        </div>
      )}
    </Reveal>
  );
}

function LedgerRow({
  label,
  secondary,
  strength,
}: {
  label: string;
  secondary: string;
  strength: Strength;
}) {
  const tier = strengthToTier[strength];
  return (
    <div className="grid grid-cols-[1fr_auto] gap-4 items-center pl-7 pr-6 py-4">
      <div>
        <dt className="font-serif text-[1.05rem] text-inknavy leading-snug">
          {label}
        </dt>
        <dd className="text-[13px] text-slate mt-0.5">{secondary}</dd>
      </div>
      <div className="flex flex-col items-end gap-1.5">
        <TierBadge tier={tier} />
        <span className="mono text-[11px] text-slate tnum">
          {strengthToSummary[strength]}
        </span>
      </div>
    </div>
  );
}

function LedgerFdaRow({ status }: { status: FdaStatus }) {
  return (
    <div className="grid grid-cols-[1fr_auto] gap-4 items-center pl-7 pr-6 py-4">
      <div>
        <dt className="font-serif text-[1.05rem] text-inknavy leading-snug">
          FDA status
        </dt>
        <dd className="text-[13px] text-slate mt-0.5">Approved human indication</dd>
      </div>
      <div className="flex flex-col items-end gap-1.5">
        <TierBadge tier={status === "approved" ? "Approved" : "Not approved"} />
        <span className="mono text-[11px] text-slate tnum">
          {status === "approved"
            ? "Approved by FDA"
            : "Research use only"}
        </span>
      </div>
    </div>
  );
}

/**
 * EvidenceLedgerMaster, homepage grid of all compound ledgers. A reader can
 * scan ten compounds in one view.
 */
export function EvidenceLedgerMaster({ posts }: { posts: Post[] }) {
  const compoundPosts = posts.filter(
    (p) => p.evidenceLedger && p.hub === "compound-profiles"
  );
  if (compoundPosts.length === 0) return null;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-inknavy/15">
      {compoundPosts.map((p) => (
        <CompactLedgerCard key={p.slug} post={p} />
      ))}
    </div>
  );
}

function CompactLedgerCard({ post }: { post: Post }) {
  if (!post.evidenceLedger) return null;
  const { preclinical, humanPilot, phaseTrial, fdaApproved } =
    post.evidenceLedger;
  const name = post.title.replace(/\s+, .*$/, "").replace(/\s+[-–].*$/, "");

  const rows = [
    { label: "Preclin", s: strengthToTier[preclinical] },
    { label: "Human", s: strengthToTier[humanPilot] },
    { label: "Phase", s: strengthToTier[phaseTrial] },
    {
      label: "FDA",
      s: (fdaApproved === "approved" ? "Approved" : "Not approved") as EvidenceTier,
    },
  ];

  return (
    <a
      href={`/${post.slug}`}
      className="group block p-6 border-b md:border-r border-inknavy/15 last:border-r-0 hover:bg-paper transition relative"
    >
      <div className="absolute top-0 left-0 w-[3px] h-0 group-hover:h-full bg-oxblood transition-all duration-200" />
      <h3 className="font-serif text-xl text-inknavy leading-tight group-hover:text-oxblood transition">
        {name}
      </h3>
      <dl className="mt-4 space-y-1.5">
        {rows.map((row) => (
          <div
            key={row.label}
            className="grid grid-cols-[60px_1fr] items-center gap-3"
          >
            <dt className="caps-label text-slate">{row.label}</dt>
            <dd>
              <TierBadge tier={row.s} />
            </dd>
          </div>
        ))}
      </dl>
    </a>
  );
}
