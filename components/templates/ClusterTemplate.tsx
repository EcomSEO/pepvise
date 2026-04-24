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
import { Eyebrow } from "../editorial/Eyebrow";
import { DotRule, LedgerRule } from "../editorial/DotRule";
import { KeyTakeaway } from "../editorial/KeyTakeaway";
import { EvidenceLedger } from "../editorial/EvidenceLedger";
import { PullQuote } from "../editorial/PullQuote";
import { Reveal } from "../editorial/Reveal";

export function ClusterTemplate({ post }: { post: Post }) {
  const hub = getHub(post.hub);
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Guides", href: "/#issue-contents" },
    hub ? { label: hub.name, href: `/guides/${hub.slug}` } : { label: "" },
    { label: post.title },
  ];
  const related = relatedPosts(post);
  const hasLedger = Boolean(post.evidenceLedger);

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

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Eyebrow tone="oxblood">Explainer</Eyebrow>
          {hub && (
            <span className="caps-label text-slate">· {hub.shortName}</span>
          )}
        </div>

        <h1 className="display-headline mt-4 text-[2rem] md:text-[2.75rem] leading-[1.08]">
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

        {hasLedger && <EvidenceLedger post={post} />}

        {/* Drop-capped lede — dramatic scale/fade when the paragraph enters
            the viewport; reduced-motion renders it static at 4.6rem. */}
        <Reveal
          as="p"
          threshold={0.4}
          className="drop-cap mt-9 text-[1.1rem] leading-[1.78] text-charcoal/90"
        >
          {post.description}
        </Reveal>

        <KeyTakeaway variant="key-takeaway" title="The short answer">
          The tl;dr sits here for readers who need it now. The rest of the page
          earns that answer &mdash; with citations, trial counts, and the names
          of the investigators whose work the field is built on.
        </KeyTakeaway>

        <PullQuote>
          Mechanism explainers on PepVise aim for textbook-level clarity without
          the textbook's refusal to commit to a reading.
        </PullQuote>

        {post.faq && post.faq.length > 0 && (
          <section className="mt-14">
            <Eyebrow tone="oxblood">Frequently asked</Eyebrow>
            <h2 className="font-serif text-[1.75rem] md:text-[2rem] text-inknavy mt-2 mb-6 leading-tight">
              What readers ask us next.
            </h2>
            <dl className="divide-y divide-inknavy/15 border-y border-inknavy/15">
              {post.faq.map((f, i) => (
                <div key={i} className="py-6 first:pt-6 last:pb-6">
                  <dt className="font-serif text-lg text-inknavy leading-snug mb-2 italic">
                    {f.q}
                  </dt>
                  <dd className="text-[15.5px] text-charcoal/90 leading-[1.75]">
                    {f.a}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        <DotRule className="my-12" />

        <SourcesList sources={post.sources ?? []} />
        <AuthorBio />
        <RelatedPosts posts={related} />

        <div className="mt-12">
          <EmailCapture variant="end-of-article" />
        </div>
      </ArticleShell>
    </>
  );
}
