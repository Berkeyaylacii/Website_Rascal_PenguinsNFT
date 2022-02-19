module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./src/index.html",
  ],
  theme: {
    extend: {
      colors:{
        "bookmark-purple": "#5267DF",
        "bookmark-red": "#FA5959",
        "bookmark-blue": "#242A45",
        "bookmark-grey": "#9194A2",
        "bookmark-white": "#f7f7f7",
        gridColor: '#8CD6EB',
        homeColor: '#546CA1',
      },
    },
    fontFamily: {
      Antonio: "'Antonio', sans-serif",
      Yanone:  "'Yanone Kaffeesatz', sans-serif",
    },
    container: {
        center: true,
        padding: "1rem",
        screens: {
          lg: "1124px",
          xl: "1124px",
          "2xl": "1124px",
        }
    },
    screens: {
      'sm': '880px',

      'md': '900px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
    },
  },
  plugins: [],
}