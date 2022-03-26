module.exports = {
  content: ['./src/{pages,components}/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
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
