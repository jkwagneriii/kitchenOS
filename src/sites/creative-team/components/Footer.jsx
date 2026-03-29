import { Link } from 'react-router-dom'

const columns = [
  {
    title: 'Brand',
    links: [
      { label: 'Brand Identity', to: '/creative-team' },
      { label: 'Messaging', to: '/creative-team/messaging' },
      { label: 'Media Assets', to: '/creative-team/media' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Creative Request', to: '/creative-team/request' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-surface text-white border-t border-white/10 relative z-30 footer-pileup">
      {/* Nav columns — full width 12-col grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12">
        {/* Brand block */}
        <div className="col-span-2 md:col-span-4 lg:col-span-4 px-8 md:px-12 lg:px-16 py-12 border-r border-white/10 border-b border-white/10">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-8 h-8 bg-accent flex items-center justify-center">
              <span className="font-mono text-[10px] font-bold text-white leading-none tracking-tight">CT</span>
            </div>
            <span className="text-sm font-bold tracking-tight uppercase">Creative Team</span>
          </div>
          <p className="font-mono text-mono-body uppercase text-white/40 max-w-sm">
            The internal brand portal for Creative Team™ — guidelines, assets, and resources.
          </p>
        </div>

        {/* Nav columns */}
        {columns.map((col, i) => (
          <div key={col.title} className={`lg:col-span-2 px-8 py-12 border-r border-white/10 border-b border-white/10 ${i === 0 ? 'lg:col-start-7' : ''}`}>
            <h4 className="font-mono text-mono-sm uppercase tracking-widest mb-5">{col.title}</h4>
            <ul className="space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="font-mono text-mono-body uppercase text-white/40 hover:text-accent transition-colors duration-300 cursor-pointer">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="relative overflow-hidden">
        <div className="absolute bottom-0 left-0 pointer-events-none select-none" aria-hidden="true">
          <span className="font-sans text-[20vw] font-bold text-white/[0.08] leading-none block -mb-[0.15em]">CT</span>
        </div>

        <div className="relative z-10 px-8 md:px-12 lg:px-16 py-8 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-mono-sm uppercase text-white/30">
          <p>&copy; 2026 Creative Team™. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-accent transition-colors duration-300 cursor-pointer">Internal Use Only</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
