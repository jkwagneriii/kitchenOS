import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const links = [
  { label: 'Brand Identity', to: '/' },
  { label: 'Messaging', to: '/messaging' },
  { label: 'Media Assets', to: '/media' },
  { label: 'Creative Request', to: '/request' },
  { label: 'Design System', to: '/system' },
  { label: 'The Lab', to: '/lab' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Fixed nav bar — full width */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled && !open ? 'bg-[#212121]/85 backdrop-blur-md' : ''}`}>
        <div className="flex items-center justify-between px-8 md:px-12 lg:px-16 pt-6 pb-4">
          <div className="flex items-center gap-4">
            {/* Logo */}
            <NavLink to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-accent flex items-center justify-center">
                <span className="font-mono text-[10px] font-bold text-white leading-none tracking-tight">CT</span>
              </div>
              <span className={`text-sm font-bold tracking-tight uppercase transition-colors duration-300 ${scrolled && !open ? 'text-white/80' : 'text-white'}`}>Creative Team</span>
            </NavLink>
          </div>

          {/* MENU button */}
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-3 cursor-pointer group"
            aria-label="Toggle menu"
          >
            <span className="flex flex-col gap-[5px]">
              <span className={`block w-6 h-[2px] transition-all duration-300 origin-center ${scrolled && !open ? 'bg-white/80' : 'bg-white'} ${open ? 'rotate-45 translate-y-[7px] !bg-white' : ''}`} />
              <span className={`block w-6 h-[2px] transition-all duration-300 ${scrolled && !open ? 'bg-white/80' : 'bg-white'} ${open ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-[2px] transition-all duration-300 origin-center ${scrolled && !open ? 'bg-white/80' : 'bg-white'} ${open ? '-rotate-45 -translate-y-[7px] !bg-white' : ''}`} />
            </span>
            <span className={`font-mono text-mono-sm uppercase tracking-widest hidden sm:block transition-colors duration-300 ${scrolled && !open ? 'text-white/80' : 'text-white'} ${open ? '!text-white' : ''}`}>Menu</span>
          </button>
        </div>
      </nav>

      {/* Full-screen overlay menu */}
      <div className={`fixed inset-0 z-40 bg-[#212121] transition-all duration-500 flex flex-col justify-center ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="px-8 md:px-12 lg:px-16 w-full">
          <div className="flex flex-col gap-4">
            {links.map((l, i) => (
              <NavLink key={l.label} to={l.to} end
                 className={({ isActive }) =>
                   `text-hero transition-colors duration-300 cursor-pointer tracking-tighter ${isActive ? 'text-accent' : 'text-white hover:text-accent'}`
                 }
                 style={{ animationDelay: `${i * 0.05}s` }}>
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
