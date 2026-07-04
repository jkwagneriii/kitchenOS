const statuses = {
  draft: { dot: 'bg-white/30', text: 'text-white/50', label: 'Draft' },
  'in-review': { dot: 'bg-muted', text: 'text-muted', label: 'In Review' },
  approved: { dot: 'bg-accent', text: 'text-white', label: 'Approved' },
  archived: { dot: 'bg-faint/50', text: 'text-faint', label: 'Archived' },
}

/**
 * Workflow status chip — colored dot + mono label inside a hairline border.
 * status: 'draft' | 'in-review' | 'approved' | 'archived'
 */
export default function StatusBadge({ status = 'draft', label, className = '' }) {
  const s = statuses[status] || statuses.draft

  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1.5 border border-white/15 ${className}`}>
      <span className={`w-1.5 h-1.5 flex-shrink-0 ${s.dot}`} aria-hidden="true" />
      <span className={`font-mono text-[10px] uppercase tracking-widest ${s.text}`}>
        {label || s.label}
      </span>
    </span>
  )
}
