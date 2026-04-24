import Link from "next/link";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="caps-label text-slate">
      <ol className="flex flex-wrap items-center gap-2">
        {crumbs.map((c, i) => (
          <li key={i} className="flex items-center gap-2">
            {c.href ? (
              <Link href={c.href} className="hover:text-oxblood transition">
                {c.label}
              </Link>
            ) : (
              <span className="text-inknavy">{c.label}</span>
            )}
            {i < crumbs.length - 1 && (
              <span aria-hidden className="text-inknavy/30">
                /
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
