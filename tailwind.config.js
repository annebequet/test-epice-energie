/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
        sans: ["Roboto"],
    },
    extend: {
        fontFamily: {
            "roboto": ["Roboto", "sans-serif"], 
            "dancing-script": ["Dancing Script", "cursive"],
        },
        colors: {
            "custom-light-blue": "#DCF2F1",
            "custom-blue": "#365486",
            "custom-dark-blue": "#0F1035",
        },
    },
},
  plugins: [],
};

