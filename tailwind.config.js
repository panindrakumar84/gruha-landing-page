/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      fontFamily:{
        poppins : ["Poppins", "sans-serif"],
      },
      colors:{
        'falu-red':"#7b2d26",
        'dun':"#d7c9aa",
        'flash-white':"#f0f3f5",
        'paragraph':"#71717a",
        'heading':"#18181b"
      },
      screens: {
        "wide": "1440px",
        "xs":"425px"
      }
    },
  },
  plugins: [],
}

