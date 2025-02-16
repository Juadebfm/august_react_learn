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
        main_heading: "#0F172A",
        main_skyblue:"#E0F2FE",
        main_blue:"#3B82F6"
      }
    },
  },
  plugins: [],
}