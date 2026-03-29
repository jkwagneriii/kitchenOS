import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const sites = [
  {
    name: 'KitchenOS',
    route: '/kitchenos',
    description: 'Product landing page — operational intelligence for modern kitchens.',
    accent: '#455602',
    tag: 'Product',
  },
  {
    name: 'Creative Team',
    route: '/creative-team',
    description: 'Internal brand portal — guidelines, assets, and creative resources.',
    accent: '#4B3FFF',
    tag: 'Brand',
  },
]

export default function HQLanding() {
  return (
    <div className="min-h-screen bg-[#F5F3EF] text-[#1a1a18] font-sans flex flex-col">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="px-8 md:px-12 lg:px-16 pt-10 pb-6 flex items-center justify-between"
      >
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 bg-[#1a1a18] flex items-center justify-center">
            <span className="font-mono text-[9px] font-bold text-[#F5F3EF] leading-none tracking-tight">HQ</span>
          </div>
          <span className="text-xs font-mono uppercase tracking-[0.15em] text-[#1a1a18]/40">Site Index</span>
        </div>
      </motion.header>

      {/* Main */}
      <main className="flex-1 flex flex-col justify-center px-8 md:px-12 lg:px-16 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-12 md:mb-16"
        >
          <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[0.92] tracking-[-0.04em] text-[#1a1a18]">
            Projects
          </h1>
          <p className="mt-4 text-sm text-[#1a1a18]/45 font-mono uppercase tracking-[0.08em] max-w-md">
            Select a site to explore
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl">
          {sites.map((site, i) => (
            <motion.div
              key={site.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
            >
              <Link
                to={site.route}
                className="group flex h-full border border-[#1a1a18]/[0.07] bg-white/50 hover:bg-white transition-all duration-300 hover:shadow-[0_2px_20px_rgba(0,0,0,0.04)]"
              >
                {/* Color bar */}
                <div
                  className="w-2 md:w-2.5 shrink-0 transition-all duration-300 group-hover:w-3 md:group-hover:w-4"
                  style={{ backgroundColor: site.accent }}
                />

                {/* Content */}
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-between gap-8">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] px-2 py-1 border border-[#1a1a18]/10 text-[#1a1a18]/40 inline-block mb-4">
                      {site.tag}
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold tracking-[-0.03em] text-[#1a1a18]">
                      {site.name}
                    </h2>
                    <p className="mt-2 text-sm text-[#1a1a18]/50 leading-relaxed max-w-xs">
                      {site.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[#1a1a18]/35 group-hover:text-[#1a1a18]/70 transition-colors duration-300">
                    <span>Explore</span>
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="px-8 md:px-12 lg:px-16 py-6 border-t border-[#1a1a18]/[0.06]"
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#1a1a18]/25">
          &copy; 2026 HQ
        </p>
      </motion.footer>
    </div>
  )
}
