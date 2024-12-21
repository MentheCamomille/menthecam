/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Parcourt tes fichiers React
  ],
  theme: {
    extend: {
      colors: {
        mint: '#A8E6CF', // Vert menthe pâle
        cream: '#FFFDD0', // Crème
        dark: '#333333', // Couleur sombre pour le texte ou autres éléments
      },
    },
  },
  plugins: [],
};
