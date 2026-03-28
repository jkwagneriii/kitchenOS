import { useState } from 'react'

export default function ColorSwatch({ name, hex, rgb, usage }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(hex)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="animate-on-scroll group">
      <div
        className="w-full aspect-[4/3] mb-4 border border-white/10"
        style={{ backgroundColor: hex }}
      />
      <h4 className="text-title text-white mb-1">{name}</h4>
      <div className="font-mono text-mono-body uppercase text-white/40 space-y-0.5">
        <p>{hex}</p>
        {rgb && <p>{rgb}</p>}
        {usage && <p className="text-white/25 mt-2">{usage}</p>}
      </div>
      <button
        onClick={handleCopy}
        className="mt-3 font-mono text-mono-sm uppercase tracking-widest text-faint hover:text-accent transition-colors duration-300 cursor-pointer"
      >
        {copied ? 'Copied!' : 'Copy Hex'}
      </button>
    </div>
  )
}
