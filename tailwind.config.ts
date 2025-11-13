// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // ⬅️ TRÈS IMPORTANT
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {},
  plugins: [],
};

export default config;
