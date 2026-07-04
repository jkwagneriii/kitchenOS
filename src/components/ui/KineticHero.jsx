import { useRef } from 'react'
import { motion as m, useScroll, useTransform, useMotionTemplate, useReducedMotion } from 'framer-motion'

/**
 * Full-bleed scroll-driven hero — a pinned viewport where oversized type
 * tracks horizontally with scroll while the backdrop image scales down and
 * a mono progress readout counts the sequence. Height = `screens` viewports.
 */
export default function KineticHero({ title, meta, image, alt = '', screens = 2, className = '' }) {
  const ref = useRef(null)
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })

  const x = useTransform(scrollYProgress, [0, 1], ['4%', '-56%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1])
  const pct = useTransform(scrollYProgress, (v) => String(Math.round(v * 100)).padStart(3, '0'))
  const readout = useMotionTemplate`${pct} / 100`

  return (
    <div ref={ref} className={className} style={{ height: `${screens * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden bg-background">
        <m.img
          src={image}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover grayscale-img opacity-40"
          style={prefersReducedMotion ? {} : { scale }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />

        <div className="relative h-full flex flex-col justify-between py-16">
          <div className="px-8 md:px-12 lg:px-16 flex items-center justify-between font-mono text-mono-sm uppercase tracking-widest text-white/60">
            <span>{meta}</span>
            <m.span className="text-accent">{readout}</m.span>
          </div>

          <m.h2
            className="text-mega text-white whitespace-nowrap px-8 will-change-transform"
            style={prefersReducedMotion ? {} : { x }}
          >
            {title}
          </m.h2>

          <p className="px-8 md:px-12 lg:px-16 font-mono text-mono-sm uppercase tracking-widest text-faint">
            Scroll ↓
          </p>
        </div>
      </div>
    </div>
  )
}
