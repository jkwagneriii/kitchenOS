const plans = [
  {
    name: 'Starter',
    audience: 'Best for single kitchens',
    price: '$79',
    period: '/ month',
    features: ['Inventory tracking', 'Prep lists', 'Supplier ordering', 'Mobile dashboard'],
    cta: 'Start Free Trial',
    featured: false,
  },
  {
    name: 'Growth',
    audience: 'Best for multi-location restaurants',
    price: '$149',
    period: '/ month',
    features: ['Everything in Starter, plus:', 'Multi-location management', 'Advanced analytics', 'Integrations'],
    cta: 'Start Free Trial',
    featured: true,
  },
  {
    name: 'Enterprise',
    audience: 'For restaurant groups',
    price: 'Custom',
    period: '',
    features: ['API access', 'Enterprise integrations', 'Dedicated onboarding', 'Priority support'],
    cta: 'Contact Sales',
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-t border-[#2A2A22]">
      {/* Full-width header */}
      <div className="px-8 md:px-12 lg:px-16 py-section-y border-b border-[#2A2A22]">
        <h2 className="text-hero animate-on-scroll">Simple Pricing for Kitchens of Every Size</h2>
      </div>

      {/* 3-column full-width pricing grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 grid-bordered">
        {plans.map((p, i) => (
          <div key={p.name}
               className={`animate-on-scroll stagger-${i + 1} p-8 lg:p-10 flex flex-col
                 ${p.featured ? 'bg-[#455602] text-black' : 'bg-[#DBD4C9]'}`}>
            <div className="mb-8">
              <h3 className="text-title">{p.name}</h3>
              <p className={`font-mono text-mono-body uppercase mt-1 ${p.featured ? 'text-black/50' : 'text-ink-muted'}`}>{p.audience}</p>
            </div>

            <div className="mb-8">
              <span className="font-mono text-[2.5rem] font-bold leading-none">{p.price}</span>
              {p.period && <span className={`font-mono text-mono-body uppercase ml-1 ${p.featured ? 'text-black/50' : 'text-ink-muted'}`}>{p.period}</span>}
            </div>

            <ul className="space-y-3 mb-10 flex-1">
              {p.features.map((f) => (
                <li key={f} className={`flex items-start gap-2.5 font-mono text-mono-body uppercase ${p.featured ? 'text-black/70' : 'text-ink-muted'}`}>
                  <span className={`mt-1.5 w-1.5 h-1.5 flex-shrink-0 ${p.featured ? 'bg-[#2A2A22]' : 'bg-[#455602]'}`} />
                  {f}
                </li>
              ))}
            </ul>

            <button className={`w-full py-3.5 font-mono text-mono-body uppercase tracking-widest border border-[#2A2A22] cursor-pointer transition-all duration-300
              ${p.featured
                ? 'text-black hover:bg-[#2A2A22] hover:text-[#455602]'
                : 'text-black hover:bg-[#2A2A22] hover:text-white'}`}>
              {p.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
