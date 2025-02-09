/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Add this line
  theme: {
    extend: {
      fontFamily:{
        inter: ["Inter", "sans-serif"]
      },
      colors:{
        main_text:"#334155",
        main_heading: "#0F172A"
      }
    },
  },
  plugins: [],
}