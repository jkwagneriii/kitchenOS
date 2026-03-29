const articles = [
  {
    title: 'KitchenOS Partners with National Restaurant Association on Next-Gen Kitchen Standards',
    desc: 'Operational intelligence platform integrates with industry standards body to define modern kitchen management benchmarks.',
    date: 'January 15, 2026',
  },
  {
    title: 'KitchenOS Launches Advanced Waste Analytics with AI-Powered Forecasting',
    desc: 'Next-generation capability delivers predictive waste reduction across multi-location restaurant groups.',
    date: 'January 7, 2026',
  },
  {
    title: 'KitchenOS Named Top Kitchen Management Platform by Restaurant Technology Magazine',
    desc: 'Industry publication recognizes KitchenOS leadership in transforming kitchen operations.',
    date: 'December 23, 2025',
  },
  {
    title: 'KitchenOS Awarded Key Contract for America\'s Largest Hospital Kitchen Network',
    desc: 'Company selected to modernize kitchen operations across 200+ healthcare facilities.',
    date: 'December 4, 2025',
  },
  {
    title: 'Reducing Food Waste at Scale with KitchenOS Analytics',
    desc: 'How data-driven waste monitoring is saving restaurant groups millions.',
    date: 'December 3, 2025',
  },
  {
    title: 'Building a More Efficient Future for Commercial Kitchens',
    desc: 'KitchenOS is building the operational backbone for the next generation.',
    date: 'November 21, 2025',
  },
]

export default function NewsGrid() {
  return (
    <section className="border-t border-[#2A2A22]">
      {/* Full-width header */}
      <div className="px-8 md:px-12 lg:px-16 py-section-y border-b border-[#2A2A22]">
        <h2 className="text-hero animate-on-scroll">Latest Insights</h2>
      </div>

      {/* Sticky sidebar layout: left sticky image, right scrolling cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left — Sticky portrait video column */}
        <div className="lg:col-span-5 border-r border-[#2A2A22] relative">
          <div className="sticky top-0 h-64 lg:h-screen overflow-hidden bg-[#2A2A22]">
            <video
              className="w-full h-full object-cover grayscale-img"
              autoPlay muted loop playsInline
            >
              <source src="/kitchenos/video-portrait.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Right — Scrolling news cards */}
        <div className="lg:col-span-7">
          {articles.map((a, i) => {
            const isDark = i === 3
            return (
              <div key={i}
                   className={`animate-on-scroll stagger-${Math.min(i + 1, 6)} border-b border-[#2A2A22] last:border-b-0 h-[40vh] flex flex-col justify-end p-8 lg:p-12 group cursor-pointer transition-colors duration-300
                     ${isDark ? 'bg-[#2A2A22] text-white hover:bg-[#2A2A22]/90' : 'bg-[#DBD4C9] hover:bg-surface-light'}`}>
                <p className={`font-mono text-mono-sm uppercase tracking-widest mb-4 ${isDark ? 'text-white/25' : 'text-ink-faint'}`}>{a.date}</p>
                <h3 className={`text-4xl uppercase font-bold tracking-tighter mb-3 transition-colors duration-300
                  ${isDark ? 'text-white group-hover:text-[#455602]' : 'group-hover:text-[#455602]'}`}>
                  {a.title}
                </h3>
                <p className={`mono-upper ${isDark ? 'text-white/40' : 'text-ink-muted'}`}>{a.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
