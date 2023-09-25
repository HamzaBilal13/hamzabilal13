module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        PrimaryYellow: '#FAFF02',
        BgDark: '#1C1C1E',
        TextHeading: '#040404',
        NormalText: '#616161',
        HeroBg: '#F5F5F5',
        NavBg: '#1C1C1E',
        image_gradient: 'linear-gradient(147deg, #FE0643 0%, #8031AA 51.56%, #2F27B6 100%)',

      },
      screens: {
        
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      extend: {
        screens: {
          'xs': { 'max': '320px', 'min': '767px' },
        },
      },

    },

  },
  plugins: [],
}