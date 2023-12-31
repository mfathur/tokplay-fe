/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#28282F",
        fueltown: "#576673",
        infinitenight: "#020f3A",
        darkmineral: "#525867",
        nobleblack: "#1E1E24",
      },
    },
  },
  plugins: [require("daisyui")],
};
