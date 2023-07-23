/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "rgba(255, 255, 255, 1)",
      dimWhite: "rgba(255, 255, 255, 0.1)",
      blank: "rgba(255, 255, 255, 0)",
      gray: "rgba(228, 231, 241, 1)",
      darkGray: "#6b7280",
      blue: "#1d4ed8",
      dimBlue: "rgba(52, 51, 250, 0.05)",
      darkBlue: "rgba(1, 1, 25, 1)",
      lightWhite: "rgba(250, 250, 255, 1)",
      frostedGlass: 'rgba(255, 255, 255, 0.9)'
    },
    fontFamily: {
       
    },
    extend: {},
  },
  plugins: [],
}

