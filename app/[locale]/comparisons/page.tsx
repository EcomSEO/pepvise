import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { hasLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { pageMetadata } from "@/lib/seo";
import { ComparisonTable } from "@/components/ComparisonTable";
import { allReviews, comparisonRows } from "@/lib/content/reviews";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!hasLocale(routing.locales, raw)) return {};
  const locale = raw as Locale;
  const t = await getTranslations({ locale, namespace: "home" });
  return pageMetadata({
    title: `${t("comparison.heading")} — Pepvise`,
    description: t("comparison.caption"),
    path: "/comparisons",
    locale,
  });
}

export default async function ComparisonsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale: raw } = await params;
  if (!hasLocale(routing.locales, raw)) notFound();
  const locale = raw as Locale;
  setRequestLocale(locale);
  return <Comparisons />;
}

function Comparisons() {
  const tHome = useTranslations("home");
  const tCommon = useTranslations("common");

  const top4 = comparisonRows();
  const all = allReviews().map((e) => ({
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
    <>
      <header className="bg-paper-soft border-b border-rule">
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-12 md:py-14">
          <div className="caps-data text-forest mb-3">{tHome("comparison.eyebrow")}</div>
          <h1 className="font-serif text-[2rem] md:text-[2.4rem] leading-[1.1] text-ink tracking-[-0.014em]">
            {tHome("comparison.heading")}
          </h1>
          <p className="mt-4 text-[15px] leading-[1.6] text-ink-soft max-w-2xl">
            {tHome("comparison.caption")}
          </p>
        </div>
      </header>

      <ComparisonTable
        rows={top4}
        copy={{
          eyebrow: tHome("comparison.eyebrow"),
          heading: "Top four — head to head",
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

      <ComparisonTable
        rows={all}
        copy={{
          eyebrow: "ENTIRE DATABASE",
          heading: "Every entry, every dimension",
          caption: "Sortable by score, ranked by composite. Empty cells mean methodology v1.2 capped the score.",
          colCompound: tHome("comparison.colCompound"),
          colEvidence: tHome("comparison.colEvidence"),
          colMechanism: tHome("comparison.colMechanism"),
          colHuman: tHome("comparison.colHuman"),
          colVendor: tHome("comparison.colVendor"),
          colSafety: tHome("comparison.colSafety"),
          colTotal: tHome("comparison.colTotal"),
        }}
      />

      <section className="mx-auto max-w-6xl px-5 md:px-8 py-10 flex flex-wrap gap-3">
        <Link href={"/methodology" as never} className="btn-primary">
          {tCommon("viewMethodology")} <span aria-hidden>→</span>
        </Link>
        <Link href={"/reviews" as never} className="btn-secondary">
          All reviews
        </Link>
      </section>
    </>
  );
}
