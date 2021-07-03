const defaultTheme = require('tailwindcss/defaultTheme')

const sizing = () => {
  const obj = {}
  for (i of new Array(9).keys()) {
    obj[`${i + 1}/10`] = `${(i + 1) * 10}%`
  }
  return obj
}

const fontFamily = {
  handwritten: [
    'Pattaya',
    ...defaultTheme.fontFamily.sans,
  ],
  title: [
    'Titillium Web',
    ...defaultTheme.fontFamily.sans,
  ],
  sans: [
    'Lato',
    ...defaultTheme.fontFamily.sans,
  ],
  mono: [
    'Inconsolata',
    ...defaultTheme.fontFamily.mono,
  ],
}

const colors = {
  'orange': {
    d: '#fb923c',
    l: '#ea580c',
  },
  'x-blue': {
    50: '#F2F8FE',
    100: '#E6F1FC',
    200: '#C0DCF8',
    300: '#9AC7F4',
    400: '#4E9DEB',
    500: '#0273E3',
    600: '#0268CC',
    700: '#014588',
    800: '#013466',
    900: '#012344',
  },
  'x-gray': {
    50: '#F7F7F7',
    100: '#EFEFEF',
    200: '#D7D7D7',
    300: '#BFBFBF',
    400: '#908F8F',
    500: '#605F5F',
    600: '#565656',
    700: '#3A3939',
    800: '#2B2B2B',
    900: '#1D1D1D',
  },
}

module.exports = {
  mode: 'jit',
  purge: [
    './{pages,lib,components,www,styles}/**/*.{html,js,ts,jsx,tsx,css,pcss}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      'animation': {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
      },
      'keyframes': {
        'gradient-y': {
          '0%, 100%': {
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center'
          }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
      screens: {
        'xxl': {'min': '1480px'}
      },
      fontFamily,
      scale: {
        'invert': '-1',
      },
      spacing: {
        ...sizing(),
      },
      borderRadius: {
        'xl': '1rem',
        'full': '10010px',
      },

      inset: {
        '-15': '-3.75rem',
        '2': '0.5rem',
        '1/2': '50%',
        '1/4': '20%',
        '2/5': '40%',
        ...sizing(),
        'full': '100%',
      },
      zIndex: {
        '-10': '-10',
      },
      colors,
    },
  },
  plugins: [
    require('tailwindcss-safe-area'),
    require('@tailwindcss/typography'),
  ],
}
