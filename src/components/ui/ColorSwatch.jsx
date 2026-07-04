import { useState } from 'react'
import Button from './Button'

export default function ColorSwatch({ name, hex, rgb, usage }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(hex)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="animate-on-scroll group flex flex-col h-full">
      <div
        className="w-full aspect-[4/3] mb-4 border border-white/10"
        style={{ backgroundColor: hex }}
      />
      <h3 className="text-title text-white mb-1">{name}</h3>
      <div className="font-mono text-mono-body uppercase text-white/70 space-y-0.5">
        <p>{hex}</p>
        {rgb && <p>{rgb}</p>}
        {usage && <p className="text-white/60 mt-2">{usage}</p>}
      </div>
      <div className="mt-auto pt-4">
        <Button variant="ghost" size="sm" onClick={handleCopy}>
          {copied ? 'Copied!' : 'Copy Hex'}
        </Button>
      </div>
    </div>
  )
}
