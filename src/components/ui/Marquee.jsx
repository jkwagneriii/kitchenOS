/**
 * Infinite scrolling text band. Content is duplicated for a seamless loop;
 * pauses on hover, stops under prefers-reduced-motion (global CSS rule).
 * speed: seconds per loop.
 */
export default function Marquee({ text, speed = 30, accent = false, className = '' }) {
  const items = Array(6).fill(text)

  const row = (hidden) => (
    <div
      className="flex items-center gap-12 pr-12 flex-shrink-0 animate-marquee"
      style={{ animationDuration: `${speed}s` }}
      aria-hidden={hidden || undefined}
    >
      {items.map((t, i) => (
        <span key={i} className="flex items-center gap-12 whitespace-nowrap">
          <span className={`text-display uppercase ${accent ? 'text-white' : 'text-white/80'}`}>{t}</span>
          <span className={`w-2 h-2 flex-shrink-0 ${accent ? 'bg-white/40' : 'bg-accent'}`} />
        </span>
      ))}
    </div>
  )

  return (
    <div
      className={`flex overflow-hidden py-6 border-y border-white/10 hover:[&>div]:[animation-play-state:paused] ${accent ? 'bg-accent' : ''} ${className}`}
    >
      {row(false)}
      {row(true)}
    </div>
  )
}
