import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { hasLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { pageMetadata } from "@/lib/seo";
import { RankIndex } from "@/components/RankIndex";
import { rankRows } from "@/lib/content/reviews";

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
    title: `${t("rankIndex.heading")} — Pepvise`,
    description: t("rankIndex.caption"),
    path: "/reviews",
    locale,
  });
}

export default async function ReviewsIndex({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale: raw } = await params;
  if (!hasLocale(routing.locales, raw)) notFound();
  const locale = raw as Locale;
  setRequestLocale(locale);
  return <Reviews />;
}

function Reviews() {
  const tHome = useTranslations("home");
  const variantLabels = {
    "our-pick": tHome("rankIndex.ourPick"),
    budget: tHome("rankIndex.budget"),
    upgrade: tHome("rankIndex.upgrade"),
    "runner-up": tHome("rankIndex.runnerUp"),
    "also-ran": tHome("rankIndex.alsoRan"),
  } as const;
  const rows = rankRows(variantLabels);

  return (
    <>
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

      <section className="mx-auto max-w-6xl px-5 md:px-8 py-8">
        <Link href={"/methodology" as never} className="btn-secondary">
          {tHome("methodology.ctaRead")} <span aria-hidden>→</span>
        </Link>
      </section>
    </>
  );
}
