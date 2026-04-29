/**
 * Pepvise comparison tables — the core differentiator vs. Wirecutter.
 *
 * Each entry is keyed by the comparative review slug it belongs to (or by a
 * generic key for hub-level tables). The data shape is consumed directly by
 * `<ComparisonTable>` and surfaces on every comparative review with rows
 * linking back to the individual compound reviews — the internal-link mesh
 * the prompt §10 specifies.
 *
 * Hard rules:
 *  - Every cell is a fact. No marketing copy, no superlatives.
 *  - Numerical values use US-imperial-secondary metric formatting only when
 *    the source uses that ("≈7 days", not "very long").
 *  - The "Pepvise score" row pulls from `lib/content/reviews.ts` at compile
 *    time so a methodology re-score automatically updates the comparison.
 */

export type ComparisonRow = {
  attribute: string;
  /** Cell values keyed by the column's compound slug. */
  values: Record<string, string>;
  /** Optional source citation rendered below the row when expanded. */
  cite?: string;
};

export type ComparisonTable = {
  /** Slugs of compound reviews appearing as columns. */
  columns: string[];
  /** The comparison itself. */
  rows: ComparisonRow[];
  /** Authoritative source list for the table. */
  sources: { label: string; url: string }[];
};

// GLP-1 comparison tables removed per 2026-04-29 topic-boundary lock —
// pepvise covers research peptides only. These tables move to peptips.
export const COMPARISON_TABLES: Record<string, ComparisonTable> = {};

export function getComparisonTable(slug: string): ComparisonTable | undefined {
  return COMPARISON_TABLES[slug];
}
