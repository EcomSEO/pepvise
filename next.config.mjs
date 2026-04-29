import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

/**
 * 301 redirects for the 11 GLP-1 / incretin slugs removed per the
 * 2026-04-29 topic-boundary lock. Pepvise covers research peptides only;
 * GLP-1 patient-education content lives on peptips.com. We point each
 * removed URL at the peptips canonical equivalent so search-engine
 * discovery is preserved instead of soft-404'd.
 *
 * Also redirects the 3 GLP-1 comparison posts that were previously
 * published under the pepvise root.
 */
const GLP1_REDIRECTS = [
  // Compound reviews
  "retatrutide",
  "semaglutide",
  "tirzepatide",
  "ozempic",
  "wegovy",
  "zepbound",
  "mounjaro",
  "saxenda",
  "victoza",
  "trulicity",
  "rybelsus",
  // Comparison posts
  "wegovy-vs-zepbound",
  "mounjaro-vs-ozempic",
  "ozempic-vs-wegovy",
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.supabase.co",
      },
    ],
  },
  async redirects() {
    return GLP1_REDIRECTS.flatMap((slug) => [
      {
        source: `/${slug}`,
        destination: `https://peptips.com/${slug}`,
        permanent: true,
      },
      {
        source: `/:locale(de|fr|it|es|nl|pl|sv|pt|ro|cs|no)/${slug}`,
        destination: `https://peptips.com/:locale/${slug}`,
        permanent: true,
      },
    ]);
  },
};

export default withNextIntl(nextConfig);
