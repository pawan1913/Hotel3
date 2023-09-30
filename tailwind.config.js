/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EDEDE9',
        secondary: '#D6CCC2',
        third:"#F5EBE0",
        fourth:"#E3D5CA",
        fifth:"#D5BDAF",
        sixth:"#808080",
        seven:"#1d2d44",
        eight:"#3e5c76",
        nine:"#3e5c76",
        ten:"#D2B48C"
        // ...
      },
      fontFamily:{
        gil : "'Gilroy Light'"
      }
    },
  },
  plugins: [
   
  ],
}

