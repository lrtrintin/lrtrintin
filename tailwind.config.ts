import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#040C14",
          900: "#080E1A",
          800: "#0D1825",
          700: "#122030",
          600: "#1A2D40",
          500: "#243D54",
          400: "#2E4D68",
        },
        olive: {
          300: "#9BAD8A",
          400: "#8A9B7A",
          500: "#7A8C6A",
          600: "#6B7B5A",
          700: "#5A6A4A",
          800: "#4A5A3A",
        },
        gold: {
          300: "#F5C060",
          400: "#F0A832",
          500: "#E8941A",
          600: "#D4820E",
          700: "#B86E08",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(107,123,90,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(107,123,90,0.04) 1px, transparent 1px)",
        "grid-pattern-dense":
          "linear-gradient(rgba(107,123,90,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(107,123,90,0.06) 1px, transparent 1px)",
        "hero-radial":
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(232,148,26,0.08) 0%, transparent 70%)",
        "gold-gradient": "linear-gradient(135deg, #E8941A 0%, #F5C060 50%, #E8941A 100%)",
        "navy-gradient": "linear-gradient(180deg, #080E1A 0%, #040C14 100%)",
      },
      backgroundSize: {
        "grid-lg": "64px 64px",
        "grid-sm": "32px 32px",
      },
      boxShadow: {
        "glow-gold": "0 0 40px rgba(232,148,26,0.2), 0 0 80px rgba(232,148,26,0.08)",
        "glow-gold-sm": "0 0 20px rgba(232,148,26,0.15)",
        "glow-olive": "0 0 40px rgba(107,123,90,0.15)",
        "card-hover": "0 24px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(232,148,26,0.12)",
        "card": "0 4px 24px rgba(0,0,0,0.3), 0 0 0 1px rgba(107,123,90,0.08)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "glow-pulse": "glowPulse 4s ease-in-out infinite",
        "float": "float 8s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "border-flow": "borderFlow 4s linear infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.7" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        borderFlow: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};

export default config;
