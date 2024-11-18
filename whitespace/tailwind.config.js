/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#043873",
          light: "#4F9CF9",
        },
        secondary: {
          yellow: "#FFE492",
          blue: "#A7CEFC",
          white: "#FFFFFF",
          dark: "#212529",
        },
      },
    },
  },
  plugins: [],
};
