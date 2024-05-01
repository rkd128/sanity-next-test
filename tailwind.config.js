/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 10s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'nav': '0 -2px 4px 0px rgba(0,0,0,0.1)',
      },
      borderRadius: {
        '2.5xl': '20px',
      },
      backgroundColor: {
        'white-rock': 'rgba(236, 231, 222, 1)',
        'ultramarine': 'rgba(49, 107, 246, 1)',
        'spring-green': 'rgba(66, 221, 114, 1)',
        'envoy-dark-green': 'rgba(27, 43, 36, 1)',
        'ux-blue': 'rgba(49, 107, 246, 1)',
      },
      fontSize: {
        'xxs': '0.5rem',
        '2.5xl': '1.656rem', // 26.5px
        '3.5xl': '2rem', // 32px
        '4.5xl': '2.625rem', // 42px
      },
      lineHeight: {
        '4.5': '1.125rem', //18px
        '9.5': '2.313rem', // 37px
        '11': '3.125rem', // 50px
      },
      colors: {
        'charcoal': 'rgba(35, 36, 31, 1)',
        'ux-offwhite': 'rgba(255, 254, 247, 1)',

      },
      fontFamily: {
        'telegraf': ['PP Telegraf'],
        'gt-pressura': ['GT Pressura Mono'],
        'roboto': ['Roboto'],
        'larken': ['larken'],
      },
      height: {
        'showcase-thumb': '12.375rem', // 198px
        'mobile-video': '73vh', // 583px
      },
      gap: {
        '1.5': '5px',
        '15': '3.75rem',
        '2.9': '1.063rem' // 17px
      },
      padding: {
        '20.5': '87px' // 87px
      },
      maxHeight: {
        '620': '620px'
      },
      maxWidth: {
        '1100': '1100px'
      }
    },
  },
  plugins: [],
}