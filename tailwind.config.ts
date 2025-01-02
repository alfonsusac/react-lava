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
      backgroundImage: {
        grid: "url('/grid.svg')",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans"],
        mono: ["var(--font-mono)", "sans-serif"],
      },
      keyframes: {
        appear1: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" },
        },
        appear2: {
          "0%": { opacity: "0", transform: "scale(0.6)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        }
      },
      animation: {
        appear1: "appear1 500ms ease-out both",
        appear2: "appear2 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275) both",
      }
    },
  },
  plugins: [],
} satisfies Config;
