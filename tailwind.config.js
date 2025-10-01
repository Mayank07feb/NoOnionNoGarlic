/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.ejs",
    "./views/**/*.html",
    "./partials/**/*.ejs",
    "./*.ejs",
    "./public/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F97316', // main brand color (orange 500)
          hover: '#EA580C',   // darker shade for hover (orange 600)
        },
        secondary: {
          DEFAULT: '#FACC15', // secondary accent color (yellow 400)
          hover: '#EAB308',   // darker shade for hover (yellow 500)
        },
        danger: {
          DEFAULT: '#DC2626', // for buttons like Register/Login if needed
          hover: '#B91C1C',
        }
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        base: "15px",   // Paragraph
        h1: "48px",     // Heading 1
        h2: "36px",
        h3: "28px",
        h4: "22px",
        h5: "18px",
        h6: "16px",
      },
    },
  },
  plugins: [],
}
