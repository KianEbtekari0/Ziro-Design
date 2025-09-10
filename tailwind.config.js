/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#E31114',
        secondery: '#BEBEBE',
      },

      letterSpacing: {
        '3pct': '-0.03em',
      },

      fontFamily: {
        'Neue-Montreal-Light': ['Neue Montreal Light'],
        'Neue-Montreal-Regular': ['Neue Montreal Regular'],
        'Neue-Montreal-Medium': ['Neue Montreal Medium'],
        'Neue-Montreal-Bold': ['Neue Montreal Bold']
      },
    },

    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '1rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '4rem',
      },
      screens: {
        '3xs': '1000px',
        '2xs': '1100px',
        xs: '1200px',
        sm: '1400px',
        md: '1600px',
        lg: '1800px',
        xl: '1900px',
      },
    },
  },
  plugins: [],
};
