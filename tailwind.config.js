/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pop300: ["poppins-300"],
        pop400: ["poppins-400"],
        pop500: ["poppins-500"],
        pop700: ["poppins-700"],
        rob300: ["roboto-300"],
        rob400: ["roboto-400"],
        rob800: ["roboto-800"],
      },
      colors: {
        primary: "var(--color-black)",
        primary45: "var(--color-black-45)",
        secondary: "var(--color-whitesmoke)",
        red: "var(--color-red)",
        gret: "var(--color-gret)",
        white: "var(--color-white)",
        white200: "var(--color-white-200)",
        gray: "var(--color-borderGray)",
      },
      screens:{
        lg: "1124px"
      }
    },
  },
  plugins: [],
};
