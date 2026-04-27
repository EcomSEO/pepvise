import { Link } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";
import type { ReviewEntry } from "@/lib/content/reviews";
import { allReviews } from "@/lib/content/reviews";
import { VerdictBlock } from "./VerdictBlock";
import { DrugImage } from "./DrugImage";
import { ProsConsTable } from "./ProsConsTable";
import { ScoreBar } from "./ScoreBar";
import { ComparisonTable } from "./ComparisonTable";
import { MethodologyBadge } from "./MethodologyBadge";
import { LastTestedLine } from "./LastTestedLine";
import { AlternativesBlock } from "./AlternativesBlock";
import { ReviewJsonLd } from "./schema/ReviewJsonLd";
import { BreadcrumbJsonLd } from "./schema/BreadcrumbJsonLd";
import { SITE } from "@/lib/content/site";

/**
 * ReviewTemplate — the long-form review shell.
 *
 * Layout (desktop):
 *   - Verdict block, full-width across the content column
 *   - Two-column body: sticky TOC + Specs side-rail (left, 280px)
 *     and prose body (right, max-w-2xl)
 *   - Comparison table inline, mid-article
 *   - Pros / cons table
 *   - Alternatives list
 *   - References (numbered)
 *   - Other reviews in this category
 */
export function ReviewTemplate({ entry }: { entry: ReviewEntry }) {
  const tReview = useTranslations("review");
  const tHome = useTranslations("home");
  const tCommon = useTranslations("common");
  const locale = useLocale();

  const variantLabels = {
    "our-pick": tHome("rankIndex.ourPick"),
    budget: tHome("rankIndex.budget"),
    upgrade: tHome("rankIndex.upgrade"),
    "runner-up": tHome("rankIndex.runnerUp"),
    "also-ran": tHome("rankIndex.alsoRan"),
  } as const;

  const others = allReviews()
    .filter((e) => e.category === entry.category && e.slug !== entry.slug)
    .slice(0, 3);

  const cmpRows = allReviews()
    .filter((e) =>
      [entry.slug, ...entry.alternatives].includes(e.slug),
    )
    .slice(0, 4)
    .map((e) => ({
      rank: e.rank,
      slug: e.slug,
      name: e.name,
      alias: e.alias,
      evidence: e.score.evidence,
      mechanism: e.score.mechanism,
      human: e.score.human,
      vendor: e.score.vendor,
      safety: e.score.safety,
      total: e.total,
    }));

  const breadcrumbs = [
    { label: SITE.name, href: "/" },
    { label: "Reviews", href: "/reviews" },
    { label: entry.name },
  ];

  return (
    <article>
      <ReviewJsonLd entry={entry} locale={locale} />
      <BreadcrumbJsonLd crumbs={breadcrumbs} />

      {/* Header strip — breadcrumb-style */}
      <nav aria-label="Breadcrumb" className="bg-paper-soft border-b border-rule-soft">
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-3 flex items-center gap-2 text-[12px] text-ink-soft">
          <Link href={"/" as never} className="hover:text-forest">{SITE.name}</Link>
          <span aria-hidden className="text-ink-soft/50">/</span>
          <Link href={"/reviews" as never} className="hover:text-forest">Reviews</Link>
          <span aria-hidden className="text-ink-soft/50">/</span>
          <span className="text-ink">{entry.name}</span>
        </div>
      </nav>

      {/* Verdict block band */}
      <div className="border-b border-rule">
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-10 md:py-12">
          {entry.primaryDrug ? (
            <div className="mb-8 max-w-md">
              <DrugImage drugSlug={entry.primaryDrug} size="md" priority />
            </div>
          ) : null}
          <VerdictBlock
            rank={entry.rank}
            variant={entry.variant}
            variantLabel={variantLabels[entry.variant]}
            name={entry.name}
            alias={entry.alias}
            score={entry.total}
            verdict={entry.oneLineVerdict}
            lastUpdated={entry.lastUpdated}
            methodologyVersion={SITE.methodologyVersion}
            copy={{
              rank: tReview("verdict.rank"),
              score: tReview("verdict.score"),
              verdictLabel: tReview("verdict.verdictLabel"),
              lastUpdated: tReview("verdict.lastUpdated"),
              lastTested: tReview("verdict.lastTested"),
              methodologyLink: tReview("verdict.methodologyLink"),
              methodologyBadge: tReview("verdict.methodologyBadge"),
            }}
          />
        </div>
      </div>

      {/* Body — TOC / specs left, prose right */}
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-10 md:py-14 grid lg:grid-cols-[280px_1fr] gap-10">
        <aside className="space-y-8 lg:sticky lg:top-20 self-start">
          <div>
            <div className="caps-data text-ink mb-3">{tReview("toc.heading")}</div>
            <ul className="space-y-1.5 text-[13.5px]">
              <li><a href="#verdict" className="text-ink hover:text-forest">{tReview("verdict.verdictLabel")}</a></li>
              <li><a href="#specs" className="text-ink hover:text-forest">{tReview("specs.heading")}</a></li>
              <li><a href="#analysis" className="text-ink hover:text-forest">Analysis</a></li>
              <li><a href="#comparison" className="text-ink hover:text-forest">Comparison</a></li>
              <li><a href="#proscons" className="text-ink hover:text-forest">{tReview("prosCons.heading")}</a></li>
              <li><a href="#alternatives" className="text-ink hover:text-forest">{tReview("alternatives.heading")}</a></li>
              <li><a href="#references" className="text-ink hover:text-forest">{tReview("references.heading")}</a></li>
            </ul>
          </div>

          <div id="specs">
            <div className="flex items-center justify-between mb-3">
              <div className="caps-data text-ink">{tReview("specs.heading")}</div>
              <MethodologyBadge
                version={SITE.methodologyVersion}
                label={tReview("verdict.methodologyBadge")}
                variant="ghost"
              />
            </div>
            <dl className="space-y-3 text-[13px]">
              <SpecRow label={tReview("specs.labelEvidence")}>
                <ScoreBar value={entry.score.evidence} />
              </SpecRow>
              <SpecRow label={tReview("specs.labelMechanism")}>
                <ScoreBar value={entry.score.mechanism} />
              </SpecRow>
              <SpecRow label={tReview("specs.labelHuman")}>
                <ScoreBar value={entry.score.human} />
              </SpecRow>
              <SpecRow label={tReview("specs.labelVendor")}>
                <ScoreBar value={entry.score.vendor} />
              </SpecRow>
              <SpecRow label={tReview("specs.labelSafety")}>
                <ScoreBar value={entry.score.safety} />
              </SpecRow>
              <div className="pt-3 mt-3 border-t border-rule-soft grid grid-cols-2 gap-2">
                <div>
                  <div className="caps-data text-ink-soft mb-1">{tReview("specs.labelFda")}</div>
                  <div className="text-[12.5px] text-ink leading-tight">{entry.fdaStatus}</div>
                </div>
                <div>
                  <div className="caps-data text-ink-soft mb-1">{tReview("specs.labelWada")}</div>
                  <div className="text-[12.5px] text-ink leading-tight">{entry.wadaStatus}</div>
                </div>
              </div>
            </dl>
          </div>
        </aside>

        <div className="max-w-2xl">
          <section id="analysis" className="prose">
            <h2>Analysis</h2>
            <p>{entry.longVerdict}</p>
            <p>{entry.body}</p>
          </section>

          <section id="comparison" className="my-12 -mx-5 md:mx-0">
            <ComparisonTable
              rows={cmpRows}
              copy={{
                eyebrow: tHome("comparison.eyebrow"),
                heading: tHome("comparison.heading"),
                caption: tHome("comparison.caption"),
                colCompound: tHome("comparison.colCompound"),
                colEvidence: tHome("comparison.colEvidence"),
                colMechanism: tHome("comparison.colMechanism"),
                colHuman: tHome("comparison.colHuman"),
                colVendor: tHome("comparison.colVendor"),
                colSafety: tHome("comparison.colSafety"),
                colTotal: tHome("comparison.colTotal"),
              }}
            />
          </section>

          <section id="proscons" className="my-10">
            <ProsConsTable
              pros={entry.pros}
              cons={entry.cons}
              copy={{
                heading: tReview("prosCons.heading"),
                prosLabel: tReview("prosCons.prosLabel"),
                consLabel: tReview("prosCons.consLabel"),
              }}
            />
          </section>

          <AlternativesBlock
            entries={entry.alternatives
              .map((slug) => allReviews().find((e) => e.slug === slug))
              .filter((e): e is ReviewEntry => Boolean(e))}
            variantLabels={variantLabels}
            copy={{
              heading: tReview("alternatives.heading"),
              caption: tReview("alternatives.caption"),
            }}
          />

          <section id="references" className="my-10 border-t border-rule-soft pt-6">
            <div className="flex items-baseline justify-between mb-3">
              <h3 className="font-serif text-[1.25rem] text-ink">
                {tReview("references.heading")}
              </h3>
              <span className="caps-data text-ink-soft">
                {entry.references.length} cited
              </span>
            </div>
            <ol className="space-y-2 text-[13.5px] list-decimal pl-5">
              {entry.references.map((ref, i) => (
                <li key={i} className="text-ink">
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink hover:text-forest underline underline-offset-2 decoration-forest"
                  >
                    {ref.label}
                  </a>
                </li>
              ))}
            </ol>
            <div className="mt-5 pt-4 border-t border-rule-soft flex flex-wrap items-center justify-between gap-3">
              <LastTestedLine date={entry.lastUpdated} label={tReview("verdict.lastTested")} />
              <MethodologyBadge
                version={SITE.methodologyVersion}
                label={tReview("verdict.methodologyBadge")}
              />
            </div>
          </section>
        </div>
      </div>

      {/* Other reviews in this category */}
      {others.length > 0 && (
        <section className="border-t border-rule bg-paper-soft">
          <div className="mx-auto max-w-6xl px-5 md:px-8 py-10">
            <h3 className="font-serif text-[1.25rem] mb-4 text-ink">
              {tReview("moreInCategory.heading")}
            </h3>
            <ul className="grid md:grid-cols-3 gap-3">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link
                    href={`/${o.slug}` as never}
                    className="block bg-paper border border-rule-soft hover:border-ink p-4 transition-colors"
                  >
                    <div className="caps-data text-ink-soft">
                      #{o.rank} · {variantLabels[o.variant]}
                    </div>
                    <div className="font-serif text-[16px] text-ink mt-1.5">{o.name}</div>
                    <div className="text-[13px] text-ink-soft mt-2 line-clamp-2">{o.oneLineVerdict}</div>
                    <div className="mono tnum text-forest text-[15px] mt-2">{o.total.toFixed(1)}/10</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </article>
  );
}

function SpecRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[80px_1fr] items-center gap-3">
      <dt className="caps-data text-ink-soft">{label}</dt>
      <dd>{children}</dd>
    </div>
  );
}
