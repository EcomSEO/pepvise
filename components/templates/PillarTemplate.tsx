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
import { FaqJsonLd } from "../schema/FaqJsonLd";
import { ArticleShell } from "./PageShell";

export function PillarTemplate({ post }: { post: Post }) {
  const hub = getHub(post.hub);
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Guides", href: "/#hubs" },
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
      {post.faq && <FaqJsonLd faq={post.faq} />}

      <ArticleShell>
        <Breadcrumbs crumbs={crumbs} />
        <h1 className="font-serif text-4xl md:text-5xl text-pine mt-4 leading-tight">
          {post.h1}
        </h1>
        <div className="mt-3">
          <ReviewStamp updatedAt={post.updatedAt} readingTime={post.readingTime} />
        </div>

        {post.medicalDisclaimer === "required" && (
          <PostReviewStamp reviewedOn={post.updatedAt} />
        )}

        <p className="mt-8 text-lg text-charcoal/90 leading-relaxed">
          {post.description}
        </p>

        {post.ourPick && (
          <section className="mt-10 p-6 rounded-lg bg-bone border border-inknavy/10">
            <div className="text-xs uppercase tracking-wide text-oxblood mb-1">
              Editorial reference · {post.ourPick.tier}
            </div>
            <h2 className="font-serif text-2xl text-inknavy mb-2">
              {post.ourPick.name}
            </h2>
            <p className="text-charcoal/80">{post.ourPick.reason}</p>
          </section>
        )}

        {post.products && post.products.length > 0 && (
          <section className="mt-10">
            <h2 className="font-serif text-2xl text-inknavy mb-4">
              Reference reading
            </h2>
            <ol className="space-y-6">
              {post.products.map((p) => (
                <li
                  key={p.rank}
                  className="p-5 border border-inknavy/10 rounded-lg bg-white/60"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-serif text-2xl text-oxblood">
                      {p.rank}.
                    </span>
                    <div>
                      <h3 className="font-serif text-xl text-inknavy">
                        {p.name}
                      </h3>
                      <span className="text-xs uppercase tracking-wide text-charcoal/50">
                        {p.tier}
                      </span>
                    </div>
                  </div>
                  <p className="mt-3 text-charcoal/80 text-[15px]">
                    {p.summary}
                  </p>
                </li>
              ))}
            </ol>
          </section>
        )}

        {post.faq && post.faq.length > 0 && (
          <section className="mt-12">
            <h2 className="font-serif text-2xl text-inknavy mb-4">
              Frequently asked questions
            </h2>
            <div className="space-y-5">
              {post.faq.map((f, i) => (
                <div key={i}>
                  <h3 className="font-serif text-lg text-inknavy">{f.q}</h3>
                  <p className="mt-1 text-charcoal/80">{f.a}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <SourcesList sources={post.sources ?? []} />
        <AuthorBio />
        <RelatedPosts posts={related} />
        <EmailCapture variant="end-of-article" />
      </ArticleShell>
    </>
  );
}
