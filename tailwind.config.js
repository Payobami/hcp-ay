/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'grey-1': '#979797',
        'blue1': '#273658',
        'blue2': '#182237',
        'blue3': '#9BACD3',
        'dash-blue': '#F5FFF9',
        'mild-black': '#484747',
        'brand-black': '#222222',
        'black-2': '#4F4F4F',
        'brand-green': '#20A354'
      },
      fontFamily: {
       poppins: [ "Poppins", "sans-serif" ]
      },
      spacing: {
        7.5: '30px'
      },
      borderRadius: {
        5: '5px',
        10: '10px'
      },
      zIndex: {
        '60': '60'
      },
      fontSize: {
        13: '13px',
        15: '15px'
      }
    },
  },
  plugins: [],
}

