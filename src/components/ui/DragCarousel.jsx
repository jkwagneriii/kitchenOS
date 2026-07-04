import { useRef } from 'react'
import { motion as m } from 'framer-motion'

/**
 * Draggable horizontal strip — flick through captioned images.
 * items: [{ image, label, meta }]
 */
export default function DragCarousel({ items }) {
  const containerRef = useRef(null)

  return (
    <div className="overflow-hidden" ref={containerRef}>
      <div className="px-8 md:px-10 pt-6 pb-2 font-mono text-mono-sm uppercase tracking-widest text-faint select-none">
        Drag ↔
      </div>
      <m.div
        drag="x"
        dragConstraints={containerRef}
        dragElastic={0.08}
        className="flex gap-px bg-white/10 cursor-grab active:cursor-grabbing w-max pb-6"
      >
        {items.map((item, i) => (
          <div key={item.label} className="bg-background w-64 md:w-80 flex-shrink-0 select-none">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={item.image}
                alt={item.label}
                loading="lazy"
                decoding="async"
                draggable={false}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="px-4 py-3 border-t border-white/10 flex items-center justify-between">
              <span className="text-sm font-bold text-white truncate">{item.label}</span>
              <span className="font-mono text-[10px] uppercase text-faint flex-shrink-0 ml-3">
                {item.meta || String(i + 1).padStart(2, '0')}
              </span>
            </div>
          </div>
        ))}
      </m.div>
    </div>
  )
}
