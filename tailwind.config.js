/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "theme-purple": "#3700b3",
        "theme-purple-lighter": "#6200ed",
        "theme-purple-lightest": "#b985f9",
        "theme-yellow": "#f9d044",
        "theme-cyan": "#0dd7c1"
      },

    },
  },
  plugins: [],
}

