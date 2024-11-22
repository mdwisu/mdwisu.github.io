import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        "neon-blue": "0 0 25px 8px rgba(0, 204, 255, 0.8)",
        "neon-pink": "0 0 15px 4px rgba(255, 105, 180, 0.6)",
      },
    },
  },
  plugins: [],
} satisfies Config;
