import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { hasLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { pageMetadata } from "@/lib/seo";
import { CATEGORIES, allReviews } from "@/lib/content/reviews";

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
    title: `${t("categories.heading")} — Pepvise`,
    description: t("categories.caption"),
    path: "/categories",
    locale,
  });
}

export default async function CategoriesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale: raw } = await params;
  if (!hasLocale(routing.locales, raw)) notFound();
  const locale = raw as Locale;
  setRequestLocale(locale);
  return <Categories />;
}

function Categories() {
  const tHome = useTranslations("home");
  const reviews = allReviews();

  return (
    <>
      <header className="bg-paper-soft border-b border-rule">
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-12 md:py-14">
          <div className="caps-data text-forest mb-3">{tHome("categories.eyebrow")}</div>
          <h1 className="font-serif text-[2rem] md:text-[2.4rem] leading-[1.1] text-ink tracking-[-0.014em]">
            {tHome("categories.heading")}
          </h1>
          <p className="mt-4 text-[15px] leading-[1.6] text-ink-soft max-w-2xl">
            {tHome("categories.caption")}
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 md:px-8 py-10 md:py-14 space-y-10">
        {CATEGORIES.map((cat) => {
          const items = reviews.filter((r) => r.category === cat.slug);
          return (
            <div key={cat.slug} className="border-t border-rule pt-7">
              <div className="flex items-baseline justify-between gap-4 flex-wrap mb-5">
                <h2 className="font-serif text-[1.55rem] md:text-[1.75rem] text-ink">
                  {cat.name}
                </h2>
                <span className="caps-data text-ink-soft mono tnum">
                  {items.length} of {cat.count} live
                </span>
              </div>
              {items.length === 0 ? (
                <p className="text-[14px] text-ink-soft italic">
                  No reviews scored on v1.2 yet — see the pipeline.
                </p>
              ) : (
                <ul className="grid md:grid-cols-2 gap-3">
                  {items.map((e) => (
                    <li key={e.slug}>
                      <Link
                        href={`/${e.slug}` as never}
                        className="block bg-paper border border-rule-soft hover:border-ink p-4 transition-colors"
                      >
                        <div className="caps-data text-ink-soft">
                          #{e.rank} ·{" "}
                          {e.variant === "our-pick"
                            ? "OUR PICK"
                            : e.variant === "budget"
                              ? "BUDGET"
                              : e.variant === "upgrade"
                                ? "UPGRADE"
                                : e.variant === "runner-up"
                                  ? "RUNNER-UP"
                                  : "ALSO TESTED"}
                        </div>
                        <div className="font-serif text-[16px] text-ink mt-1.5">{e.name}</div>
                        <div className="text-[13px] text-ink-soft mt-2 line-clamp-2">
                          {e.oneLineVerdict}
                        </div>
                        <div className="mono tnum text-forest text-[15px] mt-2">
                          {e.total.toFixed(1)}/10
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </section>
    </>
  );
}
