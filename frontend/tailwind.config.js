/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'taskbg': "url('/src/assets/taskbg.svg')",
      }
    },
  },
  plugins: [],
}

