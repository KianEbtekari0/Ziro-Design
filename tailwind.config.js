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
        'Neue-Montreal-Bold': ['Neue Montreal Bold'],
      },
    },

    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
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
        xs: '1300px',
        sm: '1500px',
        md: '1700px',
        lg: '1800px',
        xl: '1900px',
      },
    },
  },
  plugins: [],
};
