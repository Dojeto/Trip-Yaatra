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
      fontFamily: {
        homecontent: ["Yeseva One", "cursive"],
      },
      colors: {
        darkvl: "#3b3b6e",
      },
      keyframes: {
        scrollIcon: {
          "0%, 100%": { transform: "translateY(0rem)", opacity: 1 },
          "35%": { transform: "translateY(1rem)", opacity: 0 },
          "70%": { transform: "translateY(-1rem)", opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
