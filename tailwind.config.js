module.exports = {
  purge: ["./index.html", "./src/**/*.{js,ts,vue}"],
  darkMode: "class", // or 'media' or 'class'
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#fa0",
        secondary: "#1f0",
      },
      black: "#1D1D1B",
    },
    fontFamily: {
      sans: ["Montserrat", "system-ui", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
