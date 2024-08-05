/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        background: '#101929',
        'background-accent': '#1B2533',
        primary: '#EFF1F3',
        accent: '#CE4242',
        dimmed: '#797F88'
      },
      fontFamily: {
        forma: ['FormaDJRMicro', 'sans-serif'],
        vietnam: ['Be vietnam pro', 'sans-serif'],
        grotesk: ['NeueHassDisplay', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif']
      },
      backgroundImage: {
        'france-flag': "url('/images/Flag_of_France.png')",
        'england-flag': "url('/images/Flag_of_England.png')",
      },
    },
  },
  plugins: [],
}

