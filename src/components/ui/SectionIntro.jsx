/**
 * Section heading band. Two layouts:
 *  - default: full-width title + optional description (hero-scale header)
 *  - with `meta`: 8/4 split — title/description left, bottom-aligned mono
 *    meta label right (the signature Swiss two-column intro)
 */
export default function SectionIntro({ title, description, meta, padding = 'lg', id }) {
  const padY = padding === 'lg' ? 'py-section-y' : 'py-12'

  if (meta) {
    return (
      <div id={id} className="grid grid-cols-1 md:grid-cols-12">
        <div className={`md:col-span-8 px-8 md:px-12 lg:px-16 ${padY} border-r border-white/10`}>
          <h2 className="text-hero mb-8 tracking-tighter animate-on-scroll">{title}</h2>
          {description && (
            <p className="mono-upper text-muted max-w-xl animate-on-scroll stagger-1">{description}</p>
          )}
        </div>
        <div className={`md:col-span-4 px-8 md:px-10 ${padY} flex items-end`}>
          <p className="font-mono text-mono-sm uppercase tracking-widest text-faint animate-on-scroll stagger-2">
            {meta}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div id={id} className={`px-8 md:px-12 lg:px-16 ${padY} border-b border-white/10`}>
      <h2 className="text-hero tracking-tighter animate-on-scroll">{title}</h2>
      {description && (
        <p className="mono-upper text-muted max-w-xl mt-4 animate-on-scroll stagger-1">{description}</p>
      )}
    </div>
  )
}
