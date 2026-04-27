"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { hubs } from "@/lib/content/hubs";
import { Wordmark } from "./editorial/Wordmark";
import { Dateline } from "./editorial/Dateline";
import { MedicalDisclaimerStrip } from "./editorial/MedicalDisclaimerStrip";
import { ReadingProgress } from "./editorial/ReadingProgress";

export function Header() {
  const [guidesOpen, setGuidesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const guidesWrapRef = useRef<HTMLDivElement | null>(null);

  // Keyboard affordances for the Guides dropdown: Escape closes it and
  // returns focus to the trigger; clicks outside the wrapper close it.
  useEffect(() => {
    if (!guidesOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setGuidesOpen(false);
        const trigger = guidesWrapRef.current?.querySelector<HTMLButtonElement>(
          "button[aria-haspopup]"
        );
        trigger?.focus();
      }
    }
    function onClick(e: MouseEvent) {
      if (!guidesWrapRef.current) return;
      if (!guidesWrapRef.current.contains(e.target as Node)) {
        setGuidesOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [guidesOpen]);

  // Mobile nav: Escape closes, body-scroll locks while open.
  useEffect(() => {
    if (!mobileOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  return (
    <header className="bg-bone/95 backdrop-blur sticky top-0 z-40 border-b border-inknavy/15">
      {/* Reading progress, oxblood hairline that fills as the reader scrolls.
          Sits flush with the masthead's bottom hairline. */}
      <ReadingProgress />
      {/* Mandatory medical disclaimer strip, ABOVE masthead */}
      <MedicalDisclaimerStrip variant="top" />

      {/* Masthead strip, dateline + editorial meta */}
      <div className="border-b border-inknavy/10 hidden md:block">
        <div className="mx-auto max-w-6xl px-6 py-2.5 flex items-center justify-between">
          <Dateline />
          <div className="flex items-center gap-5 text-[11px] tracking-[0.16em] uppercase text-slate">
            <Link href="/editorial-standards" className="nav-link">
              Editorial standards
            </Link>
            <span aria-hidden className="text-inknavy/30">·</span>
            <Link href="/methodology" className="nav-link">
              Methodology
            </Link>
            <span aria-hidden className="text-inknavy/30">·</span>
            <Link href="/about" className="nav-link">
              About
            </Link>
            <span aria-hidden className="text-inknavy/30">·</span>
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Main bar, Wordmark + Guides dropdown */}
      <div className="mx-auto max-w-6xl px-6 py-4 md:py-5 flex items-center justify-between gap-6">
        <Wordmark size="md" showSubtitle />

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <div
            ref={guidesWrapRef}
            className="relative"
            onMouseEnter={() => setGuidesOpen(true)}
            onMouseLeave={() => setGuidesOpen(false)}
          >
            <button
              type="button"
              onClick={() => setGuidesOpen((v) => !v)}
              className="nav-link flex items-center gap-1"
              aria-expanded={guidesOpen}
              aria-haspopup="menu"
              aria-controls="guides-menu"
            >
              Guides
              <span aria-hidden className="text-oxblood">▾</span>
            </button>
            {guidesOpen && (
              <div
                id="guides-menu"
                role="menu"
                className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[22rem] bg-bone border border-inknavy/20 rounded-sm shadow-ledger p-3"
              >
                <div className="caps-label text-slate px-3 pb-2 border-b border-inknavy/10 mb-2">
                  The five hubs
                </div>
                {hubs.map((hub, i) => (
                  <Link
                    key={hub.slug}
                    href={`/guides/${hub.slug}`}
                    role="menuitem"
                    className="flex items-start gap-3 px-3 py-2.5 hover:bg-oxblood/5 rounded-sm group"
                  >
                    <span className="rank-numeral !text-base !text-oxblood/50 group-hover:!text-oxblood shrink-0 mt-0.5 not-italic">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <div className="text-inknavy font-medium leading-tight group-hover:text-oxblood transition">
                        {hub.name}
                      </div>
                      <div className="text-[11px] text-slate mt-0.5 leading-snug">
                        {hub.oneLiner}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/bpc-157" className="nav-link">
            BPC-157
          </Link>
          <Link href="/newsletter" className="nav-link">
            Newsletter
          </Link>
          <Link href="/newsletter" className="btn-primary !py-2.5 !px-4 !text-sm">
            Get the Ledger →
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="md:hidden text-inknavy p-2 -m-2"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          >
            <line x1="3" y1="7" x2="21" y2="7" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="17" x2="21" y2="17" />
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="fixed inset-0 z-50 bg-bone md:hidden overflow-auto"
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-inknavy/15">
            <Wordmark size="sm" />
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="text-inknavy p-2 -m-2"
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col px-6 py-8 gap-1">
            <div className="caps-label text-slate mb-2">The five hubs</div>
            {hubs.map((hub, i) => (
              <Link
                key={hub.slug}
                href={`/guides/${hub.slug}`}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-lg text-inknavy font-serif flex items-center gap-3"
              >
                <span className="rank-numeral !text-xl !text-oxblood/60 not-italic">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {hub.name}
              </Link>
            ))}
            <div className="caps-label text-slate mt-6 mb-2">The masthead</div>
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="py-2 text-lg text-inknavy"
            >
              About
            </Link>
            <Link
              href="/editorial-standards"
              onClick={() => setMobileOpen(false)}
              className="py-2 text-lg text-inknavy"
            >
              Editorial standards
            </Link>
            <Link
              href="/methodology"
              onClick={() => setMobileOpen(false)}
              className="py-2 text-lg text-inknavy"
            >
              Methodology
            </Link>
            <Link
              href="/medical-disclaimer"
              onClick={() => setMobileOpen(false)}
              className="py-2 text-lg text-inknavy"
            >
              Medical disclaimer
            </Link>
            <Link
              href="/newsletter"
              onClick={() => setMobileOpen(false)}
              className="py-2 text-lg text-inknavy"
            >
              Newsletter
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="py-2 text-lg text-inknavy"
            >
              Contact
            </Link>
            <div className="mt-6">
              <Link
                href="/newsletter"
                onClick={() => setMobileOpen(false)}
                className="btn-primary w-full justify-center"
              >
                Get the Ledger →
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
