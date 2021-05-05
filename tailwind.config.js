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
      'xs':'1.125rem', // 18px
      'sm':'1.25rem', // 20px
      'base':'1.5rem', // 24px
      'lg': '1.625rem', // 26px
      'xl': '1.875rem', // 30px
      '2xl': '3.25rem', // 52px
      '3xl': '3.75rem', // 60px
      '44xl': '2.75rem',
      '22xl': '1.375rem',
      '26xl': '1.625rem',
      '28xl': '1.75rem',
      'xs': '1rem'
    },
    maxWidth: {
      'xxs': '13rem',
      'md': '28rem',
      '4xl': '56rem'
    },
    lineHeight: {
      'xl': '72px',
      'lg': '62px',
      '52': '3.25rem',
      '38': '2.375rem',
      '36': '2.25rem',
      '34': '2.125rem',
      '32': '2rem',
      'sm': '2rem',
      '30': '1.875rem',
      '24': '1.5rem',
      '22': '1.375rem',
      '18': '1.125rem'
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
