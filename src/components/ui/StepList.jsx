/**
 * Vertical numbered step list — accent numeral gutter, title + mono description.
 * steps: [{ num, title, desc }]
 */
export default function StepList({ steps }) {
  return (
    <div className="space-y-6">
      {steps.map((step) => (
        <div key={step.num} className="flex gap-4">
          <span className="font-mono text-mono-sm text-accent/50 flex-shrink-0 pt-1">{step.num}</span>
          <div>
            <h3 className="text-title text-white mb-1">{step.title}</h3>
            <p className="font-mono text-mono-body uppercase text-white/60">{step.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
