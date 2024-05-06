/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    colors: {
      icon: "#6E6E6D",
      primary: "#0D0D0C",
      secondary: "#6072A0",
      background: "#1A0905",
      black: "#000000",
    },
  },
  plugins: [],
};
