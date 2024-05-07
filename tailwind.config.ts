/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite-react/**/*.js', './pages/**/*.{ts,tsx}', './public/**/*.html'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        colorfull: {
            blue : {
              DEFAULT: "#3da9fc",
              dark:"#094067"
            },
            red:{
              DEFAULT:"#ef4565"
            },
            sky:{
              DEFAULT:"#d8eefe"
            },
            purple: "#DF63F2",
            yellow: "#F7BD02",
            green: "#17EE97",
            
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
