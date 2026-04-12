import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'

/* ---------- HOME SECTIONS ---------- */
import FounderHero from './components/FounderHero/FounderHero'
import HeroSection from './components/HeroSection/HeroSection'

import AIFlowFull from "./components/AIFlowFull/AIFlowFull"

/* ---------- LAZY COMPONENTS ---------- */
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

/* ---------- ROLE PAGES ---------- */
// const DataScientist = lazy(() => import('./pages/DataScientist'))
// const DataEngineer = lazy(() => import('./pages/DataEngineer'))
// const BIDeveloper = lazy(() => import('./pages/BIDeveloper'))
// const AIEngineer = lazy(() => import('./pages/AIEngineer'))
// const MLEngineer = lazy(() => import('./pages/MLEngineer'))
// const AgenticAI = lazy(() => import('./pages/AgenticAI'))
// const NLPEngineer = lazy(() => import('./pages/NLPEngineer'))
// const AnalyticsConsultant = lazy(() => import('./pages/AnalyticsConsultant'))

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
  return (
    <main>
      <FounderHero />
      
      <HeroSection />

      <AIFlowFull />

      <Suspense fallback={<SectionLoader />}>
        <SyllabusGrid />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <PlacementGrid />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <TargetRoleOrbital />
      </Suspense>

      

      

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
        <ExpertPanel />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <TrustBentoGrid />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <FAQSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
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

            ROLE PAGES
            {/* <Route path="/data-scientist" element={<DataScientist />} />
            <Route path="/data-engineer" element={<DataEngineer />} />
            <Route path="/bi-developer" element={<BIDeveloper />} />
            <Route path="/ai-engineer" element={<AIEngineer />} />
            <Route path="/ml-engineer" element={<MLEngineer />} />
            <Route path="/agentic-ai" element={<AgenticAI />} />
            <Route path="/nlp-engineer" element={<NLPEngineer />} />
            <Route path="/analytics-consultant" element={<AnalyticsConsultant />} /> */}

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