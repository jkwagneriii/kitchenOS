import usePageMeta from '../../../hooks/usePageMeta'
import Hero from '../../../components/ui/Hero'
import SectionIntro from '../../../components/ui/SectionIntro'
import CellGrid from '../../../components/ui/CellGrid'
import ComparisonTable from '../../../components/ui/ComparisonTable'

const voiceAttributes = [
  {
    num: '01',
    title: 'Confident, Not Arrogant',
    desc: 'We speak with authority about what we know. We never talk down to our audience or overstate our capabilities.',
  },
  {
    num: '02',
    title: 'Technical, Not Jargon-Heavy',
    desc: 'We embrace precision and specificity. But we translate complexity into clarity — never hiding behind buzzwords.',
  },
  {
    num: '03',
    title: 'Direct, Not Blunt',
    desc: 'We get to the point quickly and respect people\'s time. But we stay human and considerate in how we communicate.',
  },
  {
    num: '04',
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

export default function BrandMessaging() {
  usePageMeta('Brand Messaging — Creative Team', 'Brand voice, tone guidelines, messaging pillars, and writing examples.')

  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────── */}
      <Hero
        title={<>Brand<br />Messaging</>}
        subtitle="Voice, tone, and guidelines for how we communicate."
      />

      {/* ── BRAND VOICE ────────────────────────────────────────── */}
      <section className="border-t border-white/10">
        <SectionIntro
          title="Brand Voice"
          description="Our voice is the personality behind everything we write. It stays consistent regardless of channel, audience, or context."
          meta="04 Voice Attributes"
        />
        <CellGrid items={voiceAttributes} columns={2} numberStyle="label" />
      </section>

      {/* ── MESSAGING PILLARS ──────────────────────────────────── */}
      <section className="bg-surface text-white border-t border-white/10">
        <SectionIntro title="Messaging Pillars" />
        <CellGrid items={messagingPillars} columns={4} theme="dark" />
      </section>

      {/* ── TONE EXAMPLES ──────────────────────────────────────── */}
      <section className="border-t border-white/10">
        <SectionIntro
          title="Tone in Practice"
          description="Tone shifts by context — but voice stays the same. Here's how our voice translates across different channels."
        />
        <ComparisonTable rows={toneExamples} />
      </section>
    </>
  )
}
