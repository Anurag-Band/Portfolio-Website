/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mainHeading: ["Bebas Neue", "cursive"],
        handwriting: ["Solitreo", "cursive"],
      },
      colors: {
        "primary-bg-color": "#141c31",
        "primary-text-color": "#e9e8e8",
        "card-bg-color": "#111f42",
        "card-border-color": "#263b72",
      },
      display: ["group-hover"],
    },
  },
  plugins: [],
};
