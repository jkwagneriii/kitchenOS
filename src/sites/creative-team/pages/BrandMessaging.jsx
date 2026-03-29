import { motion } from 'framer-motion'

const voiceAttributes = [
  {
    title: 'Confident, Not Arrogant',
    desc: 'We speak with authority about what we know. We never talk down to our audience or overstate our capabilities.',
  },
  {
    title: 'Technical, Not Jargon-Heavy',
    desc: 'We embrace precision and specificity. But we translate complexity into clarity — never hiding behind buzzwords.',
  },
  {
    title: 'Direct, Not Blunt',
    desc: 'We get to the point quickly and respect people\'s time. But we stay human and considerate in how we communicate.',
  },
  {
    title: 'Creative, Not Chaotic',
    desc: 'We value imagination and fresh thinking. But our creativity is always purposeful — it serves the work, not the ego.',
  },
]

const messagingPillars = [
  { num: '01', title: 'Precision', desc: 'Every word earns its place. We write with intention and edit ruthlessly. If it doesn\'t add value, it doesn\'t stay.' },
  { num: '02', title: 'Clarity', desc: 'We make complex ideas accessible. Our audience should never have to re-read a sentence to understand it.' },
  { num: '03', title: 'Consistency', desc: 'Same voice across every touchpoint — from Slack messages to client presentations to social posts.' },
  { num: '04', title: 'Purpose', desc: 'Every piece of communication has a job. We know what we want the reader to think, feel, or do — and we write toward that.' },
]

const toneExamples = [
  {
    context: 'Email Subject Lines',
    doExample: 'Q4 Brand Refresh — Assets Ready for Review',
    dontExample: 'URGENT!!! New brand stuff inside!! 🎨🎨',
  },
  {
    context: 'Slack Messages',
    doExample: 'Updated deck is in the shared drive. Let me know if the color section needs revision.',
    dontExample: 'hey guys!! just dumped the new deck somewhere lol, hope its good!!',
  },
  {
    context: 'Client-Facing Copy',
    doExample: 'We design brand systems that scale with your team — structured, consistent, and built to last.',
    dontExample: 'We\'re the BEST creative agency and we\'ll BLOW YOUR MIND with our AMAZING designs!!!',
  },
  {
    context: 'Internal Documentation',
    doExample: 'Use the accent purple (#4B3FFF) for primary CTAs only. Secondary actions use the outline variant.',
    dontExample: 'Purple is our main color so just use it wherever you think looks cool.',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export default function BrandMessaging() {
  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="relative border-b border-white/10">
        <div className="bg-accent flex flex-col justify-end px-8 md:px-12 lg:px-16 pb-16 pt-32 lg:pt-24 min-h-[50vh] lg:min-h-[60vh]">
          <motion.h1
            className="text-mega text-white mb-8 pb-[0.1em]"
            initial={{ clipPath: 'inset(100% 0 -10% 0)' }}
            animate={{ clipPath: 'inset(0 0 -10% 0)' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            Brand<br />
            Messaging
          </motion.h1>
          <motion.p
            className="text-display text-white/70 max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          >
            Voice, tone, and guidelines for how we communicate.
          </motion.p>
        </div>
      </section>

      {/* ── BRAND VOICE ────────────────────────────────────────── */}
      <section className="border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-8 px-8 md:px-12 lg:px-16 py-section-y border-r border-white/10">
            <h2 className="text-hero mb-8 animate-on-scroll">Brand Voice</h2>
            <p className="mono-upper text-muted max-w-xl animate-on-scroll stagger-1">
              Our voice is the personality behind everything we write. It stays consistent regardless of channel, audience, or context.
            </p>
          </div>
          <div className="md:col-span-4 px-8 md:px-10 py-section-y flex items-end">
            <p className="font-mono text-mono-sm uppercase tracking-widest text-faint animate-on-scroll stagger-2">
              04 Voice Attributes
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 grid-bordered">
          {voiceAttributes.map((v, i) => (
            <div key={v.title} className={`animate-on-scroll stagger-${i + 1} p-8 lg:p-12 cell-hover group`}>
              <span className="font-mono text-mono-sm text-faint uppercase tracking-widest block mb-4 group-hover:text-white/50">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="text-title mb-4 group-hover:text-white transition-colors duration-300">{v.title}</h3>
              <p className="mono-upper text-muted group-hover:text-white/70">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── MESSAGING PILLARS ──────────────────────────────────── */}
      <section className="bg-surface text-white border-t border-white/10">
        <div className="px-8 md:px-12 lg:px-16 py-section-y border-b border-white/10">
          <h2 className="text-hero text-white animate-on-scroll">Messaging Pillars</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-bordered-dark">
          {messagingPillars.map((s, i) => (
            <div key={s.num} className={`animate-on-scroll stagger-${i + 1} p-8 lg:p-10`}>
              <span className="font-mono text-[3rem] font-bold text-accent/30 leading-none block mb-4">{s.num}</span>
              <h3 className="text-title text-white mb-3">{s.title}</h3>
              <p className="font-mono text-mono-body uppercase text-white/30">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TONE EXAMPLES ──────────────────────────────────────── */}
      <section className="border-t border-white/10">
        <div className="px-8 md:px-12 lg:px-16 py-section-y border-b border-white/10">
          <h2 className="text-hero tracking-tighter animate-on-scroll">Tone in Practice</h2>
          <p className="mono-upper text-muted max-w-xl mt-4 animate-on-scroll stagger-1">
            Tone shifts by context — but voice stays the same. Here's how our voice translates across different channels.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {toneExamples.map((ex) => (
            <motion.div key={ex.context} className="grid grid-cols-1 lg:grid-cols-12 border-b border-white/10" variants={itemVariants}>
              {/* Context label */}
              <div className="lg:col-span-3 px-8 md:px-12 lg:px-16 py-8 lg:py-10 border-r border-white/10">
                <span className="font-mono text-mono-sm uppercase tracking-widest text-faint">{ex.context}</span>
              </div>
              {/* Do */}
              <div className="lg:col-span-4 px-8 md:px-10 py-8 lg:py-10 border-r border-white/10">
                <span className="font-mono text-mono-sm uppercase tracking-widest text-accent block mb-3">Do</span>
                <p className="text-body text-white/70">{ex.doExample}</p>
              </div>
              {/* Don't */}
              <div className="lg:col-span-5 px-8 md:px-10 py-8 lg:py-10">
                <span className="font-mono text-mono-sm uppercase tracking-widest text-white/30 block mb-3">Don't</span>
                <p className="text-body text-white/30">{ex.dontExample}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  )
}
