import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "0.75rem",
      screens: {
        xl: "1116px",
        "2xl": "1116px",
      },
    },
    extend: {
      boxShadow: {
        sm: "2px 2px 30px rgba(0, 0, 0, 0.05);",
        md: "4px 4px 4px rgba(0, 0, 0, 0.05);",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#4078FF",
          800: "#5C83FF",
          700: "#728FFF",
          600: "869AFF",
          500: "97A6FF",
          400: "A8B2FF",
          300: "B7BFFF",
          200: "E3E5FF",
          100: "F0F1FF",
        },
        neutral: {
          black: {
            DEFAULT: "#0E1422",
            800: "#202533",
            700: "#333845",
            600: "#474B57",
            500: "#5C5F6A",
            400: "#71747E",
            300: "#878A92",
            200: "#B6B7BC",
            100: "#E6E7E8",
          },
          white: {
            DEFAULT: "#FFFFFF",
            200: "#E9E9EB",
            100: "#F6F6F6",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
