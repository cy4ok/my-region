module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (image) => ({
        "main-logo":
          "url('images/icons/MainLogo.png')",
      }),
      backgroundColor: (theme) => ({
        primary: "#ffffff",
        secondary: "#E7EEE7",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
