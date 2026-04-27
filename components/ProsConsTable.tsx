/**
 * ProsConsTable — a real two-column structured table, NOT a chip cloud.
 *
 * Each row pairs one pro with one con (or leaves the opposite cell
 * empty). Glyphs: forest checkmark for pros, crimson cross for cons.
 * The table head carries the locale-driven labels in small-caps.
 */
export function ProsConsTable({
  pros,
  cons,
  copy,
}: {
  pros: string[];
  cons: string[];
  copy: { heading: string; prosLabel: string; consLabel: string };
}) {
  const rows = Math.max(pros.length, cons.length);
  return (
    <section>
      <h3 className="font-serif text-[1.25rem] mb-4 text-ink">{copy.heading}</h3>
      <table className="pc-table">
        <thead>
          <tr>
            <th>{copy.prosLabel}</th>
            <th>{copy.consLabel}</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }).map((_, i) => (
            <tr key={i}>
              <td className="pc-pro">
                {pros[i] ? (
                  <>
                    <span className="pc-glyph" aria-hidden>
                      ✓
                    </span>
                    {pros[i]}
                  </>
                ) : (
                  <span className="text-ink-soft/50">—</span>
                )}
              </td>
              <td className="pc-con">
                {cons[i] ? (
                  <>
                    <span className="pc-glyph" aria-hidden>
                      ✗
                    </span>
                    {cons[i]}
                  </>
                ) : (
                  <span className="text-ink-soft/50">—</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
