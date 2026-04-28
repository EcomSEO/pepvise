import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { pageMetadata } from "@/lib/seo";

/**
 * Methodology v1.1 — historical reference page.
 *
 * Per the methodology versioning rule (CLAUDE.md + docs/launch-blockers.md):
 * every published review embeds the methodology version it was scored against,
 * and old versioned pages stay live so the pill on a vintage review keeps
 * resolving. v1.1 was the active rubric through Q1 2026; v1.2 superseded it
 * 2026-04-01 with the four changes catalogued in /methodology/v1-2.
 *
 * No review currently in `lib/content/reviews.ts` is scored against v1.1
 * (every entry is now v1.2 lastUpdated 2026-04 or later). This page exists
 * for transparency and audit purposes — readers and reviewers can read the
 * historical rubric to understand what the predecessor scoring did.
 *
 * The page is intentionally English-only at this stage. Reference material
 * for an outdated rubric is lower-priority for translation than current
 * methodology + active review content.
 */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!hasLocale(routing.locales, raw)) return {};
  const locale = raw as Locale;
  return pageMetadata({
    title: "Methodology v1.1 — historical reference (Pepvise)",
    description:
      "The Pepvise methodology v1.1 rubric, active through Q1 2026 and superseded by v1.2 in April 2026. Maintained as a historical reference for any review whose score pill still resolves to v1.1.",
    path: "/methodology/v1-1",
    locale,
  });
}

const V11_DIMENSIONS = [
  {
    code: "01",
    label: "Evidence",
    weight: "30%",
    body:
      "Quality and quantity of preclinical, in-vitro, and animal-model evidence. Capped at 9.0 in v1.1; v1.2 introduced the 8.0 soft-cap for compounds without an in-vitro-to-human bridge.",
  },
  {
    code: "02",
    label: "Mechanism",
    weight: "20%",
    body:
      "Whether the proposed mechanism of action is a coherent extension of established cell biology or a marketing back-fit. Unchanged between v1.1 and v1.2.",
  },
  {
    code: "03",
    label: "Human data",
    weight: "20%",
    body:
      "Published human work: pilot studies, Phase 1 dose-escalation, Phase 2 dose-finding, Phase 3 efficacy. v1.2 raised the weighting to 25% to better reflect the gap between rodent files and registered human work.",
  },
  {
    code: "04",
    label: "Vendor trust",
    weight: "20%",
    body:
      "Whether a quality-controlled commercial supply path exists. Ceiling 7.0 in v1.1; raised to 9.0 in v1.2 after three independent third-party assays began publishing on the largest research-channel suppliers.",
  },
  {
    code: "05",
    label: "Safety + regulatory posture",
    weight: "10%",
    body:
      "FDA / EMA approval status, WADA listing, boxed warnings, withdrawal history. v1.1 double-counted WADA status here AND as a separate safety penalty; v1.2 consolidates that signal into regulatory posture only.",
  },
];

const V11_TO_V12_DIFF = [
  {
    code: "01",
    label: "Human-data weighting raised 20% → 25%",
    body:
      "The Reta-1 NEJM publication and the Surv-3 readout pulled forward the case for weighting registered human work harder. Compounds with rodent-only files now lose a full point against compounds with even small Phase 1s.",
  },
  {
    code: "02",
    label: "Vendor-trust ceiling raised 7 → 9",
    body:
      "The previous ceiling under-rewarded compounds with publicly verifiable lots. Three independent third-party assays now report on the largest research-channel suppliers.",
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

export default async function MethodologyV11Page({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale: raw } = await params;
  if (!hasLocale(routing.locales, raw)) notFound();
  const locale = raw as Locale;
  setRequestLocale(locale);
  return <MethV11 />;
}

function MethV11() {
  return (
    <article>
      <header className="bg-paper-soft border-b border-rule">
        <div className="mx-auto max-w-3xl px-5 md:px-8 py-12 md:py-16">
          <div className="caps-data text-forest mb-3">METHODOLOGY · VERSION HISTORY · ARCHIVED</div>
          <h1 className="font-serif text-[2rem] md:text-[2.4rem] leading-[1.08] text-ink tracking-[-0.014em]">
            Methodology v1.1
          </h1>
          <p className="mt-5 text-[15.5px] leading-[1.6] text-ink-soft max-w-2xl">
            The rubric Pepvise used through Q1 2026, superseded by v1.2 on
            2026-04-01. Maintained as a historical reference. No review in the
            current database is scored against v1.1; this page is here so the
            methodology pill on any archived or syndicated v1.1 review keeps
            resolving.
          </p>
          <p className="mt-3 text-[14px] leading-[1.55] text-ink-soft max-w-2xl italic">
            For the current rubric, see{" "}
            <Link href={"/methodology/v1-2" as never} className="text-forest underline">
              methodology v1.2
            </Link>
            .
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-5 md:px-8 py-10 md:py-14">
        <h2 className="font-serif text-[1.55rem] text-ink mb-5">The five dimensions (v1.1)</h2>
        <ol className="space-y-7 list-none">
          {V11_DIMENSIONS.map((d) => (
            <li key={d.code} className="grid grid-cols-[40px_1fr] gap-5 items-start border-b border-rule-soft pb-6 last:border-b-0">
              <div className="mono tnum text-forest text-[1.1rem]">{d.code}</div>
              <div>
                <h3 className="font-serif text-[1.1rem] text-ink m-0">
                  {d.label}{" "}
                  <span className="font-sans text-[14px] text-ink-soft tnum">({d.weight})</span>
                </h3>
                <p className="mt-2 text-[14.5px] text-ink-soft leading-[1.6]">{d.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <h2 className="font-serif text-[1.55rem] text-ink mt-12 mb-5">What changed in v1.2</h2>
        <ol className="space-y-7 list-none">
          {V11_TO_V12_DIFF.map((c) => (
            <li key={c.code} className="grid grid-cols-[40px_1fr] gap-5 items-start border-b border-rule-soft pb-6 last:border-b-0">
              <div className="mono tnum text-forest text-[1.1rem]">{c.code}</div>
              <div>
                <h3 className="font-serif text-[1.1rem] text-ink m-0">{c.label}</h3>
                <p className="mt-2 text-[14.5px] text-ink-soft leading-[1.6]">{c.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <h2 className="font-serif text-[1.55rem] text-ink mt-12 mb-5">Re-scoring policy</h2>
        <p className="text-[14.5px] text-ink-soft leading-[1.65] max-w-2xl">
          When a methodology version bumps, existing reviews are not auto-re-scored. The pill on
          each review records the version it was scored under at the time of last editorial review.
          A review re-scores against the current rubric only when its <code className="mono">lastUpdated</code> field
          is bumped and the editor explicitly applies the new dimension weights. This protects the
          audit trail: every score on every review traces to a specific methodology version, a
          specific date, and the editor who signed it off.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href={"/methodology" as never} className="btn-secondary">
            ← Methodology overview
          </Link>
          <Link href={"/methodology/v1-2" as never} className="btn-secondary">
            Current rubric (v1.2) →
          </Link>
        </div>
      </section>
    </article>
  );
}
