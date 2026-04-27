"use client";

import { useEffect, useState } from "react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { LocaleSwitcher } from "./LocaleSwitcher";

/**
 * HeaderRD — pepvise review-database header.
 *
 * - Paper-white bar, h-14 (56px), thin 1px ink-rule under it.
 * - LEFT: serif wordmark "Pepvise" (Source Serif 4, 22px).
 * - CENTER: small-caps nav (REVIEWS · COMPARISONS · CATEGORIES ·
 *   METHODOLOGY · PIPELINE) — no central rounded search input
 *   (peptips), no monospace status bar (circadianstack).
 * - RIGHT: narrow inline "Search reviews" input + locale switcher.
 * - Mobile: collapses nav into hamburger; search becomes an icon.
 *
 * No dark bar. No big amber search hero. The differentiation is
 * "library reference desk" not "consumer product comparison" and not
 * "lab-notebook terminal".
 */
export function HeaderRD() {
  const t = useTranslations("header");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-40 bg-paper border-b border-ink/90">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex items-center gap-5 md:gap-8 h-14">
          {/* LEFT — wordmark */}
          <Link
            href={"/" as never}
            aria-label={t("logoAria")}
            className="flex items-center gap-2 shrink-0 group"
          >
            <span aria-hidden className="block w-2 h-2 bg-forest" />
            <span
              className="font-serif text-[22px] tracking-[-0.012em] text-ink leading-none group-hover:text-forest transition-colors"
              style={{
                fontFamily:
                  '"Source Serif 4", "Source Serif Pro", Georgia, serif',
                fontWeight: 600,
              }}
            >
              {t("wordmark")}
            </span>
          </Link>

          {/* CENTER — small-caps nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 mx-auto">
            <Link href={"/reviews" as never} className="nav-link">
              {t("navReviews")}
            </Link>
            <Link href={"/comparisons" as never} className="nav-link">
              {t("navComparisons")}
            </Link>
            <Link href={"/categories" as never} className="nav-link">
              {t("navCategories")}
            </Link>
            <Link href={"/methodology" as never} className="nav-link">
              {t("navMethodology")}
            </Link>
            <Link href={"/pipeline" as never} className="nav-link">
              {t("navPipeline")}
            </Link>
          </nav>

          {/* RIGHT — narrow search + locale */}
          <div className="ml-auto flex items-center gap-4">
            <form
              role="search"
              action="/reviews"
              className="hidden md:flex items-center"
            >
              <label className="relative">
                <span className="sr-only">{t("searchAria")}</span>
                <span
                  aria-hidden
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 text-ink-soft"
                >
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                    <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.4" />
                    <line x1="11" y1="11" x2="14.5" y2="14.5" stroke="currentColor" strokeWidth="1.4" />
                  </svg>
                </span>
                <input
                  type="search"
                  name="q"
                  placeholder={t("searchPlaceholder")}
                  className="bg-paper-soft border border-rule-soft hover:border-rule focus:border-ink focus:bg-paper text-[12.5px] py-1.5 pl-7 pr-2.5 w-[180px] outline-none transition-colors"
                />
              </label>
            </form>

            <LocaleSwitcher />

            <button
              type="button"
              className="md:hidden text-ink p-2 -mr-2"
              aria-label={mobileOpen ? t("openMenu") : t("openMenu")}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-rule-soft bg-paper">
          <nav className="px-5 py-4 flex flex-col gap-3">
            <Link href={"/reviews" as never} className="nav-link" onClick={() => setMobileOpen(false)}>{t("navReviews")}</Link>
            <Link href={"/comparisons" as never} className="nav-link" onClick={() => setMobileOpen(false)}>{t("navComparisons")}</Link>
            <Link href={"/categories" as never} className="nav-link" onClick={() => setMobileOpen(false)}>{t("navCategories")}</Link>
            <Link href={"/methodology" as never} className="nav-link" onClick={() => setMobileOpen(false)}>{t("navMethodology")}</Link>
            <Link href={"/pipeline" as never} className="nav-link" onClick={() => setMobileOpen(false)}>{t("navPipeline")}</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
