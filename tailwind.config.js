module.exports = {
  important: true, // make sure nothing else overwrites our styles
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  prefix: 'dsw-', // don't change this we need this so we don't overwrite things
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      md: '1024px',
      lg: '1280px',
      xl: '1800px',
    },
    fontSize: {
      'sm':'1.25rem',
      'base':'1.5rem',
      'lg': '1.625rem',
      'xl': '1.875rem',
      '2xl': '3.25rem',
      '3xl': '3.75rem',
      '44xl': '2.75rem',
      '22xl': '1.375rem',
      '26xl': '1.625rem'
    },
    extend: {
      colors: {
        //add colors here depending on the brand
      }
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
}
