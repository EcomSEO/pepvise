import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import type { ReviewEntry } from "@/lib/content/reviews";
import { allReviews } from "@/lib/content/reviews";
import { VerdictBlock } from "./VerdictBlock";
import { ProsConsTable } from "./ProsConsTable";
import { ScoreBar } from "./ScoreBar";
import { ComparisonTable } from "./ComparisonTable";

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

  return (
    <article>
      {/* Header strip — breadcrumb-style */}
      <div className="bg-paper-soft border-b border-rule-soft">
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-3 flex items-center gap-2 text-[12px] text-ink-soft">
          <Link href={"/" as never} className="hover:text-forest">{tCommon("backToHome").replace("Back to home", "Pepvise")}</Link>
          <span aria-hidden>/</span>
          <Link href={"/reviews" as never} className="hover:text-forest">{tReview("verdict.rank")}</Link>
          <span aria-hidden>/</span>
          <span className="text-ink">{entry.name}</span>
        </div>
      </div>

      {/* Verdict block band */}
      <div className="border-b border-rule">
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-10 md:py-12">
          <VerdictBlock
            rank={entry.rank}
            variant={entry.variant}
            variantLabel={variantLabels[entry.variant]}
            name={entry.name}
            alias={entry.alias}
            score={entry.total}
            verdict={entry.oneLineVerdict}
            lastUpdated={entry.lastUpdated}
            copy={{
              rank: tReview("verdict.rank"),
              score: tReview("verdict.score"),
              verdictLabel: tReview("verdict.verdictLabel"),
              lastUpdated: tReview("verdict.lastUpdated"),
              methodologyLink: tReview("verdict.methodologyLink"),
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
            <div className="caps-data text-ink mb-3">{tReview("specs.heading")}</div>
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

          <section id="alternatives" className="my-10">
            <h3 className="font-serif text-[1.25rem] mb-2 text-ink">
              {tReview("alternatives.heading")}
            </h3>
            <p className="text-[13.5px] text-ink-soft mb-4">
              {tReview("alternatives.caption")}
            </p>
            <ul className="grid sm:grid-cols-3 gap-3">
              {entry.alternatives.map((slug) => {
                const alt = allReviews().find((e) => e.slug === slug);
                if (!alt) return null;
                return (
                  <li key={slug}>
                    <Link
                      href={`/${slug}` as never}
                      className="block border border-rule-soft hover:border-ink p-3 transition-colors"
                    >
                      <div className="caps-data text-ink-soft">#{alt.rank} · {variantLabels[alt.variant]}</div>
                      <div className="font-serif text-[15px] text-ink mt-1">{alt.name}</div>
                      <div className="mono tnum text-forest text-[15px] mt-1">{alt.total.toFixed(1)}/10</div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>

          <section id="references" className="my-10">
            <h3 className="font-serif text-[1.25rem] mb-3 text-ink">
              {tReview("references.heading")}
            </h3>
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
