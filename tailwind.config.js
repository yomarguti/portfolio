module.exports = {
  purge: ['components/**/*.js', 'pages/**/*.js', 'next.config.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        fondo: '#f6f6f2',
        neutral: '#E4E4E7',
        primary: '#388087',
      },
      spacing: {
        'content-md': '45rem',
        'content-lg': '55rem',
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
