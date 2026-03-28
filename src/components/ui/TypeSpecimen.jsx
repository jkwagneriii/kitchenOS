export default function TypeSpecimen({ family, weights, usage, sampleText = 'Aa Bb Cc Dd Ee 0123456789', className = '' }) {
  return (
    <div className={`animate-on-scroll p-8 lg:p-10 ${className}`}>
      <h4 className="font-mono text-mono-sm uppercase tracking-widest text-faint mb-6">{family}</h4>
      <div className="space-y-4 mb-6">
        {weights.map((w) => (
          <p
            key={w.label}
            className="text-display text-white leading-tight"
            style={{ fontFamily: family, fontWeight: w.weight, fontStyle: w.italic ? 'italic' : 'normal' }}
          >
            {sampleText}
          </p>
        ))}
      </div>
      <div className="border-t border-white/10 pt-4 space-y-1">
        {weights.map((w) => (
          <p key={w.label} className="font-mono text-mono-body uppercase text-white/30">
            {w.label} — {w.weight}
          </p>
        ))}
      </div>
      {usage && (
        <p className="font-mono text-mono-body uppercase text-white/20 mt-4">{usage}</p>
      )}
    </div>
  )
}
