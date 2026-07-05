import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: "#005F61",
          light: "#007a7d",
          dark: "#003f40",
          50: "#e6f4f4",
          100: "#b3dfe0",
          200: "#80cacc",
          300: "#4db5b8",
          400: "#26a0a4",
          500: "#005F61",
          600: "#004d4f",
          700: "#003a3c",
          800: "#002829",
          900: "#001516",
        },
        "light-blue": {
          DEFAULT: "#7EB2DD",
          light: "#a4c9e8",
          dark: "#5a96c8",
          50: "#f0f7fd",
          100: "#d4e9f7",
          200: "#b9dbf1",
          300: "#9dccea",
          400: "#7EB2DD",
          500: "#5a96c8",
          600: "#3f7aad",
          700: "#2d5e8c",
          800: "#1c426b",
          900: "#0d2649",
        },
        orange: {
          DEFAULT: "#BA5A31",
          light: "#d4703f",
          dark: "#9a4520",
          50: "#fdf3ee",
          100: "#f8d9c8",
          200: "#f3bfa2",
          300: "#eea57c",
          400: "#d4703f",
          500: "#BA5A31",
          600: "#9a4520",
          700: "#7a3012",
          800: "#5a1c07",
          900: "#3a0900",
        },
        charcoal: {
          DEFAULT: "#342E37",
          light: "#4a4250",
          dark: "#201c24",
          50: "#f0eef1",
          100: "#d0ccd4",
          200: "#b0aab6",
          300: "#908899",
          400: "#6e657b",
          500: "#4a4250",
          600: "#342E37",
          700: "#201c24",
          800: "#100e14",
          900: "#040307",
        },
        cream: "#F7F3EB",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-jakarta)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
