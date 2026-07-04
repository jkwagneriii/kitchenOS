const columnClasses = {
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-3',
  4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
}

/**
 * Numbered cell grid — the signature grid-bordered card pattern.
 * items: [{ num, title, desc }]
 * numberStyle: 'display' (large ghost numeral) | 'label' (small mono eyebrow)
 * theme: 'interactive' (accent cell-hover) | 'dark' (static, on bg-surface sections)
 */
export default function CellGrid({ items, columns = 4, numberStyle = 'display', theme = 'interactive' }) {
  const interactive = theme === 'interactive'

  return (
    <div className={`grid ${columnClasses[columns]} ${interactive ? 'grid-bordered' : 'grid-bordered-dark'}`}>
      {items.map((item, i) => (
        <div
          key={item.num || item.title}
          className={`animate-on-scroll stagger-${Math.min(i + 1, 6)} p-8 lg:p-10 ${interactive ? 'cell-hover group' : ''}`}
        >
          {item.num && numberStyle === 'display' && (
            <span className={`font-mono text-[3rem] font-bold leading-none block mb-4 transition-colors ${interactive ? 'text-accent/30 group-hover:text-white' : 'text-white/30'}`}>
              {item.num}
            </span>
          )}
          {item.num && numberStyle === 'label' && (
            <span className={`font-mono text-mono-sm uppercase tracking-widest block mb-4 ${interactive ? 'text-faint group-hover:text-white/50' : 'text-white/40'}`}>
              {item.num}
            </span>
          )}
          <h3 className="text-title text-white mb-3 transition-colors">{item.title}</h3>
          <p className={`font-mono text-mono-body uppercase text-white/60 ${interactive ? 'group-hover:text-white/80' : ''}`}>
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  )
}
