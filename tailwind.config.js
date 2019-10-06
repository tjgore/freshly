module.exports = {
  theme: {
    extend: {}
  },
  variants: {},
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.bg-grad-purple': {
          background: 'linear-gradient(to bottom right, #3739f4, rgba(174,55,244,0.7))'
        },
        '.bg-grad-dark': {
          background: 'rgba(0,0,0,0.6)'
        }
      }
      addUtilities(newUtilities, ['responsive'])
    }
  ]
}
