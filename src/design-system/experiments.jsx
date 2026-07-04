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
]
