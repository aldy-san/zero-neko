module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        'mdWhite': '0 4px 6px -1px rgba(255, 255, 255, 0.1), 0 2px 4px -1px rgba(255, 255, 255, 0.06)',
      },
      colors: {
        primary: "#f86d70"
      }
    },
  },
  variants: {
    extend: {
      boxShadow: ['active','responsive', 'hover', 'dark'],
    },
  },
  plugins: [],
}
