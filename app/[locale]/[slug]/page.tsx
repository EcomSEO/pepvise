import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { getPost, posts } from "@/lib/content/posts";
import { reviewBySlug, allReviews } from "@/lib/content/reviews";
import { ReviewTemplate } from "@/components/ReviewTemplate";
import { PillarTemplate } from "@/components/templates/PillarTemplate";
import { ComparisonTemplate } from "@/components/templates/ComparisonTemplate";
import { ClusterTemplate } from "@/components/templates/ClusterTemplate";
import { ListicleTemplate } from "@/components/templates/ListicleTemplate";
import { EducationalBanner } from "@/components/EducationalBanner";
import {
  isSwedenBlocked,
  SWEDEN_BLOCKED_NOTICE_SV,
} from "@/lib/compliance/sweden-restrictions";
import { pageMetadata } from "@/lib/seo";
import { routing, type Locale } from "@/i18n/routing";

// Avoid colliding with /about, /contact, etc, static pages take precedence over this dynamic route.
const RESERVED = new Set([
  "about",
  "contact",
  "privacy",
  "terms",
  "affiliate-disclosure",
  "editorial-standards",
  "newsletter",
  "guides",
  "methodology",
  "pipeline",
  "reviews",
  "comparisons",
  "categories",
  "medical-disclaimer",
  "sitemap.xml",
  "robots.txt",
  "llms.txt",
]);

export function generateStaticParams() {
  // union of post slugs and review slugs
  const slugs = new Set<string>();
  for (const p of posts) slugs.add(p.slug);
  for (const r of allReviews()) slugs.add(r.slug);
  return Array.from(slugs).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (RESERVED.has(slug)) return {};

  const review = reviewBySlug(slug);
  if (review) {
    return pageMetadata({
      title: `${review.name} review, ${review.total.toFixed(1)}/10 (Pepvise)`,
      description: review.oneLineVerdict,
      path: `/${review.slug}`,
      ogType: "article",
    });
  }

  const post = getPost(slug);
  if (!post) return {};
  const suffix =
    post.postType === "comparison"
      ? ` (Tested ${new Date(post.updatedAt).getFullYear()})`
      : "";
  return pageMetadata({
    title: `${post.title}${suffix}`,
    description: post.description,
    path: `/${post.slug}`,
    ogType: "article",
  });
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  if (!hasLocale(routing.locales, raw)) notFound();
  const locale = raw as Locale;
  setRequestLocale(locale);

  if (RESERVED.has(slug)) notFound();

  // Review-database template takes precedence, wirecutter-style
  // verdict block, score grid, comparison table, pros/cons.
  const review = reviewBySlug(slug);
  if (review) {
    // Sweden compliance: render a stub when locale=sv and the compound
    // matches the Läkemedelsverket blocked list (BPC-157, TB-500,
    // compounded semaglutide, Melanotan).
    if (
      locale === "sv" &&
      isSwedenBlocked({ slug: review.slug, title: review.name })
    ) {
      return (
        <article className="mx-auto max-w-3xl px-6 py-16">
          <h1 className="text-3xl font-serif text-inknavy mb-4">
            {review.name}
          </h1>
          <div
            role="note"
            className="rounded-md border-l-4 border-amber-700 bg-amber-50 px-4 py-3 text-sm text-amber-950 leading-relaxed"
          >
            {SWEDEN_BLOCKED_NOTICE_SV}
          </div>
        </article>
      );
    }
    return (
      <>
        <div className="mx-auto max-w-6xl px-5 md:px-8 pt-6">
          <EducationalBanner />
        </div>
        <ReviewTemplate entry={review} />
      </>
    );
  }

  const post = getPost(slug);
  if (!post) notFound();

  switch (post.postType) {
    case "pillar":
      return <PillarTemplate post={post} />;
    case "comparison":
      return <ComparisonTemplate post={post} />;
    case "listicle":
      return <ListicleTemplate post={post} />;
    case "cluster":
    default:
      return <ClusterTemplate post={post} />;
  }
}
