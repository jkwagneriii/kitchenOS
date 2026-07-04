import { useRef, useState, useCallback } from 'react'

/**
 * Full-bleed hero with a cursor spotlight — a hairline grid and accent glow
 * are revealed only around the pointer, with a live mono coordinate readout.
 * Grid stays faintly visible on touch devices (no hover).
 */
export default function SpotlightGridHero({ title, subtitle, meta = 'Interactive Field', className = '' }) {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: -1000, y: -1000 })
  const [inside, setInside] = useState(false)

  const onMove = useCallback((e) => {
    const rect = ref.current.getBoundingClientRect()
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }, [])

  const gridLines = {
    backgroundImage:
      'linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)',
    backgroundSize: '56px 56px',
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setInside(true)}
      onMouseLeave={() => { setInside(false); setPos({ x: -1000, y: -1000 }) }}
      className={`relative min-h-[85vh] bg-background overflow-hidden flex flex-col justify-end ${className}`}
    >
      {/* Faint base grid */}
      <div className="absolute inset-0 opacity-[0.08]" style={gridLines} aria-hidden="true" />

      {/* Spotlit grid + accent glow following the cursor */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          ...gridLines,
          opacity: inside ? 1 : 0,
          WebkitMaskImage: `radial-gradient(240px circle at ${pos.x}px ${pos.y}px, black 0%, transparent 100%)`,
          maskImage: `radial-gradient(240px circle at ${pos.x}px ${pos.y}px, black 0%, transparent 100%)`,
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: inside ? 1 : 0,
          background: `radial-gradient(320px circle at ${pos.x}px ${pos.y}px, rgba(75,63,255,0.25), transparent 70%)`,
        }}
        aria-hidden="true"
      />

      {/* Coordinate readout */}
      <div className="absolute top-8 right-8 font-mono text-mono-sm uppercase tracking-widest text-white/50 text-right">
        <span className="block">{meta}</span>
        <span className="block text-accent">
          X{String(Math.max(0, Math.round(pos.x))).padStart(4, '0')} · Y{String(Math.max(0, Math.round(pos.y))).padStart(4, '0')}
        </span>
      </div>

      {/* Title block */}
      <div className="relative px-8 md:px-12 lg:px-16 pb-16 pointer-events-none">
        <h2 className="text-mega text-white mb-6 pb-[0.1em]">{title}</h2>
        {subtitle && <p className="text-display text-white/60 max-w-xl">{subtitle}</p>}
      </div>
    </div>
  )
}
