/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "mint-500": "#98FB98", // Vert menthe pâle
        "mint-700": "#66CDAA", // Vert menthe foncé
        "cream-100": "#FFFDD0", // Crème clair
      },
    },
  },
  plugins: [],
};
