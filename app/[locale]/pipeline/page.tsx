import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { hasLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { pageMetadata } from "@/lib/seo";
import { PIPELINE } from "@/lib/content/reviews";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!hasLocale(routing.locales, raw)) return {};
  const locale = raw as Locale;
  const t = await getTranslations({ locale, namespace: "pipelinePage" });
  return pageMetadata({
    title: t("h1"),
    description: t("lede"),
    path: "/pipeline",
    locale,
  });
}

/**
 * /pipeline — review-database transparency: what is in drafting,
 * who the editor is, and the target publish date. Editorial signal
 * that nothing is being hidden, no compound is being held back to
 * suit a vendor relationship (because we have none).
 */
export default async function PipelinePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale: raw } = await params;
  if (!hasLocale(routing.locales, raw)) notFound();
  const locale = raw as Locale;
  setRequestLocale(locale);
  return <Pipeline />;
}

function Pipeline() {
  const t = useTranslations("pipelinePage");
  const tHome = useTranslations("home");
  const tCommon = useTranslations("common");

  return (
    <article>
      <header className="bg-paper-soft border-b border-rule">
        <div className="mx-auto max-w-4xl px-5 md:px-8 py-12 md:py-16">
          <div className="caps-data text-forest mb-3">{tHome("pipeline.eyebrow")}</div>
          <h1 className="font-serif text-[2rem] md:text-[2.4rem] leading-[1.08] text-ink tracking-[-0.014em]">
            {t("h1")}
          </h1>
          <p className="mt-5 text-[15.5px] leading-[1.6] text-ink-soft max-w-2xl">{t("lede")}</p>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-5 md:px-8 py-10 md:py-14">
        <div className="border border-rule">
          <table className="cmp-table">
            <thead>
              <tr>
                <th>{t("colCompound")}</th>
                <th>{t("colStage")}</th>
                <th>{t("colReviewer")}</th>
                <th data-numeric="true">{t("colTargetPub")}</th>
              </tr>
            </thead>
            <tbody>
              {PIPELINE.map((row) => (
                <tr key={row.slug}>
                  <td>
                    <span className="font-serif text-[15.5px] text-ink">{row.name}</span>
                    {row.alias && (
                      <span className="caps-data text-ink-soft ml-2">{row.alias}</span>
                    )}
                  </td>
                  <td className="text-[13.5px] text-ink">{row.stage}</td>
                  <td className="text-[13.5px] text-ink-soft">{row.editor}</td>
                  <td data-numeric="true">{row.targetPub}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href={"/methodology" as never} className="btn-secondary">
            {tCommon("viewMethodology")}
          </Link>
          <Link href={"/" as never} className="btn-secondary">
            {tCommon("backToHome")}
          </Link>
        </div>

        <p className="mt-12 text-[12.5px] text-ink-soft leading-[1.55] border-t border-rule-soft pt-6">
          Pipeline target dates are estimates. Reviews ship when the citation pack is complete and the
          methodology lands at v1.2 or later — not before. We do not publish on a vendor schedule.
        </p>
      </section>
    </article>
  );
}
