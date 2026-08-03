import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FBF6EA",
        parchment: "#F3EBD8",
        maroon: {
          DEFAULT: "#6B1420",
          dark: "#450B14",
          light: "#8C1F2E"
        },
        gold: {
          DEFAULT: "#C99A3B",
          light: "#E4C273",
          dark: "#A17B26"
        },
        saffron: "#DD611C",
        dusk: {
          DEFAULT: "#1B1330",
          light: "#2B2049"
        },
        ink: "#2A1810"
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        displayHi: ["var(--font-display-hi)", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        bodyHi: ["var(--font-body-hi)", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        "diya-glow":
          "radial-gradient(circle at 50% 40%, rgba(233,180,90,0.35) 0%, rgba(233,180,90,0) 65%)",
        "temple-gradient":
          "linear-gradient(180deg, #1B1330 0%, #2B2049 55%, #450B14 100%)"
      },
      boxShadow: {
        sacred: "0 20px 60px -20px rgba(69, 11, 20, 0.35)",
        glow: "0 0 40px rgba(201, 154, 59, 0.35)"
      },
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: "1", transform: "scaleY(1)" },
          "50%": { opacity: "0.85", transform: "scaleY(0.96)" }
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        }
      },
      animation: {
        flicker: "flicker 2.4s ease-in-out infinite",
        rise: "rise 0.8s ease-out forwards",
        shimmer: "shimmer 3s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
