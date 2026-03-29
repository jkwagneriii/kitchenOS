import { useScrollRevealAll } from '../../hooks/useScrollReveal'
import usePageMeta from '../../hooks/usePageMeta'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import Problem from './components/Problem'
import Solutions from './components/Solutions'
import ProductVisual from './components/ProductVisual'
import HowItWorks from './components/HowItWorks'
import Stats from './components/Stats'
import Integrations from './components/Integrations'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FinalCTA from './components/FinalCTA'
import NewsGrid from './components/NewsGrid'
import Footer from './components/Footer'

export default function KitchenOSPage() {
  useScrollRevealAll()
  usePageMeta('KitchenOS — Operational Intelligence for Modern Kitchens', 'Real-time kitchen operations platform — inventory tracking, smart scheduling, and workflow automation.')

  return (
    <div className="bg-[#DBD4C9] text-[#2A2A22] font-[Inter] min-h-screen">
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <SocialProof />
        <Problem />
        <Solutions />
        <ProductVisual />
        <HowItWorks />
        <Stats />
        <Integrations />
        <Testimonials />
        <Pricing />
        <NewsGrid />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
