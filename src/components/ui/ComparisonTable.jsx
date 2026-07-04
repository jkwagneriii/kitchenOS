import { motion as m } from 'framer-motion'
import { motion } from '../../design-system/tokens'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: motion.durations.base, ease: motion.ease } },
}

/**
 * Do/Don't comparison rows — context label, positive example, negative example.
 * rows: [{ context, doExample, dontExample }]
 */
export default function ComparisonTable({ rows, doLabel = 'Do', dontLabel = "Don't" }) {
  return (
    <m.div
      className="grid grid-cols-1"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {rows.map((row) => (
        <m.div key={row.context} className="grid grid-cols-1 lg:grid-cols-12 border-b border-white/10" variants={itemVariants}>
          <div className="lg:col-span-3 px-8 md:px-12 lg:px-16 py-8 lg:py-10 border-r border-white/10">
            <span className="font-mono text-mono-sm uppercase tracking-widest text-faint">{row.context}</span>
          </div>
          <div className="lg:col-span-4 px-8 md:px-10 py-8 lg:py-10 border-r border-white/10">
            <span className="font-mono text-mono-sm uppercase tracking-widest text-accent block mb-3">{doLabel}</span>
            <p className="text-body text-white/70">{row.doExample}</p>
          </div>
          <div className="lg:col-span-5 px-8 md:px-10 py-8 lg:py-10">
            <span className="font-mono text-mono-sm uppercase tracking-widest text-white/60 block mb-3">{dontLabel}</span>
            <p className="text-body text-white/60">{row.dontExample}</p>
          </div>
        </m.div>
      ))}
    </m.div>
  )
}
