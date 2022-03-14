module.exports = {
  purge: {
    enabled: process.env.HUGO_ENVIRONMENT === 'production',
    content: [
      './layouts/**/*.html'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'blue-green': '#1B5C4F',
        'big-dip-oruby': '#9F2241',
        camel: '#BC955C',
        'eerie-black': '#141414',
        'cultured': '#fefefe',
        nickel: '#6F7271',
        'tyrian-purple': '#5F1234'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        'source-sans-pro': ['"Source Sans Pro"', 'sans-serif'],
        gotham: ['Gotham', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}
