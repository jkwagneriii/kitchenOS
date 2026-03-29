import { Outlet, useLocation } from 'react-router-dom'
import { useScrollRevealAll } from '../../hooks/useScrollReveal'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function CreativeTeamLayout() {
  const { pathname } = useLocation()
  useScrollRevealAll(pathname)

  return (
    <div className="bg-background text-foreground font-sans min-h-screen">
      <Navbar />
      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
