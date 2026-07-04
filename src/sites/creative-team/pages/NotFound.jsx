import usePageMeta from '../../../hooks/usePageMeta'
import Button from '../../../components/ui/Button'

export default function NotFound() {
  usePageMeta('Page Not Found — Creative Team', 'The page you are looking for does not exist.')

  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-8 text-center border-b border-white/10">
      <p className="font-mono text-mono-sm uppercase tracking-widest text-accent mb-4">404</p>
      <h1 className="text-hero mb-6">Page Not Found</h1>
      <p className="mono-upper text-muted mb-8 max-w-md">
        The page you are looking for doesn&apos;t exist or has moved.
      </p>
      <Button to="/">Back to Brand Identity</Button>
    </section>
  )
}
