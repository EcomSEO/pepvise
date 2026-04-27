import { SITE } from "@/lib/content/site";
import { canonical } from "@/lib/seo";
import type { ReviewEntry } from "@/lib/content/reviews";
import { JsonLd } from "./JsonLd";

/**
 * ReviewJsonLd — composite Review + AggregateRating + Drug + Breadcrumb
 * graph for every long-form review page.
 *
 * The schema breadth is the SEO differentiator vs Wirecutter / Rtings /
 * Consumer Reports — most peptide review sites ship Article only;
 * Pepvise ships:
 *   - Review (with itemReviewed = Drug)
 *   - AggregateRating with the five sub-scores expressed as
 *     individual Rating nodes (so Search engines can extract them)
 *   - Drug (alternateName = alias, status = FDA / regulatory posture)
 *   - BreadcrumbList
 */
export function ReviewJsonLd({ entry, locale }: { entry: ReviewEntry; locale: string }) {
  const url = `${SITE.url}/${entry.slug}`;
  const drugId = `${url}#drug`;
  const reviewId = `${url}#review`;
  const aggId = `${url}#agg`;

  // Express the methodology v1.2 sub-dimensions as a list of named
  // Rating nodes — this is what differentiates the schema breadth
  // from a vanilla 1-rating Review.
  const subRatings = [
    { name: "Published evidence", value: entry.score.evidence },
    { name: "Mechanism plausibility", value: entry.score.mechanism },
    { name: "Human data", value: entry.score.human },
    { name: "Vendor trust", value: entry.score.vendor },
    { name: "Safety / regulatory", value: entry.score.safety },
  ];

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Drug",
            "@id": drugId,
            name: entry.name,
            alternateName: entry.alias,
            description: entry.oneLineVerdict,
            url,
            legalStatus: entry.fdaStatus,
            warning: `WADA: ${entry.wadaStatus}. Not approved for human consumption outside an authorized clinical trial. Pepvise reviews are not medical advice.`,
          },
          {
            "@type": "Review",
            "@id": reviewId,
            url,
            name: `${entry.name} review — Pepvise`,
            headline: `${entry.name}: ${entry.oneLineVerdict}`,
            datePublished: entry.lastUpdated,
            dateModified: entry.lastUpdated,
            inLanguage: locale,
            itemReviewed: { "@id": drugId },
            reviewBody: entry.longVerdict,
            reviewRating: {
              "@type": "Rating",
              ratingValue: entry.total.toFixed(1),
              bestRating: "10",
              worstRating: "0",
              alternateName: `${entry.total.toFixed(1)} out of 10 on Pepvise methodology v${SITE.methodologyVersion.replace(/^v/, "")}`,
            },
            author: {
              "@type": "Organization",
              name: `${SITE.name} Editorial Team`,
              url: SITE.url,
            },
            publisher: {
              "@type": "Organization",
              "@id": `${SITE.url}#org`,
              name: SITE.name,
              url: SITE.url,
            },
            positiveNotes: { "@type": "ItemList", itemListElement: entry.pros.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p })) },
            negativeNotes: { "@type": "ItemList", itemListElement: entry.cons.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c })) },
          },
          {
            "@type": "AggregateRating",
            "@id": aggId,
            itemReviewed: { "@id": drugId },
            ratingValue: entry.total.toFixed(1),
            bestRating: "10",
            worstRating: "0",
            ratingCount: subRatings.length,
            reviewCount: 1,
            ratingExplanation: subRatings.map((r) => `${r.name}: ${r.value.toFixed(1)}/10`).join("; "),
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: SITE.name, item: SITE.url },
              { "@type": "ListItem", position: 2, name: "Reviews", item: `${SITE.url}/reviews` },
              { "@type": "ListItem", position: 3, name: entry.name, item: url },
            ],
          },
        ],
      }}
    />
  );
}
