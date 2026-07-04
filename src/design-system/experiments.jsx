/**
 * Experiment registry — candidate components proving themselves on the Lab
 * page (/lab) before promotion into the main component registry.
 *
 * Same entry shape as registry.jsx. To promote a component: move its entry
 * to componentRegistry in registry.jsx — nothing else changes; the demos and
 * docs travel with it.
 */

import Accordion from '../components/ui/Accordion'
import Tabs from '../components/ui/Tabs'
import Marquee from '../components/ui/Marquee'
import Timeline from '../components/ui/Timeline'
import QuoteBlock from '../components/ui/QuoteBlock'
import Callout from '../components/ui/Callout'
import ProgressMeter from '../components/ui/ProgressMeter'
import StatusBadge from '../components/ui/StatusBadge'
import DataTable from '../components/ui/DataTable'
import SplitHero from '../components/ui/SplitHero'
import KineticHero from '../components/ui/KineticHero'
import SpotlightGridHero from '../components/ui/SpotlightGridHero'
import HoverRevealList from '../components/ui/HoverRevealList'
import ScrambleText from '../components/ui/ScrambleText'
import MagneticButton from '../components/ui/MagneticButton'
import DragCarousel from '../components/ui/DragCarousel'
import StickyStack from '../components/ui/StickyStack'
import ScrollProgress from '../components/ui/ScrollProgress'
import ImageCompare from '../components/ui/ImageCompare'
import Button from '../components/ui/Button'
import ModalDemo from './demos/ModalDemo'

