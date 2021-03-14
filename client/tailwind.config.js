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
      }),
      colors: {
        textBlack: "#1F1C45"
      },
      fontSize: {
        sm: ['12px', '14px'],
        logoSize: ['25px', '30px']
      },
      fontFamily: {
        sans: ['arkhip'],
        jost: ['jost']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
