/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },

    fontFamily: {
      'estedad': 'Estedad',
    },
    screens: {
      'xs': '480px',
      'md': '768px',
      'lg': '1024px',
    },
    colors: {
        white: 'rgb(var(--theme-white), <alpha-value>)',
        background: 'rgb(var(--theme-background), <alpha-value>)',
        primary: 'rgb(var(--theme-primary), <alpha-value>)',
        secondary: 'rgb(var(--theme-secondary), <alpha-value>)',
        accent: 'rgb(var(--theme-accent), <alpha-value>)',
        dark: 'rgb(var(--theme-dark), <alpha-value>)',
        current: "currentColor",
        transparent: "transparent",
    },
    extend: {
      spacing: {
        '79': '19.75rem',
      },
    },
  },
  plugins: [],
}

