import { Routes, Route, useLocation } from 'react-router-dom'
import { useScrollRevealAll } from './hooks/useScrollReveal'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CoreBrandIdentity from './pages/CoreBrandIdentity'
import BrandMessaging from './pages/BrandMessaging'
import MediaAssets from './pages/MediaAssets'
import CreativeRequest from './pages/CreativeRequest'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  const { pathname } = useLocation()
  useScrollRevealAll(pathname)

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<CoreBrandIdentity />} />
          <Route path="/messaging" element={<BrandMessaging />} />
          <Route path="/media" element={<MediaAssets />} />
          <Route path="/request" element={<CreativeRequest />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
