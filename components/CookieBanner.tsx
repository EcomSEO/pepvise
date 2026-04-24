"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "pepvise:cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      // ignore
    }
  }, []);

  function accept(choice: "accept" | "reject") {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // ignore
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-sm z-50 bg-bone border border-inknavy/20 rounded-sm shadow-ledger p-5 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-1 h-full bg-oxblood" />
      <p className="text-[13.5px] text-charcoal/90 leading-[1.65]">
        A small number of cookies for analytics and session continuity. No
        advertising cookies, no tracking pixels. See our{" "}
        <a
          href="/privacy"
          className="text-oxblood underline decoration-oxblood/50 hover:decoration-oxblood underline-offset-2"
        >
          Privacy Policy
        </a>
        .
      </p>
      <div className="mt-3 flex gap-2 justify-end">
        <button
          onClick={() => accept("reject")}
          className="text-[13px] px-3 py-2 text-slate hover:text-inknavy"
        >
          Reject
        </button>
        <button
          onClick={() => accept("accept")}
          className="btn-primary !py-2 !px-4 !text-[13px]"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
