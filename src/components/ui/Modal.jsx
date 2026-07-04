import { useEffect, useRef } from 'react'
import { motion as m, AnimatePresence } from 'framer-motion'
import { motion } from '../../design-system/tokens'

/**
 * Overlay dialog — Escape or backdrop click to close, body scroll locked
 * while open. Compose the footer from Buttons via children.
 */
export default function Modal({ open, onClose, title, children }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    dialogRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <m.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
          <m.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={title}
            tabIndex={-1}
            className="relative z-10 w-full max-w-lg bg-background border border-white/15 focus:outline-none"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: motion.durations.fast, ease: motion.ease }}
          >
            <div className="flex items-center justify-between px-8 py-5 border-b border-white/10">
              <h2 className="text-title text-white">{title}</h2>
              <button
                onClick={onClose}
                aria-label="Close dialog"
                className="font-mono text-mono-sm uppercase tracking-widest text-faint hover:text-accent transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
            <div className="px-8 py-8">{children}</div>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  )
}
