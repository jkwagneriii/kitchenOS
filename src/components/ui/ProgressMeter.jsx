import { motion as m } from 'framer-motion'
import { motion } from '../../design-system/tokens'

/**
 * Labeled progress bar — hairline track, accent fill animates in on view.
 * value: 0–100
 */
export default function ProgressMeter({ label, value, className = '' }) {
  const clamped = Math.max(0, Math.min(100, value))

  return (
    <div className={className}>
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-mono-sm uppercase tracking-widest text-white/70">{label}</span>
        <span className="font-mono text-mono-sm uppercase tracking-widest text-accent">{clamped}%</span>
      </div>
      <div
        className="h-[3px] bg-white/10 overflow-hidden"
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
      >
        <m.div
          className="h-full bg-accent"
          initial={{ width: 0 }}
          whileInView={{ width: `${clamped}%` }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: motion.durations.slow, ease: motion.ease }}
        />
      </div>
    </div>
  )
}
