/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        clean_deco: ['"font-clean"', 'sans-serif'],
        raleway: ['"Raleway"', 'sans-serif']
      },
      colors: {
        background: '#0D0D0D',
        redPrimary: '#F22727',
        redSecondary: '#D91E2E',
        dark: '#202020'
      }
    },
  },
  plugins: [],
}

