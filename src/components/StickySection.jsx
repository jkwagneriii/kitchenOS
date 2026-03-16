import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useStickyClipReveal } from '../hooks/useStickyClipReveal'

export default function StickySection({ children, zIndex = 10, className = '' }) {
  const ref = useRef(null)
  const { clipPath } = useStickyClipReveal(ref)

  return (
    <div ref={ref} className="min-h-[200vh]" style={{ zIndex, position: 'relative' }}>
      <motion.section
        className={`sticky-section sticky top-0 h-screen overflow-hidden ${className}`}
        style={{ clipPath, willChange: 'clip-path' }}
      >
        {children}
      </motion.section>
    </div>
  )
}
