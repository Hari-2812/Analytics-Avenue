import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './PlacementGrid.css'

gsap.registerPlugin(ScrollTrigger)

const placementModes = [
  {
    id: 1,
    title: 'Referral Programs',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    metricPrefix: '',
    metricValue: 5000,
    metricSuffix: '+',
    metricLabel: 'Professionals Community',
    description: 'Get referred directly by our extensive alumni network placed across leading global organizations.',
  },
  {
    id: 2,
    title: 'Organic Job Calls',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    metricPrefix: '',
    metricValue: 9,
    metricSuffix: '',
    metricLabel: 'Different secret portals',
    description: 'We create and set up your profiles across multiple exclusive portals to organically attract immediate placement opportunities.',
  },
  {
    id: 3,
    title: 'Internal Project Acquisition',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    metricPrefix: '',
    metricValue: 0,
    metricSuffix: '',
    metricLabel: 'Overseas projects startup',
    description: 'As a growing analytical startup, we acquire overseas projects that provide powerful direct placement opportunities for our candidates.',
  }
]

export default function PlacementGrid() {
  const sectionRef = useRef(null)
  const numbersRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Staggered Entrance Reveal
      gsap.from('.pg-card-wrapper', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      })

      // 2. Odometer Effect for metrics
      numbersRef.current.forEach((el, index) => {
        if (!el) return
        
        const targetValue = placementModes[index].metricValue
        if (targetValue === 0) return // Skip if there's no number to animate

        gsap.to(el, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
          innerText: targetValue,
          duration: 2,
          snap: { innerText: 1 },
          ease: 'power2.out',
          modifiers: {
            innerText: function(innerText) {
              return Math.floor(innerText)
            }
          }
        })
      })

    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section className="placement-grid-section" ref={sectionRef} id="placement">
      <div className="container">
        
        <div className="pg-header">
          <span className="section-label">Career Launch</span>
          <h2 className="section-title">
            3 Modes of <span className="accent-rose">Placement</span>
          </h2>
          <p className="section-subtitle">
            Skip the hype. Learn proven strategies to attract organic job calls and crack referral-driven hiring.
          </p>
        </div>

        <div className="pg-grid">
          {placementModes.map((mode, idx) => (
            <div key={mode.id} className="pg-card-wrapper">
              {/* Border Trace SVG element on hover */}
              <div className="pg-border-trace">
                <svg width="100%" height="100%" preserveAspectRatio="none">
                  <rect x="0" y="0" width="100%" height="100%" className="pg-trace-rect"/>
                </svg>
              </div>

              <div className="pg-card">
                <div className="pg-icon-wrapper">
                  {mode.icon}
                </div>
                
                <h3 className="pg-title">{mode.title}</h3>
                
                <div className="pg-metric-block">
                  {mode.metricValue > 0 ? (
                    <div className="pg-metric-value">
                      {mode.metricPrefix}
                      <span 
                        ref={(el) => (numbersRef.current[idx] = el)} 
                        className="pg-odometer"
                      >
                        0
                      </span>
                      {mode.metricSuffix}
                    </div>
                  ) : (
                    <div className="pg-metric-value">
                      <span className="pg-odometer">Startup</span>
                    </div>
                  )}
                  <div className="pg-metric-label">{mode.metricLabel}</div>
                </div>

                <p className="pg-desc">{mode.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
