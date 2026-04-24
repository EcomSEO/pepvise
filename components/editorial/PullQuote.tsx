import type { ReactNode } from "react";

/**
 * PullQuote — used heavily in literary long-form prose. Serif, italic, oxblood
 * left bar. This is the single most prominent editorial flourish on the site.
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
    <figure className="my-10 md:my-14 border-l-[3px] border-oxblood pl-6 md:pl-10 max-w-2xl">
      <blockquote className="font-serif text-[1.5rem] md:text-[1.75rem] leading-[1.32] text-inknavy italic">
        <span
          aria-hidden
          className="mr-1 font-serif text-oxblood/60 text-5xl leading-none align-[-0.25em]"
        >
          “
        </span>
        {children}
      </blockquote>
      {(attribution || cite) && (
        <figcaption className="mt-4 caps-label">
          {attribution && <span>— {attribution}</span>}
          {attribution && cite && <span aria-hidden className="mx-2">·</span>}
          {cite && <span className="normal-case tracking-normal italic font-serif text-slate">{cite}</span>}
        </figcaption>
      )}
    </figure>
  );
}
