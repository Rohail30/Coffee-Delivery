/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: "rgb(196, 127, 23)",
        darkBrown: "rgb(87, 79, 77)",
        lightBrown: "rgb(241, 233, 201)",
        lightYellow: "rgb(219, 172, 44)",
        purple: "rgb(128, 71, 248)",
        lightGray: "rgb(230, 229, 229)",
      },
    },
  },
  plugins: [],
};
