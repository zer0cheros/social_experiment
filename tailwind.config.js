/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minWidth: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
        '100': '100px',
        '200': '200px',
        '300': '300px',
        '400': '400px',
        '500': '500px',
        '600': '600px',
        },
      colors: {
        'Glaucous': '#7289DA',
        'Liberty': '#465CAB',
        'Onyx': '#424549',
        'Gunmetal': '#282B30',
        'EerieBlack': '#1E2124',
        'Ruby': '#D81E5B',
        'RubyLight': '#db346b',
      }
    },
  },
  plugins: [],
}