import { useRef, useState, useCallback } from 'react'

/**
 * Editorial index list — hovering a row floats its image at the cursor.
 * items: [{ label, meta, image }]
 */
export default function HoverRevealList({ items }) {
  const ref = useRef(null)
  const [active, setActive] = useState(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const onMove = useCallback((e) => {
    const rect = ref.current.getBoundingClientRect()
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }, [])

  return (
    <div ref={ref} onMouseMove={onMove} className="relative overflow-hidden">
      {items.map((item, i) => (
        <div
          key={item.label}
          onMouseEnter={() => setActive(i)}
          onMouseLeave={() => setActive(null)}
          className="group flex items-baseline justify-between gap-6 px-8 md:px-10 py-6 border-b border-white/10 cursor-pointer"
        >
          <span className="flex items-baseline gap-6 min-w-0">
            <span className="font-mono text-mono-sm text-faint">{String(i + 1).padStart(2, '0')}</span>
            <span className={`text-title truncate transition-colors duration-300 ${active === i ? 'text-accent' : 'text-white'}`}>
              {item.label}
            </span>
          </span>
          <span className="font-mono text-mono-sm uppercase tracking-widest text-faint group-hover:text-white/70 transition-colors duration-300 flex-shrink-0">
            {item.meta}
          </span>
        </div>
      ))}

      {/* Floating preview */}
      {active !== null && items[active].image && (
        <img
          src={items[active].image}
          alt=""
          aria-hidden="true"
          className="hidden lg:block absolute w-64 aspect-[4/3] object-cover pointer-events-none z-10 border border-white/20"
          style={{ left: pos.x + 24, top: pos.y - 90 }}
        />
      )}
    </div>
  )
}
