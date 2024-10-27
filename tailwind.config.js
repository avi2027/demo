/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        cRed: "#EF476F",
        cYellow: "#FFD166",
        cLightGreen: "#06D6A0",
        cLightBlue: "#118AB2",
        cDarkBlue: "#073B4C"
      },
      fontFamily: {
        headerFont: ["Capriola"],
        bodyFont: ["Mulish"],
      }
    },
  },
  plugins: [],
}