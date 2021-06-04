module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#f86d70"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
