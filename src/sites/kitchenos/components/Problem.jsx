const painPoints = [
  {
    title: 'Inventory Guesswork',
    desc: 'You never know what ingredients are running low until it\'s too late.',
  },
  {
    title: 'Prep List Confusion',
    desc: 'Staff struggle to stay aligned on daily prep tasks.',
  },
  {
    title: 'Supplier Inefficiency',
    desc: 'Ordering from multiple vendors eats up valuable time.',
  },
  {
    title: 'Food Waste',
    desc: 'Poor tracking leads to over-ordering and unnecessary waste.',
  },
]

export default function Problem() {
  return (
    <section className="border-t border-[#2A2A22]">
      {/* Full-width 12-col header row */}
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-8 px-8 md:px-12 lg:px-16 py-section-y border-r border-[#2A2A22]">
          <h2 className="text-hero mb-8 animate-on-scroll">
            Running a Kitchen Shouldn&rsquo;t Be Chaos
          </h2>
          <p className="mono-upper text-ink-muted max-w-xl animate-on-scroll stagger-1">
            Most kitchens rely on spreadsheets, whiteboards, and disconnected systems. That leads to wasted food, missed prep, and costly ordering mistakes.
          </p>
        </div>
        <div className="md:col-span-4 px-8 md:px-10 py-section-y flex items-end">
          <p className="font-mono text-mono-sm uppercase tracking-widest text-ink-faint animate-on-scroll stagger-2">
            04 Core Problems
          </p>
        </div>
      </div>

      {/* 2x2 bento grid — full width */}
      <div className="grid grid-cols-1 md:grid-cols-2 grid-bordered">
        {painPoints.map((p, i) => (
          <div key={p.title}
               className={`animate-on-scroll stagger-${i + 1} p-8 lg:p-12 cell-hover group`}>
            <span className="font-mono text-mono-sm text-ink-faint uppercase tracking-widest block mb-4 group-hover:text-white/50">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="text-title mb-4 group-hover:text-white transition-colors duration-300">{p.title}</h3>
            <p className="mono-upper text-ink-muted group-hover:text-white/70">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
