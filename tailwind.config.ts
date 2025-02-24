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
        primary: '#0284C7',
        paragraph: '#6B7280',
        big_title: '#334155',
      },
      backgroundColor: {
        primary: '#0284C7',
      }
    },
  },
  plugins: [],
} satisfies Config;
