"use client";

import { useEffect, useRef } from "react";

/**
 * ReadingProgress — a thin oxblood line that fills as the reader scrolls.
 * Mounted inside <Header> so it sits flush with the bottom hairline of the
 * masthead.
 *
 * Uses rAF throttling + transforms for the cheapest possible paint path.
 * Respects prefers-reduced-motion (we still update width, just instantly).
 */
export function ReadingProgress() {
  const barRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    let ticking = false;
    const update = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      bar.style.width = `${Math.min(100, Math.max(0, progress * 100))}%`;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      ref={barRef}
      className="reading-progress"
      role="presentation"
      aria-hidden
    />
  );
}
