import { motion } from 'framer-motion'

export default function AssetCard({ name, category, dimensions, fileType, thumbnailUrl, downloadUrl, stagger = 0 }) {
  return (
    <div className="animate-on-scroll group bg-surface hover:bg-accent transition-colors duration-300">
      {/* Thumbnail */}
      <motion.div
        className="w-full aspect-video bg-background overflow-hidden"
        initial={{ clipPath: 'inset(50% 50% 50% 50%)' }}
        whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: stagger * 0.06 }}
      >
        {thumbnailUrl ? (
          <img
            src={thumbnailUrl}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-mono text-mono-sm uppercase text-white/20">{fileType || 'Asset'}</span>
          </div>
        )}
      </motion.div>

      {/* Info */}
      <div className="p-6 border-t border-white/10">
        <h4 className="text-title text-white mb-2 group-hover:text-white transition-colors">{name}</h4>
        <div className="flex items-center justify-between">
          <span className="font-mono text-mono-sm uppercase text-white/30 group-hover:text-white/50">
            {[fileType, dimensions].filter(Boolean).join(' · ')}
          </span>
          {downloadUrl && (
            <a
              href={downloadUrl}
              download
              className="font-mono text-mono-sm uppercase tracking-widest text-faint hover:text-white transition-colors duration-300 cursor-pointer"
            >
              Download
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
