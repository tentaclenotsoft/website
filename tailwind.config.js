module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      dark: {
        soft: '#252525',
        hard: '#151515'
      },
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
