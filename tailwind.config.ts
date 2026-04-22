import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          /** Deep burgundy — primary maison field + UI anchor */
          darkRed: '#3B0A12',
          /** Near-black burgundy — edges / depth */
          darkMagenta: '#1F0508',
          /** Warm burgundy accent — highlights, radial centers */
          burgundyWarm: '#5A1A22',
          /** Type on dark burgundy — softer than pure white */
          ivory: '#F5EDE8',
          wildRose: '#6620a2',
          dustyBlue: '#92aac1',
          clayRed: '#8e4233',
          stone: '#d4bdac',
          rose: '#c19086',
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
