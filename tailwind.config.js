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
        raleway: ['"Raleway"', 'sans-serif'],
        Montserrat: ['"Montserrat"','system-ui'],
      },
      colors: {
        background: '#0D0D0D',
        redPrimary: '#F22727',
        redSecondary: '#D91E2E',
        dark: '#202020',
        darkHard: '#1D1616',
        backWhite: '#EEEEEE',
        header: '#1E1F25',
        body: '#1D1616',
        user: '#202020'
      }
    },
  },
  plugins: [],
}

