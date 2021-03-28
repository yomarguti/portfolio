module.exports = {
  purge: ['components/**/*.js', 'pages/**/*.js', 'next.config.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        fondo: '#f6f6f2',
        primary: '#388087',
      },
      fontFamily: {
        serif: ['Roboto', 'Helvetica', 'Neue', 'Arial', 'Helvetica', 'serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
