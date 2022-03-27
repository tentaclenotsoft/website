module.exports = {
  content: ['./src/{pages,components}/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        lang: {
          javascript: '#f1e05a',
          typescript: '#2b7489'
        }
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
