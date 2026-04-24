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
import { ItemListJsonLd } from "../schema/ItemListJsonLd";
import { WideArticleShell } from "./PageShell";
import { Eyebrow } from "../editorial/Eyebrow";
import { DotRule, LedgerRule } from "../editorial/DotRule";
import { TierBadge, type EvidenceTier } from "../editorial/TierBadge";
import { MethodologyBlock } from "../editorial/MethodologyBlock";
import { WhatWouldChangeOurMind } from "../editorial/WhatWouldChangeOurMind";
import { PullQuote } from "../editorial/PullQuote";

function tierFromLabel(raw: string): EvidenceTier {
  const t = raw.toLowerCase();
  if (t.includes("primary") || t.includes("registry")) return "High";
  if (t.includes("review") || t.includes("reference text")) return "Moderate";
  if (t.includes("textbook") || t.includes("popular")) return "Low";
  return "Anecdotal";
}

export function ComparisonTemplate({ post }: { post: Post }) {
  const hub = getHub(post.hub);
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Guides", href: "/#issue-contents" },
    hub ? { label: hub.name, href: `/guides/${hub.slug}` } : { label: "" },
    { label: post.title },
  ];
  const related = relatedPosts(post);

  const picks = (post.products ?? []).filter(
    (p) => !p.tier.toLowerCase().includes("skip")
  );
  const skips = (post.products ?? []).filter((p) =>
    p.tier.toLowerCase().includes("skip")
  );

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
      {post.products && (
        <ItemListJsonLd
          items={post.products.map((p) => ({ rank: p.rank, name: p.name }))}
        />
      )}

      <WideArticleShell
        aside={
          <nav className="space-y-6">
            <div>
              <Eyebrow tone="slate">On this page</Eyebrow>
              <ul className="mt-3 space-y-2 text-[14px]">
                <li>
                  <a
                    href="#short-list"
                    className="text-inknavy hover:text-oxblood"
                  >
                    The ranked list
                  </a>
                </li>
                {skips.length > 0 && (
                  <li>
                    <a href="#skips" className="text-inknavy hover:text-oxblood">
                      What we&apos;d skip
                    </a>
                  </li>
                )}
                <li>
                  <a
                    href="#methodology"
                    className="text-inknavy hover:text-oxblood"
                  >
                    Methodology
                  </a>
                </li>
                {post.faq && post.faq.length > 0 && (
                  <li>
                    <a href="#faq" className="text-inknavy hover:text-oxblood">
                      FAQ
                    </a>
                  </li>
                )}
                <li>
                  <a
                    href="#change-mind"
                    className="text-inknavy hover:text-oxblood"
                  >
                    What would change our reading
                  </a>
                </li>
                <li>
                  <a href="#sources" className="text-inknavy hover:text-oxblood">
                    Sources
                  </a>
                </li>
              </ul>
            </div>
            <div className="pt-6 border-t border-inknavy/15">
              <Eyebrow tone="slate">The masthead</Eyebrow>
              <dl className="mt-3 space-y-2.5 text-[13.5px]">
                <div className="flex justify-between">
                  <dt className="text-slate">Entries</dt>
                  <dd className="text-inknavy tnum">{picks.length}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate">Cited</dt>
                  <dd className="text-inknavy tnum">
                    {(post.sources ?? []).length} sources
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate">Read time</dt>
                  <dd className="text-inknavy tnum">{post.readingTime} min</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate">Last reviewed</dt>
                  <dd className="text-inknavy">
                    {new Date(post.updatedAt).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
                  </dd>
                </div>
              </dl>
            </div>
          </nav>
        }
      >
        <Breadcrumbs crumbs={crumbs} />

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Eyebrow tone="oxblood">Comparison</Eyebrow>
          {hub && (
            <span className="caps-label text-slate">· {hub.shortName}</span>
          )}
        </div>

        <h1 className="display-headline mt-4 text-[2.1rem] md:text-[3rem] leading-[1.05]">
          {post.h1}
        </h1>

        <p className="mt-6 font-serif italic text-[1.25rem] text-inknavy/85 max-w-[60ch] leading-[1.5]">
          {post.description}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <ReviewStamp
            updatedAt={post.updatedAt}
            readingTime={post.readingTime}
          />
        </div>

        {post.medicalDisclaimer === "required" && (
          <PostReviewStamp reviewedOn={post.updatedAt} />
        )}

        <LedgerRule className="mt-10" />

        <PullQuote>
          Side-by-side comparisons on PepVise rank by weight of evidence, not by
          bodybuilding forum consensus. Tier badges on every entry.
        </PullQuote>

        {/* Ranked compound profiles */}
        {picks.length > 0 && (
          <section id="short-list" className="mt-14">
            <div className="flex items-end justify-between flex-wrap gap-3 mb-6">
              <div>
                <Eyebrow tone="oxblood">The ranked list</Eyebrow>
                <h2 className="font-serif text-[1.9rem] md:text-[2.3rem] text-inknavy mt-2 leading-tight">
                  In order of evidence weight.
                </h2>
              </div>
              <div className="caps-label text-slate">
                {picks.length} entries · ranked by evidence tier
              </div>
            </div>

            <ol className="space-y-5">
              {picks.map((p) => {
                const tier = tierFromLabel(p.tier);
                const isFirst = p.rank === 1;
                return (
                  <li
                    key={p.rank}
                    id={`pick-${p.rank}`}
                    className={`group relative bg-paper border rounded-sm p-6 md:p-7 transition ${
                      isFirst
                        ? "border-oxblood/50 shadow-ledger"
                        : "border-inknavy/15 hover:border-oxblood/40"
                    }`}
                  >
                    {isFirst && (
                      <div className="absolute top-0 left-0 w-1 h-full bg-oxblood" />
                    )}
                    <div className="grid grid-cols-[auto_1fr] gap-5 md:gap-7">
                      <div className="flex flex-col items-start pt-1">
                        <span className="rank-numeral">
                          {String(p.rank).padStart(2, "0")}
                        </span>
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <TierBadge tier={tier} />
                          <span className="caps-label text-slate">
                            {p.tier}
                          </span>
                        </div>
                        <h3 className="font-serif text-[1.4rem] md:text-[1.55rem] text-inknavy leading-tight">
                          {p.name}
                        </h3>
                        <p className="mt-3 text-[15.5px] text-charcoal/85 leading-[1.75]">
                          {p.summary}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </section>
        )}

        {skips.length > 0 && (
          <section id="skips" className="mt-14">
            <div className="bg-inknavy/[0.04] border border-inknavy/20 rounded-sm p-7 md:p-8 relative">
              <div className="absolute top-0 left-0 w-1 h-full bg-oxblood" />
              <div className="flex items-center gap-3 mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-oxblood" />
                <Eyebrow tone="oxblood">What we&apos;d skip &mdash; and why</Eyebrow>
              </div>
              <h2 className="font-serif text-2xl text-inknavy mb-5 leading-tight">
                Named, with the evidence reason.
              </h2>
              <div className="space-y-5">
                {skips.map((p) => (
                  <div
                    key={p.rank}
                    className="pl-5 border-l-2 border-oxblood/50"
                  >
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-serif text-lg text-inknavy">
                        {p.name}
                      </h3>
                      <span className="caps-label text-slate">{p.tier}</span>
                    </div>
                    <p className="text-[14.5px] text-charcoal/85 leading-[1.7]">
                      {p.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <div id="methodology">
          <MethodologyBlock />
        </div>

        {post.faq && post.faq.length > 0 && (
          <section id="faq" className="mt-14">
            <Eyebrow tone="oxblood">Frequently asked</Eyebrow>
            <h2 className="font-serif text-[1.75rem] md:text-[2.1rem] text-inknavy mt-2 mb-6 leading-tight">
              What readers ask us next.
            </h2>
            <dl className="divide-y divide-inknavy/15 border-y border-inknavy/15">
              {post.faq.map((f, i) => (
                <div
                  key={i}
                  className="grid md:grid-cols-[1fr_2fr] gap-5 py-6 first:pt-6 last:pb-6"
                >
                  <dt className="font-serif text-lg text-inknavy leading-snug italic">
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

        <div id="change-mind">
          <WhatWouldChangeOurMind>
            <p>
              A new Phase 2 trial for any of the ranked compounds. A regulatory
              action changing FDA status. A published replication failure in an
              independent lab. Any of those would move entries on this list
              within a week, with a dated note on what changed.
            </p>
          </WhatWouldChangeOurMind>
        </div>

        <DotRule className="my-14" />

        <div id="sources">
          <SourcesList sources={post.sources ?? []} />
        </div>

        <AuthorBio />
        <RelatedPosts posts={related} />

        <div className="mt-14">
          <EmailCapture variant="end-of-article" />
        </div>
      </WideArticleShell>
    </>
  );
}
