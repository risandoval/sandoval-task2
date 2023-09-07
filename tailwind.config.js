/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      bgColor: '#FBF2EA',
      primary: '#DC975B',
      secondary: '#F4DBC4',
      dark: '#221407'
    }
  },
  plugins: [],
}