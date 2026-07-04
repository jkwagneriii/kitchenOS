import { useState } from 'react'

/**
 * Full-bleed diptych hero — type panel vs. image panel. Hovering a side
 * expands it; the image side desaturates until hovered.
 * left:  { title, subtitle }
 * right: { image, alt, caption }
 */
export default function SplitHero({ left, right, className = '' }) {
  const [hovered, setHovered] = useState(null)

  return (
    <div className={`flex flex-col lg:flex-row min-h-[80vh] overflow-hidden ${className}`}>
      {/* Type panel */}
      <div
        onMouseEnter={() => setHovered('left')}
        onMouseLeave={() => setHovered(null)}
        className={`bg-accent flex flex-col justify-end px-8 md:px-12 lg:px-16 py-16 transition-[flex-grow] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${hovered === 'left' ? 'lg:flex-[1.5]' : 'lg:flex-1'} flex-1`}
      >
        <h2 className="text-mega text-white mb-6 pb-[0.1em]">{left.title}</h2>
        {left.subtitle && (
          <p className="text-display text-white/70 max-w-xl">{left.subtitle}</p>
        )}
      </div>

      {/* Image panel */}
      <div
        onMouseEnter={() => setHovered('right')}
        onMouseLeave={() => setHovered(null)}
        className={`relative overflow-hidden border-t lg:border-t-0 lg:border-l border-white/10 transition-[flex-grow] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${hovered === 'right' ? 'lg:flex-[1.5]' : 'lg:flex-1'} flex-1 min-h-[40vh]`}
      >
        <img
          src={right.image}
          alt={right.alt || ''}
          loading="lazy"
          decoding="async"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${hovered === 'right' ? 'grayscale-0 scale-105' : 'grayscale scale-100'}`}
        />
        {right.caption && (
          <span className="absolute bottom-6 left-6 font-mono text-mono-sm uppercase tracking-widest text-white/80 bg-background/60 backdrop-blur-sm px-3 py-1.5 z-10">
            {right.caption}
          </span>
        )}
      </div>
    </div>
  )
}
