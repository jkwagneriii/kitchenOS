import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import WireframeGrid from '../../../components/ui/WireframeGrid'
import ParallaxImage from '../../../components/ui/ParallaxImage'
import ColorSwatch from '../../../components/ui/ColorSwatch'
import TypeSpecimen from '../../../components/ui/TypeSpecimen'
import { brandColors } from '../data/brandColors'
import { brandTypography } from '../data/brandTypography'

const brandIcons = [
  {
    name: 'Arrow — Diagonal',
    svg: (
      <svg viewBox="0 0 100 100" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="6">
        <line x1="15" y1="85" x2="85" y2="15" />
        <polyline points="40,15 85,15 85,60" />
      </svg>
    ),
  },
  {
    name: 'Grid — 2x2',
    svg: (
      <svg viewBox="0 0 100 100" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="4">
        <rect x="10" y="10" width="35" height="35" />
        <rect x="55" y="10" width="35" height="35" />
        <rect x="10" y="55" width="35" height="35" />
        <rect x="55" y="55" width="35" height="35" />
      </svg>
    ),
  },
  {
    name: 'Stack — Layers',
    svg: (
      <svg viewBox="0 0 100 100" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="4">
        <rect x="20" y="40" width="60" height="40" />
        <rect x="15" y="30" width="60" height="40" opacity="0.5" />
        <rect x="10" y="20" width="60" height="40" opacity="0.25" />
      </svg>
    ),
  },
  {
    name: 'Check — Circle',
    svg: (
      <svg viewBox="0 0 100 100" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="4">
        <circle cx="50" cy="50" r="35" />
        <polyline points="33,50 45,62 67,38" strokeWidth="5" />
      </svg>
    ),
  },
  {
    name: 'Play — Triangle',
    svg: (
      <svg viewBox="0 0 100 100" className="w-12 h-12" fill="currentColor" stroke="none">
        <polygon points="30,20 80,50 30,80" />
      </svg>
    ),
  },
  {
    name: 'Dot — Grid',
    svg: (
      <svg viewBox="0 0 100 100" className="w-12 h-12" fill="currentColor" stroke="none">
        {[20, 40, 60, 80].map((x) =>
          [20, 40, 60, 80].map((y) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="3" />
          ))
        )}
      </svg>
    ),
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export default function CoreBrandIdentity() {
  const dividerRef = useRef(null)
  const dividerInView = useInView(dividerRef, { once: true, amount: 0.1 })

  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="relative border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Left — accent block + landscape video */}
          <div className="lg:col-span-8 xl:col-span-9">
            <div className="bg-accent flex flex-col justify-end px-8 md:px-12 lg:px-16 pb-16 pt-32 lg:pt-24 min-h-[70vh] lg:min-h-[80vh] relative">
              <motion.h1
                className="text-mega text-white mb-8 pb-[0.1em]"
                initial={{ clipPath: 'inset(100% 0 -10% 0)' }}
                animate={{ clipPath: 'inset(0 0 -10% 0)' }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              >
                Creative<br />
                Team<sup className="text-[0.3em] align-super tracking-normal">™</sup>
              </motion.h1>
              <motion.p
                className="text-display text-white/70 max-w-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              >
                Brand Identity Guidelines
              </motion.p>
            </div>

            {/* Landscape video — painting close-up */}
            <motion.div
              className="relative w-full aspect-[16/9] lg:aspect-[16/8] bg-background overflow-hidden border-t border-white/10"
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={{ clipPath: 'inset(0 0% 0 0)' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            >
              <ParallaxImage src="/horizontal1.png" alt="Creative team hero landscape" className="grayscale-img" />
            </motion.div>
          </div>

          {/* Right — brand panel + portrait video */}
          <div className="lg:col-span-4 xl:col-span-3 border-l border-white/10 flex flex-col">
            <motion.div
              className="bg-surface px-8 md:px-10 pt-20 pb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            >
              <h3 className="text-title text-white mb-6">Brand System</h3>
              <div className="space-y-1">
                {[
                  { label: 'Visual Language', id: 'visual-language' },
                  { label: 'Logo & Philosophy', id: 'logo-philosophy' },
                  { label: 'Brand Colors', id: 'brand-colors' },
                  { label: 'Typography', id: 'typography' },
                  { label: 'Brand Icons', id: 'brand-icons' },
                ].map((item, i) => (
                  <a key={item.id} href={`#${item.id}`} className="group/link flex items-center justify-between font-mono text-mono-sm uppercase tracking-wider text-white/40 hover:text-white transition-colors">
                    <span>{String(i + 1).padStart(2, '0')}. {item.label}</span>
                    <span className="w-1.5 h-1.5 bg-white/15 group-hover/link:bg-accent flex-shrink-0 ml-2 transition-colors" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Portrait video — photographer silhouette */}
            <div className="border-t border-white/10 relative">
              <motion.div
                className="relative min-h-[400px] lg:min-h-[650px] bg-background overflow-hidden"
                initial={{ clipPath: 'inset(0 100% 0 0)' }}
                animate={{ clipPath: 'inset(0 0% 0 0)' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
              >
                <ParallaxImage src="/vertical.png" alt="Portrait sidebar" className="grayscale-img" />
              </motion.div>
            </div>

            {/* Grid animation */}
            <div className="border-t border-white/10 bg-surface flex-1 overflow-hidden relative">
              <WireframeGrid />
            </div>

            <div className="border-t border-white/10 bg-surface px-8 md:px-10 py-10">
              <p className="font-mono text-mono-body uppercase text-white/30">
                The Creative Team™ brand system is built on Swiss design principles — precision, clarity, and structured visual hierarchy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VISUAL LANGUAGE PHILOSOPHY ─────────────────────────── */}
      <section id="visual-language" className="border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-8 px-8 md:px-12 lg:px-16 py-section-y border-r border-white/10">
            <h2 className="text-hero mb-8 animate-on-scroll">
              Visual Language
            </h2>
            <p className="mono-upper text-muted max-w-xl animate-on-scroll stagger-1">
              Our visual identity is rooted in Swiss grid design — a system of order, clarity, and purposeful restraint that lets content lead.
            </p>
          </div>
          <div className="md:col-span-4 px-8 md:px-10 py-section-y flex items-end">
            <p className="font-mono text-mono-sm uppercase tracking-widest text-faint animate-on-scroll stagger-2">
              Swiss Grid Principles
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-bordered">
          {[
            { num: '01', title: 'Grid Structure', desc: 'Every layout is built on a precise modular grid. Content aligns to columns and baselines, creating visual rhythm and order.' },
            { num: '02', title: 'Typographic Hierarchy', desc: 'Type is the primary design element. Scale, weight, and spacing establish information hierarchy without decoration.' },
            { num: '03', title: 'Minimal Ornamentation', desc: 'No gratuitous effects. Every visual element serves a functional purpose — borders define structure, color signals meaning.' },
            { num: '04', title: 'Systematic Color', desc: 'A constrained palette applied with intent. Color is reserved for emphasis and interaction, never for decoration.' },
          ].map((s, i) => (
            <div key={s.num} className={`animate-on-scroll stagger-${i + 1} p-8 lg:p-10 cell-hover group`}>
              <span className="font-mono text-[3rem] font-bold text-accent/30 group-hover:text-white leading-none block mb-4 transition-colors">{s.num}</span>
              <h3 className="text-title text-white mb-3 group-hover:text-white transition-colors">{s.title}</h3>
              <p className="font-mono text-mono-body uppercase text-white/30 group-hover:text-white/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CINEMATIC DIVIDER — outer space (scroll-driven) ─── */}
      <section ref={dividerRef} className="relative border-t border-white/10">
        <motion.div
          className="relative w-full aspect-[21/9] bg-background overflow-hidden"
          initial={{ clipPath: 'inset(0 100% 0 0)' }}
          animate={dividerInView ? { clipPath: 'inset(0 0% 0 0)' } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <ParallaxImage src="/horizontal2.png" alt="Cinematic divider" className="grayscale-img" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60 z-[2]" />
        </motion.div>
      </section>

      {/* ── LOGO & PHILOSOPHY ──────────────────────────────────── */}
      <section id="logo-philosophy" className="border-t border-white/10">
        <div className="px-8 md:px-12 lg:px-16 py-section-y border-b border-white/10">
          <h2 className="text-hero tracking-tighter animate-on-scroll">Logo & Philosophy</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Logo display */}
          <div className="lg:col-span-5 px-8 md:px-12 lg:px-16 py-section-y border-r border-white/10 flex items-center justify-center">
            <div className="animate-on-scroll text-center">
              <div className="inline-flex items-center gap-4 mb-8">
                <div className="w-20 h-20 bg-accent flex items-center justify-center">
                  <span className="font-mono text-2xl font-bold text-white leading-none tracking-tight">CT</span>
                </div>
                <span className="text-display font-bold tracking-tight uppercase text-white">Creative Team</span>
              </div>
              <p className="font-mono text-mono-sm uppercase tracking-widest text-faint">Primary Logo — Lockup</p>
            </div>
          </div>

          {/* Philosophy & variations */}
          <div className="lg:col-span-7">
            <div className="px-8 md:px-10 py-10 border-b border-white/10">
              <h3 className="text-title text-white mb-4 animate-on-scroll">Philosophy</h3>
              <p className="mono-upper text-muted animate-on-scroll stagger-1">
                The CT mark is a monospace letterform set within a square — reflecting the grid-based precision at the heart of our design system. The contained form signals structure; the monospace type signals technical rigor.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 grid-bordered">
              {/* Logo variations */}
              {[
                { label: 'Primary', bg: 'bg-accent', text: 'text-white' },
                { label: 'Reversed', bg: 'bg-white', text: 'text-accent' },
                { label: 'Monochrome', bg: 'bg-white', text: 'text-background' },
                { label: 'Dark', bg: 'bg-background', text: 'text-white', border: true },
              ].map((v, i) => (
                <div key={v.label} className={`animate-on-scroll stagger-${i + 1} p-6 lg:p-8 flex flex-col items-center gap-4`}>
                  <div className={`w-14 h-14 ${v.bg} flex items-center justify-center ${v.border ? 'border border-white/20' : ''}`}>
                    <span className={`font-mono text-sm font-bold ${v.text} leading-none tracking-tight`}>CT</span>
                  </div>
                  <span className="font-mono text-mono-sm uppercase tracking-widest text-faint">{v.label}</span>
                </div>
              ))}
            </div>

            <div className="px-8 md:px-10 py-8 border-t border-white/10">
              <h4 className="font-mono text-mono-sm uppercase tracking-widest text-faint mb-4 animate-on-scroll">Clear Space & Minimum Size</h4>
              <p className="font-mono text-mono-body uppercase text-white/30 animate-on-scroll stagger-1">
                Maintain a minimum clear space equal to the height of the "C" in the mark on all sides. Minimum reproduction size: 24px digital, 8mm print.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BRAND COLORS ───────────────────────────────────────── */}
      <section id="brand-colors" className="border-t border-white/10">
        <div className="px-8 md:px-12 lg:px-16 py-section-y border-b border-white/10">
          <h2 className="text-hero tracking-tighter animate-on-scroll">Brand Colors</h2>
          <p className="mono-upper text-muted max-w-xl mt-4 animate-on-scroll stagger-1">
            A constrained palette built for dark interfaces. Color is used with intent — accent for action, neutrals for structure.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/10">
          {brandColors.map((color) => (
            <div key={color.hex} className="bg-background p-6 lg:p-8">
              <ColorSwatch {...color} />
            </div>
          ))}
        </div>
      </section>

      {/* ── BRAND TYPOGRAPHY ───────────────────────────────────── */}
      <section id="typography" className="border-t border-white/10">
        <div className="px-8 md:px-12 lg:px-16 py-section-y border-b border-white/10">
          <h2 className="text-hero tracking-tighter animate-on-scroll">Typography</h2>
          <p className="mono-upper text-muted max-w-xl mt-4 animate-on-scroll stagger-1">
            Two typefaces — one for content, one for system elements. DM Sans provides warmth and readability; DM Mono adds technical precision.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 grid-bordered">
          {brandTypography.map((type) => (
            <TypeSpecimen key={type.family} {...type} />
          ))}
        </div>
      </section>

      {/* ── BRAND ICONS ────────────────────────────────────────── */}
      <section id="brand-icons" className="border-t border-white/10">
        <div className="px-8 md:px-12 lg:px-16 py-section-y border-b border-white/10">
          <h2 className="text-hero tracking-tighter animate-on-scroll">Brand Icons</h2>
          <p className="mono-upper text-muted max-w-xl mt-4 animate-on-scroll stagger-1">
            A minimal icon set built from geometric primitives. Stroke-based, consistent weight, designed to pair with our typographic system.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 grid-bordered"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {brandIcons.map((icon) => (
            <motion.div
              key={icon.name}
              className="flex flex-col items-center justify-center p-8 lg:p-10 cell-hover group text-white/40 hover:text-white"
              variants={cardVariants}
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                {icon.svg}
              </div>
              <span className="font-mono text-mono-sm uppercase tracking-widest text-center">{icon.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  )
}
