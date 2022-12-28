/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: '600px',
      md: '728px',
      lg: '984px',
      xl: '1240px',
      '2xl': '1280px'
    }
  },
  plugins: [],
}