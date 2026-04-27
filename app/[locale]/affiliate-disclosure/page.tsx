import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { TrustPageTemplate } from "@/components/templates/TrustPageTemplate";
import { affiliateDisclosureContent } from "@/lib/content/affiliate-disclosure";
import { pageMetadata } from "@/lib/seo";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const c = affiliateDisclosureContent[locale] ?? affiliateDisclosureContent.en;
  return pageMetadata({
    title: c.title,
    description: c.intro.slice(0, 160),
    path: "/affiliate-disclosure",
  });
}

export default async function AffiliateDisclosurePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = affiliateDisclosureContent[locale] ?? affiliateDisclosureContent.en;

  return (
    <TrustPageTemplate title={c.title}>
      <p className="text-sm text-charcoal/60">{c.lastUpdated}</p>
      <p>{c.intro}</p>
      {c.sections.map((s) => (
        <section key={s.heading}>
          <h2>{s.heading}</h2>
          <p>{s.body}</p>
        </section>
      ))}
    </TrustPageTemplate>
  );
}
