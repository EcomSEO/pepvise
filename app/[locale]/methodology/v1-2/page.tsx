import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { hasLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { pageMetadata } from "@/lib/seo";
import type { MethodologyItem } from "@/components/MethodologyTeaser";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!hasLocale(routing.locales, raw)) return {};
  const locale = raw as Locale;
  const t = await getTranslations({ locale, namespace: "methodologyV12" });
  return pageMetadata({
    title: t("h1"),
    description: t("lede").replace("{date}", "2026-04-01"),
    path: "/methodology/v1-2",
    locale,
  });
}

const CHANGELOG = [
  {
    code: "01",
    label: "Human-data weighting raised 20% → 25%",
    body:
      "Reta-1 NEJM publication and the Surv-3 readout pulled forward the case for weighting registered human work harder. Compounds with rodent-only files now lose a full point against compounds with even small Phase 1s.",
  },
  {
    code: "02",
    label: "Vendor-trust ceiling raised 7 → 9",
    body:
      "Three independent third-party assays now report on the largest research-channel suppliers. The previous ceiling under-rewarded compounds with publicly verifiable lots.",
  },
  {
    code: "03",
    label: "WADA double-count removed",
    body:
      "v1.1 captured WADA status both in regulatory posture and as a separate safety penalty. v1.2 consolidates that signal into regulatory posture only.",
  },
  {
    code: "04",
    label: "Mouse-only literature soft-cap",
    body:
      "Evidence column is now capped at 8.0 when no published in-vitro-to-human bridge exists. BPC-157 and TB-500 both reset under this rule.",
  },
];

export default async function MethodologyV12Page({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale: raw } = await params;
  if (!hasLocale(routing.locales, raw)) notFound();
  const locale = raw as Locale;
  setRequestLocale(locale);
  return <MethV12 />;
}

function MethV12() {
  const t = useTranslations("methodologyV12");
  const tHome = useTranslations("home");
  const tCommon = useTranslations("common");
  const items = tHome.raw("methodology.items") as MethodologyItem[];

  return (
    <article>
      <header className="bg-paper-soft border-b border-rule">
        <div className="mx-auto max-w-3xl px-5 md:px-8 py-12 md:py-16">
          <div className="caps-data text-forest mb-3">METHODOLOGY · VERSION HISTORY</div>
          <h1 className="font-serif text-[2rem] md:text-[2.4rem] leading-[1.08] text-ink tracking-[-0.014em]">
            {t("h1")}
          </h1>
          <p className="mt-5 text-[15.5px] leading-[1.6] text-ink-soft max-w-2xl">
            {t("lede").replace("{date}", "2026-04-01")}
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-5 md:px-8 py-10 md:py-14">
        <h2 className="font-serif text-[1.55rem] text-ink mb-5">What changed</h2>
        <ol className="space-y-7 list-none">
          {CHANGELOG.map((c) => (
            <li key={c.code} className="grid grid-cols-[40px_1fr] gap-5 items-start border-b border-rule-soft pb-6 last:border-b-0">
              <div className="mono tnum text-forest text-[1.1rem]">{c.code}</div>
              <div>
                <h3 className="font-serif text-[1.1rem] text-ink m-0">{c.label}</h3>
                <p className="mt-2 text-[14.5px] text-ink-soft leading-[1.6]">{c.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <h2 className="font-serif text-[1.55rem] text-ink mt-12 mb-5">Weights, current</h2>
        <table className="cmp-table w-full">
          <thead>
            <tr>
              <th>Component</th>
              <th data-numeric="true">Weight v1.2</th>
              <th data-numeric="true">v1.1</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.label}>
                <td className="font-serif text-[15px] text-ink">{item.label}</td>
                <td data-numeric="true" className="text-forest font-semibold">{item.weight}</td>
                <td data-numeric="true" className="text-ink-soft">—</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href={"/methodology" as never} className="btn-secondary">
            ← Methodology overview
          </Link>
          <Link href={"/" as never} className="btn-secondary">
            {tCommon("backToHome")}
          </Link>
        </div>
      </section>
    </article>
  );
}
