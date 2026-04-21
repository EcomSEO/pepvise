import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // PepVise brand tokens — scholarly, serious
        inknavy: "#192642",
        bone: "#F0EBE0",
        oxblood: "#7A2E3B",
        slate: "#5A6374",
        charcoal: "#1A1A1A",
        // Legacy aliases
        sage: "#7A2E3B",
        cream: "#F0EBE0",
        pine: "#192642",
        coral: "#7A2E3B",
        forest: "#192642",
        terracotta: "#7A2E3B",
      },
      fontFamily: {
        serif: ["Newsreader", '"Tiempos Text"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
