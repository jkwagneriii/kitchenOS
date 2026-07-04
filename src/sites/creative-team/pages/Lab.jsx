import usePageMeta from '../../../hooks/usePageMeta'
import Hero from '../../../components/ui/Hero'
import SectionIntro from '../../../components/ui/SectionIntro'
import StatusBadge from '../../../components/ui/StatusBadge'
import Marquee from '../../../components/ui/Marquee'
import PropsTable from '../../../design-system/PropsTable'
import { experimentRegistry } from '../../../design-system/experiments'

export default function Lab() {
  usePageMeta('The Lab — Creative Team', 'Experimental design-system components staged for promotion into the core library.')

  return (
    <>
      <Hero
        title={<>The<br />Lab</>}
        subtitle="Experimental components, staged for the core system."
      />

      <Marquee text="Experimental — Interfaces Under Test" speed={22} />

      {/* ── HOW THE LAB WORKS ───────────────────────────────────── */}
      <section className="border-t border-white/10">
        <SectionIntro
          title="Proving Ground"
          description="Everything here is real, importable code from src/components/ui — documented in the experiment registry, exercised on this page, and promoted to the Design System once it has earned a place. Nothing ships to a production page while it still lives in the Lab."
          meta={`${experimentRegistry.length} Experiments — In Review`}
        />
      </section>

      {/* ── EXPERIMENTS ─────────────────────────────────────────── */}
      <section>
        {experimentRegistry.map((entry, i) => (
          <div key={entry.name} className="border-t border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-4 px-8 md:px-12 lg:px-16 py-10 lg:py-12 border-r border-white/10">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-mono text-mono-sm uppercase tracking-widest text-faint">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <StatusBadge status="in-review" label="Experimental" />
                </div>
                <h3 className="text-display text-white mb-3 animate-on-scroll">{entry.name}</h3>
                <p className="font-mono text-mono-sm uppercase text-accent mb-4 animate-on-scroll stagger-1">{entry.path}</p>
                <p className="mono-upper text-muted mb-4 animate-on-scroll stagger-1">{entry.description}</p>
                <p className="font-mono text-mono-body uppercase text-white/50 animate-on-scroll stagger-2">{entry.usage}</p>
              </div>
              <div className="lg:col-span-8 flex flex-col">
                <div className="flex-1">{entry.demo}</div>
                <PropsTable props={entry.props} />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ── PROMOTION PATH ──────────────────────────────────────── */}
      <section className="border-t border-white/10 bg-surface">
        <div className="px-8 md:px-12 lg:px-16 py-section-y">
          <h2 className="text-hero tracking-tighter mb-8 animate-on-scroll">Promotion Path</h2>
          <p className="mono-upper text-muted max-w-xl animate-on-scroll stagger-1">
            When an experiment proves itself on a real page, its entry moves from the experiment registry to the component registry — the demos and documentation travel with it, and it appears in the Design System automatically.
          </p>
        </div>
      </section>
    </>
  )
}
