import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import FounderHero from './components/FounderHero/FounderHero'

const HeroSection = lazy(() => import('./components/HeroSection/HeroSection'))
const TargetRoleOrbital = lazy(() => import('./components/TargetRoleOrbital/TargetRoleOrbital'))
const SyllabusGrid = lazy(() => import('./components/SyllabusGrid/SyllabusGrid'))
const PlacementGrid = lazy(() => import('./components/PlacementGrid/PlacementGrid'))
const SampleProjects = lazy(() => import('./components/SampleProjects/SampleProjects'))
const EnrollmentTimeline = lazy(() => import('./components/EnrollmentTimeline/EnrollmentTimeline'))
const StatsStrip = lazy(() => import('./components/StatsStrip/StatsStrip'))
const TrustBentoGrid = lazy(() => import('./components/TrustBentoGrid/TrustBentoGrid'))
const ExpertPanel = lazy(() => import('./components/ExpertPanel/ExpertPanel'))
const FAQSection = lazy(() => import('./components/FAQSection/FAQSection'))
const Footer = lazy(() => import('./components/Footer/Footer'))

function SectionLoader() {
  return (
    <div className="section-loader" aria-hidden="true">
      <div className="section-loader-bar"></div>
    </div>
  )
}

function DeferredSection({ children, minHeight = 320 }) {
  const sentinelRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '350px 0px' },
    )

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sentinelRef} className="deferred-section" style={{ minHeight }}>
      {isVisible ? <Suspense fallback={<SectionLoader />}>{children}</Suspense> : <SectionLoader />}
    </section>
  )
}

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <FounderHero />

        <DeferredSection minHeight={600}>
          <HeroSection />
        </DeferredSection>

        <DeferredSection>
          <TargetRoleOrbital />
        </DeferredSection>

        <DeferredSection>
          <SyllabusGrid />
        </DeferredSection>

        <DeferredSection>
          <PlacementGrid />
        </DeferredSection>

        <DeferredSection>
          <SampleProjects />
        </DeferredSection>

        <DeferredSection>
          <EnrollmentTimeline />
        </DeferredSection>

        <DeferredSection>
          <StatsStrip />
        </DeferredSection>

        <DeferredSection>
          <TrustBentoGrid />
        </DeferredSection>

        <DeferredSection minHeight={500}>
          <ExpertPanel />
        </DeferredSection>

        <DeferredSection>
          <FAQSection />
        </DeferredSection>

        <DeferredSection minHeight={300}>
          <Footer />
        </DeferredSection>
      </main>
    </div>
  )
}

export default App
