/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
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
