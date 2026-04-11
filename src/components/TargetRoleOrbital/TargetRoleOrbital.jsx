import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './TargetRoleOrbital.css'

gsap.registerPlugin(ScrollTrigger)

const roles = [
  { title: 'Data Scientist', icon: '🧠', path: '/data-scientist' },
  { title: 'Data Engineer', icon: '⚙️', path: '/data-engineer' },
  { title: 'BI Developer', icon: '📊', path: '/bi-developer' },
  { title: 'AI Engineer', icon: '🤖', path: '/ai-engineer' },
  { title: 'ML Engineer', icon: '🔬', path: '/ml-engineer' },
  { title: 'Agentic AI Engineer', icon: '🚀', path: '/agentic-ai' },
  { title: 'NLP Engineer', icon: '💬', path: '/nlp-engineer' },
  { title: 'Analytics Consultant', icon: '📈', path: '/analytics-consultant' },
]

export default function TargetRoleOrbital() {
  const sectionRef = useRef(null)
  const orbitRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ✅ Only animate orbit (performance optimized)
      gsap.to(orbitRef.current, {
        rotation: 360,
        duration: 60,
        repeat: -1,
        ease: 'linear',
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="orbital-section" ref={sectionRef}>
      <div className="container">

        {/* HEADING */}
        <div className="orbital-heading">
          <h2 className="section-title">
            Master <span className="accent-rose">AI Skills</span> That Multiply Your Opportunities
          </h2>

          <p className="section-subtitle">
            AI is reshaping every industry — automate work, unlock insights, and build predictable growth.
          </p>
        </div>

        {/* ORBIT STAGE */}
        <div className="orbital-stage">

          {/* CENTER */}
          <div className="orbital-hub">COURSE</div>

          {/* ORBIT */}
          <div className="orbital-ring" ref={orbitRef}>
            {roles.map((role, i) => {
              const angle = (360 / roles.length) * i
              const radius = 220

              const x = Math.cos((angle * Math.PI) / 180) * radius
              const y = Math.sin((angle * Math.PI) / 180) * radius

              return (
                <div
                  key={role.title}
                  className="orbital-wrapper"
                  style={{
                    transform: `translate(${x}px, ${y}px)`
                  }}
                >
                  {/* CONNECTOR LINE (INWARD) */}
                  <div
                    className="orbital-line"
                    style={{
                      transform: `rotate(${angle + 180}deg)`
                    }}
                  />

                  {/* CARD */}
                  <div
                    className="orbital-card"
                    onClick={() => {
                      gsap.killTweensOf("*") // 🔥 instant click response
                      navigate(role.path)
                    }}
                  >
                    <div className="orbital-card-icon">{role.icon}</div>
                    <span>{role.title}</span>
                  </div>

                </div>
              )
            })}
          </div>

          {/* OUTER PATH */}
          <div className="orbital-path"></div>

        </div>
      </div>
    </section>
  )
}