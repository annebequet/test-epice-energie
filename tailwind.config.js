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
            "custom-blue-light": "#DCF2F1",
            "custom-blue": "#365486",
            "custom-blue-dark": "0F1035",
        },
    },
},
  plugins: [],
}

