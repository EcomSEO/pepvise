import { defineRouting } from "next-intl/routing";

/**
 * Locale routing for pepvise.com.
 *
 * Twelve locales — English (default, root path) plus German, French,
 * Italian, Spanish, Dutch, Polish, Swedish, Portuguese, Romanian, Czech,
 * and Norwegian Bokmål. Each locale has a native dictionary that voices
 * pepvise as a review-database publication: utilitarian, decisive,
 * never-vendor.
 *
 * Default locale (`en`) renders at root paths; other locales are
 * prefixed — `/de`, `/de/<slug>`, `/fr/methodology`. Slugs stay in
 * English for phase one. Translated slugs are a later phase.
 */
export const locales = [
  "en",
  "de",
  "fr",
  "it",
  "es",
  "nl",
  "pl",
  "sv",
  "pt",
  "ro",
  "cs",
  "no",
] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "as-needed",
});
