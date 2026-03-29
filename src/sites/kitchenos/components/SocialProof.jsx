export default function SocialProof() {
  return (
    <section className="bg-[#2A2A22] border-t border-b border-[#2A2A22]">
      <div className="grid grid-cols-1 md:grid-cols-12 border-l border-[#2A2A22]">
        {/* Label */}
        <div className="md:col-span-3 px-8 py-5 border-r border-white/10 border-b md:border-b-0">
          <p className="font-mono text-mono-sm uppercase tracking-widest text-white/70">
            Trusted by kitchens nationwide
          </p>
        </div>
        {/* Company names */}
        <div className="md:col-span-7 px-8 py-5 border-r border-white/10 flex flex-wrap items-center gap-8 lg:gap-12 border-b md:border-b-0">
          {['Urban Table Group', 'Harvest Kitchens', 'North Fork Hospitality', 'Kitchen District', 'Maple Street Eats'].map((name) => (
            <span key={name} className="font-mono text-mono-sm uppercase tracking-wider text-white/60 hover:text-white transition-colors duration-300">
              {name}
            </span>
          ))}
        </div>
        {/* Count */}
        <div className="md:col-span-2 px-8 py-5">
          <p className="font-mono text-mono-sm uppercase tracking-widest text-[#A8CC2C]">
            10,000+ kitchens
          </p>
        </div>
      </div>
    </section>
  )
}
