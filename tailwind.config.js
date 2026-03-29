/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      /* ── COLOR SYSTEM ────────────────────────────────────── */
      colors: {
        background: {
          DEFAULT: '#212121',
        },
        surface: {
          DEFAULT: '#31414e',
        },
        accent: {
          DEFAULT: '#4b3fff',
        },
        foreground: {
          DEFAULT: '#ffffff',
        },
        muted: {
          DEFAULT: '#dce6f4',
        },
        faint: {
          DEFAULT: '#7a8ba0',
        },
      },
      fontFamily: {
        sans:  ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono:  ['"DM Mono"', 'ui-monospace', 'monospace'],
        'ko-sans': ['Inter', 'system-ui', 'sans-serif'],
        'ko-mono': ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'mega':    ['clamp(4rem, 12vw, 12rem)',   { lineHeight: '0.9',   letterSpacing: '-0.06em', fontWeight: '900' }],
        'hero':    ['clamp(2.5rem, 6vw, 5.5rem)', { lineHeight: '0.9',  letterSpacing: '-0.045em', fontWeight: '700' }],
        'display': ['clamp(2rem, 3.5vw, 3rem)',   { lineHeight: '1.1',  letterSpacing: '-0.03em', fontWeight: '700' }],
        'title':   ['clamp(1.25rem, 2vw, 1.75rem)',{ lineHeight: '1.15', letterSpacing: '-0.025em', fontWeight: '600' }],
        'body':    ['1rem',                         { lineHeight: '1.6',  letterSpacing: '-0.01em', fontWeight: '400' }],
        'mono-body': ['0.6875rem',                  { lineHeight: '1.6',  letterSpacing: '0.04em', fontWeight: '400' }],
        'mono-sm': ['0.625rem',                     { lineHeight: '1.5',  letterSpacing: '0.05em', fontWeight: '400' }],
        'label':   ['0.6875rem',                    { lineHeight: '1.33', letterSpacing: '0.08em', fontWeight: '500' }],
      },
      spacing: {
        'section-y': 'clamp(4rem, 8vw, 8rem)',
        'section-x': 'clamp(1.25rem, 4vw, 4rem)',
      },
      maxWidth: {
        container: '1440px',
      },
      borderRadius: {
        DEFAULT: '0px',
        pill: '9999px',
      },
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'clip-up': {
          '0%':   { clipPath: 'inset(100% 0 0 0)' },
          '100%': { clipPath: 'inset(0 0 0 0)' },
        },
        'slideUp': {
          '0%':   { transform: 'translateY(10px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up':  'fade-up 0.8s cubic-bezier(0.16,1,0.3,1) both',
        'clip-up':  'clip-up 0.8s cubic-bezier(0.16,1,0.3,1) both',
      },
    },
  },
  plugins: [],
}
