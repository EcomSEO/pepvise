"use client";

import { useEffect, useRef, type ReactNode, type ElementType, type CSSProperties } from "react";

/**
 * Reveal — scroll-triggered fade-up wrapper used across the home page and
 * marquee editorial components (EvidenceLedger, PullQuote, LedgerRule, etc.).
 *
 * Adds `data-reveal` on mount and toggles `.reveal-in` via IntersectionObserver
 * so the CSS-only animations (drop-cap, pullquote rail, ledger chip stagger)
 * can fire exactly once as the element crosses the threshold.
 *
 * prefers-reduced-motion is honoured globally in globals.css — entries remain
 * visible but static.
 */
export function Reveal({
  as: Tag = "div",
  children,
  className = "",
  style,
  once = true,
  threshold = 0.2,
  rootMargin = "0px 0px -10% 0px",
  delay,
}: {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  once?: boolean;
  threshold?: number;
  rootMargin?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Instantly reveal when reduced motion is preferred.
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      node.classList.add("reveal-in");
      return;
    }

    // Fallback for environments without IntersectionObserver.
    if (typeof IntersectionObserver === "undefined") {
      node.classList.add("reveal-in");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            if (typeof delay === "number" && delay > 0) {
              window.setTimeout(() => node.classList.add("reveal-in"), delay);
            } else {
              node.classList.add("reveal-in");
            }
            if (once) io.unobserve(node);
          } else if (!once) {
            node.classList.remove("reveal-in");
          }
        }
      },
      { threshold, rootMargin }
    );

    io.observe(node);
    return () => io.disconnect();
  }, [once, threshold, rootMargin, delay]);

  return (
    <Tag
      ref={ref as React.MutableRefObject<never>}
      data-reveal=""
      className={className}
      style={style}
    >
      {children}
    </Tag>
  );
}
