import {
  tailwindColors,
  fontFamilies,
  tailwindFontSize,
  tailwindSpacing,
  layout,
} from './src/design-system/tokens.js'

/**
 * Theme values are generated from src/design-system/tokens.js — the single
 * source of truth shared with the design-system documentation pages.
 * Edit tokens there, not here.
 */

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: tailwindColors,
      fontFamily: fontFamilies,
      fontSize: tailwindFontSize,
      spacing: tailwindSpacing,
      maxWidth: {
        container: layout.maxWidth,
      },
      borderRadius: {
        DEFAULT: layout.borderRadius,
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
        'marquee': {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up':  'fade-up 0.8s cubic-bezier(0.16,1,0.3,1) both',
        'clip-up':  'clip-up 0.8s cubic-bezier(0.16,1,0.3,1) both',
        'marquee':  'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
}
