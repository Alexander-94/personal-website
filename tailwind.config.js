/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        SecularOne: ["Secular One", "sans-serif"],
        Sono: ["Sono", "sans-serif"],
      },
    },
  },
  plugins: [],
}
