import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary-light": "#CDAAFF",
        dark: "#0C0D10",
        "light-heading": "#FAFAFA",
      },
      fontFamily: {
        Bagoss: ["Bagoss", "sans-serif"],
        Sohne: ["Sohne", "sans-serif"],
        "Sohne-normal": ["Sohne-normal", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
