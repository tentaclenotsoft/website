module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      dark: {
        soft: '#252525',
        hard: '#151515'
      }
    }),
    textColor: (theme) => ({
      ...theme('colors'),
      lang: {
        javascript: '#f1e05a'
      }
    })
  },
  variants: {
    extend: {}
  },
  plugins: []
}
