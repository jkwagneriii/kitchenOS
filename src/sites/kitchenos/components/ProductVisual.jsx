import { motion } from 'framer-motion'

/* ── Panel Data ────────────────────────────────────────────────── */

const panels = [
  {
    label: 'Inventory Overview',
    caption: 'Track every ingredient across every station in real time. No more clipboard counts or end-of-day surprises.',
    stats: [
      { value: '99.2%', label: 'Count accuracy' },
      { value: '< 3s', label: 'Sync latency' },
    ],
    details: [
      'Real-time stock levels by ingredient and station',
      'Auto-alerts when items hit par levels',
      'Multi-location inventory sync with conflict resolution',
    ],
  },
  {
    label: 'Prep Workflow',
    caption: 'Automated daily prep lists generated from your live menu, covers forecast, and current stock. Every station knows exactly what to do.',
    stats: [
      { value: '40%', label: 'Less prep waste' },
      { value: '2x', label: 'Faster handoff' },
    ],
    details: [
      'Station-specific task boards with drag-and-drop',
      'Completion tracking across shifts and services',
      'Batch scaling that adjusts to actual covers',
    ],
  },
  {
    label: 'Order Management',
    caption: 'Place supplier orders in seconds. Compare prices across vendors. Track every delivery and match invoices automatically.',
    stats: [
      { value: '12min', label: 'Avg. order time saved' },
      { value: '8%', label: 'Cost reduction' },
    ],
    details: [
      'One-click reorders generated from par levels',
      'Side-by-side supplier price comparison',
      'Delivery tracking and automatic invoice matching',
    ],
  },
  {
    label: 'Analytics Dashboard',
    caption: 'Real-time kitchen performance metrics that surface what matters. Food cost trends, waste patterns, and revenue forecasts — all in one view.',
    stats: [
      { value: '24/7', label: 'Live monitoring' },
      { value: '5+', label: 'Custom reports' },
    ],
    details: [
      'Food cost tracking broken down by dish and daypart',
      'Waste trend analysis with anomaly detection',
      'Revenue-per-cover forecasting and margin alerts',
    ],
  },
  {
    label: 'Recipe Costing',
    caption: 'Know the true cost of every plate before it leaves the pass. Costs update automatically when supplier prices change — no spreadsheets.',
    stats: [
      { value: '±0.02', label: 'Cost precision' },
      { value: '3.2%', label: 'Avg. margin lift' },
    ],
    details: [
      'Ingredient-level cost breakdown for every recipe',
      'Auto-recalculation when supplier prices change',
      'Margin targets and alerts per menu item',
    ],
  },
  {
    label: 'Team & Scheduling',
    caption: 'Build shifts, assign stations, and track labor cost against revenue — all from a visual calendar your team actually uses.',
    stats: [
      { value: '6hrs', label: 'Scheduling time saved / wk' },
      { value: '15%', label: 'Labor cost visibility' },
    ],
    details: [
      'Drag-and-drop shift builder with templates',
      'Station assignment and role tagging per service',
      'Labor cost vs. revenue tracking by shift',
    ],
  },
  {
    label: 'Smart Alerts',
    caption: 'Get notified before problems happen — not after. Configurable alerts for spoilage, stock anomalies, missed deliveries, and cost spikes.',
    stats: [
      { value: '< 30s', label: 'Alert delivery' },
      { value: '92%', label: 'Issues caught early' },
    ],
    details: [
      'Expiry and spoilage warnings with countdown',
      'Anomaly detection on usage spikes and patterns',
      'Missed-delivery escalation to backup suppliers',
    ],
  },
]

/* ── Animation Variants ───────────────────────────────────────── */

const panelVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

/* ── Component ────────────────────────────────────────────────── */

export default function ProductVisual() {
  return (
    <section id="product" className="border-t border-[#2A2A22]">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left — Sticky video column */}
        <div className="lg:col-span-5 border-r border-[#2A2A22] relative">
          <div className="sticky top-0 h-64 lg:h-screen overflow-hidden bg-[#2A2A22]">
            <video
              className="w-full h-full object-cover grayscale-img"
              autoPlay muted loop playsInline
            >
              <source src="/kitchenos/video-portrait.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Right — Text + panels scroll past */}
        <div className="lg:col-span-7">
          {/* Section header */}
          <div className="px-8 md:px-12 lg:px-16 py-section-y border-b border-[#2A2A22]">
            <h2 className="text-hero mb-6">Designed for Speed Inside the Kitchen</h2>
            <p className="mono-upper text-ink-muted max-w-lg">
              KitchenOS was built with chefs and operators in mind. The interface is clean, fast, and easy to use — so your team spends less time on screens and more time on the line.
            </p>
          </div>

          {/* Feature panels */}
          {panels.map((p, i) => (
            <motion.div
              key={p.label}
              className="border-b border-[#2A2A22] px-8 md:px-12 lg:px-16 py-10 group hover:bg-[#455602] hover:text-white transition-colors duration-300"
              variants={panelVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
            >
              {/* Module number + title */}
              <div className="flex items-baseline gap-4 mb-3">
                <span className="font-mono text-mono-sm text-ink-faint group-hover:text-white/40 transition-colors duration-300">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-title group-hover:text-white transition-colors duration-300">
                  {p.label}
                </h3>
              </div>

              {/* Description */}
              <p className="mono-upper text-ink-muted group-hover:text-white/70 transition-colors duration-300 max-w-lg mb-6">
                {p.caption}
              </p>

              {/* Stats row */}
              <div className="flex gap-8 mb-6">
                {p.stats.map((s) => (
                  <div key={s.label}>
                    <span className="block text-display text-ink group-hover:text-white font-bold leading-none transition-colors duration-300">
                      {s.value}
                    </span>
                    <span className="mono-upper text-ink-faint group-hover:text-white/50 mt-1 block transition-colors duration-300">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Detail list */}
              <ul className="space-y-2 border-t border-[#2A2A22]/20 group-hover:border-white/20 pt-5 transition-colors duration-300">
                {p.details.map((d) => (
                  <li key={d} className="flex items-start gap-3 font-mono text-mono-body uppercase text-ink-muted/70 group-hover:text-white/60 transition-colors duration-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-mineral group-hover:bg-white/50 mt-1.5 flex-shrink-0 transition-colors duration-300" />
                    {d}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
