/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '400px',
      md: '760px',
      lg: '976px',
      xl: '1440px'
    },
    
    extend: {
      backgroundImage: {
        'hero':"url('../img/background.jpg')",
      }
    },
  },
  plugins: [require('daisyui')],

  daisyui: {
    themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
  },
}