export const experimentRegistry = [
  {
    name: 'Accordion',
    path: 'src/components/ui/Accordion.jsx',
    description: 'Bordered expand/collapse list with a rotating plus indicator; one panel open at a time.',
    usage: 'FAQ sections, progressive disclosure of guideline detail.',
    props: [
      { name: 'items', type: '[{ title, content }]', def: '—' },
      { name: 'defaultOpen', type: 'number (index)', def: '-1' },
    ],
    demo: (
      <Accordion
        defaultOpen={0}
        items={[
          { title: 'Can I recolor the logo?', content: 'No. The CT mark ships in four approved variants — primary, reversed, monochrome, and dark. Use those.' },
          { title: 'Where do I request new assets?', content: 'Through the Creative Request form. Include deadline and priority so the team can slot the work.' },
          { title: 'What typefaces are licensed?', content: 'DM Sans and DM Mono, both loaded from Google Fonts. No other typefaces are approved for brand work.' },
        ]}
      />
    ),
  },
  {
    name: 'Tabs',
    path: 'src/components/ui/Tabs.jsx',
    description: 'Mono-label tab switcher — accent fill on the active tab, hairline dividers between tabs.',
    usage: 'Switching between related content views: platform-specific specs, before/after, code/preview.',
    props: [
      { name: 'tabs', type: '[{ label, content }]', def: '—' },
      { name: 'defaultTab', type: 'number (index)', def: '0' },
    ],
    demo: (
      <Tabs
        tabs={[
          { label: 'Digital', content: <p className="mono-upper text-muted">Minimum logo size 24px. Accent purple #4B3FFF for primary actions only.</p> },
          { label: 'Print', content: <p className="mono-upper text-muted">Minimum logo size 8mm. Convert accent to Pantone 2736 C for offset runs.</p> },
          { label: 'Motion', content: <p className="mono-upper text-muted">One signature ease — cubic-bezier(0.16, 1, 0.3, 1). Reveals use clip-paths, never fades alone.</p> },
        ]}
      />
    ),
  },
  {
    name: 'Marquee',
    path: 'src/components/ui/Marquee.jsx',
    description: 'Infinite scrolling text band with accent separators. Pauses on hover; freezes under prefers-reduced-motion.',
    usage: 'Section dividers and brand-moment bands. Use sparingly — one per page.',
    props: [
      { name: 'text', type: 'string', def: '—' },
      { name: 'speed', type: 'number (s / loop)', def: '30' },
      { name: 'accent', type: 'boolean', def: 'false' },
    ],
    demo: <Marquee text="Precision · Clarity · Consistency · Purpose" speed={20} />,
  },
  {
    name: 'Timeline',
    path: 'src/components/ui/Timeline.jsx',
    description: 'Vertical timeline — accent square nodes on a hairline rail, mono meta labels.',
    usage: 'Project histories, launch plans, process walkthroughs where order matters more than parallel steps.',
    props: [
      { name: 'items', type: '[{ meta, title, desc }]', def: '—' },
    ],
    demo: (
      <div className="p-8 lg:p-10">
        <Timeline
          items={[
            { meta: 'Q1 2026', title: 'Brand System Launch', desc: 'Identity guidelines, messaging framework, and the media asset library go live.' },
            { meta: 'Q2 2026', title: 'Design System', desc: 'Tokenized component library with a living style guide tied to production pages.' },
            { meta: 'Q3 2026', title: 'The Lab', desc: 'Experimental components staged for promotion into the core system.' },
          ]}
        />
      </div>
    ),
  },
  {
    name: 'QuoteBlock',
    path: 'src/components/ui/QuoteBlock.jsx',
    description: 'Display-scale pull quote on an accent bar with mono attribution.',
    usage: 'Testimonials, leadership quotes, and editorial emphasis inside long pages.',
    props: [
      { name: 'quote', type: 'string', def: '—' },
      { name: 'name / role', type: 'string', def: '—' },
    ],
    demo: (
      <div className="p-8 lg:p-10">
        <QuoteBlock
          quote="A brand system is a promise kept the same way, every time."
          name="Creative Team"
          role="Brand Principles"
        />
      </div>
    ),
  },
  {
    name: 'Callout',
    path: 'src/components/ui/Callout.jsx',
    description: 'Left-bordered note band with an eyebrow label — accent for guidance, neutral for context.',
    usage: 'Inline guidance in documentation: usage rules, licensing notes, deprecation warnings.',
    props: [
      { name: 'label', type: 'string', def: "'Note'" },
      { name: 'variant', type: "'accent' | 'neutral'", def: "'accent'" },
      { name: 'children', type: 'node', def: '—' },
    ],
    demo: (
      <div className="p-8 lg:p-10 space-y-6">
        <Callout label="Usage Rule">
          Accent purple is reserved for the primary action on a view. Never stack two accent-filled elements.
        </Callout>
        <Callout label="Context" variant="neutral">
          Print collateral uses Pantone 2736 C in place of the digital accent value.
        </Callout>
      </div>
    ),
  },
  {
    name: 'ProgressMeter',
    path: 'src/components/ui/ProgressMeter.jsx',
    description: 'Hairline progress track with an accent fill that animates in on scroll; mono percentage readout.',
    usage: 'Capacity dashboards, project completion, budget burn — anywhere a bounded value needs glancing.',
    props: [
      { name: 'label', type: 'string', def: '—' },
      { name: 'value', type: 'number (0–100)', def: '—' },
    ],
    demo: (
      <div className="p-8 lg:p-10 space-y-8 max-w-xl">
        <ProgressMeter label="Q3 Request Capacity" value={72} />
        <ProgressMeter label="Asset Library Coverage" value={94} />
        <ProgressMeter label="Template Migration" value={38} />
      </div>
    ),
  },
  {
    name: 'Modal',
    path: 'src/components/ui/Modal.jsx',
    description: 'Overlay dialog — Escape and backdrop close, body scroll lock, signature rise-in transition.',
    usage: 'Confirmations and focused single-step forms. Compose the footer from Buttons.',
    props: [
      { name: 'open', type: 'boolean', def: '—' },
      { name: 'onClose', type: 'function', def: '—' },
      { name: 'title', type: 'string', def: '—' },
      { name: 'children', type: 'node', def: '—' },
    ],
    demo: <ModalDemo />,
  },
  {
    name: 'StatusBadge',
    path: 'src/components/ui/StatusBadge.jsx',
    description: 'Workflow status chip — colored dot + mono label in a hairline border.',
    usage: 'Request queues, asset approval states, component maturity flags (this page uses it).',
    props: [
      { name: 'status', type: "'draft' | 'in-review' | 'approved' | 'archived'", def: "'draft'" },
      { name: 'label', type: 'string (override)', def: '—' },
    ],
    demo: (
      <div className="flex flex-wrap items-center gap-4 p-8 lg:p-10">
        <StatusBadge status="draft" />
        <StatusBadge status="in-review" />
        <StatusBadge status="approved" />
        <StatusBadge status="archived" />
      </div>
    ),
  },
  {
    name: 'DataTable',
    path: 'src/components/ui/DataTable.jsx',
    description: 'Hairline table with accent column headers and row hover. Cells accept nodes, so badges and links compose in.',
    usage: 'Request queues, asset inventories, spec sheets — structured data that outgrows a CellGrid.',
    props: [
      { name: 'columns', type: "[{ key, label, align? }]", def: '—' },
      { name: 'rows', type: 'object[] keyed by column key', def: '—' },
    ],
    demo: (
      <div className="p-4 lg:p-6">
        <DataTable
          columns={[
            { key: 'project', label: 'Project' },
            { key: 'type', label: 'Type' },
            { key: 'status', label: 'Status' },
            { key: 'due', label: 'Due', align: 'right' },
          ]}
          rows={[
            { project: 'Q4 Campaign Key Art', type: 'Print', status: <StatusBadge status="in-review" />, due: 'Aug 12' },
            { project: 'Onboarding Deck', type: 'Template', status: <StatusBadge status="approved" />, due: 'Jul 28' },
            { project: 'Event Signage', type: 'Print', status: <StatusBadge status="draft" />, due: 'Sep 03' },
          ]}
        />
      </div>
    ),
  },

  /* ── HERO CONCEPTS — full-bleed ──────────────────────────────── */
  {
    name: 'SplitHero',
    path: 'src/components/ui/SplitHero.jsx',
    description: 'Full-bleed diptych — accent type panel against an image panel. Hovering a side expands it while the image sweeps from greyscale to color.',
    usage: 'Campaign landings and section openers where copy and imagery deserve equal billing.',
    fullBleed: true,
    props: [
      { name: 'left', type: '{ title, subtitle }', def: '—' },
      { name: 'right', type: '{ image, alt, caption }', def: '—' },
    ],
    demo: (
      <SplitHero
        left={{ title: <>Bold by<br />Default</>, subtitle: 'Hover either panel — the layout answers.' }}
        right={{ image: '/horizontal2.webp', alt: 'Campaign imagery', caption: 'Hover — Color Reveal' }}
      />
    ),
  },
  {
    name: 'KineticHero',
    path: 'src/components/ui/KineticHero.jsx',
    description: 'Scroll-driven pinned hero — oversized type tracks horizontally with scroll while the backdrop settles and a mono counter reads out progress.',
    usage: 'High-impact page openers with room to breathe; height is a multiple of the viewport.',
    fullBleed: true,
    props: [
      { name: 'title / meta', type: 'node / string', def: '—' },
      { name: 'image / alt', type: 'string', def: '—' },
      { name: 'screens', type: 'number (viewports)', def: '2' },
    ],
    demo: (
      <KineticHero
        title="Motion With Intent —"
        meta="Kinetic Hero / Scroll Sequence"
        image="/horizontal1.webp"
        alt="Kinetic hero backdrop"
      />
    ),
  },
  {
    name: 'SpotlightGridHero',
    path: 'src/components/ui/SpotlightGridHero.jsx',
    description: 'Cursor-spotlight hero — the Swiss grid and an accent glow exist only around the pointer, with a live coordinate readout in the corner.',
    usage: 'Interactive openers for system and lab surfaces — the grid itself becomes the artwork.',
    fullBleed: true,
    props: [
      { name: 'title / subtitle', type: 'node', def: '—' },
      { name: 'meta', type: 'string', def: "'Interactive Field'" },
    ],
    demo: (
      <SpotlightGridHero
        title={<>The Grid<br />Answers</>}
        subtitle="Move the cursor — structure follows attention."
        meta="Spotlight Field 01"
      />
    ),
  },

  /* ── INTERACTIVE PIECES ──────────────────────────────────────── */
  {
    name: 'HoverRevealList',
    path: 'src/components/ui/HoverRevealList.jsx',
    description: 'Editorial index — hovering a row floats its image preview at the cursor. Preview hides on touch layouts.',
    usage: 'Project indexes, case-study lists, campaign archives.',
    props: [
      { name: 'items', type: '[{ label, meta, image }]', def: '—' },
    ],
    demo: (
      <HoverRevealList
        items={[
          { label: 'Terminal Wayfinding', meta: 'Environmental', image: '/image-cycle/Low-res-104.webp' },
          { label: 'Night Market Series', meta: 'Photography', image: '/image-cycle/Low-res-13.webp' },
          { label: 'Transit Campaign', meta: 'Out-of-Home', image: '/image-cycle/Low-res-151.webp' },
          { label: 'Annual Report', meta: 'Editorial', image: '/image-cycle/Low-res-168.webp' },
        ]}
      />
    ),
  },
  {
    name: 'ScrambleText',
    path: 'src/components/ui/ScrambleText.jsx',
    description: 'Heading that decodes through random glyphs on hover or focus — terminal-flavored emphasis.',
    usage: 'Single display words or short phrases: section titles, nav moments, stat labels. One per view.',
    props: [
      { name: 'text', type: 'string', def: '—' },
      { name: 'className', type: 'string', def: '—' },
    ],
    demo: (
      <div className="p-8 lg:p-12">
        <ScrambleText text="HOVER TO DECODE" className="text-display text-white" />
        <p className="font-mono text-mono-sm uppercase tracking-widest text-faint mt-4">Hover or focus the heading</p>
      </div>
    ),
  },
  {
    name: 'MagneticButton',
    path: 'src/components/ui/MagneticButton.jsx',
    description: 'Magnetic wrapper — the child is pulled toward the cursor and springs back on leave. Inert under reduced motion.',
    usage: 'Hero CTAs and logo marks. Wrap exactly one element; keep strength subtle.',
    props: [
      { name: 'children', type: 'node', def: '—' },
      { name: 'strength', type: 'number (0–1)', def: '0.35' },
    ],
    demo: (
      <div className="p-12 lg:p-16 flex items-center justify-center">
        <MagneticButton>
          <Button>Magnetic CTA</Button>
        </MagneticButton>
      </div>
    ),
  },
  {
    name: 'DragCarousel',
    path: 'src/components/ui/DragCarousel.jsx',
    description: 'Draggable horizontal strip of captioned images — flick physics, greyscale-to-color on hover.',
    usage: 'Photo essays and asset showcases where browsing beats pagination.',
    props: [
      { name: 'items', type: '[{ image, label, meta }]', def: '—' },
    ],
    demo: (
      <DragCarousel
        items={[
          { label: 'Concourse', meta: 'CT-104', image: '/image-cycle/Low-res-104.webp' },
          { label: 'Signal', meta: 'CT-109', image: '/image-cycle/Low-res-109.webp' },
          { label: 'Interval', meta: 'CT-122', image: '/image-cycle/Low-res-122.webp' },
          { label: 'Meridian', meta: 'CT-151', image: '/image-cycle/Low-res-151.webp' },
          { label: 'Aperture', meta: 'CT-158', image: '/image-cycle/Low-res-158.webp' },
          { label: 'Traverse', meta: 'CT-168', image: '/image-cycle/Low-res-168.webp' },
        ]}
      />
    ),
  },
  {
    name: 'StickyStack',
    path: 'src/components/ui/StickyStack.jsx',
    description: 'Scroll-stacking cards — each card pins beneath the last with a stepped offset, building a pile as you scroll.',
    usage: 'Sequential narratives: process steps, principles, year-in-review beats.',
    props: [
      { name: 'items', type: '[{ num, title, desc }]', def: '—' },
      { name: 'topOffset', type: 'number (px)', def: '96' },
    ],
    demo: (
      <div className="p-8 lg:p-10">
        <StickyStack
          items={[
            { num: '01', title: 'Structure First', desc: 'The grid is decided before a single element is placed. Layout is a system, not a suggestion.' },
            { num: '02', title: 'Type Leads', desc: 'Hierarchy comes from scale and weight. Decoration is what type makes unnecessary.' },
            { num: '03', title: 'Color Signals', desc: 'One accent, spent deliberately. When everything is purple, nothing is.' },
          ]}
        />
      </div>
    ),
  },
  {
    name: 'ScrollProgress',
    path: 'src/components/ui/ScrollProgress.jsx',
    description: 'Fixed accent hairline along the top edge that fills with page scroll — mounted live on this page.',
    usage: 'Long documentation and editorial pages. Mount once per page.',
    props: [
      { name: 'className', type: 'string', def: '—' },
    ],
    demo: (
      <div className="p-8 lg:p-10">
        <p className="mono-upper text-muted max-w-xl">
          Look at the very top of this viewport — the accent line is this component, tracking your position on the page.
        </p>
      </div>
    ),
  },
  {
    name: 'ImageCompare',
    path: 'src/components/ui/ImageCompare.jsx',
    description: 'Before/after sweep — drag the accent divider (keyboard-accessible via the underlying range input) between two treatments.',
    usage: 'Retouch approvals, art-direction reviews, brand treatment vs. original.',
    props: [
      { name: 'before / after', type: '{ image, label }', def: '—' },
    ],
    demo: (
      <ImageCompare
        before={{ image: '/horizontal2.webp', label: 'Greyscale Treatment' }}
        after={{ image: '/horizontal2.webp', label: 'Original' }}
      />
    ),
  },
]
