import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

/**
 * PullQuote — used heavily in literary long-form prose. Serif, italic, oxblood
 * left bar. This is the single most prominent editorial flourish on the site.
 *
 * Signature animation: the oxblood rail draws top-to-bottom (scaleY 0 → 1) as
 * the quote enters the viewport; the italic text fades in after the rail
 * completes. Literary gravitas. Reduced-motion readers see it static.
 */
export function PullQuote({
  children,
  attribution,
  cite,
}: {
  children: ReactNode;
  attribution?: string;
  cite?: string;
}) {
  return (
    <Reveal
      as="figure"
      className="pullquote relative my-10 md:my-14 pl-6 md:pl-10 max-w-2xl"
    >
      <span
        aria-hidden
        className="pullquote-rail absolute left-0 top-0 bottom-0 w-[3px] bg-oxblood"
      />
      <div className="pullquote-body">
        <blockquote className="font-serif text-[1.5rem] md:text-[1.75rem] leading-[1.32] text-inknavy italic">
          <span
            aria-hidden
            className="mr-1 font-serif text-oxblood/60 text-5xl leading-none align-[-0.25em]"
          >
            &ldquo;
          </span>
          {children}
        </blockquote>
        {(attribution || cite) && (
          <figcaption className="mt-4 caps-label">
            {attribution && <span>— {attribution}</span>}
            {attribution && cite && <span aria-hidden className="mx-2">·</span>}
            {cite && (
              <span className="normal-case tracking-normal italic font-serif text-slate">
                {cite}
              </span>
            )}
          </figcaption>
        )}
      </div>
    </Reveal>
  );
}
