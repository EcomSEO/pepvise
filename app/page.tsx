import Link from "next/link";
import { hubs, getHub } from "@/lib/content/hubs";
import { featuredPost, latestPosts, posts } from "@/lib/content/posts";
import { EmailCapture } from "@/components/EmailCapture";
import { Eyebrow } from "@/components/editorial/Eyebrow";
import { DotRule, LedgerRule } from "@/components/editorial/DotRule";
import {
  EvidenceLedger,
  EvidenceLedgerMaster,
} from "@/components/editorial/EvidenceLedger";

const typeLabel: Record<string, string> = {
  pillar: "Compound profile",
  comparison: "Comparison",
  cluster: "Explainer",
  listicle: "Evidence review",
};

export default function HomePage() {
  const featured = featuredPost();
  const recent = latestPosts(6);
  const explainers = posts.filter((p) => p.postType === "cluster").slice(0, 3);

  return (
    <main>
      {/* === HERO: literary masthead quoting a compound profile === */}
      <section className="border-b border-inknavy/15">
        <div className="mx-auto max-w-6xl px-6 pt-14 md:pt-20 pb-14 md:pb-20">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-7 fade-up">
              <Eyebrow tone="oxblood">
                This issue &nbsp;·&nbsp; The BPC-157 ledger
              </Eyebrow>
              <h1 className="display-headline mt-5 text-[2.5rem] sm:text-5xl md:text-[4rem]">
                <em>What the literature</em>
                <br className="hidden md:inline" />
                <span> actually says.</span>
              </h1>
              <p className="mt-8 font-serif italic text-xl md:text-[1.4rem] text-inknavy/90 max-w-2xl leading-[1.45]">
                Citations over conjecture. Calm, peer-reviewed-aware analysis of
                BPC-157, TB-500, GHK-Cu, Retatrutide, and the rest of the
                research-peptide category.
              </p>
              <p className="mt-6 text-[15.5px] text-charcoal/85 max-w-2xl leading-[1.7]">
                Every compound profile opens with the Evidence Ledger — the
                unvarnished state of preclinical, pilot, and phase data so a
                reader can never mistake mouse findings for human proof. No
                sales. No dosing prescriptions. No vendor links.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                {featured && (
                  <Link href={`/${featured.slug}`} className="btn-primary">
                    Read the BPC-157 profile
                    <span aria-hidden>→</span>
                  </Link>
                )}
                <Link href="#ledger" className="btn-secondary">
                  Browse the Evidence Ledger
                </Link>
              </div>
            </div>

            {/* In this issue sidebar */}
            <aside className="md:col-span-5 md:pl-8 md:border-l md:border-inknavy/15 fade-up-delay-1">
              <div className="caps-label text-slate mb-4">This issue</div>
              <ul className="space-y-5">
                {(featured ? [featured, ...recent.filter((r) => r.slug !== featured.slug)] : recent)
                  .slice(0, 4)
                  .map((p, i) => {
                    const hub = getHub(p.hub);
                    return (
                      <li key={p.slug} className="flex gap-4">
                        <span className="font-serif italic text-2xl text-oxblood/60 tnum leading-none mt-1.5 shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <Link
                            href={`/${p.slug}`}
                            className="font-serif text-[18px] leading-snug text-inknavy hover:text-oxblood transition block"
                          >
                            {p.title}
                          </Link>
                          <div className="caps-label text-slate mt-1.5">
                            {typeLabel[p.postType]} · {hub?.shortName} · {p.readingTime} min
                          </div>
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* === FEATURED EVIDENCE LEDGER — the BPC-157 specimen === */}
      {featured?.evidenceLedger && (
        <section className="border-b border-inknavy/15 bg-paper">
          <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
            <div className="grid md:grid-cols-12 gap-10 items-start">
              <div className="md:col-span-5">
                <Eyebrow tone="oxblood">The Investigation</Eyebrow>
                <h2 className="font-serif text-[2rem] md:text-[2.6rem] text-inknavy mt-4 leading-[1.08]">
                  This issue: <em className="text-oxblood not-italic">BPC-157</em> &mdash; evidence tier,{" "}
                  <span className="italic">moderate</span>.
                </h2>
                <p className="mt-6 font-serif italic text-[1.1rem] text-inknavy/85 leading-[1.5] max-w-md">
                  Strong in animals. Thin in humans. Absent in Phase 2+. The
                  clearest case study for why PepVise treats every compound as a
                  state-of-evidence problem, not a wellness claim.
                </p>
                <p className="mt-5 text-[14.5px] text-charcoal/80 leading-[1.7] max-w-md">
                  The ledger to the right is the same component that opens every
                  compound profile on the site. It is the fastest way to see
                  what 50+ preclinical papers, one published human pilot
                  (Chang 2014, n=12), and a single Phase 1 registry listing add
                  up to.
                </p>
                <Link
                  href={`/${featured.slug}`}
                  className="mt-7 inline-flex items-center gap-1.5 text-oxblood hover:text-inknavy transition text-sm font-medium"
                >
                  Read the full BPC-157 profile
                  <span aria-hidden>→</span>
                </Link>
              </div>

              <div className="md:col-span-7">
                <EvidenceLedger post={featured} />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* === HUB INDEX — the five hubs === */}
      <section id="issue-contents" className="border-b border-inknavy/15">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <Eyebrow tone="oxblood">The table of contents</Eyebrow>
              <h2 className="font-serif text-[2rem] md:text-[2.6rem] text-inknavy mt-3 leading-[1.1]">
                Five hubs. The research-peptide category, catalogued.
              </h2>
            </div>
            <Link
              href="/about"
              className="text-oxblood hover:text-inknavy text-sm font-medium"
            >
              How we built it &rarr;
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-0 border-t border-inknavy/15">
            {hubs.map((hub, i) => (
              <Link
                key={hub.slug}
                href={`/guides/${hub.slug}`}
                className="group relative flex flex-col p-6 border-b lg:border-b-0 lg:border-r border-inknavy/15 last:border-r-0 hover:bg-paper transition"
              >
                <div className="absolute top-0 left-0 w-[3px] h-0 group-hover:h-full bg-oxblood transition-all duration-200" />
                <span className="rank-numeral !text-4xl mb-3 not-italic">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-xl text-inknavy leading-tight mb-2 group-hover:text-oxblood transition">
                  {hub.name}
                </h3>
                <p className="text-[13.5px] text-charcoal/75 leading-[1.65] flex-1">
                  {hub.oneLiner}
                </p>
                <span className="mt-5 caps-label text-oxblood">
                  Open hub &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* === EVIDENCE LEDGER MASTER — every compound at a glance === */}
      <section id="ledger" className="border-b border-inknavy/15 bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <Eyebrow tone="oxblood">The Ledger at a glance</Eyebrow>
              <h2 className="font-serif text-[2rem] md:text-[2.6rem] text-inknavy mt-3 leading-[1.1]">
                Every compound, every tier, on one page.
              </h2>
              <p className="mt-5 font-serif italic text-[1.1rem] text-inknavy/80 max-w-2xl leading-[1.5]">
                The Evidence Ledger is our house framework. Preclinical / Human
                pilot / Phase trial / FDA status &mdash; graded on the same four
                tiers, compound by compound.
              </p>
            </div>
          </div>
          <EvidenceLedgerMaster posts={posts} />
        </div>
      </section>

      {/* === LATEST — editorial two-column === */}
      <section className="border-b border-inknavy/15">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <Eyebrow tone="oxblood">The Latest</Eyebrow>
              <h2 className="font-serif text-[2rem] md:text-[2.6rem] text-inknavy mt-3 leading-[1.1]">
                Fresh from the reading pile.
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-10">
            {recent[0] && (
              <article className="md:col-span-7">
                <Link href={`/${recent[0].slug}`} className="group block">
                  <div className="aspect-[16/9] bg-gradient-to-br from-inknavy/90 via-inknavy to-oxblood/80 rounded-sm mb-5 relative overflow-hidden border border-inknavy/15 flex items-center justify-center">
                    <div className="absolute bottom-5 left-5">
                      <span className="caps-label text-bone bg-inknavy/60 backdrop-blur px-2 py-1 rounded-sm">
                        {typeLabel[recent[0].postType]}
                      </span>
                    </div>
                    {/* Molecular-structure line art suggestion */}
                    <svg
                      className="text-bone/30"
                      width="180"
                      height="140"
                      viewBox="0 0 180 140"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      aria-hidden
                    >
                      <circle cx="30" cy="70" r="6" />
                      <circle cx="70" cy="40" r="6" />
                      <circle cx="70" cy="100" r="6" />
                      <circle cx="110" cy="70" r="6" />
                      <circle cx="150" cy="40" r="6" />
                      <circle cx="150" cy="100" r="6" />
                      <line x1="36" y1="70" x2="64" y2="44" />
                      <line x1="36" y1="70" x2="64" y2="96" />
                      <line x1="76" y1="40" x2="104" y2="66" />
                      <line x1="76" y1="100" x2="104" y2="74" />
                      <line x1="116" y1="70" x2="144" y2="44" />
                      <line x1="116" y1="70" x2="144" y2="96" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl md:text-[1.9rem] text-inknavy leading-[1.12] group-hover:text-oxblood transition">
                    {recent[0].title}
                  </h3>
                  <p className="mt-3 text-[15px] text-charcoal/85 leading-[1.7] line-clamp-3">
                    {recent[0].description}
                  </p>
                  <div className="mt-4 caps-label text-slate">
                    {getHub(recent[0].hub)?.shortName} · {recent[0].readingTime}{" "}
                    min read
                  </div>
                </Link>
              </article>
            )}

            <div className="md:col-span-5">
              {recent.slice(1, 5).map((p) => (
                <article
                  key={p.slug}
                  className="py-5 border-b border-inknavy/10 first:pt-0 last:border-b-0"
                >
                  <Link href={`/${p.slug}`} className="group block">
                    <div className="caps-label text-slate mb-1.5">
                      {typeLabel[p.postType]} · {getHub(p.hub)?.shortName}
                    </div>
                    <h3 className="font-serif text-lg text-inknavy leading-snug group-hover:text-oxblood transition">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 text-[13.5px] text-charcoal/75 leading-[1.6] line-clamp-2">
                      {p.description}
                    </p>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === HOW WE WRITE — the credo === */}
      <section className="border-b border-inknavy/15 bg-inknavy text-bone relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28 relative">
          <div className="absolute top-8 left-6 right-6">
            <LedgerRule className="text-bone/30" />
          </div>
          <Eyebrow tone="oxblood">How we write</Eyebrow>
          <h2 className="font-serif text-[1.9rem] md:text-[2.6rem] mt-4 leading-[1.14] text-bone">
            <span className="text-oxblood italic">We describe</span> what has
            been measured &mdash; by whom, at what scale, with what caveats.
          </h2>
          <p className="mt-6 font-serif italic text-[1.15rem] text-bone/85 max-w-2xl leading-[1.5]">
            Three commitments, in plain view, so the reader can calibrate on
            every page.
          </p>
          <div className="grid md:grid-cols-3 gap-10 mt-12">
            <div>
              <div className="rank-numeral !text-oxblood mb-2 not-italic">01</div>
              <h3 className="font-serif text-xl text-bone mb-2">
                Trial stage, stated.
              </h3>
              <p className="text-bone/75 text-[14.5px] leading-[1.7]">
                Every compound profile names where the human development
                pipeline sits &mdash; Preclinical, Phase 1, Phase 2, or Phase 3+
                &mdash; pulled from ClinicalTrials.gov and re-verified quarterly.
              </p>
            </div>
            <div>
              <div className="rank-numeral !text-oxblood mb-2 not-italic">02</div>
              <h3 className="font-serif text-xl text-bone mb-2">
                Regulatory status, plain.
              </h3>
              <p className="text-bone/75 text-[14.5px] leading-[1.7]">
                We state the FDA posture without euphemism. Approved for
                indication X. Labeled for research use only. Removed from the
                503A list. Whichever it is, we say so above the fold.
              </p>
            </div>
            <div>
              <div className="rank-numeral !text-oxblood mb-2 not-italic">03</div>
              <h3 className="font-serif text-xl text-bone mb-2">
                Uncertainty, acknowledged.
              </h3>
              <p className="text-bone/75 text-[14.5px] leading-[1.7]">
                Every profile closes with the named uncertainty &mdash; the trial
                we'd want to see, the effect size that would change our reading.
                Hedging, here, is honesty.
              </p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-bone/20">
            <Link
              href="/editorial-standards"
              className="inline-flex items-center gap-1.5 text-oxblood hover:text-bone text-sm font-medium transition"
            >
              Read our full editorial standards
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* === EXPLAINERS === */}
      {explainers.length > 0 && (
        <section className="border-b border-inknavy/15">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <div className="flex items-end justify-between mb-8 flex-wrap gap-3">
              <div>
                <Eyebrow tone="oxblood">Mechanism &amp; science</Eyebrow>
                <h2 className="font-serif text-[2rem] md:text-[2.4rem] text-inknavy mt-3 leading-[1.1]">
                  The biochemistry underneath the claims.
                </h2>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-0 border-t border-inknavy/15">
              {explainers.map((p, i) => (
                <Link
                  key={p.slug}
                  href={`/${p.slug}`}
                  className="group relative p-6 border-b md:border-b-0 md:border-r border-inknavy/15 last:border-r-0 hover:bg-paper transition"
                >
                  <div className="absolute top-0 left-0 w-[3px] h-0 group-hover:h-full bg-oxblood transition-all duration-200" />
                  <span className="rank-numeral !text-3xl not-italic">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-xl text-inknavy leading-tight mt-3 group-hover:text-oxblood transition">
                    {p.title}
                  </h3>
                  <p className="text-[13.5px] text-charcoal/75 mt-2 leading-[1.65] line-clamp-3">
                    {p.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* === DISPATCH === */}
      <section className="bg-paper border-b border-inknavy/15">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <div className="text-center mb-8">
            <Eyebrow tone="oxblood">The Dispatch</Eyebrow>
            <h2 className="font-serif text-[1.9rem] md:text-[2.4rem] text-inknavy mt-3 leading-[1.12] max-w-2xl mx-auto">
              One calm, cited email a week.
            </h2>
            <p className="mt-5 font-serif italic text-[1.1rem] text-inknavy/80 max-w-xl mx-auto leading-[1.55]">
              One compound, one new trial, or one regulatory update &mdash; read
              and analyzed. Free subscribers receive the 2026 Peptide Evidence
              Ledger PDF on signup.
            </p>
          </div>
          <EmailCapture />
        </div>
      </section>

      {/* === CLOSING DATELINE === */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-10">
          <DotRule />
          <p className="text-center caps-label text-slate mt-6">
            Updated ·{" "}
            {new Date().toLocaleString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
      </section>
    </main>
  );
}
