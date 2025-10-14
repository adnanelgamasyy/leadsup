/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        // Design System Colors - VIBRANT & COMPACT
        charcoal: '#1A202C',
        'body-text': '#2D3748',
        'dark-gray': '#4A5568',
        'light-gray': '#F7FAFC',
        'light-peach': '#FFF5F0',
        'lighter-peach': '#FFF9F5',
        'primary-orange': '#FF6B2C',
        'primary-orange-dark': '#D95821',
        'primary-orange-light': '#FFE5D9',
        'vibrant-teal': '#00C49A',
        'vibrant-green': '#38A169',
        'vibrant-yellow': '#D69E2E',
        'success-green': '#48BB78',
        'data-blue': '#4299E1',
        'warning-yellow': '#ECC94B',
        'card-border': '#E2E8F0',
        
        // Mapped Tailwind Variables
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
      },
      spacing: {
        // 8px grid system
        '1': '8px',
        '2': '16px',
        '3': '24px',
        '4': '32px',
        '6': '48px',
        '8': '64px',
      },
      maxWidth: {
        'content': '1140px',
      },
      borderRadius: {
        'card': '12px',
        'button': '8px',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontSize: {
        // Design System Typography - MODERN & REFINED
        'h1': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }], // 56px - Refined
        'h2': ['2.25rem', { lineHeight: '1.2', fontWeight: '700' }], // 36px - Refined
        'h3': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }], // Semi-Bold
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'small': ['0.875rem', { lineHeight: '1.4', fontWeight: '400' }],
        'tag': ['0.75rem', { lineHeight: '1', fontWeight: '500', letterSpacing: '1px' }],
      },
      keyframes: {
        'fade-in-up': {
          from: {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'draw-line': {
          from: {
            width: '0',
          },
          to: {
            width: '100%',
          },
        },
        'pulse-soft': {
          '0%, 100%': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(1.02)',
          },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.7s ease-out forwards',
        'draw-line': 'draw-line 1s ease-out forwards',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
