import { motion } from 'framer-motion'

/* ── Wireframe SVG Components ────────────────────────────────── */
function SphereWireframe() {
  return (
    <svg viewBox="0 0 200 200" className="w-28 h-28 lg:w-32 lg:h-32" fill="none" stroke="currentColor" strokeWidth="0.6">
      <circle cx="100" cy="100" r="60" />
      <ellipse cx="100" cy="100" rx="30" ry="60" />
      <ellipse cx="100" cy="100" rx="50" ry="60" />
      <line x1="40" y1="80" x2="160" y2="80" />
      <line x1="40" y1="100" x2="160" y2="100" />
      <line x1="40" y1="120" x2="160" y2="120" />
    </svg>
  )
}

function GridWireframe() {
  return (
    <svg viewBox="0 0 200 200" className="w-28 h-28 lg:w-32 lg:h-32" fill="none" stroke="currentColor" strokeWidth="0.8">
      <rect x="30" y="40" width="140" height="120" />
      <line x1="30" y1="80" x2="170" y2="80" />
      <line x1="30" y1="120" x2="170" y2="120" />
      <line x1="100" y1="40" x2="100" y2="160" />
      <rect x="45" y="50" width="20" height="20" />
      <rect x="115" y="90" width="20" height="20" />
      <rect x="55" y="130" width="20" height="20" />
      <rect x="130" y="130" width="20" height="20" />
    </svg>
  )
}

function ChecklistWireframe() {
  return (
    <svg viewBox="0 0 200 200" className="w-28 h-28 lg:w-32 lg:h-32" fill="none" stroke="currentColor" strokeWidth="0.8">
      <rect x="50" y="30" width="100" height="140" />
      <line x1="65" y1="60" x2="135" y2="60" />
      <line x1="65" y1="85" x2="135" y2="85" />
      <line x1="65" y1="110" x2="135" y2="110" />
      <line x1="65" y1="135" x2="135" y2="135" />
      <polyline points="60,57 65,62 73,52" strokeWidth="1.5" />
      <polyline points="60,82 65,87 73,77" strokeWidth="1.5" />
      <polyline points="60,107 65,112 73,102" strokeWidth="1.5" />
      <circle cx="63" cy="135" r="5" />
    </svg>
  )
}

function ChartWireframe() {
  return (
    <svg viewBox="0 0 200 200" className="w-28 h-28 lg:w-32 lg:h-32" fill="none" stroke="currentColor" strokeWidth="0.8">
      <line x1="40" y1="160" x2="40" y2="40" />
      <line x1="40" y1="160" x2="170" y2="160" />
      <polyline points="50,140 80,100 110,120 140,70 160,90" strokeWidth="1.5" />
      <polyline points="50,130 80,110 110,130 140,90 160,110" strokeWidth="1" strokeDasharray="4,3" />
    </svg>
  )
}

function NetworkWireframe() {
  return (
    <svg viewBox="0 0 200 200" className="w-28 h-28 lg:w-32 lg:h-32" fill="none" stroke="currentColor" strokeWidth="0.8">
      <rect x="60" y="50" width="80" height="50" />
      <rect x="30" y="120" width="50" height="40" />
      <rect x="120" y="120" width="50" height="40" />
      <line x1="100" y1="100" x2="55" y2="120" />
      <line x1="100" y1="100" x2="145" y2="120" />
      <circle cx="100" cy="100" r="3" fill="currentColor" />
    </svg>
  )
}

function DotGridWireframe() {
  return (
    <svg viewBox="0 0 200 200" className="w-28 h-28 lg:w-32 lg:h-32" fill="currentColor" stroke="none">
      {Array.from({ length: 10 }, (_, ring) =>
        Array.from({ length: Math.max(4, ring * 4) }, (_, dot) => {
          const angle = (dot / Math.max(4, ring * 4)) * Math.PI * 2
          const r = 12 + ring * 7
          const x = 100 + Math.cos(angle) * r
          const y = 100 + Math.sin(angle) * r
          const size = Math.max(0.8, 2.5 - ring * 0.15)
          return <circle key={`${ring}-${dot}`} cx={x} cy={y} r={size} opacity={1 - ring * 0.07} />
        })
      )}
    </svg>
  )
}

const features = [
  { title: 'Smart Inventory', desc: 'Track ingredient levels in real time across your entire kitchen.', Graphic: GridWireframe },
  { title: 'Automated Prep', desc: 'Generate daily prep tasks automatically based on menu demand.', Graphic: ChecklistWireframe },
  { title: 'Supplier Ordering', desc: 'Order ingredients directly from your suppliers in seconds.', Graphic: SphereWireframe },
  { title: 'Kitchen Analytics', desc: 'Real-time food cost trends, usage reports, and forecasting.', Graphic: ChartWireframe },
  { title: 'Multi-Location', desc: 'Manage multiple kitchens from a single dashboard.', Graphic: NetworkWireframe },
  { title: 'Waste Monitoring', desc: 'Track waste trends and identify cost leaks across operations.', Graphic: DotGridWireframe },
]

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

function SolutionCard({ feature }) {
  const { title, desc, Graphic } = feature

  return (
    <motion.div
      className="flex flex-col bg-[#DBD4C9] text-black group"
      variants={cardVariants}
      whileHover={{ backgroundColor: '#455602', color: '#FFFFFF' }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Wireframe SVG area */}
      <div className="flex-1 flex items-center justify-center p-8 pt-16">
        <div className="group-hover:scale-105 transition-transform duration-500 ease-out">
          <Graphic />
        </div>
      </div>

      {/* Bottom text */}
      <div className="p-6 lg:p-8 border-t border-[#2A2A22]/20">
        <h3 className="text-title mb-3 uppercase tracking-tighter">{title}</h3>
        <p className="mono-upper opacity-60 mb-4 line-clamp-2">{desc}</p>
        <button className="inline-flex items-center gap-2 px-5 py-2.5 text-mono-sm font-mono uppercase tracking-widest border border-current cursor-pointer hover:opacity-70 transition-opacity duration-300">
          Explore
        </button>
      </div>
    </motion.div>
  )
}

export default function Solutions() {
  return (
    <section id="solutions" className="border-t border-[#2A2A22]">
      {/* Section header */}
      <div className="px-8 md:px-12 lg:px-16 py-section-y border-b border-[#2A2A22]">
        <h2 className="text-hero tracking-tighter animate-on-scroll">
          Operational Intelligence Solutions
        </h2>
      </div>

      {/* Bento grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-bordered"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {features.map((f) => (
          <SolutionCard key={f.title} feature={f} />
        ))}
      </motion.div>
    </section>
  )
}
