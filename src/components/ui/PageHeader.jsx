export default function PageHeader({ title, subtitle, accent = false }) {
  return (
    <div className={`px-8 md:px-12 lg:px-16 py-section-y border-b border-white/10 ${accent ? 'bg-accent' : ''}`}>
      <h2 className="text-hero tracking-tighter animate-on-scroll">{title}</h2>
      {subtitle && (
        <p className="mono-upper text-muted max-w-xl mt-4 animate-on-scroll stagger-1">{subtitle}</p>
      )}
    </div>
  )
}
