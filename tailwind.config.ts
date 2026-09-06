import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0b1220",
          900: "#0f1a2e",
          800: "#16233d",
          700: "#1e2f4d",
          600: "#2b4267",
        },
        paper: "#f7f8fa",
        accent: {
          DEFAULT: "#1f6f5c",
          light: "#2f8f77",
          dark: "#154f41",
        },
        gold: "#b8925a",
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [typography],
};

export default config;
