/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'xs': '320px',
      'sm': '384px',
      'md': '448px',
      'lg': '512px',
      'xl': '576px',
      '2xl': '672x',
      '3xl': '768x',
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
