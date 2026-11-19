/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#080a0f",
        surface: {
          DEFAULT: "#0e131f",
          card: "#121827",
          hover: "#171f33",
          border: "rgba(255, 255, 255, 0.08)",
          "border-hover": "rgba(255, 255, 255, 0.18)",
        },
        accent: {
          DEFAULT: "#10b981",
          light: "#34d399",
          dark: "#059669",
          dim: "rgba(16, 185, 129, 0.12)",
        },
        text: {
          primary: "#f3f4f6",
          secondary: "#9ca3af",
          muted: "#6b7280",
        },
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

