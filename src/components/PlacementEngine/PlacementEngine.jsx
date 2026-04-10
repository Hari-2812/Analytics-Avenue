import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './PlacementEngine.css'

gsap.registerPlugin(ScrollTrigger)

const placements = [
  {
    id: 'referral',
    number: '01',
    title: 'Referral Programs',
    description: 'We have strong data community channels with 5000+ professionals through whom we receive job updates regularly.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    id: 'organic',
    number: '02',
    title: 'Organic Job Calls',
    description: 'We create and set up profiles across 9 different secret portals to organically attract placement opportunities.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <path d="m21 21-4.3-4.3"/>
        <path d="m11 8v6"/>
        <path d="m8 11h6"/>
      </svg>
    ),
  },
  {
    id: 'internal',
    number: '03',
    title: 'Internal Project Acquisition',
    description: 'As a growing analytical startup, we acquire projects overseas that provide additional placement opportunities.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
  },
]

export default function PlacementEngine() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Heading */
      gsap.from('.placement-heading', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
      })

      /* Circuit lines animate */
      gsap.from('.circuit-line', {
        scrollTrigger: {
          trigger: '.placement-engine',
          start: 'top 75%',
        },
        scaleY: 0,
        transformOrigin: 'top',
        duration: 0.8,
        stagger: 0.3,
        ease: 'power2.out',
      })

      /* Nodes appear */
      gsap.from('.placement-node', {
        scrollTrigger: {
          trigger: '.placement-engine',
          start: 'top 75%',
        },
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
        ease: 'back.out(1.7)',
        delay: 0.3,
      })

      /* Cards slide in */
      gsap.from('.placement-card', {
        scrollTrigger: {
          trigger: '.placement-engine',
          start: 'top 70%',
        },
        x: (i) => (i % 2 === 0 ? -60 : 60),
        opacity: 0,
        duration: 0.7,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.5,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="placement-section" ref={sectionRef} id="placement">
      <div className="container">
        <div className="placement-heading">
          <span className="section-label">Career Launch</span>
          <h2 className="section-title">
            3 Modes of <span className="accent-rose">Placement</span>
          </h2>
          <p className="section-subtitle">
            "Skip the hype. Learn proven strategies to attract organic job calls and crack referral-driven hiring."
          </p>
        </div>

        <div className="placement-engine">
          {/* Central circuit spine */}
          <div className="circuit-spine">
            {placements.map((_, i) => (
              <div key={i} className="circuit-segment">
                <div className="circuit-line"></div>
                <div className="placement-node">
                  <div className="node-pulse"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Placement cards */}
          <div className="placement-cards">
            {placements.map((p) => (
              <div key={p.id} className="placement-card" id={`placement-${p.id}`}>
                <div className="placement-card-icon">{p.icon}</div>
                <div className="placement-card-content">
                  <span className="placement-card-number">{p.number}</span>
                  <h3 className="placement-card-title">{p.title}</h3>
                  <p className="placement-card-desc">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
