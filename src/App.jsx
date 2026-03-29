import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import HQLanding from './pages/HQLanding'
import KitchenOSPage from './sites/kitchenos/KitchenOSPage'
import CreativeTeamLayout from './sites/creative-team/CreativeTeamLayout'
import CoreBrandIdentity from './sites/creative-team/pages/CoreBrandIdentity'
import BrandMessaging from './sites/creative-team/pages/BrandMessaging'
import MediaAssets from './sites/creative-team/pages/MediaAssets'
import CreativeRequest from './sites/creative-team/pages/CreativeRequest'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HQLanding />} />
        <Route path="/kitchenos" element={<KitchenOSPage />} />
        <Route path="/creative-team" element={<CreativeTeamLayout />}>
          <Route index element={<CoreBrandIdentity />} />
          <Route path="messaging" element={<BrandMessaging />} />
          <Route path="media" element={<MediaAssets />} />
          <Route path="request" element={<CreativeRequest />} />
        </Route>
      </Routes>
    </>
  )
}
