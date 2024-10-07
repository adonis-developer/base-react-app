/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-1": "0px 0px 8px 0px #00000040",
      },
    },
  },
  plugins: [],
}
