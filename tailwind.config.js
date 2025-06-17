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
        'Neue-Montreal-Light': ['Neue Montreal Light'],
        'Neue-Montreal-Regular': ['Neue Montreal Regular'],
        'Neue-Montreal-Medium': ['Neue Montreal Medium'],
        'Neue-Montreal-Bold': ['Neue Montreal Bold']
      }
    },
  },
  plugins: [],
}