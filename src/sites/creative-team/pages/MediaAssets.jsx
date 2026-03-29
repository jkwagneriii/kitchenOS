import { motion } from 'framer-motion'
import AssetCard from '../../../components/ui/AssetCard'
import { mediaAssets } from '../data/mediaAssets'

const categories = [
  { key: 'images', title: 'Images', subtitle: 'Approved brand photography and imagery for use in presentations, marketing, and internal communications.' },
  { key: 'zoom-backgrounds', title: 'Zoom Backgrounds', subtitle: 'Branded virtual backgrounds for video calls. Use these to maintain a consistent brand presence in meetings.' },
  { key: 'linkedin-backgrounds', title: 'LinkedIn Backgrounds', subtitle: 'Profile banner images for LinkedIn. Use these to represent Creative Team™ on your professional profile.' },
]

export default function MediaAssets() {
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
            Media<br />
            Assets
          </motion.h1>
          <motion.p
            className="text-display text-white/70 max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          >
            Approved photography, backgrounds, and brand media.
          </motion.p>
        </div>
      </section>

      {/* ── ASSET SECTIONS ─────────────────────────────────────── */}
      {categories.map((cat) => {
        const assets = mediaAssets.filter((a) => a.category === cat.key)
        return (
          <section key={cat.key} className="border-t border-white/10">
            <div className="px-8 md:px-12 lg:px-16 py-section-y border-b border-white/10">
              <h2 className="text-hero tracking-tighter animate-on-scroll">{cat.title}</h2>
              <p className="mono-upper text-muted max-w-xl mt-4 animate-on-scroll stagger-1">
                {cat.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
              {assets.map((asset, i) => (
                <div key={asset.name} className="bg-background">
                  <AssetCard {...asset} stagger={(i % 3) + 1} />
                </div>
              ))}
            </div>
          </section>
        )
      })}
    </>
  )
}
