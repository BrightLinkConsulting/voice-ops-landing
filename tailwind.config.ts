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
          orange: '#E8600A',
          'orange-light': '#FF7A1F',
          'orange-dim': '#E8600A33',
          dark: '#0A0A0B',
          'dark-card': '#111114',
          'dark-elevated': '#16161A',
          'dark-border': '#1E1E24',
          'dark-border-hover': '#2E2E38',
          'dark-muted': '#2A2A32',
        }
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'pulse-orange': 'pulseOrange 2s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'marquee': 'marqueeScroll 30s linear infinite',
        'orbit-1': 'orbit 8s linear infinite',
        'orbit-2': 'orbit 14s linear infinite',
        'orbit-3': 'orbit 22s linear infinite',
        'counter-orbit-1': 'counterOrbit 8s linear infinite',
        'counter-orbit-2': 'counterOrbit 14s linear infinite',
        'counter-orbit-3': 'counterOrbit 22s linear infinite',
        'shimmer': 'shimmer 6s ease infinite',
        'breathe': 'breathe 4s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseOrange: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(232, 96, 10, 0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgba(232, 96, 10, 0)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        marqueeScroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        counterOrbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        breathe: {
          '0%, 100%': { boxShadow: '0 0 30px rgba(232,96,10,0.10)' },
          '50%': { boxShadow: '0 0 50px rgba(232,96,10,0.20)' },
        },
      }
    },
  },
  plugins: [],
}
export default config
