import type { ReactNode } from "react";

/**
 * WhatWouldChangeOurMind — sits near the end of every compound profile.
 * Lists the trial, finding, or regulatory action that would shift the reading.
 * Oxblood accent; never alarm-toned.
 */
export function WhatWouldChangeOurMind({
  children,
  title = "What would change our reading",
}: {
  children: ReactNode;
  title?: string;
}) {
  return (
    <section className="my-14 relative">
      <div className="flex items-center gap-3 mb-3">
        <span className="h-2 w-2 rounded-full bg-oxblood" />
        <span className="caps-label text-oxblood">{title}</span>
      </div>
      <div className="pl-5 border-l-2 border-oxblood/50 max-w-prose text-[15.5px] text-charcoal/90 leading-[1.75]">
        {children}
      </div>
    </section>
  );
}
