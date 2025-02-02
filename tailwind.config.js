/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main_gray: "#334155",
        main_dark_grey: "#0F172A",
        main_blue: "#3B82F6",
      },
      fontFamily: {
        inter: ["Inter", "serif"],
      },
    },
  },
  plugins: [],
};
