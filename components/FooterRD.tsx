import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { CookiePreferencesLink } from "./CookiePreferencesLink";
import { RegulatoryAuthoritiesStrip } from "./RegulatoryAuthoritiesStrip";

const SISTER_SITES = [
  { name: "InjectCompass", href: "https://injectcompass.com" },
  { name: "PepTips", href: "https://peptips.com" },
  { name: "LarderLab", href: "https://larderlab.com" },
  { name: "ThatCleanChef", href: "https://thatcleanchef.com" },
  { name: "CircadianStack", href: "https://circadianstack.com" },
  { name: "PlasticFreeLab", href: "https://plasticfreelab.com" },
];

/**
 * FooterRD — pepvise review-database footer.
 *
 * Paper-soft surface, ink type, three sections (Reviews · About ·
 * Fine print) on a 12-col grid with the affiliate / medical
 * disclaimer note running full-width at the bottom.
 *
 * No big newsletter capture (we keep the dispatch block on the home
 * page only — adding a second one in the footer would dilute it).
 */
export function FooterRD() {
  const t = useTranslations("footer");
  return (
    <footer className="bg-paper-soft border-t border-rule">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-12 gap-8 md:gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <span aria-hidden className="block w-2 h-2 bg-forest" />
              <span className="font-serif text-[20px] text-ink leading-none">
                Pepvise
              </span>
            </div>
            <p className="text-[14px] leading-[1.55] text-ink-soft max-w-md">
              {t("leadParagraph")}
            </p>
          </div>
          <div className="md:col-span-2">
            <div className="caps-data text-ink mb-3">{t("sectionReviews")}</div>
            <ul className="space-y-2 text-[13.5px]">
              <li><Link href={"/reviews" as never} className="text-ink hover:text-forest">{t("linkAllReviews")}</Link></li>
              <li><Link href={"/comparisons" as never} className="text-ink hover:text-forest">{t("linkComparisons")}</Link></li>
              <li><Link href={"/categories" as never} className="text-ink hover:text-forest">{t("linkCategories")}</Link></li>
              <li><Link href={"/pipeline" as never} className="text-ink hover:text-forest">{t("linkPipeline")}</Link></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <div className="caps-data text-ink mb-3">{t("sectionAbout")}</div>
            <ul className="space-y-2 text-[13.5px]">
              <li><Link href={"/methodology" as never} className="text-ink hover:text-forest">{t("linkMethodology")}</Link></li>
              <li><Link href={"/about" as never} className="text-ink hover:text-forest">{t("linkAbout")}</Link></li>
              <li><Link href={"/editorial-standards" as never} className="text-ink hover:text-forest">{t("linkEditorialStandards")}</Link></li>
              <li><Link href={"/contact" as never} className="text-ink hover:text-forest">{t("linkContact")}</Link></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <div className="caps-data text-ink mb-3">{t("sectionFinePrint")}</div>
            <ul className="space-y-2 text-[13.5px]">
              <li><Link href={"/medical-disclaimer" as never} className="text-ink hover:text-forest">{t("linkMedicalDisclaimer")}</Link></li>
              <li><Link href={"/affiliate-disclosure" as never} className="text-ink hover:text-forest">{t("linkAffiliateDisclosure")}</Link></li>
              <li><Link href={"/privacy" as never} className="text-ink hover:text-forest">{t("linkPrivacy")}</Link></li>
              <li><Link href={"/cookies" as never} className="text-ink hover:text-forest">{t("cookies_link")}</Link></li>
              <li><Link href={"/terms" as never} className="text-ink hover:text-forest">{t("linkTerms")}</Link></li>
              <li><Link href={"/impressum" as never} className="text-ink hover:text-forest">{t("impressum_link")}</Link></li>
              <li><CookiePreferencesLink className="text-ink" /></li>
            </ul>
          </div>
        </div>

        {/* Sister-site cross-links */}
        <div className="mt-10 pt-6 border-t border-rule-soft">
          <div className="caps-data text-ink mb-3">From the network</div>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-[13px]">
            {SISTER_SITES.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener" className="text-ink-soft hover:text-forest">
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Per-locale regulatory authorities (medicines + DPA) */}
        <RegulatoryAuthoritiesStrip />

        <div className="mt-8 pt-6 border-t border-rule-soft text-[12px] leading-[1.55] text-ink-soft max-w-3xl">
          {t("footerNote")}
        </div>
      </div>
    </footer>
  );
}
