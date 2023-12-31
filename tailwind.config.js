/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
        primaryColor:"#FF444A",
        secondaryColor:"#00C49F",
        greenCustomColor:"#009444",
      },
      spacing: {
        leftRightPadding: '130px',
        topMargin: "80px",
      }

    },
  },
  plugins: [require("daisyui")],
}