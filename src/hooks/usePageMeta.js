import { useEffect } from 'react'

const DEFAULT_TITLE = 'Creative Team™ — Brand System'

export default function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title

    if (description) {
      let meta = document.querySelector('meta[name="description"]')
      if (!meta) {
        meta = document.createElement('meta')
        meta.name = 'description'
        document.head.appendChild(meta)
      }
      meta.content = description
    }

    return () => {
      document.title = DEFAULT_TITLE
    }
  }, [title, description])
}
