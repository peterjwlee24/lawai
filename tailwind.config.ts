import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0A0A0A',
        },
        navy: {
          DEFAULT: '#1E3A5F',
          50: '#F0F4F8',
          100: '#D9E2EC',
          200: '#BCCCDC',
          300: '#9FB3C8',
          400: '#6E8EAD',
          500: '#486581',
          600: '#334E68',
          700: '#243B53',
          800: '#1E3A5F',
          900: '#102A43',
          950: '#0A1929',
        },
        gold: {
          DEFAULT: '#D4A574',
          50: '#FDF8F3',
          100: '#F9EDE0',
          200: '#F0D9C1',
          300: '#E5C19D',
          400: '#D4A574',
          500: '#C08B55',
          600: '#A67340',
          700: '#8A5D33',
          800: '#6E4A29',
          900: '#573B21',
        },
        accent: {
          DEFAULT: '#1E3A5F',
          hover: '#102A43',
          subtle: '#F0F4F8',
        },
        success: {
          DEFAULT: '#22C55E',
          subtle: '#F0FDF4',
        },
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-instrument)', 'Georgia', 'serif'],
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '600' }],
        'headline': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '600' }],
        'title': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
        'body-lg': ['1.25rem', { lineHeight: '1.6' }],
        'body': ['1.0625rem', { lineHeight: '1.6' }],
        'caption': ['1rem', { lineHeight: '1.5' }],
        'small': ['0.9375rem', { lineHeight: '1.5' }],
        'overline': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.1em', fontWeight: '600' }],
      },
      boxShadow: {
        'subtle': '0 1px 2px rgba(0, 0, 0, 0.04)',
        'elevated': '0 4px 20px rgba(0, 0, 0, 0.06)',
        'prominent': '0 8px 40px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        'DEFAULT': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '20px',
        '3xl': '24px',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
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
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
