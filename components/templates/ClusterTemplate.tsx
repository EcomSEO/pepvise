import type { Post } from "@/lib/content/posts";
import { getHub } from "@/lib/content/hubs";
import { relatedPosts } from "@/lib/content/posts";
import { Breadcrumbs } from "../Breadcrumbs";
import { ReviewStamp } from "../ReviewStamp";
import { AuthorBio } from "../AuthorBio";
import { RelatedPosts } from "../RelatedPosts";
import { SourcesList } from "../SourcesList";
import { EmailCapture } from "../EmailCapture";
import { EvidenceLedger } from "../EvidenceLedger";
import { PostReviewStamp } from "../MedicalDisclaimer";
import { ArticleJsonLd } from "../schema/ArticleJsonLd";
import { BreadcrumbJsonLd } from "../schema/BreadcrumbJsonLd";
import { FaqJsonLd } from "../schema/FaqJsonLd";
import { ArticleShell } from "./PageShell";

export function ClusterTemplate({ post }: { post: Post }) {
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
        <h1 className="font-serif text-3xl md:text-4xl text-pine mt-4 leading-tight">
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

        <EvidenceLedger post={post} />

        {post.faq && post.faq.length > 0 && (
          <section className="mt-10">
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
