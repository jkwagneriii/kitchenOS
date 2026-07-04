import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, lazy, Suspense } from 'react'

import ErrorBoundary from './components/ErrorBoundary'
import CreativeTeamLayout from './sites/creative-team/CreativeTeamLayout'
import CoreBrandIdentity from './sites/creative-team/pages/CoreBrandIdentity'

// Route-level code splitting — the homepage loads eagerly for fastest first
// paint; secondary pages load on navigation.
const BrandMessaging = lazy(() => import('./sites/creative-team/pages/BrandMessaging'))
const MediaAssets = lazy(() => import('./sites/creative-team/pages/MediaAssets'))
const CreativeRequest = lazy(() => import('./sites/creative-team/pages/CreativeRequest'))
const DesignSystem = lazy(() => import('./sites/creative-team/pages/DesignSystem'))
const Lab = lazy(() => import('./sites/creative-team/pages/Lab'))
const NotFound = lazy(() => import('./sites/creative-team/pages/NotFound'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function PageFallback() {
  return <div className="min-h-screen bg-background" aria-busy="true" />
}

export default function App() {
  return (
    <ErrorBoundary>
      <ScrollToTop />
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<CreativeTeamLayout />}>
            <Route index element={<CoreBrandIdentity />} />
            <Route path="messaging" element={<BrandMessaging />} />
            <Route path="media" element={<MediaAssets />} />
            <Route path="request" element={<CreativeRequest />} />
            <Route path="system" element={<DesignSystem />} />
            <Route path="lab" element={<Lab />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </ErrorBoundary>
  )
}
