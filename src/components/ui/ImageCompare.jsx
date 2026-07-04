import { useState } from 'react'

/**
 * Before/after image comparison — drag the divider (or use arrow keys via
 * the underlying range input) to sweep between two treatments.
 * before/after: { image, label }
 */
export default function ImageCompare({ before, after, className = '' }) {
  const [value, setValue] = useState(50)

  return (
    <div className={`relative aspect-[16/9] overflow-hidden select-none ${className}`}>
      {/* After (base) */}
      <img src={after.image} alt={after.label || 'After'} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover" />
      {/* Before (clipped) */}
      <img
        src={before.image}
        alt={before.label || 'Before'}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover grayscale-img"
        style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
      />

      {/* Divider */}
      <div className="absolute top-0 bottom-0 w-[2px] bg-accent pointer-events-none" style={{ left: `${value}%` }}>
        <span className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-8 h-8 bg-accent flex items-center justify-center font-mono text-[10px] text-white tracking-tighter">
          &lt;&gt;
        </span>
      </div>

      {/* Labels */}
      {before.label && (
        <span className="absolute top-4 left-4 font-mono text-mono-sm uppercase tracking-widest text-white bg-background/70 px-3 py-1.5 pointer-events-none">
          {before.label}
        </span>
      )}
      {after.label && (
        <span className="absolute top-4 right-4 font-mono text-mono-sm uppercase tracking-widest text-white bg-accent/90 px-3 py-1.5 pointer-events-none">
          {after.label}
        </span>
      )}

      {/* Invisible range input drives the divider — keyboard accessible */}
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        aria-label="Comparison divider position"
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
      />
    </div>
  )
}
