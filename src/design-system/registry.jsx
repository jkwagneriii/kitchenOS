/**
 * Component registry — the bridge between the component library and the
 * visualized design-system page (/system).
 *
 * Every shared component gets an entry: name, import path, usage guidance,
 * prop docs, and a LIVE demo built from the real component. The system page
 * renders this registry, so documentation can never drift from the code.
 *
 * When you add a component to src/components/ui, register it here.
 */

import Button from '../components/ui/Button'
import Tag from '../components/ui/Tag'
import SectionIntro from '../components/ui/SectionIntro'
import CellGrid from '../components/ui/CellGrid'
import ComparisonTable from '../components/ui/ComparisonTable'
import StepList from '../components/ui/StepList'
import StatBlock from '../components/ui/StatBlock'
import ColorSwatch from '../components/ui/ColorSwatch'
import TypeSpecimen from '../components/ui/TypeSpecimen'
import AssetCard from '../components/ui/AssetCard'
import FormField from '../components/ui/FormField'
import { colors, typefaces } from './tokens'

const demoCells = [
  { num: '01', title: 'Structure', desc: 'Content aligns to a precise modular grid.' },
  { num: '02', title: 'Hierarchy', desc: 'Type scale and weight establish order.' },
  { num: '03', title: 'Restraint', desc: 'Every element serves a functional purpose.' },
  { num: '04', title: 'Intent', desc: 'Color is reserved for emphasis and action.' },
]

