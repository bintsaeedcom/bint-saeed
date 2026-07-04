import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#faf8f5',
        black: '#1a0210',
        'bs-plum': '#1a0210',
        'bs-maroon': '#6f1524',
        'bs-slate': '#6a8090',
        'bs-clay': '#e8ddd4',
        'bs-bone': '#faf8f5',
        'bs-ink': '#2a1e18',
        'bs-muted': '#8a7a70',
        'bs-text-on-dark': '#e8d8c8',
        brand: {
          darkRed: '#1a0210',
          darkMagenta: '#1a0210',
          burgundyWarm: '#6f1524',
          ivory: '#e8d8c8',
          wildRose: '#6f1524',
          dustyBlue: '#6a8090',
          clayRed: '#6f1524',
          stone: '#e8ddd4',
          rose: '#e8ddd4',
          pageCanvas: 'var(--color-light)',
          text: '#2a1e18',
          muted: '#8a7a70',
          onDark: '#e8d8c8',
        }
      },
      fontFamily: {
        /** Default sans for `font-sans` — Montserrat site-wide (LTR); RTL overrides via CSS variable */
        sans: [
          'var(--font-montserrat)',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
        rozha: ['var(--font-rozha)', 'serif'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-out': 'fadeOut 0.8s ease-out forwards',
        'slide-up': 'slideUp 1s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeOut: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-30px)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(60px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
export default config
