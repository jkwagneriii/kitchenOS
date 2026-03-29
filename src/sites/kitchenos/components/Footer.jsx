const columns = [
  { title: 'Product', links: ['Features', 'Integrations', 'Pricing', 'Security'] },
  { title: 'Company', links: ['About', 'Careers', 'Press'] },
  { title: 'Resources', links: ['Blog', 'Case Studies', 'Help Center', 'API Docs'] },
]

export default function Footer() {
  return (
    <footer className="bg-[#455602] text-[#DBD4C9] border-t border-[#2A2A22] relative z-30 footer-pileup">
      {/* Nav columns — full width 12-col grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12">
        {/* Brand block */}
        <div className="col-span-2 md:col-span-4 lg:col-span-4 px-8 md:px-12 lg:px-16 py-12 border-r border-[#DBD4C9]/20 border-b border-[#DBD4C9]/20">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-8 h-8 bg-[#DBD4C9] flex items-center justify-center">
              <span className="font-mono text-[10px] font-bold text-[#455602] leading-none tracking-tight">KO</span>
            </div>
            <span className="text-sm font-bold tracking-tight uppercase">KITCH<span className="inline-block w-[3px] h-[0.85em] bg-current transform -skew-x-[20deg] mx-[0.1em] translate-y-[0.05em]" />OS</span>
          </div>
          <p className="font-mono text-mono-body uppercase text-[#DBD4C9]/40 max-w-sm">
            The kitchen management platform built for speed, clarity, and control.
          </p>
        </div>

        {/* Nav columns */}
        {columns.map((col, i) => (
          <div key={col.title} className={`lg:col-span-2 px-8 py-12 border-r border-[#DBD4C9]/20 border-b border-[#DBD4C9]/20 ${i === 0 ? 'lg:col-start-6' : ''}`}>
            <h4 className="font-mono text-mono-sm uppercase tracking-widest mb-5">{col.title}</h4>
            <ul className="space-y-3">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="font-mono text-mono-body uppercase text-[#DBD4C9]/40 hover:text-[#DBD4C9] transition-colors duration-300 cursor-pointer">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="relative overflow-hidden">
        <div className="absolute bottom-0 left-0 pointer-events-none select-none" aria-hidden="true">
          <span className="font-sans text-[20vw] font-bold text-[#DBD4C9]/[0.08] leading-none block -mb-[0.15em]">K<span className="inline-block w-[0.04em] h-[0.65em] bg-current transform -skew-x-[20deg] mx-[0.02em]" />OS</span>
        </div>

        <div className="relative z-10 px-8 md:px-12 lg:px-16 py-8 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-mono-sm uppercase text-[#DBD4C9]/30">
          <p>&copy; 2026 KitchenOS. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#DBD4C9] transition-colors duration-300 cursor-pointer">Privacy Policy</a>
            <a href="#" className="hover:text-[#DBD4C9] transition-colors duration-300 cursor-pointer">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
