import type { Config } from "tailwindcss";

/**
 * Pepvise — Wirecutter-style review-database tokens.
 *
 * Color philosophy:
 *   - Paper white surface, ink black type, single forest-green accent +
 *     a yellow OUR PICK ribbon. Editorial-utilitarian. NOT inknavy
 *     parchment (the old pepvise system). NOT pine green (peptips).
 *     NOT midnight (circadianstack).
 *
 * Type philosophy:
 *   - Sans-dominant body (Inter). Transitional serif for headlines
 *     (Source Serif 4) — smaller H1 than peptips. Mono only for
 *     score numerics so the score columns read as data.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Pepvise review-database tokens
        paper: "#FAFAF7",         // page background
        "paper-soft": "#F2F1EC",  // alt-row tint
        ink: "#16181A",           // primary type
        "ink-soft": "#3B3F44",    // secondary type
        rule: "#1F2024",          // hairlines (1px)
        "rule-soft": "#D9D6CE",   // soft hairlines
        forest: "#1F5F3F",        // accent (links, buttons, score chip)
        "forest-deep": "#15452D",
        signal: "#F2C541",        // OUR PICK ribbon
        "signal-deep": "#C99E22",
        crimson: "#A8324A",       // failure / "what does not"

        // Score-tier accents (semantic, not branding)
        "score-elite": "#1F5F3F",
        "score-strong": "#3F8B5C",
        "score-mixed": "#B87333",
        "score-weak": "#A8324A",
        "score-absent": "#6E6E6E",

        // Legacy aliases — kept so pre-existing components / class names
        // (the EvidenceLedger card, the schema components) still render
        // something readable on the paper surface. New code uses the
        // tokens above.
        inknavy: "#16181A",
        "inknavy-deep": "#0A0B0C",
        bone: "#FAFAF7",
        "bone-deep": "#F2F1EC",
        oxblood: "#1F5F3F",
        "oxblood-deep": "#15452D",
        slate: "#3B3F44",
        charcoal: "#16181A",
        "tier-high": "#1F5F3F",
        "tier-moderate": "#B87333",
        "tier-low": "#A8324A",
        "tier-anecdotal": "#6E6E6E",
      },
      fontFamily: {
        // Sans-dominant — Inter for everything except review headlines
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: [
          '"Source Serif 4"',
          '"Source Serif Pro"',
          "Tiempos Text",
          "Georgia",
          "serif",
        ],
        // Mono only for scores + tabular numerics
        mono: ['"JetBrains Mono"', '"IBM Plex Mono"', "ui-monospace", "monospace"],
      },
      maxWidth: {
        prose: "64ch",
        reading: "42rem",
        review: "44rem",
      },
      boxShadow: {
        // Pepvise uses a single thin hairline shadow — no card lifts
        soft: "0 1px 0 rgba(22, 24, 26, 0.04), 0 0 0 1px rgba(22, 24, 26, 0.06)",
        ribbon:
          "0 2px 0 rgba(201, 158, 34, 0.6), 0 1px 0 rgba(22, 24, 26, 0.18) inset",
      },
      letterSpacing: {
        widercaps: "0.18em",
      },
    },
  },
  plugins: [],
};

export default config;
