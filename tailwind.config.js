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
      }
    },
  },
  plugins: [],
}