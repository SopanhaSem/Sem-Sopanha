const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],

  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1025px",
        xl: "1280px",
        "2xl": "1536px",
        "sm-max": { max: "640px" },
        "md-max": { max: "768px" },
        "lg-max": { max: "1024px" },
        "xl-max": { max: "1280px" },
        "2xl-max": { max: "1536px" },
        "3xl": "2550px",
        "1/3-sm": "250px",
        "1/2-sm": "350px",
      },
      colors: {
        primary: "#000000",
        fontprimary: "#A6BBCC",
      },
      fontFamily: {
        sans: ["Poppins"],
      },
      width: {
        500: "500px",
      },
      fontSize: {
        h2: "36px",
        "20px": "20px",
      },
      boxShadow: {
        "inner-custom": "inset 0 4px 6px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
