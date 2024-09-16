/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
         "Fuscous": "#545552",
         "Atlantis": "#A2BB2A",
         "Blue-Dianne": "#224D5C",
         "Pumice": "#D0D3D0",
         "White": "#fff",
      },
      fontFamily:{
        "Lato": "Lato",
        "Poppins": "Poppins",
      }
    },
  },
  plugins: [],
}