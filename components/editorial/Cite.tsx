import type { ReactNode } from "react";

/**
 * Cite, a footnote-style citation marker. On desktop (hover-capable
 * pointers) it reveals a bone-on-inknavy popover with the source details
 * inline. On mobile it falls back to a plain anchor that links out.
 *
 * Pure CSS + ARIA, no JS. Styles live in globals.css under `.cite`.
 *
 * Usage:
 *   <Cite n={1} href="https://pubmed.ncbi.nlm.nih.gov/…">
 *     Chang CH et al., 2014, <em>J Appl Physiol</em>, n=12 pilot.
 *   </Cite>
 */
export function Cite({
  n,
  href,
  children,
}: {
  n: number | string;
  href?: string;
  children: ReactNode;
}) {
  const label = String(n);
  return (
    <a
      className="cite"
      href={href ?? "#sources"}
      aria-describedby={`cite-${label}`}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {label}
      <span className="cite-body" role="tooltip" id={`cite-${label}`}>
        {children}
      </span>
    </a>
  );
}
