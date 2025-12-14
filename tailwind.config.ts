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
        brand: '#D1F000', // Woh Acid Green/Yellow color
        dark: '#050505',  // Background Black
        card: '#111111',  // Card Black
        border: '#222222' // Border Color
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-oswald)', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;