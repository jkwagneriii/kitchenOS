import { useRef, useCallback } from 'react'
import { motion as m, useSpring, useReducedMotion } from 'framer-motion'

/**
 * Magnetic wrapper — children are pulled toward the cursor inside the
 * hover zone and spring back on leave. Wrap a Button or logo mark.
 * strength: 0–1, how far the element follows the cursor.
 */
export default function MagneticButton({ children, strength = 0.35, className = '' }) {
  const ref = useRef(null)
  const prefersReducedMotion = useReducedMotion()
  const x = useSpring(0, { stiffness: 200, damping: 15, mass: 0.2 })
  const y = useSpring(0, { stiffness: 200, damping: 15, mass: 0.2 })

  const onMove = useCallback((e) => {
    if (prefersReducedMotion) return
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength)
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength)
  }, [x, y, strength, prefersReducedMotion])

  const onLeave = useCallback(() => { x.set(0); y.set(0) }, [x, y])

  return (
    <m.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x, y }}
      className={`inline-block p-6 -m-6 ${className}`}
    >
      {children}
    </m.div>
  )
}
