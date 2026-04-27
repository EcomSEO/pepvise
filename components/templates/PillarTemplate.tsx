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
import { WideArticleShell } from "./PageShell";
import { Eyebrow } from "../editorial/Eyebrow";
import { DotRule, LedgerRule } from "../editorial/DotRule";
import { KeyTakeaway } from "../editorial/KeyTakeaway";
import { PullQuote } from "../editorial/PullQuote";
import { EvidenceLedger } from "../editorial/EvidenceLedger";
import { WhatWouldChangeOurMind } from "../editorial/WhatWouldChangeOurMind";
import { MethodologyBlock } from "../editorial/MethodologyBlock";
import { Reveal } from "../editorial/Reveal";

export function PillarTemplate({ post }: { post: Post }) {
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

      <WideArticleShell
        aside={
          <nav className="space-y-6">
            <div>
              <Eyebrow tone="slate">On this page</Eyebrow>
              <ul className="mt-3 space-y-2 text-[14px]">
                {hasLedger && (
                  <li>
                    <a
                      href="#evidence-ledger"
                      className="text-inknavy hover:text-oxblood"
                    >
                      Evidence Ledger
                    </a>
                  </li>
                )}
                <li>
                  <a href="#lede" className="text-inknavy hover:text-oxblood">
                    The short answer
                  </a>
                </li>
                <li>
                  <a
                    href="#methodology"
                    className="text-inknavy hover:text-oxblood"
                  >
                    How we read the literature
                  </a>
                </li>
                {post.faq && post.faq.length > 0 && (
                  <li>
                    <a href="#faq" className="text-inknavy hover:text-oxblood">
                      Frequently asked questions
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
          <Eyebrow tone="oxblood">Compound profile</Eyebrow>
          {hub && (
            <span className="caps-label text-slate">· {hub.shortName}</span>
          )}
        </div>

        <h1
          id="lede"
          className="display-headline mt-4 text-[2.2rem] md:text-[3.1rem] leading-[1.06]"
        >
          {post.h1}
        </h1>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <ReviewStamp
            updatedAt={post.updatedAt}
            readingTime={post.readingTime}
          />
        </div>

        {post.medicalDisclaimer === "required" && (
          <PostReviewStamp reviewedOn={post.updatedAt} />
        )}

        <LedgerRule className="mt-8" />

        {/* Evidence Ledger, at the TOP of every compound profile */}
        {hasLedger && (
          <div id="evidence-ledger">
            <EvidenceLedger post={post} />
          </div>
        )}

        {/* Drop-capped lede, the oxblood capital scales from 5.5rem → 4.6rem
            and fades in over 600ms as the paragraph enters the viewport.
            Dramatic literary feel; respects reduced-motion. */}
        <Reveal
          as="p"
          threshold={0.4}
          className="drop-cap mt-10 text-[1.15rem] md:text-[1.2rem] leading-[1.78] text-charcoal/90 max-w-[62ch]"
        >
          {post.description}
        </Reveal>

        <PullQuote
          attribution="The PepVise Editorial Team"
          cite="from the house style guide"
        >
          We describe what has been measured &mdash; by whom, at what scale,
          with what effect size, and with what caveats. Hedging, here, is
          honesty.
        </PullQuote>

        <KeyTakeaway variant="key-takeaway" title="The short answer">
          What the peer-reviewed literature says today, where the Phase trial
          pipeline sits, and which claims belong to preclinical extrapolation
          rather than human-validated fact.
        </KeyTakeaway>

        {post.ourPick && (
          <section className="my-12">
            <Eyebrow tone="oxblood">Editorial reference</Eyebrow>
            <div className="mt-3 ledger-card p-8 md:p-9 pl-10">
              <div className="caps-label text-slate mb-2">
                {post.ourPick.tier}
              </div>
              <h2 className="font-serif text-[1.7rem] md:text-[2rem] text-inknavy leading-[1.1]">
                {post.ourPick.name}
              </h2>
              <p className="mt-4 text-[15.5px] text-charcoal/90 leading-[1.75] max-w-[62ch]">
                {post.ourPick.reason}
              </p>
            </div>
          </section>
        )}

        {post.products && post.products.length > 0 && (
          <section className="mt-14">
            <Eyebrow tone="oxblood">Reference reading</Eyebrow>
            <h2 className="font-serif text-[1.75rem] md:text-[2.1rem] text-inknavy mt-2 mb-6 leading-tight">
              The texts we read alongside the papers.
            </h2>
            <ol className="space-y-4">
              {post.products.map((p) => (
                <li
                  key={p.rank}
                  className="bg-paper border border-inknavy/15 rounded-sm p-6 md:p-7 relative"
                >
                  <div className="grid grid-cols-[auto_1fr] gap-5 md:gap-7">
                    <div className="flex flex-col items-start pt-1">
                      <span className="rank-numeral">
                        {String(p.rank).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <div className="caps-label text-slate mb-2">{p.tier}</div>
                      <h3 className="font-serif text-[1.3rem] md:text-[1.4rem] text-inknavy leading-tight">
                        {p.name}
                      </h3>
                      <p className="mt-3 text-[15px] text-charcoal/85 leading-[1.75]">
                        {p.summary}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        )}

        <div id="methodology">
          <MethodologyBlock />
        </div>

        {post.faq && post.faq.length > 0 && (
          <section id="faq" className="mt-14">
            <Eyebrow tone="oxblood">Frequently asked</Eyebrow>
            <h2 className="font-serif text-[1.75rem] md:text-[2.1rem] text-inknavy mt-2 mb-6 leading-tight">
              The questions readers actually bring us.
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
              A Phase 2 randomized trial with blinded outcome assessment would
              change the reading. A new independent replication outside the
              currently dominant research group would change the reading. A
              regulatory action &mdash; approval, restriction, or a class
              warning &mdash; would change the reading. When any of those
              lands, we update this profile within a week and mark what changed.
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
