import { useScroll, useTransform } from 'framer-motion'

export function useStickyClipReveal(ref) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start start'],
  })

  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ['inset(100% 0 0 0)', 'inset(0% 0 0 0)']
  )

  return { clipPath }
}
