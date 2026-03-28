export default function FormField({ label, type = 'text', name, required, options, rows, placeholder, value, onChange }) {
  const baseInput = 'w-full px-0 py-3 bg-transparent border-b border-white/20 text-white placeholder:text-white/30 focus:outline-none focus:border-accent transition-all duration-300 font-mono text-mono-body uppercase'

  return (
    <div className="mb-6">
      <label htmlFor={name} className="font-mono text-label uppercase tracking-widest text-faint block mb-2">
        {label}{required && <span className="text-accent ml-1">*</span>}
      </label>

      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          required={required}
          rows={rows || 4}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`${baseInput} resize-none`}
        />
      ) : type === 'select' ? (
        <select
          id={name}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          className={`${baseInput} cursor-pointer`}
        >
          <option value="" className="bg-background">{placeholder || 'Select...'}</option>
          {options?.map((opt) => (
            <option key={opt} value={opt} className="bg-background">{opt}</option>
          ))}
        </select>
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={baseInput}
        />
      )}
    </div>
  )
}
