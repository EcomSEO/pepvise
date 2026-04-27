import { Link } from "@/i18n/navigation";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import type { Locale } from "@/i18n/routing";
import { RankIndex } from "@/components/RankIndex";
import { ComparisonTable } from "@/components/ComparisonTable";
import { CategoriesStrip } from "@/components/CategoriesStrip";
import { MethodologyTeaser, type MethodologyItem } from "@/components/MethodologyTeaser";
import { TopPicksCard } from "@/components/TopPicksCard";
import { MethodologyBadge } from "@/components/MethodologyBadge";
import { LastTestedLine } from "@/components/LastTestedLine";
import {
  rankRows,
  comparisonRows,
  topPicks,
  CATEGORIES,
  PIPELINE,
} from "@/lib/content/reviews";
import { SITE } from "@/lib/content/site";

/**
 * Home — review-database lead.
 *
 * Section order, top to bottom:
 *   1. Hero band (paper-soft, ribbon + serif h1 + lede + 2 CTAs)
 *   2. RankIndex — numbered ranked list with score bars
 *   3. ComparisonTable — sticky-header full-width table, 4 entries
 *   4. CategoriesStrip — inline horizontal pills
 *   5. MethodologyTeaser — five-row weighted summary
 *   6. PipelinePreview — what we are testing next
 *   7. Newsletter dispatch (single line)
 */
export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <Home />;
}

function Home() {
  const tHome = useTranslations("home");

  const variantLabels = {
    "our-pick": tHome("rankIndex.ourPick"),
    budget: tHome("rankIndex.budget"),
    upgrade: tHome("rankIndex.upgrade"),
    "runner-up": tHome("rankIndex.runnerUp"),
    "also-ran": tHome("rankIndex.alsoRan"),
  } as const;

  const rows = rankRows(variantLabels);
  const cmpRows = comparisonRows();
  const topThree = topPicks(3);

  const methodologyItemsRaw = tHome.raw("methodology.items") as MethodologyItem[];

  return (
    <>
      <section className="bg-paper-soft border-b border-rule">
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-12 md:py-16 grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-5">
              <span aria-hidden className="block w-2 h-2 bg-forest" />
              <span className="caps-data text-forest tracking-[0.18em]">
                {tHome("hero.ribbon")} · {SITE.databaseEntries}{" "}
                <span className="lowercase tracking-normal">entries</span>
              </span>
            </div>
            <h1 className="font-serif text-[2rem] sm:text-[2.3rem] md:text-[2.5rem] leading-[1.08] text-ink tracking-[-0.014em]">
              {tHome("hero.h1")}
            </h1>
            <p className="mt-5 text-[15.5px] leading-[1.6] text-ink-soft max-w-xl">
              {tHome("hero.lede").replace("{date}", SITE.lastDatabaseRefresh)}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link href={"/#rank-index" as never} className="btn-primary">
                {tHome("hero.ctaPrimary")} <span aria-hidden>→</span>
              </Link>
              <Link href={"/methodology" as never} className="btn-secondary">
                {tHome("hero.ctaSecondary")}
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
              <LastTestedLine
                date={SITE.lastDatabaseRefresh}
                label={tHome("hero.refreshLabel")}
              />
              <MethodologyBadge
                version={SITE.methodologyVersion}
                label={tHome("hero.methodologyBadge")}
              />
            </div>
          </div>

          <aside className="lg:col-span-5">
            <TopPicksCard
              entries={topThree}
              variantLabels={variantLabels}
              copy={{
                heading: tHome("hero.topPicksHeading"),
                ctaSeeAll: tHome("hero.topPicksCta"),
              }}
            />
          </aside>
        </div>
      </section>

      <div id="rank-index">
        <RankIndex
          rows={rows}
          copy={{
            eyebrow: tHome("rankIndex.eyebrow"),
            heading: tHome("rankIndex.heading"),
            caption: tHome("rankIndex.caption"),
            colRank: tHome("rankIndex.colRank"),
            colName: tHome("rankIndex.colName"),
            colSummary: tHome("rankIndex.colSummary"),
            colEvidence: tHome("rankIndex.colEvidence"),
            colSafety: tHome("rankIndex.colSafety"),
            colTotal: tHome("rankIndex.colTotal"),
            readReview: tHome("rankIndex.readReview"),
          }}
        />
      </div>

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

      <CategoriesStrip
        items={CATEGORIES}
        copy={{
          eyebrow: tHome("categories.eyebrow"),
          heading: tHome("categories.heading"),
          caption: tHome("categories.caption"),
        }}
      />

      <MethodologyTeaser
        items={methodologyItemsRaw}
        copy={{
          eyebrow: tHome("methodology.eyebrow"),
          heading: tHome("methodology.heading"),
          caption: tHome("methodology.caption"),
          ctaRead: tHome("methodology.ctaRead"),
          ctaVersion: tHome("methodology.ctaVersion"),
        }}
      />

      {/* Pipeline preview — five-row dense table */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-12 md:py-16">
          <header className="mb-7 max-w-3xl">
            <div className="eyebrow mb-2.5">{tHome("pipeline.eyebrow")}</div>
            <h2 className="font-serif text-[1.55rem] md:text-[1.85rem] leading-[1.18] text-ink">
              {tHome("pipeline.heading")}
            </h2>
            <p className="mt-3 text-[14.5px] text-ink-soft leading-[1.55] max-w-2xl">
              {tHome("pipeline.caption")}
            </p>
          </header>
          <div className="border border-rule">
            <table className="cmp-table">
              <thead>
                <tr>
                  <th>Compound</th>
                  <th>Stage</th>
                  <th>Editor</th>
                  <th data-numeric="true">Target pub</th>
                </tr>
              </thead>
              <tbody>
                {PIPELINE.slice(0, 5).map((row) => (
                  <tr key={row.slug}>
                    <td>
                      <span className="font-serif text-[15px] text-ink">{row.name}</span>
                      {row.alias && (
                        <span className="caps-data text-ink-soft ml-2">{row.alias}</span>
                      )}
                    </td>
                    <td className="text-[13.5px]">{row.stage}</td>
                    <td className="text-[13.5px]">{row.editor}</td>
                    <td data-numeric="true">{row.targetPub}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Link href={"/pipeline" as never} className="btn-secondary mt-6">
            {tHome("pipeline.ctaSeeFull")} <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      {/* Newsletter — single line */}
      <section className="bg-paper-soft border-b border-rule">
        <div className="mx-auto max-w-3xl px-5 md:px-8 py-12 md:py-16 text-center">
          <div className="eyebrow mb-2.5">{tHome("newsletter.eyebrow")}</div>
          <h2 className="font-serif text-[1.55rem] md:text-[1.85rem] leading-[1.2] text-ink">
            {tHome("newsletter.heading")}
          </h2>
          <p className="mt-3 text-[14.5px] text-ink-soft leading-[1.55] max-w-xl mx-auto">
            {tHome("newsletter.caption")}
          </p>
          <form className="mt-6 flex flex-wrap gap-2 justify-center">
            <label className="flex-1 max-w-xs">
              <span className="sr-only">{tHome("newsletter.placeholder")}</span>
              <input
                type="email"
                placeholder={tHome("newsletter.placeholder")}
                className="bg-paper border border-rule focus:border-ink focus:outline-none w-full px-3 py-2 text-[14px]"
              />
            </label>
            <button type="submit" className="btn-primary">
              {tHome("newsletter.submit")}
            </button>
          </form>
          <p className="mt-3 text-[11.5px] text-ink-soft">{tHome("newsletter.consent")}</p>
        </div>
      </section>
    </>
  );
}
