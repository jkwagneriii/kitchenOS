const steps = [
  { num: '01', title: 'Connect Your Menu', desc: 'Import menu items and ingredients.' },
  { num: '02', title: 'Sync Suppliers', desc: 'Add your vendors and price lists.' },
  { num: '03', title: 'Track Kitchen Activity', desc: 'Inventory, prep, and orders automatically update.' },
  { num: '04', title: 'Optimize Operations', desc: 'Use real-time insights to reduce waste and save money.' },
]

export default function HowItWorks() {
  return (
    <section className="bg-[#2A2A22] text-white border-t border-[#2A2A22]">
      {/* Full-width header */}
      <div className="px-8 md:px-12 lg:px-16 py-section-y border-b border-white/10">
        <h2 className="text-hero text-white animate-on-scroll">Getting Started Takes Minutes</h2>
      </div>

      {/* 4-column steps — full width with vertical dividers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-bordered-dark">
        {steps.map((s, i) => (
          <div key={s.num}
               className={`animate-on-scroll stagger-${i + 1} p-8 lg:p-10`}>
            <span className="font-mono text-[3rem] font-bold text-[#455602]/30 leading-none block mb-4">{s.num}</span>
            <h3 className="text-title text-white mb-3">{s.title}</h3>
            <p className="font-mono text-mono-body uppercase text-white/60">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
