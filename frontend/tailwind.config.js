/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Répertoire React
  theme: {
    extend: {
      colors: {
        mint: '#C3E3D5', // Vert menthe pâle
        cream: '#FFF9E5', // Crème
      },
    },
  },
  plugins: [],
}
