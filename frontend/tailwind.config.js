module.exports = {
  content: [
    // ... (other paths),
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],

  purge: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],

  darkMode: false, // or 'media' or 'class'

  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
      },
    },
  },

  variants: {
    extend: {},
  },

  plugins: [require("flowbite/plugin")],
};
