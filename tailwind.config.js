/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary': '#f0f0f0',
        'secondary': '#162F55',
        'lightBlue': '#128DF0',
        'lightGreen': '#00c3ba'
      },
      backgroundColor: {
        'primary': '#f0f0f0',
        'secondary': '#162F55',
        'lightBlue': '#128DF0',
        'lightGreen': '#00c3ba'
      },
      textColor: {
        'primary': '#f0f0f0',
        'secondary': '#162F55',
        'lightBlue': '#128DF0',
        'lightGreen': '#00c3ba'
      },
      fontFamily: {
        'cabin': ['Cabin', 'sans'],
      },
    },
  },
  plugins: [],
}
