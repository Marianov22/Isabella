/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#001D29',      // Rich black
        'primary-dark': '#024C6F', // Indigo dye
        'secondary': '#85A17E',    // Cambridge blue
        'secondary-light': '#D0CDE0', // Lavender
        'accent': '#F5B56D',       // Fawn
        'background': '#FCF6EA',   // Floral white
        'text': '#001D29',         // Rich black para texto
        foreground: '#001D29',     // Rich black para texto principal
        border: '#D0CDE0',         // Lavender para bordes
        'dark': {
          'primary': '#F5B56D',
          'background': '#1A1A1A',
          'accent': '#85A17E',
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui'],
        display: ['var(--font-display)', 'system-ui'],
      },
      boxShadow: {
        'retro': '2px 2px 0 rgba(0, 29, 41, 0.1)',  // Sombra basada en primary
        'soft': '0 4px 20px rgba(0, 29, 41, 0.05)', // Sombra suave
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '2rem',
        '3xl': '3rem',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
  ],
}

