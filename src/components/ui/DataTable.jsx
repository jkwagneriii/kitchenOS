/**
 * Hairline data table — mono uppercase throughout, accent header labels.
 * columns: [{ key, label, align? }]  rows: array of objects keyed by column key.
 * Cell values can be strings or nodes (e.g. a StatusBadge).
 */
export default function DataTable({ columns, rows, className = '' }) {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-white/15">
            {columns.map((col) => (
              <th
                key={col.key}
                scope="col"
                className={`px-6 py-4 font-mono text-mono-sm uppercase tracking-widest text-accent font-medium ${col.align === 'right' ? 'text-right' : 'text-left'}`}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-white/10 hover:bg-white/[0.03] transition-colors duration-200">
              {columns.map((col) => (
                <td
                  key={col.key}
                  className={`px-6 py-4 font-mono text-mono-body uppercase text-white/70 ${col.align === 'right' ? 'text-right' : 'text-left'}`}
                >
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
