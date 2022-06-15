
// const background = require('./src/assets/footer_image.jpg')

module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'footer_background': `url('/src/assets/footer_image.jpg')`,
      }
    },
  },
  plugins: [],
}
