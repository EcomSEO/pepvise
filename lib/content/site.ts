import type { Locale } from "@/i18n/routing";

/**
 * Site-level constants for pepvise.com.
 *
 * The `launched` flag drives the pre-launch noindex defaults in
 * `lib/seo.ts` and `app/robots.ts`.
 *
 * `i18n` carries native-register copy for the masthead tagline and the
 * meta description in every supported locale. Voice target stays the
 * same across languages, Wirecutter-style review database, decisive,
 * never-vendor, but each translation reads as if a native science
 * journalist at a respected consumer-reviews outlet wrote it.
 */
export const SITE = {
  name: "Pepvise",
  url: "https://pepvise.com",
  tagline: "Reviews of the research-peptide literature.",
  shortTagline: "Every compound on the same yardstick.",
  description:
    "Pepvise reviews the published peptide literature the way Wirecutter reviews mattresses, every compound ranked, every score on the same five-dimension yardstick, no vendor links, no dosing prescriptions.",
  author: "The Pepvise Editorial Team",
  email: "hello@pepvise.com",
  launched: false,
  requiresMedicalDisclaimer: true,
  methodologyVersion: "v1.2",
  databaseEntries: 12,
  pipelineEntries: 8,
  lastDatabaseRefresh: "2026-04-26",

  // Legacy editorial-masthead fields. Kept for typecheck compatibility
  // with unused Header/Footer/Dateline components; not rendered in the
  // live review-database shell (HeaderRD/FooterRD).
  dateline: "Refreshed 2026-04-26",
  volume: "Database v1.2",
  issue: "12 reviews live",
  subtitle: "Reviews of the research-peptide literature.",

  i18n: {
    en: {
      tagline: "Reviews of the research-peptide literature.",
      description:
        "Pepvise reviews the published peptide literature the way Wirecutter reviews mattresses, every compound ranked, every score on the same five-dimension yardstick, no vendor links, no dosing prescriptions.",
    },
    de: {
      tagline: "Reviews der Forschungs-Peptid-Literatur.",
      description:
        "Pepvise rezensiert die veröffentlichte Peptid-Literatur wie Wirecutter Matratzen rezensiert, jede Substanz gerankt, jeder Score auf demselben Fünf-Dimensions-Maßstab, keine Anbieter-Links, keine Dosierungsempfehlungen.",
    },
    fr: {
      tagline: "Tests de la littérature sur les peptides de recherche.",
      description:
        "Pepvise teste la littérature publiée sur les peptides comme Wirecutter teste les matelas, chaque composé classé, chaque note sur le même barème à cinq dimensions, aucun lien vendeur, aucune prescription de dose.",
    },
    it: {
      tagline: "Recensioni della letteratura sui peptidi di ricerca.",
      description:
        "Pepvise recensisce la letteratura pubblicata sui peptidi come Wirecutter recensisce i materassi, ogni composto classificato, ogni punteggio sullo stesso metro a cinque dimensioni, niente link a venditori, niente prescrizioni di dose.",
    },
    es: {
      tagline: "Reseñas de la literatura de péptidos de investigación.",
      description:
        "Pepvise reseña la literatura publicada de péptidos como Wirecutter reseña colchones, cada compuesto clasificado, cada puntuación con la misma vara de cinco dimensiones, sin enlaces a vendedores, sin prescripciones de dosis.",
    },
    nl: {
      tagline: "Reviews van de literatuur over onderzoekspeptiden.",
      description:
        "Pepvise reviewt de gepubliceerde peptidenliteratuur zoals Wirecutter matrassen reviewt, elke verbinding gerangschikt, elke score op dezelfde vijfdimensionale meetlat, geen verkoperslinks, geen doseringsvoorschriften.",
    },
    pl: {
      tagline: "Recenzje literatury o peptydach badawczych.",
      description:
        "Pepvise recenzuje opublikowaną literaturę o peptydach tak, jak Wirecutter recenzuje materace, każdy związek sklasyfikowany, każda ocena na tej samej pięciowymiarowej skali, bez linków sprzedawców, bez zaleceń dawkowania.",
    },
    sv: {
      tagline: "Recensioner av forskningspeptidernas litteratur.",
      description:
        "Pepvise recenserar den publicerade peptidlitteraturen så som Wirecutter recenserar madrasser, varje förening rankad, varje poäng på samma fem-dimensions-måttstock, inga säljarlänkar, inga doseringsrecept.",
    },
    pt: {
      tagline: "Análises da literatura sobre péptidos de investigação.",
      description:
        "A Pepvise analisa a literatura publicada sobre péptidos como a Wirecutter analisa colchões, cada composto classificado, cada nota na mesma régua de cinco dimensões, sem ligações a vendedores, sem prescrições de dose.",
    },
    ro: {
      tagline: "Recenzii ale literaturii despre peptide de cercetare.",
      description:
        "Pepvise recenzează literatura publicată despre peptide așa cum Wirecutter recenzează saltelele, fiecare compus clasat, fiecare scor pe aceeași riglă cu cinci dimensiuni, fără linkuri de vânzători, fără prescripții de doză.",
    },
    cs: {
      tagline: "Recenze literatury o výzkumných peptidech.",
      description:
        "Pepvise recenzuje publikovanou literaturu o peptidech tak, jako Wirecutter recenzuje matrace, každá sloučenina zařazená, každé skóre na stejném pětidimenzionálním metru, žádné odkazy na prodejce, žádné předpisy dávek.",
    },
    no: {
      tagline: "Omtaler av forskningspeptidlitteraturen.",
      description:
        "Pepvise omtaler den publiserte peptidlitteraturen slik Wirecutter omtaler madrasser, hver forbindelse rangert, hver poengsum på samme fem-dimensjons stokk, ingen selgerlenker, ingen doseringsforskrifter.",
    },
  } satisfies Record<Locale, { tagline: string; description: string }>,
} as const;

export function siteTagline(locale: Locale): string {
  return SITE.i18n[locale]?.tagline ?? SITE.tagline;
}

export function siteDescription(locale: Locale): string {
  return SITE.i18n[locale]?.description ?? SITE.description;
}
