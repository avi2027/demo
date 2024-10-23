/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        cgreen : {
          100: "#D9ED92",
          200: "#B5E48C",
          300: "#99D98C",
          400: "#76C893",
          500: "#52B69A",
        },
        cblue : {
          100: "#34A0A4",
          200: "#168AAD",
          300: "#1A759F",
          400: "#1E6091",
          500: "#184E77",
        },
      }
    },
  },
  plugins: [],
}