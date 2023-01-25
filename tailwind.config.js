/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        body: "Roboto, sans-serif",
        heading: '"Roboto Slab", sans-serif'
      }
    },
    colors: {
      "black": "#1E2124",
      "darkgrey": "#282B30",
      "grey": "#424549",
     "darkblue": "#465CAB",
     "blue": "#7289DA",
     "red": "#D81E5B",
     "white": "#C9C9C9"
    }
      colors: {
        'Glaucous': '#7289DA',
        'Liberty': '#465CAB',
        'Onyx': '#424549',
        'Gunmetal': '#282B30',
        'EerieBlack': '#1E2124',
        'Ruby': '#D81E5B',
      }
    },

  },
  plugins: [],
}