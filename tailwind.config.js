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
      fontFamily: {
        body: ["var(--font-inter)"],
        title: ["var(--font-montserrat)"],
      },
      colors: {
        'primary-purple': "#8642e3",
        'secondary-pink': "#cf98fe",
      },
    },
  },
  plugins: [],
};
