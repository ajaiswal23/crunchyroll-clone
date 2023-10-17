/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "crunchy-color": "#e77b34",
        "crunchy-nav-color": "#23252b",
      },
      backgroundImage: {
        "hero-pattern": "url('../public/assets/images/hero.webp')",
      },
      screens: {
        wide: "1440px",
        // this is for 2k+ screens
        twokplus: "2048px",
      },
    },
  },

  plugins: [],
};

