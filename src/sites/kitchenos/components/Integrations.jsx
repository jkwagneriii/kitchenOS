const categories = [
  { title: 'POS Systems', items: ['Toast', 'Square', 'Clover'] },
  { title: 'Accounting', items: ['QuickBooks', 'Xero'] },
  { title: 'Suppliers', items: ['US Foods', 'Sysco', 'Restaurant Depot'] },
  { title: 'Delivery Platforms', items: ['Uber Eats', 'DoorDash'] },
]

export default function Integrations() {
  return (
    <section id="integrations" className="border-t border-[#2A2A22]">
      {/* Full-width header */}
      <div className="px-8 md:px-12 lg:px-16 py-section-y border-b border-[#2A2A22]">
        <h2 className="text-hero animate-on-scroll">Works With Your Existing Tools</h2>
      </div>

      {/* 4-column bento grid — full width */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-bordered">
        {categories.map((cat, i) => (
          <div key={cat.title}
               className={`animate-on-scroll stagger-${i + 1} p-8 lg:p-10`}>
            <h3 className="text-title mb-6">{cat.title}</h3>
            <ul className="space-y-3">
              {cat.items.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-[#2A2A22] flex items-center justify-center flex-shrink-0">
                    <span className="font-mono text-[9px] text-white font-bold uppercase">{item.slice(0, 2)}</span>
                  </span>
                  <span className="font-mono text-mono-body uppercase text-ink-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
