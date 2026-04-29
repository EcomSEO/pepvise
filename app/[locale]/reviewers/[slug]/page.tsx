import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { pageMetadata } from "@/lib/seo";
import { REVIEWERS, getReviewer } from "@/lib/content/reviewers";
import { Eyebrow } from "@/components/editorial/Eyebrow";
import { JsonLd } from "@/components/schema/JsonLd";
import { SITE } from "@/lib/content/site";

export function generateStaticParams() {
  return REVIEWERS.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  if (!hasLocale(routing.locales, raw)) return {};
  const locale = raw as Locale;
  const r = getReviewer(slug);
  if (!r) return {};
  return pageMetadata({
    title: `${r.name}, ${r.credentials} — Scientific reviewer at Pepvise`,
    description: r.oneLiner,
    path: `/reviewers/${r.slug}`,
    locale,
    ogType: "article",
  });
}

export default async function ReviewerPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  if (!hasLocale(routing.locales, raw)) notFound();
  const locale = raw as Locale;
  setRequestLocale(locale);
  const r = getReviewer(slug);
  if (!r) notFound();

  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE.url}/reviewers/${r.slug}#person`,
    name: r.name,
    honorificPrefix: r.credentials.includes("PharmD") ? "Dr." : "Dr.",
    jobTitle: r.role,
    description: r.oneLiner,
    url: `${SITE.url}/reviewers/${r.slug}`,
    sameAs: [r.orcidUrl, r.pubmedUrl, r.licenseStateBoardUrl].filter(
      Boolean,
    ),
    // Per 2026-04-29 lock: omit `image` while `verifiedCredential` is
    // false — no AI-generated headshots in Person schema.
    ...(r.verifiedCredential && r.imageUrl
      ? { image: `${SITE.url}${r.imageUrl}` }
      : {}),
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: r.credentials,
        credentialCategory: "license",
        recognizedBy: {
          "@type": "Organization",
          name: r.licenseBoard,
          url: r.licenseStateBoardUrl,
        },
      },
    ],
    worksFor: {
      "@type": "Organization",
      "@id": `${SITE.url}#org`,
      name: SITE.name,
      url: SITE.url,
    },
  };

  const accent = r.accent ?? "inknavy";

  return (
    <>
      <JsonLd data={personLd} />

      <main>
        <section className="border-b border-inknavy/15 bg-bone">
          <div className="mx-auto max-w-6xl px-6 pt-10 pb-14 md:pb-20">
            <nav aria-label="Breadcrumb" className="text-sm text-slate mb-8">
              <Link href="/" className="hover:text-oxblood">
                Home
              </Link>
              <span className="mx-2 text-inknavy/30">/</span>
              <Link href="/reviewers" className="hover:text-oxblood">
                Reviewers
              </Link>
              <span className="mx-2 text-inknavy/30">/</span>
              <span className="text-inknavy">{r.name}</span>
            </nav>

            <div className="grid md:grid-cols-12 gap-10 items-start">
              <div className="md:col-span-4">
                <div
                  className={`aspect-[4/5] rounded-sm border border-inknavy/15 ${
                    accent === "oxblood" ? "bg-oxblood/10" : "bg-inknavy/8"
                  } relative overflow-hidden`}
                  aria-hidden="true"
                >
                  <div
                    className={`absolute top-0 left-0 w-1 h-full ${
                      accent === "oxblood" ? "bg-oxblood" : "bg-inknavy"
                    }`}
                  />
                </div>
              </div>
              <div className="md:col-span-8">
                <Eyebrow tone={accent === "oxblood" ? "oxblood" : "slate"}>
                  {r.role}
                </Eyebrow>
                <h1 className="font-serif text-[2.4rem] md:text-[3.2rem] text-inknavy mt-3 leading-[1.04]">
                  {r.name}
                </h1>
                <p className="mt-2 caps-label text-slate">{r.credentials}</p>
                <p className="mt-7 font-serif italic text-xl md:text-2xl text-charcoal/80 max-w-2xl leading-[1.45]">
                  {r.oneLiner}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-inknavy/15">
          <div className="mx-auto max-w-6xl px-6 py-14 md:py-20 grid md:grid-cols-12 gap-10">
            <div className="md:col-span-7">
              <Eyebrow tone="slate">Biography</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl text-inknavy mt-3 mb-6 leading-tight">
                Who reviews the work.
              </h2>
              <p className="font-serif text-charcoal/85 leading-[1.78] text-[16px] max-w-[64ch]">
                {r.bio}
              </p>
            </div>
            <aside className="md:col-span-5 md:pl-6 md:border-l md:border-inknavy/10">
              <Eyebrow tone="oxblood">Conflict-of-interest disclosure</Eyebrow>
              <p className="mt-3 text-[14.5px] text-charcoal/85 leading-relaxed">
                {r.noConflictStatement}
              </p>

              {!r.verifiedCredential && r.credentialingNote && (
                <div className="mt-5 rounded-sm border border-oxblood/30 bg-oxblood/5 p-3 text-[12.5px] leading-relaxed text-charcoal/80">
                  <span className="block font-mono uppercase tracking-[0.14em] text-oxblood text-[10.5px] mb-1">
                    Credential pending
                  </span>
                  {r.credentialingNote}
                </div>
              )}

              <dl className="mt-7 pt-6 border-t border-inknavy/10 space-y-3 text-[13.5px]">
                <div className="flex justify-between gap-4">
                  <dt className="text-slate">Role</dt>
                  <dd className="text-inknavy">{r.role}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-slate">Years in practice</dt>
                  <dd className="text-inknavy tnum font-mono">
                    {r.yearsExperience}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-slate">Registered with</dt>
                  <dd className="text-inknavy text-right max-w-[20ch]">
                    {r.licenseBoard}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-slate">License lookup</dt>
                  <dd>
                    <a
                      href={r.licenseStateBoardUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-oxblood/40 hover:decoration-oxblood text-inknavy"
                    >
                      Verify
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
                {r.pubmedUrl && (
                  <div className="flex justify-between gap-4">
                    <dt className="text-slate">PubMed</dt>
                    <dd>
                      <a
                        href={r.pubmedUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-inknavy underline decoration-oxblood/40 hover:decoration-oxblood text-[12.5px]"
                      >
                        Author lookup
                      </a>
                    </dd>
                  </div>
                )}
              </dl>
            </aside>
          </div>
        </section>

        <section className="border-b border-inknavy/15 bg-paper">
          <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
            <Eyebrow tone="oxblood">Editorial scope</Eyebrow>
            <h2 className="font-serif text-3xl md:text-4xl text-inknavy mt-3 mb-8 leading-tight">
              What {r.name.split(" ")[0]} reviews on this site.
            </h2>
            <ul className="grid md:grid-cols-2 gap-x-10 gap-y-4 text-[15px] text-charcoal/85">
              {r.scope.map((s, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-oxblood mt-2" aria-hidden>
                    ●
                  </span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
