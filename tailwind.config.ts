// tailwind.config.ts
import type { Config } from "tailwindcss";

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // adjust paths as per your project
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};


const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7c3aed", // example purple
        secondary: "#a78bfa",
        accent: "#fbbf24", // amber
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
