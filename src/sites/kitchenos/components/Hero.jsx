import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const modules = [
  'Inventory Tracking',
  'Prep Workflows',
  'Supplier Orders',
  'Waste Monitoring',
  'Kitchen Analytics',
  'Multi-Location Sync',
  'Staff Management',
  'Menu Integration',
  'Cost Forecasting',
  'Compliance Logs',
]

function generateBinary() {
  return Array.from({ length: 9 }, () =>
    Array.from({ length: 8 }, () => Math.round(Math.random())).join('')
  )
}

function SystemStatusPanel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [binaryRows, setBinaryRows] = useState(() => generateBinary())

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % modules.length)
    }, 1500)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setBinaryRows(generateBinary())
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-[#2A2A22] px-8 md:px-10 py-10 flex-1 flex flex-col justify-between">
      <div>
        <h3 className="text-title text-white mb-6">System Status</h3>
        <div className="space-y-1">
          {modules.map((item, i) => (
            <div key={item} className="flex items-center justify-between font-mono text-mono-sm uppercase tracking-wider">
              <motion.span
                animate={{
                  opacity: i === activeIndex ? 1 : 0.3,
                  color: i === activeIndex ? '#455602' : 'rgba(255,255,255,0.3)',
                }}
                transition={{ duration: 0.4 }}
                style={{ willChange: 'opacity' }}
              >
                {String(i + 1).padStart(2, '0')}. {item}
              </motion.span>
              <motion.span
                className="w-1.5 h-1.5 flex-shrink-0 ml-2"
                animate={{
                  backgroundColor: i === activeIndex ? '#455602' : 'rgba(255,255,255,0.15)',
                }}
                transition={{ duration: 0.4 }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 pt-4 mt-8">
        <div className="font-mono text-[9px] text-white/15 leading-relaxed tracking-wider select-none grid grid-cols-3 gap-x-4 gap-y-1">
          {binaryRows.map((row, i) => (
            <span key={i}>{row}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const sectionRef = useRef(null)

  return (
    <section ref={sectionRef} className="relative border-b border-[#2A2A22]">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* ── LEFT COLUMN ─────────────────────────────────────── */}
        <div className="lg:col-span-8 xl:col-span-9">
          {/* Red block with massive text */}
          <div className="bg-[#455602] flex flex-col justify-end px-8 md:px-12 lg:px-16 pb-16 pt-32 lg:pt-24 min-h-[70vh] lg:min-h-[80vh] relative">
            <motion.h1
              className="text-mega text-[#DBD4C9] mb-8 pb-[0.1em]"
              initial={{ clipPath: 'inset(100% 0 -10% 0)' }}
              animate={{ clipPath: 'inset(0 0 -10% 0)' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              Kitchen<br />
              Intelligence
            </motion.h1>
            <motion.p
              className="text-display text-[#DBD4C9]/70 max-w-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            >
              Operational Intelligence for Every Kitchen, Every Location, Every Service.
            </motion.p>
          </div>

          {/* B&W Video block — landscape chef cooking */}
          <div className="relative w-full aspect-[16/9] lg:aspect-[16/8] bg-[#2A2A22] overflow-hidden border-t border-[#2A2A22]">
            <video
              className="absolute inset-0 w-full h-full object-cover grayscale-img"
              autoPlay muted loop playsInline
            >
              <source src="/kitchenos/hero-landscape.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* ── RIGHT COLUMN — stacked panels ───────────────────── */}
        <div className="lg:col-span-4 xl:col-span-3 border-l border-[#2A2A22] flex flex-col">
          {/* Gray description panel */}
          <motion.div
            className="bg-surface px-8 md:px-10 pt-20 pb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          >
            <p className="text-title text-ink mb-4">
              Powering actionable insights for modern kitchen operations and food service systems.
            </p>
          </motion.div>

          {/* Vertical video panel */}
          <div className="border-t border-[#2A2A22] relative">
            <div className="relative min-h-[400px] lg:min-h-[650px] bg-[#2A2A22] overflow-hidden">
              <video
                className="absolute inset-0 w-full h-full object-cover grayscale-img"
                autoPlay muted loop playsInline
              >
                <source src="/kitchenos/video-portrait.mp4" type="video/mp4" />
              </video>
            </div>
            {/* CTA bar — clean grid divider */}
            <div className="border-t border-[#2A2A22] bg-[#2A2A22] px-8 md:px-10 py-6 flex items-center justify-between">
              <p className="text-title text-[#DBD4C9]">Explore the platform.</p>
              <svg className="w-8 h-8 text-[#DBD4C9]/40" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="8">
                <line x1="15" y1="85" x2="85" y2="15" />
                <polyline points="40,15 85,15 85,60" />
              </svg>
            </div>
          </div>

          {/* Dark system status panel */}
          <motion.div
            className="flex-1 flex flex-col border-t border-[#2A2A22]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
          >
            <SystemStatusPanel />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
