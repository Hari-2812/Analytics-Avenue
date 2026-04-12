import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './FounderHero.css'

export default function FounderHero() {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const glowRef = useRef(null)
  const particlesRef = useRef(null)
  const badgeRef = useRef(null)
  const statsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const master = gsap.timeline({ defaults: { ease: 'power4.out' } })

      gsap.to(glowRef.current, {
        scale: 1.15,
        opacity: 0.6,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      const particles = particlesRef.current?.querySelectorAll('.fh-particle')
      if (particles) {
        particles.forEach((p, i) => {
          gsap.set(p, { opacity: 0 })
          gsap.to(p, {
            opacity: parseFloat(p.dataset.opacity) || 0.4,
            y: `random(-40, 40)`,
            x: `random(-30, 30)`,
            duration: `random(4, 8)`,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: i * 0.15 + 1,
          })
        })
      }

      master.from(imageRef.current, {
        scale: 0,
        opacity: 0,
        rotation: -10,
        duration: 1.2,
        ease: 'back.out(1.4)',
        delay: 0.2,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="founder-hero" ref={sectionRef}>

      <div className="fh-container">

        {/* LEFT */}
        <div className="fh-content">
          <div className="fh-badge" ref={badgeRef}>
            Weekend Training & Placement Program 2026
          </div>

          <h1 className="fh-title">
            <span className="fh-title-line">Build Your</span>
            <span className="fh-title-line fh-title-accent">AI Portfolio</span>
            <span className="fh-title-line">like the Top 5%</span>
            <span className="fh-title-line fh-title-accent-rose">Data Experts</span>
          </h1>

          <p className="fh-subtitle">
            Transform Your Career into Data Science
          </p>

          <p className="fh-tagline">
            Led by <strong>Subramani</strong>
          </p>

          <div className="fh-cta-group">
            <a href="#enroll" className="fh-btn primary">Start Your Journey</a>
            <a href="#syllabus" className="fh-btn outline">Explore Syllabus</a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="fh-image-col">

          {/* ⭐ NEW WRAPPER (FIX FOR ALIGNMENT) */}
          <div className="fh-image-stack">

            <div className="fh-glow-ring" ref={glowRef}></div>

            <div className="fh-image-frame" ref={imageRef}>
              <img
                src="/assets/founder.webp"
                alt="Founder"
                width="400"
                height="400"
                loading="eager"
              />
            </div>

            {/* FLOATING BADGES */}
            <div className="fh-floating-badge fh-fb-1">🏆 Top AI Speaker</div>
            <div className="fh-floating-badge fh-fb-2">🎯 15+ Brands</div>
            <div className="fh-floating-badge fh-fb-3">👥 1000+ Aspirants</div>

          </div>

          {/* STATS */}
          <div className="fh-stats-bar" ref={statsRef}>
            <div className="fh-stat">
              <div className="fh-stat-value">1000+</div>
              <div className="fh-stat-label">Aspirants</div>
            </div>

            <div className="fh-stat-divider" />

            <div className="fh-stat">
              <div className="fh-stat-value">15+</div>
              <div className="fh-stat-label">Brands</div>
            </div>

            <div className="fh-stat-divider" />

            <div className="fh-stat">
              <div className="fh-stat-value">50+</div>
              <div className="fh-stat-label">Projects</div>
            </div>

            <div className="fh-stat-divider" />

            <div className="fh-stat">
              <div className="fh-stat-value">9+</div>
              <div className="fh-stat-label">Mentors</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}