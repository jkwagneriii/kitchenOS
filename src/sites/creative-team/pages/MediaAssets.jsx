import { useState, useEffect, useCallback, useMemo } from 'react'
import usePageMeta from '../../../hooks/usePageMeta'
import { motion, AnimatePresence } from 'framer-motion'
import AssetCard from '../../../components/ui/AssetCard'
import Hero from '../../../components/ui/Hero'
import SectionIntro from '../../../components/ui/SectionIntro'
import Tag from '../../../components/ui/Tag'
import { imageAssets, zoomAssets, linkedinAssets, mediaAssets } from '../data/mediaAssets'

const PAGE_SIZE = 9

const allTags = ['editorial', 'brand', 'people', 'landscape', 'product', 'event', 'studio', 'campaign']

function Lightbox({ asset, onClose, onPrev, onNext }) {
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowRight') onNext()
    if (e.key === 'ArrowLeft') onPrev()
  }, [onClose, onNext, onPrev])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [handleKeyDown])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={onClose} />
        <div className="relative z-10 flex flex-col items-center max-w-[90vw] max-h-[90vh]">
          <button
            onClick={onClose}
            className="absolute -top-10 right-0 font-mono text-mono-sm uppercase tracking-widest text-white/60 hover:text-white transition-colors cursor-pointer"
            aria-label="Close lightbox"
          >
            Close
          </button>
          <motion.img
            key={asset.thumbnailUrl}
            src={asset.thumbnailUrl}
            alt={asset.name}
            className="max-w-full max-h-[75vh] object-contain"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          />
          <div className="mt-4 flex items-center gap-6">
            <span className="text-sm font-bold text-white">{asset.name}</span>
            <span className="font-mono text-[10px] uppercase text-white/50">
              {[asset.fileType, asset.dimensions].filter(Boolean).join(' · ')}
            </span>
            {asset.downloadUrl && (
              <a href={asset.downloadUrl} download className="font-mono text-[10px] uppercase tracking-widest text-accent hover:text-white transition-colors">
                Download
              </a>
            )}
          </div>
          <button onClick={onPrev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 w-10 h-10 flex items-center justify-center text-white/40 hover:text-white transition-colors cursor-pointer" aria-label="Previous image">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15,18 9,12 15,6" /></svg>
          </button>
          <button onClick={onNext} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 w-10 h-10 flex items-center justify-center text-white/40 hover:text-white transition-colors cursor-pointer" aria-label="Next image">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9,6 15,12 9,18" /></svg>
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

function ImageGallery({ onOpenLightbox }) {
  const [activeFilters, setActiveFilters] = useState([])
  const [page, setPage] = useState(0)

  const filtered = useMemo(() => {
    if (activeFilters.length === 0) return imageAssets
    return imageAssets.filter((a) => a.tags && activeFilters.some((f) => a.tags.includes(f)))
  }, [activeFilters])

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE)
  const pageAssets = filtered.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE)

  const toggleFilter = (tag) => {
    setActiveFilters((prev) => prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag])
    setPage(0)
  }

  const clearFilters = () => {
    setActiveFilters([])
    setPage(0)
  }

  return (
    <section className="border-t border-white/10">
      <SectionIntro
        title="Images"
        description="Approved brand photography and imagery for use in presentations, marketing, and internal communications."
        padding="md"
      />

      {/* Filter bar */}
      <div className="px-8 md:px-12 lg:px-16 py-4 border-b border-white/10 flex flex-wrap items-center gap-2">
        <span className="font-mono text-[10px] uppercase tracking-widest text-white/40 mr-2">Filter</span>
        <Tag label={`All (${imageAssets.length})`} active={activeFilters.length === 0} onClick={clearFilters} />
        {allTags.map((tag) => (
          <Tag key={tag} label={tag} active={activeFilters.includes(tag)} onClick={() => toggleFilter(tag)} />
        ))}
      </div>

      {/* Results count */}
      <div className="px-8 md:px-12 lg:px-16 py-3 border-b border-white/10 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">
          {filtered.length} asset{filtered.length !== 1 ? 's' : ''} · Page {page + 1} of {totalPages}
        </span>
        {activeFilters.length > 0 && (
          <button
            onClick={clearFilters}
            className="font-mono text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-colors cursor-pointer"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Grid — 3x3 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
        {pageAssets.map((asset, i) => (
          <div key={`${asset.name}-${page}-${i}`} className="bg-background">
            <AssetCard {...asset} onClick={() => onOpenLightbox(asset)} />
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="px-8 md:px-12 lg:px-16 py-6 border-t border-white/10 flex items-center justify-center gap-1">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-white/50 hover:text-white disabled:text-white/15 disabled:cursor-default transition-colors cursor-pointer"
          >
            ← Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`w-8 h-8 font-mono text-[10px] border transition-colors duration-200 cursor-pointer ${
                i === page
                  ? 'border-accent bg-accent text-white'
                  : 'border-white/10 text-white/40 hover:border-white/30 hover:text-white'
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className="px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-white/50 hover:text-white disabled:text-white/15 disabled:cursor-default transition-colors cursor-pointer"
          >
            Next →
          </button>
        </div>
      )}
    </section>
  )
}

export default function MediaAssets() {
  usePageMeta('Media Assets — Creative Team', 'Browse and download brand photography, Zoom backgrounds, and LinkedIn banners.')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const allAssets = mediaAssets.filter((a) => a.thumbnailUrl)

  const openLightbox = (asset) => {
    const idx = allAssets.findIndex((a) => a.name === asset.name)
    if (idx !== -1) setLightboxIndex(idx)
  }

  const closeLightbox = () => setLightboxIndex(null)
  const goNext = () => setLightboxIndex((i) => (i + 1) % allAssets.length)
  const goPrev = () => setLightboxIndex((i) => (i - 1 + allAssets.length) % allAssets.length)

  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────── */}
      <Hero
        title={<>Media<br />Assets</>}
        subtitle="Approved photography, backgrounds, and brand media."
      />

      {/* ── IMAGES — paginated + filtered ──────────────────────── */}
      <ImageGallery onOpenLightbox={openLightbox} />

      {/* ── ZOOM BACKGROUNDS ───────────────────────────────────── */}
      <section className="border-t border-white/10">
        <SectionIntro
          title="Zoom Backgrounds"
          description="Branded virtual backgrounds for video calls. Use these to maintain a consistent brand presence in meetings."
          padding="md"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-white/10">
          {zoomAssets.map((asset) => (
            <div key={asset.name} className="bg-background">
              <AssetCard {...asset} onClick={() => openLightbox(asset)} />
            </div>
          ))}
        </div>
      </section>

      {/* ── LINKEDIN BACKGROUNDS ───────────────────────────────── */}
      <section className="border-t border-white/10">
        <SectionIntro
          title="LinkedIn Backgrounds"
          description="Profile banner images for LinkedIn. Use these to represent Creative Team™ on your professional profile."
          padding="md"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-white/10">
          {linkedinAssets.map((asset) => (
            <div key={asset.name} className="bg-background">
              <AssetCard {...asset} onClick={() => openLightbox(asset)} />
            </div>
          ))}
        </div>
      </section>

      {/* ── LIGHTBOX ───────────────────────────────────────────── */}
      {lightboxIndex !== null && (
        <Lightbox
          asset={allAssets[lightboxIndex]}
          onClose={closeLightbox}
          onNext={goNext}
          onPrev={goPrev}
        />
      )}
    </>
  )
}
