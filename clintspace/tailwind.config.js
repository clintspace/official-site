module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
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
    },
    extend: {
      colors: {
        primary_white: '#F6F8FC',
        subPara: "#222222"
      },

    },
  },
  plugins: [],
}