import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep OLED-black base + neon AI/tech accents
        base: {
          DEFAULT: "#08080C", // near-true black background
          soft: "#0E0E15",    // slightly lifted panel background
        },
        surface: {
          DEFAULT: "rgba(255,255,255,0.035)", // glass card fill
          border: "rgba(255,255,255,0.09)",   // glass card border
        },
        accent: {
          violet: "#8B5CF6",
          blue: "#3B82F6",
          cyan: "#22D3EE",
        },
        ink: {
          DEFAULT: "#F1F1F4", // primary text
          muted: "#96969F",   // secondary text
          faint: "#5C5C66",   // tertiary / labels
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        "glow-radial":
          "radial-gradient(circle at 50% 0%, rgba(139,92,246,0.28), transparent 60%)",
        "grid-lines":
          "linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "44px 44px",
      },
      boxShadow: {
        "glow-violet": "0 0 40px -10px rgba(139,92,246,0.45)",
        "glow-blue": "0 0 40px -10px rgba(59,130,246,0.4)",
        "glow-sm": "0 0 20px -6px rgba(139,92,246,0.35)",
      },
      animation: {
        "pulse-slow": "pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 7s ease-in-out infinite",
        "spin-slow": "spin 14s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
