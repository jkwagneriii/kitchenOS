import { useState } from 'react'

/**
 * Bordered expand/collapse list — one panel open at a time.
 * items: [{ title, content }]
 */
export default function Accordion({ items, defaultOpen = -1 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen)

  return (
    <div className="border-t border-white/10">
      {items.map((item, i) => {
        const open = openIndex === i
        return (
          <div key={item.title} className="border-b border-white/10">
            <button
              onClick={() => setOpenIndex(open ? -1 : i)}
              aria-expanded={open}
              className="w-full flex items-center justify-between gap-4 px-8 md:px-10 py-6 text-left cursor-pointer group"
            >
              <span className="text-title text-white group-hover:text-accent transition-colors duration-300">
                {item.title}
              </span>
              <span
                className={`font-mono text-title leading-none flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-45 text-accent' : 'text-faint group-hover:text-accent'}`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
            >
              <div className="overflow-hidden">
                <p className="px-8 md:px-10 pb-8 mono-upper text-muted max-w-2xl">{item.content}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
