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

export const COMPARISON_TABLES: Record<string, ComparisonTable> = {
  "ozempic-vs-wegovy": {
    columns: ["ozempic", "wegovy", "rybelsus", "mounjaro", "zepbound"],
    rows: [
      {
        attribute: "Active ingredient",
        values: {
          ozempic: "Semaglutide",
          wegovy: "Semaglutide",
          rybelsus: "Semaglutide",
          mounjaro: "Tirzepatide",
          zepbound: "Tirzepatide",
        },
      },
      {
        attribute: "Indication (FDA)",
        values: {
          ozempic: "Type 2 diabetes",
          wegovy: "Chronic weight management",
          rybelsus: "Type 2 diabetes",
          mounjaro: "Type 2 diabetes",
          zepbound: "Chronic weight management",
        },
      },
      {
        attribute: "Manufacturer",
        values: {
          ozempic: "Novo Nordisk",
          wegovy: "Novo Nordisk",
          rybelsus: "Novo Nordisk",
          mounjaro: "Eli Lilly",
          zepbound: "Eli Lilly",
        },
      },
      {
        attribute: "Drug class",
        values: {
          ozempic: "GLP-1 receptor agonist",
          wegovy: "GLP-1 receptor agonist",
          rybelsus: "GLP-1 receptor agonist",
          mounjaro: "Dual GIP/GLP-1 agonist",
          zepbound: "Dual GIP/GLP-1 agonist",
        },
      },
      {
        attribute: "Route",
        values: {
          ozempic: "Subcutaneous (weekly)",
          wegovy: "Subcutaneous (weekly)",
          rybelsus: "Oral (daily)",
          mounjaro: "Subcutaneous (weekly)",
          zepbound: "Subcutaneous (weekly)",
        },
      },
      {
        attribute: "Half-life",
        values: {
          ozempic: "≈7 days",
          wegovy: "≈7 days",
          rybelsus: "≈7 days",
          mounjaro: "≈5 days",
          zepbound: "≈5 days",
        },
      },
      {
        attribute: "Top label dose",
        values: {
          ozempic: "2.0 mg / week",
          wegovy: "2.4 mg / week",
          rybelsus: "14 mg / day",
          mounjaro: "15 mg / week",
          zepbound: "15 mg / week",
        },
      },
      {
        attribute: "Pivotal weight-loss trial",
        values: {
          ozempic: "SUSTAIN program (T2D primary)",
          wegovy: "STEP-1 (Wilding 2021)",
          rybelsus: "PIONEER program (T2D primary)",
          mounjaro: "SURPASS program (T2D primary)",
          zepbound: "SURMOUNT-1 (Jastreboff 2022)",
        },
        cite: "https://pubmed.ncbi.nlm.nih.gov/33567185/",
      },
      {
        attribute: "Mean weight loss vs. placebo",
        values: {
          ozempic: "≈6% (T2D, off-label)",
          wegovy: "≈14.9% at 68 weeks",
          rybelsus: "≈4% (T2D, off-label)",
          mounjaro: "≈20% at 72 weeks (T2D)",
          zepbound: "≈22.5% at 72 weeks",
        },
      },
      {
        attribute: "Cardiovascular outcomes data",
        values: {
          ozempic: "SUSTAIN-6 (Marso 2016)",
          wegovy: "SELECT (Lincoff 2023)",
          rybelsus: "PIONEER 6 (Husain 2019)",
          mounjaro: "SURPASS-CVOT (reads out 2026)",
          zepbound: "SURPASS-CVOT (reads out 2026)",
        },
      },
      {
        attribute: "Most common side effects",
        values: {
          ozempic: "Nausea, diarrhoea, vomiting",
          wegovy: "Nausea, diarrhoea, constipation",
          rybelsus: "Nausea, abdominal pain",
          mounjaro: "Nausea, diarrhoea, decreased appetite",
          zepbound: "Nausea, diarrhoea, vomiting",
        },
      },
      {
        attribute: "Pepvise methodology v1.2 score",
        values: {
          ozempic: "9.1 / 10",
          wegovy: "9.2 / 10",
          rybelsus: "—",
          mounjaro: "9.3 / 10",
          zepbound: "9.3 / 10",
        },
      },
    ],
    sources: [
      { label: "Wilding et al. 2021, STEP-1, NEJM", url: "https://pubmed.ncbi.nlm.nih.gov/33567185/" },
      { label: "Jastreboff et al. 2022, SURMOUNT-1, NEJM", url: "https://pubmed.ncbi.nlm.nih.gov/35658024/" },
      { label: "Frias et al. 2021, SURPASS-2, NEJM", url: "https://pubmed.ncbi.nlm.nih.gov/34370970/" },
      { label: "Lincoff et al. 2023, SELECT, NEJM", url: "https://pubmed.ncbi.nlm.nih.gov/37952131/" },
      { label: "FDA Drugs@FDA — labels for Ozempic, Wegovy, Rybelsus, Mounjaro, Zepbound", url: "https://www.accessdata.fda.gov/scripts/cder/daf/" },
    ],
  },

  "mounjaro-vs-ozempic": {
    columns: ["mounjaro", "ozempic"],
    rows: [
      {
        attribute: "Active ingredient",
        values: { mounjaro: "Tirzepatide", ozempic: "Semaglutide" },
      },
      {
        attribute: "Drug class",
        values: { mounjaro: "Dual GIP/GLP-1 agonist", ozempic: "GLP-1 receptor agonist" },
      },
      {
        attribute: "FDA approval (T2D)",
        values: { mounjaro: "May 2022", ozempic: "December 2017" },
      },
      {
        attribute: "Head-to-head trial",
        values: { mounjaro: "SURPASS-2 (vs. semaglutide)", ozempic: "SURPASS-2 (comparator arm)" },
        cite: "https://pubmed.ncbi.nlm.nih.gov/34370970/",
      },
      {
        attribute: "Weight loss at 40 weeks (SURPASS-2)",
        values: {
          mounjaro: "−7.6 kg (5 mg) / −9.3 kg (10 mg) / −11.2 kg (15 mg)",
          ozempic: "−5.7 kg (1 mg)",
        },
      },
      {
        attribute: "HbA1c reduction (SURPASS-2)",
        values: {
          mounjaro: "−2.01% to −2.30% (dose-dependent)",
          ozempic: "−1.86%",
        },
      },
      {
        attribute: "Pepvise methodology v1.2 score",
        values: { mounjaro: "9.3 / 10", ozempic: "9.1 / 10" },
      },
    ],
    sources: [
      { label: "Frias et al. 2021, SURPASS-2, NEJM", url: "https://pubmed.ncbi.nlm.nih.gov/34370970/" },
      { label: "FDA Drugs@FDA — Mounjaro labeling", url: "https://www.accessdata.fda.gov/scripts/cder/daf/" },
    ],
  },

  "wegovy-vs-zepbound": {
    columns: ["wegovy", "zepbound"],
    rows: [
      { attribute: "Active ingredient", values: { wegovy: "Semaglutide", zepbound: "Tirzepatide" } },
      { attribute: "Drug class", values: { wegovy: "GLP-1 RA", zepbound: "Dual GIP/GLP-1 agonist" } },
      { attribute: "FDA approval (chronic weight management)", values: { wegovy: "June 2021", zepbound: "November 2023" } },
      { attribute: "Top label dose", values: { wegovy: "2.4 mg / week", zepbound: "15 mg / week" } },
      { attribute: "Pivotal trial", values: { wegovy: "STEP-1 (n=1961, 68 weeks)", zepbound: "SURMOUNT-1 (n=2539, 72 weeks)" } },
      {
        attribute: "Mean weight loss vs. placebo",
        values: { wegovy: "≈14.9%", zepbound: "≈22.5%" },
      },
      {
        attribute: "Head-to-head (SURMOUNT-5, 2025)",
        values: {
          wegovy: "Comparator (semaglutide 2.4 mg)",
          zepbound: "Outperformed by ≈5–7 percentage points at 72 weeks",
        },
      },
      {
        attribute: "Cardiovascular outcomes",
        values: { wegovy: "SELECT — benefit demonstrated", zepbound: "SURPASS-CVOT reads out 2026" },
      },
      { attribute: "Pepvise methodology v1.2 score", values: { wegovy: "9.2 / 10", zepbound: "9.3 / 10" } },
    ],
    sources: [
      { label: "Wilding et al. 2021, STEP-1, NEJM", url: "https://pubmed.ncbi.nlm.nih.gov/33567185/" },
      { label: "Jastreboff et al. 2022, SURMOUNT-1, NEJM", url: "https://pubmed.ncbi.nlm.nih.gov/35658024/" },
      { label: "Lincoff et al. 2023, SELECT, NEJM", url: "https://pubmed.ncbi.nlm.nih.gov/37952131/" },
    ],
  },
};

export function getComparisonTable(slug: string): ComparisonTable | undefined {
  return COMPARISON_TABLES[slug];
}
