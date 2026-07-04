/**
 * Large stat display — hero-scale value with a mono label beneath.
 */
export default function StatBlock({ value, label, className = '' }) {
  return (
    <div className={`animate-on-scroll ${className}`}>
      <span className="text-hero text-white block mb-2">{value}</span>
      <span className="font-mono text-mono-sm uppercase tracking-widest text-faint">{label}</span>
    </div>
  )
}
