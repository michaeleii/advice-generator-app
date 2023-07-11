/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Manrope", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "hsl(217, 19%, 24%)",
        secondary: "hsl(150, 100%, 66%)",
        background: "hsl(218, 23%, 16%)",
        content: "hsl(193, 38%, 86%)",
      },
    },
  },
  plugins: [],
};
