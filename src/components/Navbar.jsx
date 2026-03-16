import { useState, useEffect } from 'react'

const links = [
  { label: 'Product', href: '#product' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Integrations', href: '#integrations' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Resources', href: '#resources' },
  { label: 'Sign In', href: '#' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Fixed nav bar — full width */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled && !open ? 'bg-[#2A2A22]/85 backdrop-blur-md' : ''}`}>
        <div className="flex items-center justify-between px-8 md:px-12 lg:px-16 pt-6 pb-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-[#2A2A22] flex items-center justify-center">
              <span className="font-mono text-[10px] font-bold text-white leading-none tracking-tight">KO</span>
            </div>
            <span className={`text-sm font-bold tracking-tight uppercase transition-colors duration-300 ${scrolled && !open ? 'text-[#DBD4C9]' : 'text-[#2A2A22]'}`}>KITCH<span className="inline-block w-[3px] h-[0.85em] bg-current transform -skew-x-[20deg] mx-[0.1em] translate-y-[0.05em]" />OS</span>
          </a>

          {/* MENU button */}
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-3 cursor-pointer group"
            aria-label="Toggle menu"
          >
            <span className="flex flex-col gap-[5px]">
              <span className={`block w-6 h-[2px] transition-all duration-300 origin-center ${scrolled && !open ? 'bg-[#DBD4C9]' : 'bg-[#2A2A22]'} ${open ? 'rotate-45 translate-y-[7px] !bg-[#DBD4C9]' : ''}`} />
              <span className={`block w-6 h-[2px] transition-all duration-300 ${scrolled && !open ? 'bg-[#DBD4C9]' : 'bg-[#2A2A22]'} ${open ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-[2px] transition-all duration-300 origin-center ${scrolled && !open ? 'bg-[#DBD4C9]' : 'bg-[#2A2A22]'} ${open ? '-rotate-45 -translate-y-[7px] !bg-[#DBD4C9]' : ''}`} />
            </span>
            <span className={`font-mono text-mono-sm uppercase tracking-widest hidden sm:block transition-colors duration-300 ${scrolled && !open ? 'text-[#DBD4C9]' : 'text-[#2A2A22]'} ${open ? '!text-[#DBD4C9]' : ''}`}>Menu</span>
          </button>
        </div>
      </nav>

      {/* Full-screen overlay menu */}
      <div className={`fixed inset-0 z-40 bg-[#2A2A22] transition-all duration-500 flex flex-col justify-center ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="px-8 md:px-12 lg:px-16 w-full">
          <div className="flex flex-col gap-4">
            {links.map((l, i) => (
              <a key={l.label} href={l.href}
                 onClick={() => setOpen(false)}
                 className="text-hero text-white hover:text-[#455602] transition-colors duration-300 cursor-pointer tracking-tighter"
                 style={{ animationDelay: `${i * 0.05}s` }}>
                {l.label}
              </a>
            ))}
            <a href="#demo" onClick={() => setOpen(false)}
               className="mt-4 inline-flex items-center gap-3 px-8 py-4 border-2 border-[#455602] text-[#455602] font-mono text-mono-body uppercase tracking-widest hover:bg-[#455602] hover:text-[#DBD4C9] transition-all duration-300 cursor-pointer self-start">
              Book Demo
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
