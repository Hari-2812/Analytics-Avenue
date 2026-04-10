import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './TargetRoleOrbital.css'

gsap.registerPlugin(ScrollTrigger)

const roles = [
  { title: 'Data Scientist', icon: '🧠' },
  { title: 'Data Engineer', icon: '⚙️' },
  { title: 'BI Developer', icon: '📊' },
  { title: 'AI Engineer', icon: '🤖' },
  { title: 'ML Engineer', icon: '🔬' },
  { title: 'Agentic AI Engineer', icon: '🚀' },
  { title: 'NLP Engineer', icon: '💬' },
  { title: 'Analytics Consultant', icon: '📈' },
]

export default function TargetRoleOrbital() {
  const sectionRef = useRef(null)
  const orbitRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Scroll-triggered entrance */
      gsap.from('.orbital-heading', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
      })

      /* Continuous orbit rotation */
      gsap.to(orbitRef.current, {
        rotation: 360,
        duration: 40,
        repeat: -1,
        ease: 'none',
      })

      /* Counter-rotate cards so text stays upright */
      cardsRef.current.forEach((card) => {
        if (card) {
          gsap.to(card, {
            rotation: -360,
            duration: 40,
            repeat: -1,
            ease: 'none',
          })
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="orbital-section" ref={sectionRef} id="roles">
      <div className="container">
        <div className="orbital-heading">
          <span className="section-label">Career Pathways</span>
          <h2 className="section-title">
            Mastering AI <span className="accent-rose">Multiplies</span> Your Opportunities
          </h2>
          <p className="section-subtitle">
            AI is transforming every industry. Every role below is in high demand — and our program prepares you for all of them.
          </p>
        </div>

        <div className="orbital-stage">
          {/* Center hub */}
          <div className="orbital-hub">
            <span className="hub-text">YOU</span>
          </div>

          {/* Orbit ring */}
          <div className="orbital-ring" ref={orbitRef}>
            {roles.map((role, i) => {
              const angle = (360 / roles.length) * i
              const radius = 220
              const x = Math.cos((angle * Math.PI) / 180) * radius
              const y = Math.sin((angle * Math.PI) / 180) * radius

              return (
                <div
                  key={role.title}
                  className="orbital-card"
                  ref={(el) => (cardsRef.current[i] = el)}
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                >
                  <div className="orbital-card-icon">{role.icon}</div>
                  <span className="orbital-card-title">{role.title}</span>
                </div>
              )
            })}
          </div>

          {/* Orbit path (visual circle) */}
          <div className="orbital-path"></div>
        </div>

        {/* Mobile fallback: horizontal scroll */}
        <div className="orbital-mobile-grid">
          {roles.map((role) => (
            <div key={role.title} className="orbital-mobile-card">
              <div className="orbital-mobile-icon">{role.icon}</div>
              <span className="orbital-mobile-title">{role.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
