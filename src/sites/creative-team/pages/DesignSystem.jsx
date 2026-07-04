import usePageMeta from '../../../hooks/usePageMeta'
import Hero from '../../../components/ui/Hero'
import SectionIntro from '../../../components/ui/SectionIntro'
import ColorSwatch from '../../../components/ui/ColorSwatch'
import TypeSpecimen from '../../../components/ui/TypeSpecimen'
import { colors, typefaces, typeScale, spacing, layout, motion } from '../../../design-system/tokens'
import { componentRegistry, utilityRegistry } from '../../../design-system/registry'
import PropsTable from '../../../design-system/PropsTable'

const sections = [
  { label: 'Color Tokens', id: 'ds-colors' },
  { label: 'Typography', id: 'ds-typography' },
  { label: 'Spacing & Layout', id: 'ds-spacing' },
  { label: 'Motion', id: 'ds-motion' },
  { label: 'Components', id: 'ds-components' },
  { label: 'Utilities', id: 'ds-utilities' },
]

export default function DesignSystem() {
  usePageMeta('Design System — Creative Team', 'Living component library and design tokens — the building blocks behind every Creative Team page.')

  return (
    <>
      <Hero
        title={<>Design<br />System</>}
        subtitle="The living component library behind every page in this section."
      />

      {/* ── HOW THIS PAGE WORKS + INDEX ─────────────────────────── */}
      <section className="border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-8 px-8 md:px-12 lg:px-16 py-section-y border-r border-white/10">
            <h2 className="text-hero mb-8 tracking-tighter animate-on-scroll">Single Source of Truth</h2>
            <p className="mono-upper text-muted max-w-xl animate-on-scroll stagger-1">
              Every swatch, specimen, and component on this page is rendered from the same tokens and code the production pages import — src/design-system/tokens.js and the component registry. If it looks right here, it is right everywhere.
            </p>
          </div>
          <div className="md:col-span-4 px-8 md:px-10 py-section-y bg-surface">
            <h3 className="font-mono text-mono-sm uppercase tracking-widest text-faint mb-4">Index</h3>
            <div className="space-y-1">
              {sections.map((item, i) => (
                <a key={item.id} href={`#${item.id}`} className="group/link flex items-center justify-between font-mono text-mono-sm uppercase tracking-wider text-white/70 hover:text-white transition-colors">
                  <span>{String(i + 1).padStart(2, '0')}. {item.label}</span>
                  <span className="w-1.5 h-1.5 bg-white/15 group-hover/link:bg-accent flex-shrink-0 ml-2 transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── COLOR TOKENS ────────────────────────────────────────── */}
      <section id="ds-colors" className="border-t border-white/10">
        <SectionIntro
          title="Color Tokens"
          description="Six semantic colors. Reference them by token name (bg-accent, text-muted) — never by hex."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/10">
          {colors.map((color) => (
            <div key={color.hex} className="bg-background p-6 lg:p-8">
              <ColorSwatch {...color} />
              <p className="font-mono text-mono-sm uppercase text-accent mt-3">{color.token}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TYPOGRAPHY ──────────────────────────────────────────── */}
      <section id="ds-typography" className="border-t border-white/10">
        <SectionIntro
          title="Typography"
          description="Two typefaces and a fixed scale of eight fluid styles. Use the scale classes — never ad-hoc font sizes."
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 grid-bordered">
          {typefaces.map((type) => (
            <TypeSpecimen key={type.family} {...type} />
          ))}
        </div>
        <div className="border-t border-white/10">
          {Object.entries(typeScale).map(([name, t]) => (
            <div key={name} className="grid grid-cols-1 lg:grid-cols-12 border-b border-white/10">
              <div className="lg:col-span-3 px-8 md:px-12 lg:px-16 py-6 lg:py-8 border-r border-white/10 flex flex-col justify-center">
                <span className="font-mono text-mono-sm uppercase tracking-widest text-accent">text-{name}</span>
                <span className="font-mono text-mono-sm uppercase text-faint mt-1">{t.size} · {t.fontWeight}</span>
              </div>
              <div className="lg:col-span-6 px-8 md:px-10 py-6 lg:py-8 border-r border-white/10 overflow-hidden">
                <span className={`text-${name} text-white ${name.startsWith('mono') || name === 'label' ? 'font-mono uppercase' : ''}`}>
                  {name.startsWith('mono') || name === 'label' ? 'System label — precision in small sizes' : 'Structured by design'}
                </span>
              </div>
              <div className="lg:col-span-3 px-8 md:px-10 py-6 lg:py-8 flex items-center">
                <span className="font-mono text-mono-body uppercase text-white/50">{t.usage}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SPACING & LAYOUT ────────────────────────────────────── */}
      <section id="ds-spacing" className="border-t border-white/10">
        <SectionIntro
          title="Spacing & Layout"
          description="Fluid section rhythm, a hairline border grid, and zero border radius. Structure comes from borders, not shadows."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 grid-bordered">
          {Object.entries(spacing).map(([name, s]) => (
            <div key={name} className="p-8 lg:p-10">
              <span className="font-mono text-mono-sm uppercase tracking-widest text-accent block mb-2">{name}</span>
              <span className="text-title text-white block mb-3">{s.value}</span>
              <p className="font-mono text-mono-body uppercase text-white/60">{s.usage}</p>
            </div>
          ))}
          <div className="p-8 lg:p-10">
            <span className="font-mono text-mono-sm uppercase tracking-widest text-accent block mb-2">section padding</span>
            <span className="text-title text-white block mb-3">{layout.sectionPad}</span>
            <p className="font-mono text-mono-body uppercase text-white/60">Canonical horizontal padding for full-bleed sections</p>
          </div>
          <div className="p-8 lg:p-10">
            <span className="font-mono text-mono-sm uppercase tracking-widest text-accent block mb-2">radius / max width</span>
            <span className="text-title text-white block mb-3">{layout.borderRadius} · {layout.maxWidth}</span>
            <p className="font-mono text-mono-body uppercase text-white/60">Sharp corners everywhere; pill radius reserved for special cases</p>
          </div>
        </div>
      </section>

      {/* ── MOTION ──────────────────────────────────────────────── */}
      <section id="ds-motion" className="border-t border-white/10">
        <SectionIntro
          title="Motion"
          description="One signature ease, four durations. Reveals use clip-paths and fade-ups; motion always respects prefers-reduced-motion."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 grid-bordered">
          <div className="p-8 lg:p-10">
            <span className="font-mono text-mono-sm uppercase tracking-widest text-accent block mb-2">easing</span>
            <span className="text-title text-white block mb-3">{motion.easeCss}</span>
            <p className="font-mono text-mono-body uppercase text-white/60">Import as motion.ease (framer) or motion.easeCss from tokens</p>
          </div>
          <div className="p-8 lg:p-10">
            <span className="font-mono text-mono-sm uppercase tracking-widest text-accent block mb-2">durations</span>
            <span className="text-title text-white block mb-3">
              {Object.entries(motion.durations).map(([k, v]) => `${k} ${v}s`).join(' · ')}
            </span>
            <p className="font-mono text-mono-body uppercase text-white/60">Scroll staggers step by {motion.staggerStep * 1000}ms (.stagger-1…6)</p>
          </div>
        </div>
      </section>

      {/* ── COMPONENTS ──────────────────────────────────────────── */}
      <section id="ds-components" className="border-t border-white/10">
        <SectionIntro
          title="Components"
          description="The shared library in src/components/ui. Each demo below is the real component — registered once in the registry, documented forever."
          meta={`${componentRegistry.length} Registered Components`}
        />
        {componentRegistry.map((entry) => (
          <div key={entry.name} className="border-t border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-4 px-8 md:px-12 lg:px-16 py-10 lg:py-12 border-r border-white/10">
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

      {/* ── UTILITIES ───────────────────────────────────────────── */}
      <section id="ds-utilities" className="border-t border-white/10">
        <SectionIntro
          title="System Utilities"
          description="CSS utilities defined in src/index.css that carry the signature look. Reach for these before writing new styles."
        />
        <div>
          {utilityRegistry.map((u) => (
            <div key={u.className} className="grid grid-cols-1 lg:grid-cols-12 border-b border-white/10">
              <div className="lg:col-span-4 px-8 md:px-12 lg:px-16 py-6 border-r border-white/10">
                <span className="font-mono text-mono-body uppercase text-accent">.{u.className}</span>
              </div>
              <div className="lg:col-span-8 px-8 md:px-10 py-6">
                <span className="font-mono text-mono-body uppercase text-white/60">{u.description}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
