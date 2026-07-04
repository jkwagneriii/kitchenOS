import { motion as m, useScroll, useSpring } from 'framer-motion'

/**
 * Fixed accent bar along the top edge that fills with page scroll.
 * Mount once per page (sits above the navbar).
 */
export default function ScrollProgress({ className = '' }) {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40, restDelta: 0.001 })

  return (
    <m.div
      aria-hidden="true"
      className={`fixed top-0 left-0 right-0 h-[2px] bg-accent origin-left z-[60] ${className}`}
      style={{ scaleX }}
    />
  )
}
