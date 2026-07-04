/**
 * Filter chip / toggle tag. Square, mono-uppercase, accent when active.
 */
export default function Tag({ label, active = false, onClick, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest border transition-colors duration-200 cursor-pointer ${
        active
          ? 'border-accent bg-accent text-white'
          : 'border-white/15 text-white/50 hover:border-white/30 hover:text-white'
      } ${className}`}
    >
      {label}
    </button>
  )
}
