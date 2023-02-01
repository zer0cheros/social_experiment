/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Glaucous': '#7289DA',
        'Liberty': '#465CAB',
        'Onyx': '#424549',
        'Gunmetal': '#282B30',
        'EerieBlack': '#1E2124',
        'Ruby': '#D81E5B',
      },
      height: {
        '100': '100vh',
        '50': '50rem',
        '40': '40rem',
        '30': '30rem',
        '20':   '20rem',
        '15':   '15rem', 
        '12':   '12rem',
        '7':   '7rem', 
        '5':   '5rem', 
      },
      width: {
        '40':   '40rem',
        '30':   '30rem',
        '23':   '23rem',
        '20':   '20rem',
        '15':   '15rem',
        '12':   '12rem',
        '5':   '5rem', 
      },
    },
  },
  plugins: [],
}