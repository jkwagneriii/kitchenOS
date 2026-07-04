/**
 * Prop documentation rows for registry entries — shared by the Design System
 * and Lab pages.
 */
export default function PropsTable({ props }) {
  return (
    <div className="border-t border-white/10">
      {props.map((p) => (
        <div key={p.name} className="grid grid-cols-12 gap-4 px-8 md:px-10 py-3 border-b border-white/10 font-mono text-mono-body uppercase">
          <span className="col-span-4 lg:col-span-3 text-white">{p.name}</span>
          <span className="col-span-5 lg:col-span-6 text-white/50">{p.type}</span>
          <span className="col-span-3 text-faint text-right">{p.def}</span>
        </div>
      ))}
    </div>
  )
}
