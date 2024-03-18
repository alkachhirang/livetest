/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Bgabout': "url('./assets/images/png/about-bg-img.png')",
      },
      backgroundSize: {
        'bgsize': "100% 100%"
      },
    },
  },
  plugins: [],
}

