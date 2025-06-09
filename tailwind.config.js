/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#E31114',
        'secondery': '#BEBEBE'
      },

      fontFamily: {
        'Greycliff-CF': ['Greycliff CF', 'sans, serif'],
        'Greycliff-CF-extrabold': ['Greycliff CF Extra', 'sans, serif']
      }

      
    },
  },
  plugins: [],
}