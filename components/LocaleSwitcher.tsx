"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { locales, type Locale } from "@/i18n/routing";
import { useTransition } from "react";

const NAMES: Record<Locale, string> = {
  en: "EN",
  de: "DE",
  fr: "FR",
  it: "IT",
  es: "ES",
  nl: "NL",
  pl: "PL",
  sv: "SV",
  pt: "PT",
  ro: "RO",
  cs: "CS",
  no: "NO",
};

/**
 * LocaleSwitcher — small inline select rendered as a native <select>
 * styled to match the dataset-caps language. No client-side route
 * parser; we hand the path back to next-intl which will respect the
 * `as-needed` prefix policy.
 */
export function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale() as Locale;
  const [, startTransition] = useTransition();

  return (
    <label className="flex items-center gap-1.5 caps-data text-ink-soft hover:text-ink">
      <span className="sr-only">Language</span>
      <select
        className="bg-transparent border-0 outline-none caps-data text-ink-soft hover:text-ink cursor-pointer pr-3"
        value={locale}
        onChange={(e) => {
          const next = e.target.value as Locale;
          startTransition(() => {
            router.replace(pathname, { locale: next });
          });
        }}
      >
        {locales.map((l) => (
          <option key={l} value={l}>
            {NAMES[l]}
          </option>
        ))}
      </select>
    </label>
  );
}
