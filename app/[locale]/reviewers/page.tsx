import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { pageMetadata } from "@/lib/seo";
import { REVIEWERS } from "@/lib/content/reviewers";
import { Eyebrow } from "@/components/editorial/Eyebrow";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!hasLocale(routing.locales, raw)) return {};
  const locale = raw as Locale;
  return pageMetadata({
    title: "Scientific reviewers — Pepvise",
    description:
      "The endocrinologist and clinical pharmacist who review every published compound on Pepvise. Real licenses, verifiable credentials, no vendor consulting.",
    path: "/reviewers",
    locale,
  });
}

export default async function ReviewersIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!hasLocale(routing.locales, raw)) notFound();
  const locale = raw as Locale;
  setRequestLocale(locale);

  return (
    <main>
      <section className="border-b border-inknavy/15 bg-bone">
        <div className="mx-auto max-w-6xl px-6 pt-12 pb-14 md:pb-20">
          <Eyebrow tone="oxblood">Editorial board</Eyebrow>
          <h1 className="font-serif text-[2.5rem] md:text-[3.4rem] text-inknavy mt-3 leading-[1.04] max-w-3xl">
            Two scientific reviewers, two real licenses.
          </h1>
          <p className="mt-7 font-serif italic text-xl md:text-2xl text-charcoal/80 max-w-2xl leading-[1.45]">
            Every compound in the Pepvise database is reviewed against the
            published evidence by a board-certified endocrinologist and a
            board-certified clinical pharmacist. No editorial publishes without
            both signoffs. Their credentials are public; verify them before
            you trust the score.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
          <ul className="grid md:grid-cols-2 gap-10">
            {REVIEWERS.map((r) => (
              <li
                key={r.slug}
                className="bg-paper border border-inknavy/12 rounded-sm p-7 md:p-9 relative"
              >
                <div
                  className={`absolute top-0 left-0 w-1 h-full ${
                    r.accent === "oxblood" ? "bg-oxblood" : "bg-inknavy"
                  }`}
                />
                <Eyebrow tone={r.accent === "oxblood" ? "oxblood" : "slate"}>
                  {r.role}
                </Eyebrow>
                <h2 className="font-serif text-2xl md:text-[1.7rem] text-inknavy mt-3 leading-tight">
                  <Link
                    href={`/reviewers/${r.slug}`}
                    className="hover:text-oxblood transition"
                  >
                    {r.name}
                  </Link>
                </h2>
                <p className="caps-label text-slate mt-1">{r.credentials}</p>
                <p className="mt-4 font-serif italic text-[15.5px] text-charcoal/85 leading-[1.6] max-w-md">
                  {r.oneLiner}
                </p>

                <dl className="mt-6 pt-6 border-t border-inknavy/10 space-y-2 text-[13px]">
                  <div className="flex justify-between gap-4">
                    <dt className="text-slate">Years in practice</dt>
                    <dd className="text-inknavy tnum font-mono">
                      {r.yearsExperience}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-slate">Registered with</dt>
                    <dd className="text-inknavy text-right max-w-[18ch]">
                      <a
                        href={r.licenseStateBoardUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-oxblood/40 hover:decoration-oxblood"
                      >
                        Verify license
                      </a>
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-slate">ORCID</dt>
                    <dd>
                      <a
                        href={r.orcidUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-inknavy underline decoration-oxblood/40 hover:decoration-oxblood font-mono text-[12px]"
                      >
                        {r.orcidUrl.replace("https://orcid.org/", "")}
                      </a>
                    </dd>
                  </div>
                </dl>

                <Link
                  href={`/reviewers/${r.slug}`}
                  className="mt-6 inline-flex items-center gap-1.5 text-oxblood hover:text-inknavy text-sm font-medium"
                >
                  Read the full bio &rarr;
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
