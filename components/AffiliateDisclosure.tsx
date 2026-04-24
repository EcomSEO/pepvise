/**
 * PepVise-specific disclosure. PepVise has zero peptide-vendor affiliate
 * relationships and the language below reflects that — it is not a generic
 * commerce disclosure.
 */
export function AffiliateDisclosure() {
  return (
    <aside className="text-[13px] text-charcoal/85 bg-paper border border-inknavy/15 rounded-sm px-5 py-4 my-6 leading-[1.7]">
      <strong className="text-inknavy font-semibold">
        No peptide vendor links.
      </strong>{" "}
      PepVise does not sell peptides, affiliate-link any peptide seller, or
      accept sponsorship from peptide manufacturers, compounding pharmacies, or
      peptide-coaching services. Links in this post go to PubMed,
      ClinicalTrials.gov, FDA documents, and reference textbooks only.
    </aside>
  );
}
