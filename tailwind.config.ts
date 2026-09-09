import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        phoenix: {
          crimson: "#C8102E",
          red: "#A50E26",
          deep: "#7A0B1C",
          soft: "#FDE8EC",
          mist: "#FFF5F7",
          black: "#0A0A0A",
          ink: "#141414",
          charcoal: "#1F1F1F",
          gray: "#6B7280",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        feed: "0 8px 32px rgba(200, 16, 46, 0.12)",
        card: "0 4px 24px rgba(10, 10, 10, 0.08)",
        glow: "0 0 40px rgba(200, 16, 46, 0.35)",
      },
      maxWidth: {
        phone: "430px",
      },
    },
  },
  plugins: [],
};
export default config;
