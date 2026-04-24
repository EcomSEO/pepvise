export type EvidenceTier =
  | "High"
  | "Moderate"
  | "Low"
  | "Anecdotal"
  | "Absent"
  | "Approved"
  | "Not approved";

type Resolved = {
  className: string;
  // Non-color shape marker so the tier is readable in greyscale and
  // under color-vision differences. Solid-dot → ring → half → hollow →
  // slash mirrors a 4-tier evidence scale.
  shape: "solid" | "ring" | "half" | "hollow" | "slash";
  // A plain-English label prefix the screen reader will announce so the
  // chip is never just a colour.
  srPrefix: string;
};

function resolve(tier: string): Resolved {
  const t = tier.toLowerCase();
  if (t.includes("not approved") || t.includes("absent")) {
    return {
      className: "tier-chip tier-anecdotal",
      shape: "slash",
      srPrefix: "Evidence tier, not approved",
    };
  }
  if (t.includes("approved")) {
    return {
      className: "tier-chip tier-high",
      shape: "solid",
      srPrefix: "FDA-approved",
    };
  }
  if (t.includes("high")) {
    return {
      className: "tier-chip tier-high",
      shape: "solid",
      srPrefix: "Evidence tier, high",
    };
  }
  if (t.includes("moderate")) {
    return {
      className: "tier-chip tier-moderate",
      shape: "half",
      srPrefix: "Evidence tier, moderate",
    };
  }
  if (t.includes("low")) {
    return {
      className: "tier-chip tier-low",
      shape: "ring",
      srPrefix: "Evidence tier, low",
    };
  }
  if (t.includes("anecdotal")) {
    return {
      className: "tier-chip tier-anecdotal",
      shape: "hollow",
      srPrefix: "Evidence tier, anecdotal",
    };
  }
  return {
    className: "tier-chip tier-anecdotal",
    shape: "hollow",
    srPrefix: "Evidence tier, unclassified",
  };
}

/**
 * Evidence-tier chip. Used inside the Evidence Ledger and inline in prose
 * ("tier: Moderate"). Colors match preclinical / pilot / phase strength,
 * AND each tier is distinguished by shape + text label so color is never
 * the sole indicator (WCAG 1.4.1 Use of Color).
 */
export function TierBadge({ tier }: { tier: EvidenceTier | string }) {
  const { className, shape, srPrefix } = resolve(tier);
  return (
    <span
      className={className}
      role="img"
      aria-label={`${srPrefix}`}
      data-shape={shape}
    >
      <span className="sr-only">{srPrefix}: </span>
      <span aria-hidden>{tier}</span>
    </span>
  );
}
