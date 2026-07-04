/**
 * Scroll-stacking cards — each card pins beneath the last with a stepped
 * offset as you scroll, building a pile. Pure CSS sticky; the global
 * reduced-motion rule flattens it to a normal list.
 * items: [{ num, title, desc }]
 */
export default function StickyStack({ items, topOffset = 96 }) {
  return (
    <div className="space-y-6">
      {items.map((item, i) => (
        <div
          key={item.title}
          className="sticky"
          style={{ top: topOffset + i * 20 }}
        >
          <div className="bg-surface border border-white/15 px-8 md:px-10 py-10 min-h-[220px] shadow-[0_-12px_40px_rgba(0,0,0,0.4)]">
            <div className="flex items-baseline justify-between mb-4">
              <span className="font-mono text-[3rem] font-bold text-accent/40 leading-none">{item.num}</span>
              <span className="font-mono text-mono-sm uppercase tracking-widest text-faint">
                {String(i + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
              </span>
            </div>
            <h3 className="text-title text-white mb-3">{item.title}</h3>
            <p className="font-mono text-mono-body uppercase text-white/60 max-w-xl">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
