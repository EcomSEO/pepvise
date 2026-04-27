import { Link } from "@/i18n/navigation";

/**
 * ComparisonTable — full-width sticky-header table comparing 4-6
 * compounds across the five Pepvise dimensions. Tabular numerics,
 * alternating tint, sortable-looking caret on the default column.
 *
 * NOT actually client-sortable — that would inflate JS for a table
 * that ships pre-sorted. The caret is an affordance, not a control.
 */
export type CmpRow = {
  rank: number;
  slug: string;
  name: string;
  alias?: string;
  evidence: number;
  mechanism: number;
  human: number;
  vendor: number;
  safety: number;
  total: number;
};

export function ComparisonTable({
  rows,
  copy,
}: {
  rows: CmpRow[];
  copy: {
    eyebrow: string;
    heading: string;
    caption: string;
    colCompound: string;
    colEvidence: string;
    colMechanism: string;
    colHuman: string;
    colVendor: string;
    colSafety: string;
    colTotal: string;
  };
}) {
  return (
    <section className="border-b border-rule">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-12 md:py-16">
        <header className="mb-7 max-w-3xl">
          <div className="eyebrow mb-2.5">{copy.eyebrow}</div>
          <h2 className="font-serif text-[1.7rem] md:text-[2rem] leading-[1.15] text-ink">
            {copy.heading}
          </h2>
          <p className="mt-3 text-[14.5px] text-ink-soft leading-[1.55] max-w-2xl">
            {copy.caption}
          </p>
        </header>

        <div className="overflow-x-auto border border-rule">
          <table className="cmp-table">
            <thead>
              <tr>
                <th style={{ width: "40px" }}>#</th>
                <th>{copy.colCompound}</th>
                <th data-numeric="true">{copy.colEvidence}</th>
                <th data-numeric="true">{copy.colMechanism}</th>
                <th data-numeric="true">{copy.colHuman}</th>
                <th data-numeric="true">{copy.colVendor}</th>
                <th data-numeric="true">{copy.colSafety}</th>
                <th data-numeric="true">
                  {copy.colTotal}
                  <span aria-hidden className="ml-1 text-[10px]">▼</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.slug}>
                  <td className="mono tnum text-ink-soft">{row.rank}</td>
                  <td>
                    <Link
                      href={`/${row.slug}` as never}
                      className="font-serif text-[15.5px] text-ink hover:text-forest"
                    >
                      {row.name}
                    </Link>
                    {row.alias && (
                      <div className="caps-data text-ink-soft mt-0.5">{row.alias}</div>
                    )}
                  </td>
                  <td data-numeric="true">{row.evidence.toFixed(1)}</td>
                  <td data-numeric="true">{row.mechanism.toFixed(1)}</td>
                  <td data-numeric="true">{row.human.toFixed(1)}</td>
                  <td data-numeric="true">{row.vendor.toFixed(1)}</td>
                  <td data-numeric="true">{row.safety.toFixed(1)}</td>
                  <td data-numeric="true" className="cmp-total">
                    {row.total.toFixed(1)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
