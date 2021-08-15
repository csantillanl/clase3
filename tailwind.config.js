module.exports = {
    purge: [], //'./public/**/*.html', './src/**/*.vue'
    darkMode: false, // or 'media' or 'class'
    theme: {
      container: {
        center: true,
        padding: '2rem',
      },
      extend: {
        colors: {
          'brand-pink': '#CA7067',
          'primary': '#23006C',
          'secondary': '#ecc94b',
          'brand-brown':'#322A24',
          },
          fontFamily:{
            'sans': ['Poppins'],
            'narrow': ['Oswald'],
          },
          transformOrigin: {
            "0": "0%",
          },
          zIndex: {
            "-1": "-1",
          },
          boxShadow: {
            'primary': '0px 11px 30px rgba(255, 1, 66, 0.3)',
          },
      },
    },
    variants: {
      borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
      extend: {
        translate: ['active', 'group-hover'],
      },
    },
    plugins: [
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  