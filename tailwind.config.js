/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1400px" },

      xl: { max: "1280px" },

      lg: { max: "1024px" },

      md: { max: "970px" },

      sm: { max: "680px" },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        homecontent: ["Yeseva One", "cursive"],
      },
      colors: {
        darkvl: "rgb(1, 175, 209)",
        darkbl: "rgb(1, 95, 116)",
        highlight: "rgb(254, 230, 11)",
      },
      keyframes: {
        scale: {
          "0%": { transform: "scale(0%)" },
          "100%": { transform: "scale(100%)" },
        },
      },
      animation: {
        scale: "scale 0.5s ease-in-out ",
      },
    },
  },
  plugins: [],
};
