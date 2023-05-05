/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'blue1': '#273658',
        'blue2': '#182237',
        'blue3': '#9BACD3',
      },
      fontFamily: {
       poppins: [ "Poppins", "sans-serif" ]
      }
    },
  },
  plugins: [],
}

