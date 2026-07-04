import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

export default function ParallaxImage({
  src,
  alt = '',
  className = '',
  parallaxRange = [-40, 40],
  eager = false,
}) {
  const ref = useRef(null)
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], parallaxRange)

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        fetchpriority={eager ? 'high' : 'auto'}
        decoding="async"
        className={`w-full h-full object-cover scale-[1.15] ${className}`}
        style={prefersReducedMotion ? {} : { y }}
      />
    </div>
  )
}
