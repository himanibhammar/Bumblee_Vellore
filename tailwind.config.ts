import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "soft-yellow": "#FFD54F",
        cream: {
          50: "#FFFDE7",
          100: "#FFF9C4",
          200: "#FFF59D",
        },
        "sky-blue": {
          50: "#E3F2FD",
          100: "#BBDEFB",
          200: "#90CAF9",
        },
        "black-accent": "#333333",
      },
      fontFamily: {
        baloo: ["Baloo Bhai 2", "cursive"],
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      animation: {
        "bounce-slow": "bounce 2s infinite",
        "pulse-slow": "pulse 3s infinite",
        "spin-slow": "spin 8s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
