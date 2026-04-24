export type EvidenceTier = "High" | "Moderate" | "Low" | "Anecdotal" | "Absent" | "Approved" | "Not approved";

function classFor(tier: string): string {
  const t = tier.toLowerCase();
  if (t.includes("high") || t.includes("approved") && !t.includes("not")) {
    return "tier-chip tier-high";
  }
  if (t.includes("moderate")) return "tier-chip tier-moderate";
  if (t.includes("low")) return "tier-chip tier-low";
  if (t.includes("anecdotal")) return "tier-chip tier-anecdotal";
  if (t.includes("absent") || t.includes("not approved")) {
    return "tier-chip tier-anecdotal";
  }
  return "tier-chip tier-anecdotal";
}

/**
 * Evidence-tier chip. Used inside the Evidence Ledger and inline in prose
 * ("tier: Moderate"). Colors match preclinical / pilot / phase strength.
 */
export function TierBadge({ tier }: { tier: EvidenceTier | string }) {
  return <span className={classFor(tier)}>{tier}</span>;
}
