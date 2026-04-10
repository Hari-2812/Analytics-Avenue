import { lazy, Suspense } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import FounderHero from './components/FounderHero/FounderHero'
import HeroSection from './components/HeroSection/HeroSection'

const TargetRoleOrbital = lazy(() => import('./components/TargetRoleOrbital/TargetRoleOrbital'))
const SyllabusGrid = lazy(() => import('./components/SyllabusGrid/SyllabusGrid'))
const PlacementGrid = lazy(() => import('./components/PlacementGrid/PlacementGrid'))
const SampleProjects = lazy(() => import('./components/SampleProjects/SampleProjects')) // ✅ added
const EnrollmentTimeline = lazy(() => import('./components/EnrollmentTimeline/EnrollmentTimeline'))
const StatsStrip = lazy(() => import('./components/StatsStrip/StatsStrip'))
const TrustBentoGrid = lazy(() => import('./components/TrustBentoGrid/TrustBentoGrid'))
const ExpertPanel = lazy(() => import('./components/ExpertPanel/ExpertPanel'))
const FAQSection = lazy(() => import('./components/FAQSection/FAQSection'))
const Footer = lazy(() => import('./components/Footer/Footer'))

function SectionLoader() {
  return (
    <div className="section-loader">
      <div className="section-loader-bar"></div>
    </div>
  )
}

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <FounderHero />
        <HeroSection />

        <Suspense fallback={<SectionLoader />}>
          <TargetRoleOrbital />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <SyllabusGrid />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <PlacementGrid />
        </Suspense>

        {/* ✅ Sample Project Section Added */}
        <Suspense fallback={<SectionLoader />}>
          <SampleProjects />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <EnrollmentTimeline />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <StatsStrip />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <TrustBentoGrid />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <ExpertPanel />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <FAQSection />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Footer />
        </Suspense>
      </main>
    </div>
  )
}

export default App