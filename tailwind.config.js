/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        25: "20vw",
        30: "45vw",
        50: "50vw",
        35: "55vw",
        75: "75vw",
      },
      height: {
        400: "25vh",
        450: "35vh",
        550: "49vh",
        560: "60vh",
        570: "61vh",
        600: "66vh",
        650: "70vh",
        700: "75vh",
        800: "80vh",
      },
      colors: {
        noir: "rgb(56,56,55)",
        noir2: "rgb(35,34,32)",
        rouge: "rgb(255,95,87)",
        jaune: "rgb(245,188,46)",
        vert: "rgb(43,200,64)",
        lettre: "rgb(156,155,154)",
      },
      padding: {
        97: "45rem",
        98: "61rem",
      },
    },
  },
  plugins: [],
};
