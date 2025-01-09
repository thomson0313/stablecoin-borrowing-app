/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backdropBlur: {
        30: '30px', // Define your custom blur level
      },
      boxShadow: {
        'inner-2px-red': 'inset 0 0 2px 2px red',
      },
    },
  },
  plugins: [],
};
