import { lazy, Suspense, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'

/* ---------- ABOVE THE FOLD (FAST LOAD) ---------- */
import FounderHero from './components/FounderHero/FounderHero'
import HeroSection from './components/HeroSection/HeroSection'

/* ---------- LAZY LOAD EVERYTHING ELSE ---------- */
const AIFlowFull = lazy(() => import("./components/AIFlowFull/AIFlowFull"))
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

/* ---------- INDUSTRY PAGES ---------- */
const Manufacturing = lazy(() => import('./pages/Manufacturing'))
const ITServices = lazy(() => import('./pages/ITServices'))
const Automobile = lazy(() => import('./pages/Automobile'))
const Healthcare = lazy(() => import('./pages/Healthcare'))
const Telecom = lazy(() => import('./pages/Telecom'))
const Ecommerce = lazy(() => import('./pages/Ecommerce'))
const Logistics = lazy(() => import('./pages/Logistics'))
const EV = lazy(() => import('./pages/EV'))

/* ---------- LOADER ---------- */
function SectionLoader() {
  return (
    <div className="section-loader">
      <div className="section-loader-bar"></div>
    </div>
  )
}

/* ---------- HOME PAGE ---------- */
function Home() {
  const [showRest, setShowRest] = useState(false)

  useEffect(() => {
    // 🔥 Delay heavy sections (improves LCP)
    const timer = setTimeout(() => {
      setShowRest(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main>
      {/* ✅ FAST FIRST LOAD */}
      <FounderHero />
      <HeroSection />

      {/* 🔥 LOAD REST AFTER DELAY */}
      {showRest && (
        <Suspense fallback={<SectionLoader />}>
          <AIFlowFull />
          <SyllabusGrid />
          <PlacementGrid />
          <TargetRoleOrbital />
          <SampleProjects />
          <EnrollmentTimeline />
          <StatsStrip />
          <ExpertPanel />
          <TrustBentoGrid />
          <FAQSection />
          <Footer />
        </Suspense>
      )}
    </main>
  )
}

/* ---------- APP ROOT ---------- */
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />

        <Suspense fallback={<SectionLoader />}>
          <Routes>

            {/* HOME */}
            <Route path="/" element={<Home />} />

            {/* INDUSTRY PAGES */}
            <Route path="/manufacturing" element={<Manufacturing />} />
            <Route path="/it" element={<ITServices />} />
            <Route path="/automobile" element={<Automobile />} />
            <Route path="/healthcare" element={<Healthcare />} />
            <Route path="/telecom" element={<Telecom />} />
            <Route path="/ecommerce" element={<Ecommerce />} />
            <Route path="/logistics" element={<Logistics />} />
            <Route path="/ev" element={<EV />} />

          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  )
}

export default App