/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black': '#201F1B',
        'gold': '#FFD700',
      },
      backgroundImage: {
        'hero': "url('./src/assets/bg/hero-bg.png')",
      },
    },
    fontFamily: {
      'sans': ['Montserrat', 'sans-serif'],
      'serif': ['Karla', 'serif'],

    },
  },
  plugins: [],
}
