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
        'Neue-Montreal-Bold': ['Neue Montreal Bold'],
        'Manrope-Light': ['Manrope Light', 'sans-serif'],
        'Manrope-Regular': ['Manrope Regular', 'sans-serif'],
        'Manrope-Medium': ['Manrope Medium', 'sans-serif'],
        'Manrope-Bold': ['Manrope Bold', 'sans-serif']
      }
    },
    
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "2rem",
        xl: "3rem",
        "2xl": "4rem",
      },
      screens: {
        sm: "800px",
        md: "1000px",
        lg: "1300px",
        xl: "1600px",
        "2xl": "2000px",
      },
    },
  },
  plugins: [],
}