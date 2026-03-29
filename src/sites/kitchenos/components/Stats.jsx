import { FallingPattern } from '../../../components/ui/FallingPattern'

const metrics = [
  { value: '30%', label: 'Reduction in Food Waste' },
  { value: '20%', label: 'Faster Prep Coordination' },
  { value: '15%', label: 'Lower Ingredient Costs' },
  { value: '5+hrs', label: 'Saved Per Week on Ordering' },
]

export default function Stats() {
  return (
    <section className="relative bg-[#455602] text-[#DBD4C9] border-t border-[#2A2A22] overflow-hidden">
      {/* Falling pattern background */}
      <div className="absolute inset-0 z-0">
        <FallingPattern
          color="rgba(219,212,201,0.25)"
          backgroundColor="#455602"
          duration={150}
          blurIntensity="1em"
          density={1}
          className="h-full"
        />
      </div>

      {/* Full-width header */}
      <div className="relative z-10 px-8 md:px-12 lg:px-16 py-section-y border-b border-[#DBD4C9]/20">
        <h2 className="text-hero animate-on-scroll">
          Kitchens Using KitchenOS See Immediate Results
        </h2>
      </div>

      {/* 4-column metrics — full width */}
      <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 grid-bordered-dark">
        {metrics.map((m, i) => (
          <div key={m.label} className={`animate-on-scroll stagger-${i + 1} p-8 lg:p-10`}>
            <p className="font-mono text-[clamp(2.5rem,5vw,4rem)] font-bold leading-none mb-3">{m.value}</p>
            <p className="font-mono text-mono-body uppercase text-[#DBD4C9]/50">{m.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
