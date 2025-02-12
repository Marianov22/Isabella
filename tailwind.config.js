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
        border: '#E2E2E2',
        'primary': '#7A8B69',
        'primary-dark': '#4A6741',
        'secondary': '#FFB4A6',
        'secondary-light': '#FFD7CE',
        'background': '#FFF9F2',
        'accent': '#F5E6D9',
        foreground: '#1A1A1A',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui'],
        display: ['var(--font-display)', 'system-ui'],
      },
      boxShadow: {
        'retro': '2px 2px 0 rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
  ],
}

