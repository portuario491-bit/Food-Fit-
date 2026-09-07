import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0a0f1e",
          900: "#0f1a2e",
          800: "#16233d",
          700: "#1e2f4d",
          600: "#2b4267",
          500: "#44608c",
        },
        paper: "#f8f7f3",
        accent: {
          DEFAULT: "#0f7a5c",
          light: "#22a37e",
          dark: "#0a5a43",
          soft: "#e3f4ee",
        },
        violet: {
          DEFAULT: "#5b4de0",
          light: "#7c6ff0",
          dark: "#4136ad",
          soft: "#ece9fc",
        },
        gold: {
          DEFAULT: "#c8933f",
          light: "#e0ac5b",
          dark: "#9c711f",
          soft: "#fbf0dd",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-body)", "ui-sans-serif", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(120% 120% at 100% 0%, #ece9fc 0%, #f8f7f3 45%, #f8f7f3 100%)",
        "score-conic": "conic-gradient(var(--ring-color) calc(var(--ring-pct) * 1%), var(--ring-track) 0)",
      },
      boxShadow: {
        card: "0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px -8px rgba(15, 23, 42, 0.10)",
        "card-hover": "0 4px 8px rgba(15, 23, 42, 0.06), 0 16px 32px -12px rgba(15, 23, 42, 0.16)",
        glow: "0 0 0 1px rgba(15, 122, 92, 0.15), 0 8px 30px -6px rgba(15, 122, 92, 0.35)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(-3%, 4%) scale(1.05)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(4%, -3%) scale(1.08)" },
        },
        "bar-grow": {
          from: { transform: "scaleX(0)" },
          to: { transform: "scaleX(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        float: "float 14s ease-in-out infinite",
        "float-slow": "float-slow 18s ease-in-out infinite",
        "bar-grow": "bar-grow 0.9s cubic-bezier(0.16, 1, 0.3, 1) both",
      },
    },
  },
  plugins: [typography],
};

export default config;
