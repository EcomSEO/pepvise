import type { MetadataRoute } from "next";
import { hubs } from "@/lib/content/hubs";
import { posts } from "@/lib/content/posts";
import { allReviews } from "@/lib/content/reviews";
import { locales, defaultLocale } from "@/i18n/routing";
import { localeUrl } from "@/lib/seo";

/**
 * Multi-locale sitemap with hreflang `alternates.languages` on every
 * URL. Twelve locales × every public route, plus the review-database
 * routes (methodology, methodology/v1-2, pipeline, reviews,
 * comparisons, categories) and per-compound review pages.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const reviewSlugs = new Set(allReviews().map((r) => r.slug));
  const postSlugsExtra = posts
    .map((p) => p.slug)
    .filter((s) => !reviewSlugs.has(s));

  const paths: { path: string; priority: number; lastMod: string }[] = [
    { path: "/", priority: 1, lastMod: now },
    { path: "/reviews", priority: 0.95, lastMod: now },
    { path: "/comparisons", priority: 0.9, lastMod: now },
    { path: "/categories", priority: 0.85, lastMod: now },
    { path: "/methodology", priority: 0.85, lastMod: now },
    { path: "/methodology/v1-2", priority: 0.7, lastMod: now },
    { path: "/pipeline", priority: 0.75, lastMod: now },
  ];

  for (const r of allReviews()) {
    paths.push({
      path: `/${r.slug}`,
      priority: r.rank <= 3 ? 0.95 : 0.85,
      lastMod: r.lastUpdated,
    });
  }

  for (const slug of postSlugsExtra) {
    const p = posts.find((x) => x.slug === slug);
    if (!p) continue;
    paths.push({
      path: `/${slug}`,
      priority: p.postType === "pillar" ? 0.85 : 0.7,
      lastMod: p.updatedAt,
    });
  }

  for (const h of hubs) {
    paths.push({ path: `/guides/${h.slug}`, priority: 0.7, lastMod: now });
  }

  for (const path of [
    "/about",
    "/editorial-standards",
    "/affiliate-disclosure",
    "/medical-disclaimer",
    "/contact",
    "/newsletter",
    "/privacy",
    "/terms",
  ]) {
    paths.push({ path, priority: 0.3, lastMod: now });
  }

  return paths.map((p) => {
    const languages: Record<string, string> = {};
    for (const l of locales) {
      languages[l] = localeUrl(l, p.path);
    }
    languages["x-default"] = localeUrl(defaultLocale, p.path);
    return {
      url: localeUrl(defaultLocale, p.path),
      lastModified: p.lastMod,
      changeFrequency: "weekly" as const,
      priority: p.priority,
      alternates: { languages },
    };
  });
}
