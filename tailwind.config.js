const colors = require('tailwindcss/colors')

export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
        light_blue: '#38bdf8'    
      },
    },
  plugins: [],
  }
}
