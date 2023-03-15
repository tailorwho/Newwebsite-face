module.exports = {
  mode: 'jit',
  purge: [
    './index.html',
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false,
  theme: { 
    extend: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      LilitaOne : [ "Lilita One", "cursive"],
      Bubblegum : ["Bubblegum Sans","cursive"]
    },
  },
},
  variants: {},
  plugins: [],
}