export const componentRegistry = [
  {
    name: 'Button',
    path: 'src/components/ui/Button.jsx',
    description: 'Primary action element. Renders a button, internal Link (to), or anchor (href).',
    usage: 'Primary for the main action on a view. Outline for secondary actions. Ghost for tertiary/utility actions like copy or clear.',
    props: [
      { name: 'variant', type: "'primary' | 'outline' | 'ghost'", def: "'primary'" },
      { name: 'size', type: "'md' | 'sm'", def: "'md'" },
      { name: 'to / href', type: 'string', def: '—' },
      { name: 'onClick', type: 'function', def: '—' },
    ],
    demo: (
      <div className="flex flex-wrap items-center gap-4 p-8 lg:p-10">
        <Button>Primary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button size="sm">Primary SM</Button>
        <Button variant="ghost" size="sm">Ghost SM</Button>
      </div>
    ),
  },
  {
    name: 'Tag',
    path: 'src/components/ui/Tag.jsx',
    description: 'Filter chip / toggle. Accent fill when active, hairline border otherwise.',
    usage: 'Filter bars, tag pickers, and compact toggles — see the Media Assets gallery filter.',
    props: [
      { name: 'label', type: 'string', def: '—' },
      { name: 'active', type: 'boolean', def: 'false' },
      { name: 'onClick', type: 'function', def: '—' },
    ],
    demo: (
      <div className="flex flex-wrap items-center gap-2 p-8 lg:p-10">
        <Tag label="All (24)" active />
        <Tag label="editorial" />
        <Tag label="brand" />
        <Tag label="people" />
        <Tag label="campaign" />
      </div>
    ),
  },
  {
    name: 'SectionIntro',
    path: 'src/components/ui/SectionIntro.jsx',
    description: 'Section heading band. Full-width by default; passing meta switches to the 8/4 Swiss split with a bottom-aligned mono label.',
    usage: 'Open every major page section with one. Use meta for the two-column variant, padding="md" for denser stacked sections.',
    props: [
      { name: 'title', type: 'node', def: '—' },
      { name: 'description', type: 'node', def: '—' },
      { name: 'meta', type: 'node', def: '—' },
      { name: 'padding', type: "'lg' | 'md'", def: "'lg'" },
    ],
    demo: (
      <div className="border-b border-white/10">
        <SectionIntro
          title="Section Title"
          description="A supporting description set in mono uppercase, capped at a readable measure."
          meta="04 Items — Meta Label"
          padding="md"
        />
      </div>
    ),
  },
  {
    name: 'CellGrid',
    path: 'src/components/ui/CellGrid.jsx',
    description: 'Numbered cell grid on hairline borders — the signature card pattern. Interactive theme gets the accent cell-hover; dark theme is static for bg-surface sections.',
    usage: "numberStyle 'display' for large ghost numerals (pillars, principles); 'label' for small eyebrow numbers (voice attributes).",
    props: [
      { name: 'items', type: '[{ num, title, desc }]', def: '—' },
      { name: 'columns', type: '2 | 3 | 4', def: '4' },
      { name: 'numberStyle', type: "'display' | 'label'", def: "'display'" },
      { name: 'theme', type: "'interactive' | 'dark'", def: "'interactive'" },
    ],
    demo: <CellGrid items={demoCells} columns={4} />,
  },
  {
    name: 'ComparisonTable',
    path: 'src/components/ui/ComparisonTable.jsx',
    description: 'Do/Don\'t comparison rows: context label, accent-marked positive example, muted negative example.',
    usage: 'Guideline pages where correct vs. incorrect usage needs to sit side by side — tone of voice, logo usage, color application.',
    props: [
      { name: 'rows', type: '[{ context, doExample, dontExample }]', def: '—' },
      { name: 'doLabel / dontLabel', type: 'string', def: "'Do' / 'Don't'" },
    ],
    demo: (
      <ComparisonTable
        rows={[{
          context: 'Buttons',
          doExample: 'Use accent purple for the single primary action on a view.',
          dontExample: 'Fill every button with accent purple so nothing stands out.',
        }]}
      />
    ),
  },
  {
    name: 'StepList',
    path: 'src/components/ui/StepList.jsx',
    description: 'Vertical numbered step list with an accent numeral gutter.',
    usage: 'Process explanations — how a request moves through the team, onboarding sequences.',
    props: [
      { name: 'steps', type: '[{ num, title, desc }]', def: '—' },
    ],
    demo: (
      <div className="p-8 lg:p-10 max-w-xl">
        <StepList
          steps={[
            { num: '01', title: 'Submit', desc: 'Fill out the form with your project details.' },
            { num: '02', title: 'Review', desc: 'The creative team reviews your request.' },
          ]}
        />
      </div>
    ),
  },
  {
    name: 'StatBlock',
    path: 'src/components/ui/StatBlock.jsx',
    description: 'Hero-scale statistic with a tracked-out mono label.',
    usage: 'Key metrics in marketing sections; pair inside a grid-bordered row.',
    props: [
      { name: 'value', type: 'node', def: '—' },
      { name: 'label', type: 'string', def: '—' },
    ],
    demo: (
      <div className="grid grid-cols-2 grid-bordered">
        <div className="p-8 lg:p-10"><StatBlock value="240+" label="Assets Delivered" /></div>
        <div className="p-8 lg:p-10"><StatBlock value="98%" label="On-Time Rate" /></div>
      </div>
    ),
  },
  {
    name: 'ColorSwatch',
    path: 'src/components/ui/ColorSwatch.jsx',
    description: 'Token color card with hex/RGB readout and one-click hex copy.',
    usage: 'Rendered from the color tokens on foundation pages — never hardcode swatch values.',
    props: [
      { name: 'name / hex / rgb / usage', type: 'string', def: '—' },
    ],
    demo: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10">
        {colors.slice(0, 2).map((c) => (
          <div key={c.hex} className="bg-background p-6 lg:p-8"><ColorSwatch {...c} /></div>
        ))}
      </div>
    ),
  },
  {
    name: 'TypeSpecimen',
    path: 'src/components/ui/TypeSpecimen.jsx',
    description: 'Typeface specimen — renders each weight with sample text and a weight legend.',
    usage: 'Rendered from the typeface tokens on foundation pages.',
    props: [
      { name: 'family', type: 'string', def: '—' },
      { name: 'weights', type: '[{ label, weight, italic? }]', def: '—' },
      { name: 'sampleText', type: 'string', def: "'Aa Bb Cc …'" },
    ],
    demo: (
      <div className="grid grid-cols-1 grid-bordered">
        <TypeSpecimen {...typefaces[1]} />
      </div>
    ),
  },
  {
    name: 'AssetCard',
    path: 'src/components/ui/AssetCard.jsx',
    description: 'Downloadable media tile — thumbnail (image, solid color, or file-type placeholder), name, metadata, and download affordance.',
    usage: 'Asset galleries and download grids; wire onClick to a lightbox.',
    props: [
      { name: 'name / fileType / dimensions', type: 'string', def: '—' },
      { name: 'thumbnailUrl / downloadUrl', type: 'string', def: '—' },
      { name: 'solidColor', type: 'hex string', def: '—' },
      { name: 'onClick', type: 'function', def: '—' },
    ],
    demo: (
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
        <div className="bg-background"><AssetCard name="Accent Field" solidColor="#4B3FFF" fileType="PNG" dimensions="1920×1080" /></div>
        <div className="bg-background"><AssetCard name="Logo Pack" fileType="SVG" /></div>
        <div className="bg-background hidden lg:block"><AssetCard name="Surface Field" solidColor="#31414E" fileType="PNG" dimensions="1920×1080" /></div>
      </div>
    ),
  },
  {
    name: 'FormField',
    path: 'src/components/ui/FormField.jsx',
    description: 'Underline-style form control — text, email, date, textarea, or select — with tracked-out label and accent focus state.',
    usage: 'All forms. Required fields get an accent asterisk automatically.',
    props: [
      { name: 'label / name', type: 'string', def: '—' },
      { name: 'type', type: "'text' | 'email' | 'date' | 'textarea' | 'select'", def: "'text'" },
      { name: 'options', type: 'string[] (select)', def: '—' },
      { name: 'required', type: 'boolean', def: 'false' },
      { name: 'value / onChange', type: 'controlled pair', def: '—' },
    ],
    demo: (
      <div className="p-8 lg:p-10 max-w-xl">
        <FormField label="Project Name" name="demo-project" placeholder="Brief project title" required />
        <FormField label="Request Type" name="demo-type" type="select" placeholder="Select type..." options={['Logo Usage', 'Social Media Asset']} />
      </div>
    ),
  },
  {
    name: 'Hero',
    path: 'src/components/ui/Hero.jsx',
    description: 'Accent-block page hero with clip-path title reveal and staggered subtitle. Standard (50/60vh) and tall (70/80vh) heights; bare mode embeds inside custom hero grids.',
    usage: 'Top of every page. Break long titles manually with <br />. See it live at the top of this page.',
    props: [
      { name: 'title / subtitle', type: 'node', def: '—' },
      { name: 'size', type: "'standard' | 'tall'", def: "'standard'" },
      { name: 'bare', type: 'boolean', def: 'false' },
    ],
    demo: (
      <div className="p-8 lg:p-10">
        <p className="font-mono text-mono-body uppercase text-white/60">
          Demonstrated by the hero of this page and every page in this section — the animation is a page-load moment, so it isn&apos;t repeated here.
        </p>
      </div>
    ),
  },
]

/** CSS utility classes that are part of the system (defined in src/index.css) */
export const utilityRegistry = [
  { className: 'grid-bordered', description: 'Hairline border grid — apply to a grid container; children get bottom/right borders.' },
  { className: 'grid-bordered-dark', description: 'Same grid borders at slightly higher opacity, for bg-surface sections.' },
  { className: 'cell-hover', description: 'Accent fill on hover with inset ring — for interactive grid cells.' },
  { className: 'mono-upper', description: 'DM Mono, mono-body size, uppercase — the signature body treatment.' },
  { className: 'animate-on-scroll + stagger-1…6', description: 'Scroll-reveal fade-up, wired by useScrollRevealAll; staggers add 60ms steps.' },
  { className: 'img-reveal-center / img-reveal-left', description: 'Clip-path image reveals triggered on scroll.' },
  { className: 'grayscale-img', description: 'Greyscale + contrast treatment for brand photography.' },
  { className: 'film-grain', description: 'SVG-noise grain overlay for hero media.' },
]
