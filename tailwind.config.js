/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        text: "text 5s ease infinite",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
      colors: {
        "primary-purple": "#8642e3",
        "secondary-pink": "#cf98fe",
      },
      fontFamily: {
        raleway: ["var(--font-raleway)"],
        open_sans: ["var(--font-open-sans)"],
        source: ["var(--font-source)"],
      },
    },
  },
  plugins: [],
};
