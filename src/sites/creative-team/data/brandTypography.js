export const brandTypography = [
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
