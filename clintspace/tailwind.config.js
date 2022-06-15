
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
      },
    fontSize: {
      hero: ['44px', {
        fontHeight: 600,
        lineHeight: " 121.5%",
        fontFamily: 'Advent Pro'
      }],
      // for paragrph common
      subPara: ['16px', {
        fontFamily: 'Cantarell',
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "140%",
      }],
      colors: {
        primary_white: '#F6F8FC',
        subPara: "#222222"
      },
    }
  }},
  plugins: [],
}
