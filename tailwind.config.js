/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'blue1': '#273658',
        'blue2': '#182237',
        'blue3': '#9BACD3',
        'dash-blue': '#F5FFF9',
        'mild-black': '#484747',
        'brand-black': '#222222'
      },
      fontFamily: {
       poppins: [ "Poppins", "sans-serif" ]
      },
      zIndex: {
        '60': '60'
      },
      fontSize: {
        15: '15px'
      }
    },
  },
  plugins: [],
}

