const variants = {
  accent: 'border-accent bg-accent/10',
  neutral: 'border-white/30 bg-white/5',
}

/**
 * Note band for guidelines and documentation — eyebrow label + body copy.
 */
export default function Callout({ label = 'Note', variant = 'accent', children, className = '' }) {
  return (
    <div className={`border-l-2 p-6 md:p-8 ${variants[variant]} ${className}`}>
      <span className={`font-mono text-mono-sm uppercase tracking-widest block mb-3 ${variant === 'accent' ? 'text-accent' : 'text-faint'}`}>
        {label}
      </span>
      <div className="mono-upper text-muted max-w-2xl">{children}</div>
    </div>
  )
}
