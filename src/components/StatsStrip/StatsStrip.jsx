import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './StatsStrip.css'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: 1000, suffix: '+', label: 'Aspirants Empowered' },
  { value: 20, suffix: '+', label: 'Real-World Challenges' },
  { value: 50, suffix: '+', label: 'Industry Collaborations' },
  { value: 540, suffix: '+', label: 'Hiring Touchpoints' },
]

export default function StatsStrip() {
  const stripRef = useRef(null)
  const counterRefs = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      counterRefs.current.forEach((el, i) => {
        if (!el) return
        const target = stats[i].value

        gsap.fromTo(
          el,
          { innerText: 0 },
          {
            innerText: target,
            duration: 2,
            ease: 'power1.out',
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: stripRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        )
      })
    }, stripRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="stats-strip" ref={stripRef} id="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <div key={stat.label} className="stat-item">
              <div className="stat-value">
                <span ref={(el) => (counterRefs.current[i] = el)}>0</span>
                <span className="stat-suffix">{stat.suffix}</span>
              </div>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
