import type { Post } from "@/lib/content/posts";
import { getHub } from "@/lib/content/hubs";
import { relatedPosts } from "@/lib/content/posts";
import { Breadcrumbs } from "../Breadcrumbs";
import { ReviewStamp } from "../ReviewStamp";
import { AuthorBio } from "../AuthorBio";
import { RelatedPosts } from "../RelatedPosts";
import { SourcesList } from "../SourcesList";
import { EmailCapture } from "../EmailCapture";
import { PostReviewStamp } from "../MedicalDisclaimer";
import { ArticleJsonLd } from "../schema/ArticleJsonLd";
import { BreadcrumbJsonLd } from "../schema/BreadcrumbJsonLd";
import { ItemListJsonLd } from "../schema/ItemListJsonLd";
import { ArticleShell } from "./PageShell";
import { Eyebrow } from "../editorial/Eyebrow";
import { DotRule, LedgerRule } from "../editorial/DotRule";
import { RankNumeral } from "../editorial/RankNumeral";

export function ListicleTemplate({ post }: { post: Post }) {
  const hub = getHub(post.hub);
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Guides", href: "/#issue-contents" },
    hub ? { label: hub.name, href: `/guides/${hub.slug}` } : { label: "" },
    { label: post.title },
  ];
  const related = relatedPosts(post);

  return (
    <>
      <ArticleJsonLd
        path={`/${post.slug}`}
        headline={post.h1}
        description={post.description}
        datePublished={post.publishedAt}
        dateModified={post.updatedAt}
      />
      <BreadcrumbJsonLd crumbs={crumbs} />
      {post.items && (
        <ItemListJsonLd
          items={post.items.map((i) => ({ rank: i.rank, name: i.name }))}
        />
      )}

      <ArticleShell>
        <Breadcrumbs crumbs={crumbs} />

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Eyebrow tone="oxblood">Evidence review</Eyebrow>
          {hub && (
            <span className="caps-label text-slate">· {hub.shortName}</span>
          )}
        </div>

        <h1 className="display-headline mt-4 text-[2rem] md:text-[2.85rem] leading-[1.06]">
          {post.h1}
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-4">
          <ReviewStamp
            updatedAt={post.updatedAt}
            readingTime={post.readingTime}
          />
        </div>

        {post.medicalDisclaimer === "required" && (
          <PostReviewStamp reviewedOn={post.updatedAt} />
        )}

        <LedgerRule className="mt-7" />

        <p className="mt-9 font-serif italic text-[1.2rem] text-inknavy/85 max-w-[60ch] leading-[1.5]">
          {post.description}
        </p>

        {post.items && post.items.length > 0 && (
          <ol className="mt-12 space-y-0 border-t border-inknavy/15">
            {post.items.map((item) => (
              <li
                key={item.rank}
                className="group grid grid-cols-[auto_1fr] gap-5 md:gap-7 py-8 border-b border-inknavy/15"
              >
                <div className="pt-1">
                  <RankNumeral n={item.rank} />
                </div>
                <div>
                  <h2 className="font-serif text-[1.45rem] md:text-[1.6rem] text-inknavy leading-tight group-hover:text-oxblood transition">
                    {item.name}
                  </h2>
                  <p className="mt-3 text-[15.5px] text-charcoal/90 leading-[1.75] max-w-[62ch]">
                    {item.summary}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        )}

        <DotRule className="my-14" />

        <SourcesList sources={post.sources ?? []} />
        <AuthorBio />
        <RelatedPosts posts={related} />

        <div className="mt-14">
          <EmailCapture variant="end-of-article" />
        </div>
      </ArticleShell>
    </>
  );
}
