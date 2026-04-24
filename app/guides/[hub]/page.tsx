import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getHub, hubs } from "@/lib/content/hubs";
import { postsByHub } from "@/lib/content/posts";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { EmailCapture } from "@/components/EmailCapture";
import { pageMetadata } from "@/lib/seo";
import { Eyebrow } from "@/components/editorial/Eyebrow";
import { LedgerRule, DotRule } from "@/components/editorial/DotRule";
import { RankNumeral } from "@/components/editorial/RankNumeral";

const typeLabel: Record<string, string> = {
  pillar: "Compound profile",
  comparison: "Comparison",
  cluster: "Explainer",
  listicle: "Evidence review",
};

export function generateStaticParams() {
  return hubs.map((h) => ({ hub: h.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ hub: string }>;
}): Promise<Metadata> {
  const { hub: hubSlug } = await params;
  const hub = getHub(hubSlug);
  if (!hub) return {};
  return pageMetadata({
    title: hub.name,
    description: hub.oneLiner,
    path: `/guides/${hub.slug}`,
  });
}

export default async function HubPage({
  params,
}: {
  params: Promise<{ hub: string }>;
}) {
  const { hub: hubSlug } = await params;
  const hub = getHub(hubSlug);
  if (!hub) notFound();

  const hubIndex = hubs.findIndex((h) => h.slug === hub.slug);
  const hubPosts = postsByHub(hub.slug);
  const pillar = hubPosts.find((p) => p.postType === "pillar");
  const comparisons = hubPosts.filter((p) => p.postType === "comparison");
  const explainers = hubPosts.filter((p) => p.postType === "cluster");
  const listicles = hubPosts.filter((p) => p.postType === "listicle");

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Guides", href: "/#issue-contents" },
    { label: hub.name },
  ];

  return (
    <>
      <BreadcrumbJsonLd crumbs={crumbs} />
      <main>
        {/* Hub masthead */}
        <section className="border-b border-inknavy/15">
          <div className="mx-auto max-w-6xl px-6 pt-10 pb-14 md:pb-20">
            <Breadcrumbs crumbs={crumbs} />

            <div className="mt-8 grid md:grid-cols-12 gap-10 items-end">
              <div className="md:col-span-8">
                <div className="flex items-center gap-4">
                  <span className="rank-numeral !text-[3.5rem]">
                    {String(hubIndex + 1).padStart(2, "0")}
                  </span>
                  <Eyebrow tone="oxblood">
                    Hub {hubIndex + 1} of {hubs.length}
                  </Eyebrow>
                </div>
                <h1 className="display-headline mt-3 text-[2.5rem] md:text-[3.6rem] leading-[1.04]">
                  {hub.name}
                </h1>
                <p className="mt-6 font-serif italic text-xl md:text-2xl text-inknavy/85 max-w-2xl leading-[1.4]">
                  {hub.oneLiner}
                </p>
              </div>
              <div className="md:col-span-4 md:pl-6 md:border-l md:border-inknavy/15">
                <Eyebrow tone="slate">Our thesis</Eyebrow>
                <p className="mt-3 text-[14.5px] text-charcoal/85 leading-[1.7]">
                  {hub.thesis}
                </p>
                <dl className="mt-5 pt-5 border-t border-inknavy/15 space-y-2 text-[13px]">
                  <div className="flex justify-between">
                    <dt className="text-slate">Posts live</dt>
                    <dd className="text-inknavy tnum">{hubPosts.length}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-slate">Planned in hub</dt>
                    <dd className="text-inknavy tnum">30</dd>
                  </div>
                </dl>
              </div>
            </div>

            <LedgerRule className="mt-14" />
          </div>
        </section>

        {/* Pillar — start here */}
        {pillar && (
          <section className="border-b border-inknavy/15 bg-paper">
            <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
              <Eyebrow tone="oxblood">Start with the pillar</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl text-inknavy mt-3 mb-8 leading-tight">
                The compound profile.
              </h2>
              <Link
                href={`/${pillar.slug}`}
                className="group block bg-bone border border-inknavy/20 rounded-sm p-8 md:p-10 shadow-soft hover:shadow-ledger hover:border-oxblood/60 transition relative"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-oxblood" />
                <Eyebrow tone="oxblood">Compound profile</Eyebrow>
                <h3 className="font-serif text-[1.8rem] md:text-[2.2rem] text-inknavy leading-[1.08] mt-3">
                  {pillar.title}
                </h3>
                <p className="mt-5 font-serif italic text-[17px] text-inknavy/80 leading-[1.5] max-w-[62ch]">
                  {pillar.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-oxblood group-hover:text-inknavy transition text-sm font-medium">
                  Read the profile
                  <span aria-hidden>→</span>
                </span>
              </Link>
            </div>
          </section>
        )}

        {/* Comparisons */}
        {comparisons.length > 0 && (
          <section className="border-b border-inknavy/15">
            <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
              <div className="flex items-end justify-between flex-wrap gap-3 mb-8">
                <div>
                  <Eyebrow tone="oxblood">Ranked comparisons</Eyebrow>
                  <h2 className="font-serif text-3xl md:text-4xl text-inknavy mt-3 leading-tight">
                    Side by side, by evidence tier.
                  </h2>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-inknavy/15">
                {comparisons.map((p, i) => (
                  <Link
                    key={p.slug}
                    href={`/${p.slug}`}
                    className="group relative p-6 border-b md:border-b-0 md:border-r border-inknavy/15 last:border-r-0 hover:bg-paper transition"
                  >
                    <div className="absolute top-0 left-0 w-[3px] h-0 group-hover:h-full bg-oxblood transition-all duration-200" />
                    <RankNumeral n={i + 1} />
                    <h3 className="font-serif text-xl text-inknavy leading-tight mt-3 group-hover:text-oxblood transition">
                      {p.title}
                    </h3>
                    <p className="text-[14px] text-charcoal/75 mt-2 leading-[1.65] line-clamp-3">
                      {p.description}
                    </p>
                    <div className="mt-4 caps-label text-slate">
                      {p.readingTime} min read
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Explainers */}
        {explainers.length > 0 && (
          <section className="border-b border-inknavy/15">
            <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
              <Eyebrow tone="oxblood">Explainers</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl text-inknavy mt-3 mb-8 leading-tight">
                The terms and mechanisms underneath.
              </h2>
              <ul className="divide-y divide-inknavy/15 border-y border-inknavy/15">
                {explainers.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/${p.slug}`}
                      className="group grid md:grid-cols-[auto_1fr_auto] gap-5 py-6 items-baseline hover:bg-paper px-2 transition"
                    >
                      <span className="caps-label text-slate">
                        {typeLabel[p.postType]}
                      </span>
                      <div>
                        <h3 className="font-serif text-lg text-inknavy group-hover:text-oxblood transition leading-snug">
                          {p.title}
                        </h3>
                        <p className="text-[14px] text-charcoal/70 mt-1 line-clamp-1">
                          {p.description}
                        </p>
                      </div>
                      <span className="caps-label text-slate tnum whitespace-nowrap">
                        {p.readingTime} min
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Listicles */}
        {listicles.length > 0 && (
          <section className="border-b border-inknavy/15">
            <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
              <Eyebrow tone="oxblood">Evidence reviews</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl text-inknavy mt-3 mb-8 leading-tight">
                Literature syntheses by indication.
              </h2>
              <div className="grid md:grid-cols-2 gap-0 border-t border-inknavy/15">
                {listicles.map((p, i) => (
                  <Link
                    key={p.slug}
                    href={`/${p.slug}`}
                    className="group relative p-6 border-b md:border-b-0 md:border-r border-inknavy/15 last:border-r-0 hover:bg-paper transition"
                  >
                    <div className="absolute top-0 left-0 w-[3px] h-0 group-hover:h-full bg-oxblood transition-all duration-200" />
                    <RankNumeral n={i + 1} />
                    <h3 className="font-serif text-xl text-inknavy leading-tight mt-3 group-hover:text-oxblood transition">
                      {p.title}
                    </h3>
                    <p className="text-[14px] text-charcoal/75 mt-2 leading-[1.65] line-clamp-2">
                      {p.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {hubPosts.length === 0 && (
          <section className="mx-auto max-w-6xl px-6 py-20">
            <p className="text-charcoal/75 text-lg">
              Posts land here as they clear editorial review. See the{" "}
              <Link href="/" className="text-oxblood underline">
                home page
              </Link>{" "}
              for what&apos;s live today.
            </p>
          </section>
        )}

        <section className="bg-paper border-t border-inknavy/15">
          <div className="mx-auto max-w-5xl px-6 py-16">
            <EmailCapture />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-10">
          <DotRule />
        </section>
      </main>
    </>
  );
}
