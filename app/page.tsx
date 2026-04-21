import { hubs } from "@/lib/content/hubs";
import { featuredPost, latestPosts } from "@/lib/content/posts";
import { HubCard } from "@/components/HubCard";
import { PostCard } from "@/components/PostCard";
import { EmailCapture } from "@/components/EmailCapture";
import Link from "next/link";

export default function HomePage() {
  const featured = featuredPost();
  const recent = latestPosts(6);

  return (
    <main>
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <h1 className="font-serif text-5xl md:text-6xl leading-[1.08] text-inknavy">
            Research peptides, cited and clear.
          </h1>
          <p className="mt-6 text-xl text-charcoal/80 max-w-2xl leading-relaxed">
            Calm, citation-heavy analysis of BPC-157, TB-500, GHK-Cu, Retatrutide,
            and the research-peptide category. Evidence Ledger on every compound.
            No sales. No dosing prescriptions. No vendor links.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/bpc-157"
              className="inline-flex items-center rounded-md bg-inknavy px-6 py-3 text-bone hover:bg-oxblood transition"
            >
              Read the BPC-157 profile →
            </Link>
            <Link
              href="#email-capture"
              className="inline-flex items-center rounded-md border border-inknavy/30 px-6 py-3 text-inknavy hover:border-inknavy transition"
            >
              Get the Evidence Ledger
            </Link>
          </div>
        </div>
      </section>

      {featured && (
        <section className="mx-auto max-w-6xl px-6 py-14 border-t border-inknavy/10">
          <div className="mb-6">
            <span className="text-xs uppercase tracking-wide text-oxblood">
              The compound readers find us through
            </span>
          </div>
          <PostCard post={featured} variant="feature" />
        </section>
      )}

      <section id="hubs" className="mx-auto max-w-6xl px-6 py-16 border-t border-inknavy/10">
        <h2 className="font-serif text-3xl text-inknavy mb-8">The guides</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {hubs.map((hub) => (<HubCard key={hub.slug} hub={hub} />))}
        </div>
      </section>

      {recent.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 py-16 border-t border-inknavy/10">
          <h2 className="font-serif text-3xl text-inknavy mb-8">Latest</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {recent.map((p) => (<PostCard key={p.slug} post={p} />))}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-6 py-12 border-t border-inknavy/10">
        <EmailCapture />
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 border-t border-inknavy/10">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="font-serif text-lg text-inknavy mb-2">Primary sources only.</h3>
            <p className="text-sm text-charcoal/70">PubMed, clinicaltrials.gov, FDA. No Healthline as source.</p>
          </div>
          <div>
            <h3 className="font-serif text-lg text-inknavy mb-2">No peptide vendors.</h3>
            <p className="text-sm text-charcoal/70">We do not sell, recommend, or affiliate-link any peptide seller.</p>
          </div>
          <div>
            <h3 className="font-serif text-lg text-inknavy mb-2">Evidence Ledger on every compound.</h3>
            <p className="text-sm text-charcoal/70">Not buried. Above the fold.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
