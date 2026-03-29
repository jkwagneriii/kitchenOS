const testimonials = [
  {
    quote: 'KitchenOS completely changed how we run prep and ordering. Our team wastes less time and our food costs dropped within the first month.',
    name: 'Executive Chef',
    company: 'Harvest Kitchens',
  },
  {
    quote: 'Before KitchenOS we were juggling spreadsheets. Now everything lives in one system.',
    name: 'Operations Director',
    company: 'Urban Table Group',
  },
  {
    quote: 'Our multi-location kitchens are finally operating on the same system.',
    name: 'Restaurant Owner',
    company: 'Maple Street Eats',
  },
]

export default function Testimonials() {
  return (
    <section id="resources" className="bg-[#2A2A22] text-white border-t border-[#2A2A22]">
      {/* Full-width header */}
      <div className="px-8 md:px-12 lg:px-16 py-section-y border-b border-white/10">
        <h2 className="text-hero text-white animate-on-scroll">What Kitchen Teams Are Saying</h2>
      </div>

      {/* 3-column grid — full width with gap dividers */}
      <div className="grid grid-cols-1 lg:grid-cols-3 grid-bordered-dark">
        {testimonials.map((t, i) => (
          <div key={i}
               className={`animate-on-scroll stagger-${i + 1} p-8 lg:p-10 flex flex-col justify-between`}>
            <div>
              <span className="font-mono text-[3rem] text-[#455602]/30 leading-none block mb-4">&ldquo;</span>
              <p className="text-title text-white mb-8 leading-snug">{t.quote}</p>
            </div>
            <div className="border-t border-white/10 pt-4">
              <p className="font-mono text-mono-body uppercase text-white/70">{t.name}</p>
              <p className="font-mono text-mono-sm uppercase text-white/60">{t.company}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
