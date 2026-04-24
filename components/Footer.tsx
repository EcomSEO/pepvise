import Link from "next/link";
import { hubs } from "@/lib/content/hubs";
import { Wordmark } from "./editorial/Wordmark";
import { SITE } from "@/lib/content/site";

export function Footer() {
  return (
    <footer className="mt-24 bg-paper border-t border-inknavy/15">
      {/* Editorial masthead */}
      <div className="mx-auto max-w-6xl px-6 pt-14 pb-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-10 border-b border-inknavy/15">
          <div>
            <Wordmark size="lg" asLink={false} showSubtitle />
            <p className="mt-4 font-serif text-lg italic text-inknavy max-w-md leading-snug">
              {SITE.tagline}
            </p>
          </div>
          <div className="max-w-md text-[14px] text-slate leading-[1.7]">
            A small editorial team reading the peer-reviewed peptide literature
            and translating it into calm, cited analysis. We do not sell
            peptides. We do not affiliate-link any peptide vendor. We do not
            prescribe dosing.
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-10 mt-10">
          <div className="md:col-span-5">
            <h4 className="caps-label text-slate mb-4">The five hubs</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
              {hubs.map((hub, i) => (
                <li key={hub.slug}>
                  <Link
                    href={`/guides/${hub.slug}`}
                    className="group flex items-center gap-2 text-inknavy hover:text-oxblood transition"
                  >
                    <span className="font-serif italic text-[13px] text-oxblood/50 group-hover:text-oxblood tnum">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[15px]">{hub.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="caps-label text-slate mb-4">The masthead</h4>
            <ul className="space-y-2.5 text-[15px]">
              <li>
                <Link
                  href="/about"
                  className="text-inknavy hover:text-oxblood transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/editorial-standards"
                  className="text-inknavy hover:text-oxblood transition"
                >
                  Editorial standards
                </Link>
              </li>
              <li>
                <Link
                  href="/methodology"
                  className="text-inknavy hover:text-oxblood transition"
                >
                  Methodology
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-inknavy hover:text-oxblood transition"
                >
                  Contact &amp; tips
                </Link>
              </li>
              <li>
                <Link
                  href="/newsletter"
                  className="text-inknavy hover:text-oxblood transition"
                >
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="caps-label text-slate mb-4">Fine print</h4>
            <ul className="space-y-2.5 text-[15px]">
              <li>
                <Link
                  href="/medical-disclaimer"
                  className="text-inknavy hover:text-oxblood transition"
                >
                  Medical disclaimer
                </Link>
              </li>
              <li>
                <Link
                  href="/affiliate-disclosure"
                  className="text-inknavy hover:text-oxblood transition"
                >
                  Affiliate disclosure
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-inknavy hover:text-oxblood transition"
                >
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-inknavy hover:text-oxblood transition"
                >
                  Terms of service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Imprint strip */}
      <div className="border-t border-inknavy/15">
        <div className="mx-auto max-w-6xl px-6 py-6 flex flex-col md:flex-row justify-between gap-3 text-[11px] tracking-[0.16em] uppercase text-slate">
          <div className="flex items-center gap-3 flex-wrap">
            <span>©&nbsp;{new Date().getFullYear()} PepVise</span>
            <span aria-hidden className="text-inknavy/30">·</span>
            <span>
              {SITE.volume} · {SITE.issue}
            </span>
            <span aria-hidden className="text-inknavy/30">·</span>
            <span className="text-oxblood">Not medical advice</span>
          </div>
          <div className="normal-case tracking-normal text-slate/90 text-[12px] max-w-2xl md:text-right leading-[1.6]">
            For educational and research purposes only. We do not sell peptides,
            recommend vendors, or prescribe dosing. Many compounds discussed are
            labeled for research use only and are not FDA-approved for human
            use.
          </div>
        </div>
      </div>
    </footer>
  );
}
