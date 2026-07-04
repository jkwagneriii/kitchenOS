import { motion as m } from 'framer-motion'
import { motion } from '../../design-system/tokens'

const heights = {
  standard: 'min-h-[50vh] lg:min-h-[60vh]',
  tall: 'min-h-[70vh] lg:min-h-[80vh]',
}

/**
 * Accent-block page hero: clip-path reveal on the mega title, fade-up subtitle.
 * By default renders its own <section> wrapper; pass `bare` to embed the block
 * inside a custom layout (e.g. a hero grid with media panels).
 */
export default function Hero({ title, subtitle, size = 'standard', bare = false, className = '' }) {
  const block = (
    <div className={`bg-accent flex flex-col justify-end px-8 md:px-12 lg:px-16 pb-16 pt-32 lg:pt-24 ${heights[size]} ${className}`}>
      <m.h1
        className="text-mega text-white mb-8 pb-[0.1em]"
        initial={{ clipPath: 'inset(100% 0 -10% 0)' }}
        animate={{ clipPath: 'inset(0 0 -10% 0)' }}
        transition={{ duration: motion.durations.hero, ease: motion.ease, delay: 0.2 }}
      >
        {title}
      </m.h1>
      {subtitle && (
        <m.p
          className="text-display text-white/70 max-w-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: motion.durations.slow, ease: motion.ease, delay: 0.5 }}
        >
          {subtitle}
        </m.p>
      )}
    </div>
  )

  if (bare) return block

  return <section className="relative border-b border-white/10">{block}</section>
}
