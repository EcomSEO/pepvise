import type { Post } from "@/lib/content/posts";

type Strength = "strong" | "moderate" | "weak" | "absent";

const strengthStyles: Record<Strength, { dot: string; label: string; color: string }> = {
  strong: { dot: "#2F6B3E", label: "Strong", color: "text-[#2F6B3E]" },
  moderate: { dot: "#B87333", label: "Moderate", color: "text-[#B87333]" },
  weak: { dot: "#7A2E3B", label: "Weak", color: "text-oxblood" },
  absent: { dot: "#5A6374", label: "Absent", color: "text-slate" },
};

/**
 * The site's signature artifact. Renders the 4-row strength-of-evidence summary
 * above every compound post. Screenshot-friendly for Twitter.
 */
export function EvidenceLedger({ post }: { post: Post }) {
  if (!post.evidenceLedger) return null;
  const { preclinical, humanPilot, phaseTrial, fdaApproved, notes } = post.evidenceLedger;

  const rows: Array<{ label: string; strength: Strength | "approved" | "not-approved" }> = [
    { label: "Preclinical (animal models)", strength: preclinical },
    { label: "Human pilot studies", strength: humanPilot },
    { label: "Phase II / III trials", strength: phaseTrial },
    { label: "FDA-approved indication", strength: fdaApproved },
  ];

  return (
    <aside
      className="my-8 border border-inknavy/20 rounded-lg overflow-hidden bg-white/40"
      aria-label="Evidence ledger"
    >
      <div className="px-6 py-3 bg-inknavy text-bone">
        <p className="font-serif text-sm uppercase tracking-widest">Evidence Ledger</p>
        <p className="text-xs text-bone/70 mt-0.5">
          State of the published literature for {post.title.replace(/\s+—.*$/, "")} as of {new Date(post.updatedAt).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
        </p>
      </div>
      <div className="divide-y divide-inknavy/10">
        {rows.map((row, i) => (
          <LedgerRow key={i} label={row.label} strength={row.strength} />
        ))}
      </div>
      {notes && (
        <div className="px-6 py-3 bg-oxblood/5 border-t border-inknavy/10">
          <p className="font-mono text-xs text-oxblood uppercase tracking-wider mb-1">
            Notable
          </p>
          <p className="text-sm text-charcoal/90">{notes}</p>
        </div>
      )}
    </aside>
  );
}

function LedgerRow({
  label,
  strength,
}: {
  label: string;
  strength: Strength | "approved" | "not-approved";
}) {
  let style;
  let valueText;
  if (strength === "approved") {
    style = strengthStyles.strong;
    valueText = "Approved";
  } else if (strength === "not-approved") {
    style = strengthStyles.absent;
    valueText = "Not approved for human use";
  } else {
    style = strengthStyles[strength];
    valueText = style.label;
  }

  return (
    <div className="grid grid-cols-[1fr,auto] items-center gap-4 px-6 py-4">
      <div className="text-sm text-charcoal/90">{label}</div>
      <div className="flex items-center gap-2">
        <span
          className="inline-block w-2.5 h-2.5 rounded-full"
          style={{ backgroundColor: style.dot }}
          aria-hidden
        />
        <span className={`font-mono text-sm font-medium ${style.color}`}>
          {valueText}
        </span>
      </div>
    </div>
  );
}

/**
 * Grid of Evidence Ledgers for the homepage — shows all compounds at a glance.
 */
export function EvidenceLedgerMaster({ posts }: { posts: Post[] }) {
  const compoundPosts = posts.filter((p) => p.evidenceLedger);
  if (compoundPosts.length === 0) return null;

  return (
    <section className="my-10">
      <h2 className="font-serif text-3xl text-inknavy mb-2">
        The Evidence Ledger — at a glance
      </h2>
      <p className="text-charcoal/70 mb-6">
        Where the literature actually sits for each compound. Click through for the
        full profile with citations.
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        {compoundPosts.map((p) => (
          <CompactLedgerCard key={p.slug} post={p} />
        ))}
      </div>
    </section>
  );
}

function CompactLedgerCard({ post }: { post: Post }) {
  if (!post.evidenceLedger) return null;
  const { preclinical, humanPilot, phaseTrial, fdaApproved } = post.evidenceLedger;

  const dotFor = (s: Strength | "approved" | "not-approved") => {
    if (s === "approved") return strengthStyles.strong.dot;
    if (s === "not-approved") return strengthStyles.absent.dot;
    return strengthStyles[s].dot;
  };

  return (
    <a
      href={`/${post.slug}`}
      className="block p-4 bg-white/50 border border-inknavy/15 rounded-lg hover:border-oxblood transition"
    >
      <h3 className="font-serif text-lg text-inknavy leading-tight">{post.title.replace(/\s+—.*$/, "")}</h3>
      <div className="mt-3 grid grid-cols-4 gap-2 text-xs">
        {[
          { label: "Preclin.", s: preclinical },
          { label: "Human", s: humanPilot },
          { label: "Phase", s: phaseTrial },
          { label: "FDA", s: fdaApproved },
        ].map((row) => (
          <div key={row.label} className="flex flex-col items-center">
            <span
              className="w-3 h-3 rounded-full mb-1"
              style={{ backgroundColor: dotFor(row.s) }}
              aria-hidden
            />
            <span className="font-mono text-[10px] text-slate uppercase">{row.label}</span>
          </div>
        ))}
      </div>
    </a>
  );
}
