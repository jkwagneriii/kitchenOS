/**
 * Design tokens — the single source of truth for the Creative Team™ design system.
 *
 * Consumed by BOTH:
 *   1. tailwind.config.js  → generates the utility classes used across the site
 *   2. The design-system pages (/ and /system) → renders
 *      the visualized documentation from the same data
 *
 * Changing a value here updates the real UI and its documentation together.
 * Never hardcode a color, type style, or easing outside this file.
 */

/* ── COLOR ─────────────────────────────────────────────────────── */

export const colors = [
  {
    token: 'accent',
    name: 'Accent Purple',
    hex: '#4B3FFF',
    rgb: 'rgb(75, 63, 255)',
    usage: 'Primary brand accent — buttons, links, highlights',
  },
  {
    token: 'background',
    name: 'Background',
    hex: '#212121',
    rgb: 'rgb(33, 33, 33)',
    usage: 'Primary background color',
  },
  {
    token: 'surface',
    name: 'Surface',
    hex: '#31414E',
    rgb: 'rgb(49, 65, 78)',
    usage: 'Cards, panels, elevated surfaces',
  },
  {
    token: 'foreground',
    name: 'Foreground',
    hex: '#FFFFFF',
    rgb: 'rgb(255, 255, 255)',
    usage: 'Primary text and icons',
  },
  {
    token: 'muted',
    name: 'Muted',
    hex: '#DCE6F4',
    rgb: 'rgb(220, 230, 244)',
    usage: 'Secondary text, descriptions',
  },
  {
    token: 'faint',
    name: 'Faint',
    hex: '#7A8BA0',
    rgb: 'rgb(122, 139, 160)',
    usage: 'Tertiary text, labels, metadata',
  },
]

/** Tailwind `theme.colors` shape: { accent: { DEFAULT: '#4b3fff' }, ... } */
export const tailwindColors = Object.fromEntries(
  colors.map((c) => [c.token, { DEFAULT: c.hex }])
)

/* ── TYPOGRAPHY ────────────────────────────────────────────────── */

export const fontFamilies = {
  sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
  mono: ['"DM Mono"', 'ui-monospace', 'monospace'],
}

export const typefaces = [
  {
    family: 'DM Sans',
    weights: [
      { label: 'Regular', weight: 400 },
      { label: 'Regular Italic', weight: 400, italic: true },
      { label: 'Bold', weight: 700 },
      { label: 'Bold Italic', weight: 700, italic: true },
      { label: 'Black', weight: 900 },
    ],
    usage: 'Primary typeface — headlines, body copy, UI elements. Tight tracking for headlines, standard for body.',
    tailwindClass: 'font-sans',
  },
  {
    family: 'DM Mono',
    weights: [
      { label: 'Light', weight: 300 },
      { label: 'Regular', weight: 400 },
      { label: 'Regular Italic', weight: 400, italic: true },
      { label: 'Medium', weight: 500 },
    ],
    usage: 'Monospace typeface — labels, metadata, navigation, technical text, captions.',
    tailwindClass: 'font-mono',
  },
]

export const typeScale = {
  mega: {
    size: 'clamp(4rem, 12vw, 12rem)',
    lineHeight: '0.9',
    letterSpacing: '-0.06em',
    fontWeight: '900',
    usage: 'Page hero titles',
  },
  hero: {
    size: 'clamp(2.5rem, 6vw, 5.5rem)',
    lineHeight: '0.9',
    letterSpacing: '-0.045em',
    fontWeight: '700',
    usage: 'Section headlines, overlay navigation',
  },
  display: {
    size: 'clamp(2rem, 3.5vw, 3rem)',
    lineHeight: '1.1',
    letterSpacing: '-0.03em',
    fontWeight: '700',
    usage: 'Sub-headlines, hero subtitles, form headings',
  },
  title: {
    size: 'clamp(1.25rem, 2vw, 1.75rem)',
    lineHeight: '1.15',
    letterSpacing: '-0.025em',
    fontWeight: '600',
    usage: 'Card and cell titles',
  },
  body: {
    size: '1rem',
    lineHeight: '1.6',
    letterSpacing: '-0.01em',
    fontWeight: '400',
    usage: 'Long-form body copy',
  },
  'mono-body': {
    size: '0.6875rem',
    lineHeight: '1.6',
    letterSpacing: '0.04em',
    fontWeight: '400',
    usage: 'Mono uppercase body — descriptions, metadata (pair with .mono-upper)',
  },
  'mono-sm': {
    size: '0.625rem',
    lineHeight: '1.5',
    letterSpacing: '0.05em',
    fontWeight: '400',
    usage: 'Smallest mono — eyebrow labels, captions, nav items',
  },
  label: {
    size: '0.6875rem',
    lineHeight: '1.33',
    letterSpacing: '0.08em',
    fontWeight: '500',
    usage: 'Form labels, tracked-out UI labels',
  },
}

/** Tailwind `theme.fontSize` shape */
export const tailwindFontSize = Object.fromEntries(
  Object.entries(typeScale).map(([name, t]) => [
    name,
    [t.size, { lineHeight: t.lineHeight, letterSpacing: t.letterSpacing, fontWeight: t.fontWeight }],
  ])
)

/* ── SPACING & LAYOUT ──────────────────────────────────────────── */

export const spacing = {
  'section-y': {
    value: 'clamp(4rem, 8vw, 8rem)',
    usage: 'Vertical padding for major page sections (py-section-y)',
  },
  'section-x': {
    value: 'clamp(1.25rem, 4vw, 4rem)',
    usage: 'Horizontal section padding (px-section-x)',
  },
}

export const tailwindSpacing = Object.fromEntries(
  Object.entries(spacing).map(([name, s]) => [name, s.value])
)

export const layout = {
  maxWidth: '1440px',
  /** Canonical horizontal padding for full-bleed sections */
  sectionPad: 'px-8 md:px-12 lg:px-16',
  /** Hairline border used by the grid system */
  hairline: 'border-white/10',
  borderRadius: '0px',
}

/* ── MOTION ────────────────────────────────────────────────────── */

export const motion = {
  /** Signature ease — framer-motion array form */
  ease: [0.16, 1, 0.3, 1],
  /** Same ease — CSS form */
  easeCss: 'cubic-bezier(0.16, 1, 0.3, 1)',
  durations: {
    fast: 0.3,
    base: 0.6,
    slow: 0.8,
    hero: 1.0,
  },
  /** Standard scroll-reveal stagger step (matches .stagger-N utilities) */
  staggerStep: 0.06,
}
