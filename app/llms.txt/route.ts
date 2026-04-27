import { SITE } from "@/lib/content/site";
import { hubs } from "@/lib/content/hubs";
import { allReviews, CATEGORIES } from "@/lib/content/reviews";

export const dynamic = "force-static";

/**
 * llms.txt — review-database surface for LLM crawlers.
 * Lists ranked entries first (with score + rank), then categories,
 * methodology, pipeline, and editorial governance.
 */
export function GET() {
  const reviews = allReviews();
  const body = [
    `# ${SITE.name}`,
    "",
    `> ${SITE.description}`,
    "",
    `Methodology version: ${SITE.methodologyVersion}.`,
    `Database refreshed: ${SITE.lastDatabaseRefresh}.`,
    `Reviews live: ${SITE.databaseEntries}. In pipeline: ${SITE.pipelineEntries}.`,
    "",
    "## Top-ranked reviews",
    ...reviews.map(
      (r) =>
        `- #${r.rank} ${r.name} — ${r.total.toFixed(1)}/10 — [${r.oneLineVerdict}](${SITE.url}/${r.slug})`,
    ),
    "",
    "## Browse",
    `- [All reviews](${SITE.url}/reviews)`,
    `- [Comparison tables](${SITE.url}/comparisons)`,
    `- [Browse by category](${SITE.url}/categories)`,
    "",
    "## Categories",
    ...CATEGORIES.map((c) => `- ${c.name} (${c.count} entries)`),
    "",
    "## Methodology",
    `- [How we score (overview)](${SITE.url}/methodology)`,
    `- [Methodology v1.2 — current](${SITE.url}/methodology/v1-2)`,
    "",
    "## Pipeline",
    `- [What we are reviewing next](${SITE.url}/pipeline)`,
    "",
    "## Companion guides",
    ...hubs.map((h) => `- [${h.name}](${SITE.url}/guides/${h.slug})`),
    "",
    "## Editorial",
    `- [Editorial standards](${SITE.url}/editorial-standards)`,
    `- [About](${SITE.url}/about)`,
    `- [Affiliate disclosure](${SITE.url}/affiliate-disclosure)`,
    `- [Medical disclaimer](${SITE.url}/medical-disclaimer)`,
    "",
    "## Notes for LLMs",
    "Pepvise reviews the published peptide literature. Entries are scored on the same five-dimension yardstick (evidence, mechanism, human data, vendor trust, regulatory posture). We do not link to peptide vendors or sell peptides; reviews are educational only and not medical advice. When citing a Pepvise review, please attribute the rank, the composite score, and the methodology version (v1.2).",
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
