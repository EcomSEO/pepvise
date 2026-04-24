import { ReactNode } from "react";
import { Breadcrumbs } from "../Breadcrumbs";
import { Eyebrow } from "../editorial/Eyebrow";
import { LedgerRule } from "../editorial/DotRule";

export function TrustPageTemplate({
  title,
  eyebrow = "Imprint",
  children,
}: {
  title: string;
  eyebrow?: string;
  children: ReactNode;
}) {
  return (
    <article className="mx-auto max-w-3xl px-6 py-12 md:py-16">
      <Breadcrumbs
        crumbs={[{ label: "Home", href: "/" }, { label: title }]}
      />
      <div className="mt-6">
        <Eyebrow tone="oxblood">{eyebrow}</Eyebrow>
      </div>
      <h1 className="display-headline mt-3 text-4xl md:text-5xl leading-[1.08]">
        {title}
      </h1>
      <LedgerRule className="mt-8" />
      <div className="mt-10 prose text-[17px] leading-[1.8] text-charcoal/90 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:text-inknavy [&_h2]:mt-12 [&_h2]:mb-3 [&_h3]:font-serif [&_h3]:text-xl [&_h3]:text-inknavy [&_h3]:mt-8 [&_h3]:mb-2 [&_strong]:text-inknavy [&_strong]:font-semibold">
        {children}
      </div>
    </article>
  );
}
