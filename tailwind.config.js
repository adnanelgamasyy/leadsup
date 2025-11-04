/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
        'plus-jakarta-sans': ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Brand core
        'action-blue': '#3d82f7',
        'deep-purple': '#6c56c2',
        'vibrant-green': '#98c93c',
        'energetic-pink': '#f03768',
        'bright-amber': '#f9a825',
        // Neutrals
        'slate-50': '#F8FAFC',
        'slate-100': '#F1F5F9',
        'slate-200': '#E2E8F0',
        'slate-300': '#CBD5F5',
        'slate-600': '#475569',
        'slate-700': '#334155',
        'slate-800': '#1E293B',
        // Status
        success: '#22c55e',
        warning: '#f59e0b',
        danger: '#ef4444',
        // Semantic shortcuts
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
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          md: '2rem',
          lg: '3rem',
        },
        screens: {
          '2xl': '1200px',
        },
      },
      spacing: {
        // 8px grid helpers
        18: '4.5rem',
        22: '5.5rem',
      },
      borderRadius: {
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'elevated-sm': '0 8px 20px rgba(61, 130, 247, 0.12)',
        'elevated-md': '0 16px 45px rgba(108, 86, 194, 0.18)',
      },
      keyframes: {
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        shimmer: 'shimmer 1.5s infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
