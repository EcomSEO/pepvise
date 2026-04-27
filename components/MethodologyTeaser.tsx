import { Link } from "@/i18n/navigation";

/**
 * MethodologyTeaser — densely-typed five-row methodology summary.
 * Each row carries a label, the v1.2 weight (mono), and a single
 * sentence of body. Reads as a numbered legend, not a feature grid.
 */
export type MethodologyItem = {
  label: string;
  weight: string;
  body: string;
};

export function MethodologyTeaser({
  items,
  copy,
}: {
  items: MethodologyItem[];
  copy: {
    eyebrow: string;
    heading: string;
    caption: string;
    ctaRead: string;
    ctaVersion: string;
  };
}) {
  return (
    <section className="border-b border-rule bg-paper">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-12 md:py-16 grid lg:grid-cols-[280px_1fr] gap-10">
        <header>
          <div className="eyebrow mb-2.5">{copy.eyebrow}</div>
          <h2 className="font-serif text-[1.55rem] md:text-[1.85rem] leading-[1.18] text-ink">
            {copy.heading}
          </h2>
          <p className="mt-3 text-[13.5px] text-ink-soft leading-[1.55] max-w-md">
            {copy.caption}
          </p>
          <Link
            href={"/methodology" as never}
            className="btn-secondary mt-5"
          >
            {copy.ctaRead}
          </Link>
          <div className="mt-3 caps-data text-ink-soft">{copy.ctaVersion}</div>
        </header>
        <div className="border-t border-rule">
          {items.map((item, i) => (
            <div
              key={item.label}
              className="grid grid-cols-[44px_1fr_60px] items-baseline gap-4 border-b border-rule-soft py-4"
            >
              <div className="mono tnum text-ink-soft text-[12px]">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <div className="font-serif text-[16px] text-ink leading-tight">
                  {item.label}
                </div>
                <p className="text-[13.5px] text-ink-soft leading-[1.55] mt-1">
                  {item.body}
                </p>
              </div>
              <div className="mono tnum text-forest text-[14px] text-right font-semibold">
                {item.weight}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
