import { motion } from 'framer-motion'

export default function AssetCard({ name, dimensions, fileType, thumbnailUrl, downloadUrl, solidColor, stagger = 0, onClick }) {
  return (
    <div
      className="group bg-surface hover:bg-accent transition-colors duration-300 cursor-pointer"
      onClick={onClick}
    >
      {/* Thumbnail */}
      <div className="w-full aspect-[4/3] bg-background overflow-hidden">
        {thumbnailUrl ? (
          <img
            src={thumbnailUrl}
            alt={name}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : solidColor ? (
          <div
            className="w-full h-full flex items-end p-4 group-hover:scale-105 transition-transform duration-500"
            style={{ backgroundColor: solidColor }}
          >
            <span className="font-mono text-[10px] uppercase tracking-widest opacity-50"
              style={{ color: solidColor === '#FFFFFF' || solidColor === '#DCE6F4' ? '#212121' : '#ffffff' }}
            >
              {solidColor}
            </span>
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-mono text-mono-sm uppercase text-white/20">{fileType || 'Asset'}</span>
          </div>
        )}
      </div>

      {/* Info — compact */}
      <div className="px-4 py-3 border-t border-white/10">
        <h3 className="text-sm font-bold text-white mb-0.5 group-hover:text-white transition-colors truncate">{name}</h3>
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase text-white/60 group-hover:text-white/70">
            {[fileType, dimensions].filter(Boolean).join(' · ')}
          </span>
          {downloadUrl && (
            <a
              href={downloadUrl}
              download
              onClick={(e) => e.stopPropagation()}
              className="font-mono text-[10px] uppercase tracking-widest text-faint hover:text-white transition-colors duration-300"
            >
              ↓
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
