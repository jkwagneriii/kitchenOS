import { Link } from 'react-router-dom'

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
      <header
        className="px-8 md:px-12 lg:px-16 pt-10 pb-6 flex items-center justify-between animate-[slideUp_0.6s_ease-out]"
      >
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 bg-[#1a1a18] flex items-center justify-center">
            <span className="font-mono text-[9px] font-bold text-[#F5F3EF] leading-none tracking-tight">HQ</span>
          </div>
          <span className="text-xs font-mono uppercase tracking-[0.15em] text-[#1a1a18]/75">Site Index</span>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 flex flex-col justify-center px-8 md:px-12 lg:px-16 pb-20">
        <div
          className="mb-12 md:mb-16 animate-[slideUp_0.5s_ease-out_0.15s_both]"
        >
          <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[0.92] tracking-[-0.04em] text-[#1a1a18]">
            Projects
          </h1>
          <p className="mt-4 text-sm text-[#1a1a18]/75 font-mono uppercase tracking-[0.08em] max-w-md">
            Select a site to explore
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl">
          {sites.map((site, i) => (
            <div
              key={site.name}
              className="animate-[slideUp_0.5s_ease-out_both]"
              style={{ animationDelay: `${0.25 + i * 0.1}s` }}
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
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] px-2 py-1 border border-[#1a1a18]/10 text-[#1a1a18]/75 inline-block mb-4">
                      {site.tag}
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold tracking-[-0.03em] text-[#1a1a18]">
                      {site.name}
                    </h2>
                    <p className="mt-2 text-sm text-[#1a1a18]/75 leading-relaxed max-w-xs">
                      {site.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[#1a1a18]/75 group-hover:text-[#1a1a18]/80 transition-colors duration-300">
                    <span>Explore</span>
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer
        className="px-8 md:px-12 lg:px-16 py-6 border-t border-[#1a1a18]/[0.06] animate-[slideUp_0.5s_ease-out_0.5s_both]"
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#1a1a18]/75">
          &copy; 2026 HQ
        </p>
      </footer>
    </div>
  )
}
