const colors = require('tailwindcss/colors')

export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
        Encycolorpedia : '#46A3FF',
        Lime_Green: '#00DB00'
      },
    },
  plugins: [],
  }
}
