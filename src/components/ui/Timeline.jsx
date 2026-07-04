/**
 * Vertical timeline — accent nodes on a hairline rail.
 * items: [{ meta, title, desc }] (meta = date or step label)
 */
export default function Timeline({ items }) {
  return (
    <div className="relative pl-8">
      <span className="absolute left-[3px] top-2 bottom-2 w-px bg-white/10" aria-hidden="true" />
      <div className="space-y-10">
        {items.map((item, i) => (
          <div key={item.title} className={`relative animate-on-scroll stagger-${Math.min(i + 1, 6)}`}>
            <span className="absolute -left-8 top-1.5 w-[7px] h-[7px] bg-accent" aria-hidden="true" />
            <span className="font-mono text-mono-sm uppercase tracking-widest text-faint block mb-2">{item.meta}</span>
            <h3 className="text-title text-white mb-2">{item.title}</h3>
            <p className="font-mono text-mono-body uppercase text-white/60 max-w-xl">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
