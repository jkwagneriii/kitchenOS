import { useState } from 'react'

/**
 * Mono-label tab switcher with an accent-filled active tab.
 * tabs: [{ label, content }]
 */
export default function Tabs({ tabs, defaultTab = 0 }) {
  const [active, setActive] = useState(defaultTab)

  return (
    <div>
      <div role="tablist" className="flex flex-wrap border-b border-white/10">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            role="tab"
            aria-selected={active === i}
            onClick={() => setActive(i)}
            className={`px-6 py-4 font-mono text-mono-sm uppercase tracking-widest border-r border-white/10 transition-colors duration-200 cursor-pointer ${
              active === i
                ? 'bg-accent text-white'
                : 'text-white/50 hover:text-white hover:bg-white/5'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div role="tabpanel" className="px-8 md:px-10 py-8">
        {tabs[active]?.content}
      </div>
    </div>
  )
}
