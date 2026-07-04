<pre>
<span style="color:#4B3FFF"> ██████╗██████╗ ███████╗ █████╗ ████████╗██╗██╗   ██╗███████╗</span>
<span style="color:#4B3FFF">██╔════╝██╔══██╗██╔════╝██╔══██╗╚══██╔══╝██║██║   ██║██╔════╝</span>
<span style="color:#4B3FFF">██║     ██████╔╝█████╗  ███████║   ██║   ██║██║   ██║█████╗  </span>
<span style="color:#4B3FFF">██║     ██╔══██╗██╔══╝  ██╔══██║   ██║   ██║╚██╗ ██╔╝██╔══╝  </span>
<span style="color:#4B3FFF">╚██████╗██║  ██║███████╗██║  ██║   ██║   ██║ ╚████╔╝ ███████╗</span>
<span style="color:#4B3FFF"> ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═══╝  ╚══════╝</span>
<span style="color:#4B3FFF">                ████████╗███████╗ █████╗ ███╗   ███╗            </span>
<span style="color:#4B3FFF">                ╚══██╔══╝██╔════╝██╔══██╗████╗ ████║            </span>
<span style="color:#4B3FFF">                   ██║   █████╗  ███████║██╔████╔██║            </span>
<span style="color:#4B3FFF">                   ██║   ██╔══╝  ██╔══██║██║╚██╔╝██║            </span>
<span style="color:#4B3FFF">                   ██║   ███████╗██║  ██║██║ ╚═╝ ██║            </span>
<span style="color:#4B3FFF">                   ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝            </span>
</pre>

**Brand Identity System** — built on Swiss grid principles, precision, and structured visual hierarchy.

---

### Stack

`React` · `Vite` · `Tailwind CSS` · `Framer Motion` · `Canvas API`

### Run

```bash
npm install && npm run dev
```

### Structure

```
src/design-system/
├── tokens.js                 ── Single source of truth: colors, type scale,
│                                spacing, motion (feeds tailwind.config.js
│                                AND the visualized system pages)
├── registry.jsx              ── Component registry: metadata + live demos
│                                rendered on /system
└── experiments.jsx           ── Experiment registry: candidate components
                                 rendered on /lab until promoted

src/components/ui/            ── Shared library: Button, Hero, SectionIntro,
                                 CellGrid, ComparisonTable, Tag, StepList,
                                 StatBlock, ColorSwatch, TypeSpecimen,
                                 AssetCard, FormField, ParallaxImage, …

src/sites/creative-team/
├── pages/
│   ├── CoreBrandIdentity    ── Visual language, logo, colors, typography, icons
│   ├── BrandMessaging       ── Voice, pillars, tone guidelines
│   ├── MediaAssets           ── Approved photography & backgrounds
│   ├── CreativeRequest       ── Internal design request form
│   ├── DesignSystem          ── Living style guide (/system)
│   └── Lab                   ── Experimental components (/lab)
├── components/               ── Navbar, Footer
└── data/                     ── Media asset manifests
```

### Design system workflow

1. **Tokens** live in `src/design-system/tokens.js` — Tailwind and the docs
   pages both consume them, so they cannot drift. Never hardcode a color,
   font size, or easing.
2. **Components** live in `src/components/ui/`. When you add one, register
   it in `src/design-system/registry.jsx` (metadata, props, live demo) and
   it appears on `/system` automatically.
3. **Experiments** start in `src/design-system/experiments.jsx` and show on
   `/lab`. To promote one, move its entry into `registry.jsx` — demos and
   docs travel with it.
4. **Pages** are assembled from registered components — see the existing
   pages for composition patterns.

### Features

- Scroll-triggered clip-path reveals with staggered timing
- Parallax image system with reduced-motion support
- Custom canvas wireframe grid with golden-ratio randomized animation
- Fisher-Yates shuffled accent square fills with cycling image reveals
- Dark interface with constrained accent palette (`#4B3FFF`)
- DM Sans + DM Mono typographic system

---

<sub>Swiss Grid Principles — Precision, Clarity, Consistency, Purpose</sub>
