/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#0ea5e9", // Sky 500
        secondary: "#d946ef", // Fuchsia 500
        tertiary: "#8b5cf6", // Violet 500
        dark: "#0f172a", // Slate 900
        light: "#f8fafc", // Slate 50
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        cormorant: ['Cormorant Garamond', 'serif'], // For Headings if needed
        outfit: ['Outfit', 'sans-serif'],
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "pulse-fast": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          }
        }
      }
    },
  },
  plugins: [],
}
