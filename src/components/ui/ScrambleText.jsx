import { useRef, useState, useCallback, useEffect } from 'react'

const GLYPHS = '█▓▒░<>/\\|=+*#@ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

/**
 * Heading that decodes through random glyphs on hover — technical,
 * terminal-flavored emphasis. Renders mono while scrambling.
 */
export default function ScrambleText({ text, className = '' }) {
  const [display, setDisplay] = useState(text)
  const [scrambling, setScrambling] = useState(false)
  const timer = useRef(null)

  const scramble = useCallback(() => {
    if (timer.current) clearInterval(timer.current)
    setScrambling(true)
    let frame = 0
    const total = Math.max(12, text.length * 2)
    timer.current = setInterval(() => {
      frame += 1
      const settled = Math.floor((frame / total) * text.length)
      setDisplay(
        text
          .split('')
          .map((ch, i) => {
            if (ch === ' ' || i < settled) return ch
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
          })
          .join('')
      )
      if (frame >= total) {
        clearInterval(timer.current)
        setDisplay(text)
        setScrambling(false)
      }
    }, 32)
  }, [text])

  useEffect(() => () => clearInterval(timer.current), [])

  return (
    <span
      onMouseEnter={scramble}
      onFocus={scramble}
      tabIndex={0}
      aria-label={text}
      className={`inline-block cursor-default focus:outline-none ${scrambling ? 'font-mono tracking-tight' : ''} ${className}`}
    >
      <span aria-hidden="true">{display}</span>
    </span>
  )
}
