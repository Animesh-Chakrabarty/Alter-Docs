/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        sourceSans: ["Source Sans 3", "sans-serif"],
      },
      screens: {
        mdlg: "950px",
      },
    },
  },
  plugins: [],
};
