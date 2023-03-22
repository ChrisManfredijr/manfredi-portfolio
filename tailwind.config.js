/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "soft-black":"#151515",
        "mint-green":"#4EE1AO",
        "dark-grey": "#242424",
        "light-grey":"#D9D9D9",
        "soft-white": "#FFFFFF",
      }
    },
  },
  plugins: [],
}
