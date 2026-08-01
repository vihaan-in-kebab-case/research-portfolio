import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx,md,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0B0D10",
        "bg-raised": "#101318",
        card: "#14171B",
        "card-2": "#1B1F24",
        border: "#262B31",
        "border-soft": "#1E2227",
        text: "#E7E9EA",
        "text-dim": "#9AA1A8",
        "text-faint": "#5C636B",
        cyan: "#6FB6C2",
        rust: "#B8654C",
      },
      fontFamily: {
        pixel: ["var(--font-pixel)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
