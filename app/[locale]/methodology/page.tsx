import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { hasLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/content/site";
import type { MethodologyItem } from "@/components/MethodologyTeaser";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!hasLocale(routing.locales, raw)) return {};
  const locale = raw as Locale;
  const t = await getTranslations({ locale, namespace: "methodologyPage" });
  return pageMetadata({
    title: t("h1"),
    description: t("lede"),
    path: "/methodology",
    locale,
  });
}

/**
 * /methodology, long-form score-system explainer.
 *
 * Numbered list of the five weighted dimensions, version history,
 * "what changed in v1.2" callout, and a pointer to the full v1.2
 * spec. Voice: utilitarian, decisive review-database, owns its
 * weighting choices and invites readers to argue.
 */
export default async function MethodologyPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale: raw } = await params;
  if (!hasLocale(routing.locales, raw)) notFound();
  const locale = raw as Locale;
  setRequestLocale(locale);
  return <Methodology />;
}

function Methodology() {
  const t = useTranslations("methodologyPage");
  const tHome = useTranslations("home");
  const tCommon = useTranslations("common");
  const items = tHome.raw("methodology.items") as MethodologyItem[];

  return (
    <article>
      <header className="bg-paper-soft border-b border-rule">
        <div className="mx-auto max-w-3xl px-5 md:px-8 py-12 md:py-16">
          <div className="caps-data text-forest mb-3">{tHome("methodology.eyebrow")}</div>
          <h1 className="font-serif text-[2rem] md:text-[2.4rem] leading-[1.08] text-ink tracking-[-0.014em]">
            {t("h1")}
          </h1>
          <p className="mt-5 text-[15.5px] leading-[1.6] text-ink-soft max-w-2xl">{t("lede")}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="caps-data text-ink border border-rule px-2 py-1">
              {t("currentVersion")}
            </span>
            <span className="caps-data text-ink-soft border border-rule-soft px-2 py-1">
              {t("previousVersion").replace("{date}", "2026-02-12")}
            </span>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-5 md:px-8 py-10 md:py-14">
        <ol className="space-y-8 list-none">
          {items.map((item, i) => (
            <li key={i} className="grid grid-cols-[40px_1fr] gap-5 items-start border-b border-rule-soft pb-7 last:border-b-0">
              <div className="mono tnum text-forest text-[1.4rem] leading-none">{String(i + 1).padStart(2, "0")}</div>
              <div>
                <div className="flex items-baseline gap-3 flex-wrap">
                  <h2 className="font-serif text-[1.3rem] text-ink leading-snug m-0">{item.label}</h2>
                  <span className="mono tnum text-forest text-[14px]">{item.weight}</span>
                </div>
                <p className="mt-2 text-[14.5px] text-ink-soft leading-[1.6]">{item.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href={"/methodology/v1-2" as never} className="btn-primary">
            {t("currentVersion")} <span aria-hidden>→</span>
          </Link>
          <Link href={"/" as never} className="btn-secondary">
            {tCommon("backToHome")}
          </Link>
        </div>

        <p className="mt-12 text-[12.5px] text-ink-soft leading-[1.55] border-t border-rule-soft pt-6">
          Pepvise reviews are not medical advice. Scores reflect published evidence and supply-chain posture
         , not a recommendation that any individual administer any compound. {SITE.lastDatabaseRefresh}.
        </p>
      </section>
    </article>
  );
}
