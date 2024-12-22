/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      
      backgroundImage: {
        main: "url('/public/footer-pattern.jpg')",
      },

      colors: {
        primary: "#4cdaed",
        secondary: "#f5de49",
      },


      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
};
