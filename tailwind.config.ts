import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // PepVise brand — scholarly serif magazine
        inknavy: "#192642",
        "inknavy-deep": "#0F1830",
        bone: "#F0EBE0",
        "bone-deep": "#E4DCC7",
        paper: "#F7F3EA",
        oxblood: "#7A2E3B",
        "oxblood-deep": "#5E202B",
        slate: "#5A6374",
        charcoal: "#1A1A1A",
        // Evidence tier accents (chips only — not for branding)
        "tier-high": "#2F6B3E",
        "tier-moderate": "#B87333",
        "tier-low": "#7A2E3B",
        "tier-anecdotal": "#5A6374",
      },
      fontFamily: {
        serif: [
          "Newsreader",
          '"Tiempos Text"',
          '"Source Serif 4"',
          "Georgia",
          "serif",
        ],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "monospace"],
      },
      maxWidth: {
        prose: "64ch",
        reading: "42rem",
        ledger: "44rem",
      },
      boxShadow: {
        ledger:
          "0 1px 1px rgba(25, 38, 66, 0.04), 0 10px 28px rgba(25, 38, 66, 0.08)",
        soft: "0 1px 2px rgba(25, 38, 66, 0.05), 0 4px 14px rgba(25, 38, 66, 0.05)",
      },
      letterSpacing: {
        widercaps: "0.22em",
      },
    },
  },
  plugins: [],
};

export default config;
