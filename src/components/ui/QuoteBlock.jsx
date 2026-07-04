/**
 * Pull quote with accent bar and mono attribution.
 */
export default function QuoteBlock({ quote, name, role, className = '' }) {
  return (
    <figure className={`border-l-2 border-accent pl-8 md:pl-10 ${className}`}>
      <blockquote className="text-display text-white mb-6 animate-on-scroll">
        &ldquo;{quote}&rdquo;
      </blockquote>
      {(name || role) && (
        <figcaption className="font-mono text-mono-sm uppercase tracking-widest animate-on-scroll stagger-1">
          {name && <span className="text-white">{name}</span>}
          {name && role && <span className="text-faint"> — </span>}
          {role && <span className="text-faint">{role}</span>}
        </figcaption>
      )}
    </figure>
  )
}
