import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './FounderHero.css'

export default function FounderHero() {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const contentRef = useRef(null)
  const glowRef = useRef(null)
  const particlesRef = useRef(null)
  const badgeRef = useRef(null)
  const statsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const master = gsap.timeline({ defaults: { ease: 'power4.out' } })

      /* Background glow ring pulse */
      gsap.to(glowRef.current, {
        scale: 1.15,
        opacity: 0.6,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      /* Floating particles */
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

      /* Master entrance timeline */

      /* 1. Image frame scales in from 0 */
      master.from(imageRef.current, {
        scale: 0,
        opacity: 0,
        rotation: -10,
        duration: 1.2,
        ease: 'back.out(1.4)',
        delay: 0.2,
      })

        /* 2. Badge slides down */
        .from(badgeRef.current, {
          y: -30,
          opacity: 0,
          duration: 0.6,
        }, '-=0.5')

        /* 3. Content text staggers in */
        .from('.fh-title-line', {
          y: 80,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
        }, '-=0.3')

        .from('.fh-subtitle', {
          y: 40,
          opacity: 0,
          duration: 0.7,
        }, '-=0.3')

        .from('.fh-tagline', {
          y: 30,
          opacity: 0,
          duration: 0.6,
        }, '-=0.2')

        /* 4. CTA buttons appear */
        .from('.fh-cta-group > *', {
          y: 25,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
        }, '-=0.2')

        /* 5. Stats counter bar slides up */
        .from(statsRef.current, {
          y: 60,
          opacity: 0,
          duration: 0.8,
        }, '-=0.2')

        /* 6. Individual stat items stagger */
        .from('.fh-stat-item', {
          y: 20,
          opacity: 0,
          duration: 0.4,
          stagger: 0.1,
        }, '-=0.4')

      /* Continuous float for image frame */
      gsap.to(imageRef.current, {
        y: -12,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1.5,
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  /* Particle data */
  const particleData = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 5 + 2,
    color: i % 4 === 0 ? '#EC4899' : i % 3 === 0 ? '#818CF8' : '#6366F1',
    opacity: Math.random() * 0.4 + 0.15,
  }))

  return (
    <section className="founder-hero" ref={sectionRef} id="founder-hero">
      {/* Animated particles background */}
      <div className="fh-particles" ref={particlesRef}>
        {particleData.map((p) => (
          <span
            key={p.id}
            className="fh-particle"
            data-opacity={p.opacity}
            style={{
              left: p.left,
              top: p.top,
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: p.color,
            }}
          />
        ))}
      </div>

      {/* Radial gradient overlays */}
      <div className="fh-gradient-orb fh-orb-indigo"></div>
      <div className="fh-gradient-orb fh-orb-rose"></div>

      <div className="fh-container container">
        {/* LEFT: Content */}
        <div className="fh-content" ref={contentRef}>
          <div className="fh-badge" ref={badgeRef}>
            <span className="fh-badge-dot"></span>
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
            Train with India’s Core Data Scientists
            📊 SQL | Python | Power BI | Gen AI
            🚀 Live Weekends | Real Industry Projects
          </p>

          <p className="fh-tagline">
            Led by <strong>Subramani</strong> — Chief Data Scientist, Top AI Speaker, and architect behind 1,000+ data careers.
          </p>

          <div className="fh-cta-group">
            <a href="#enroll" className="quantum-btn-primary fh-btn">
              Start Your Journey
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </a>
            <a href="#syllabus" className="quantum-btn-outline fh-btn">
              Explore Syllabus
            </a>
          </div>
        </div>

        {/* RIGHT: Founder Image */}
        <div className="fh-image-col">
          {/* Glow ring behind image */}
          <div className="fh-glow-ring" ref={glowRef}></div>

          <div className="fh-image-frame" ref={imageRef}>
            {/* === SWAP THIS SRC WITH THE REAL FOUNDER IMAGE === */}
            <img
              src="/assets/founder.jpg"
              alt="Subramani — Chief Data Scientist, Analytics Avenue"
              className="fh-image"
            />
            {/* Decorative corner accents */}
            <div className="fh-frame-corner fh-corner-tl"></div>
            <div className="fh-frame-corner fh-corner-br"></div>
          </div>

          {/* Floating credential badges around the image */}
          <div className="fh-floating-badge fh-fb-1">
            <span className="fh-fb-icon">🏆</span>
            <span className="fh-fb-text">Top AI Speaker</span>
          </div>
          <div className="fh-floating-badge fh-fb-2">
            <span className="fh-fb-icon">🎯</span>
            <span className="fh-fb-text">15+ Brands</span>
          </div>
          <div className="fh-floating-badge fh-fb-3">
            <span className="fh-fb-icon">👥</span>
            <span className="fh-fb-text">1000+ Aspirants</span>
          </div>
        </div>
      </div>

      {/* Bottom stats bar */}
      <div className="fh-stats-bar" ref={statsRef}>
        <div className="container">
          <div className="fh-stats-grid">
            <div className="fh-stat-item">
              <span className="fh-stat-value">1000<span className="fh-stat-plus">+</span></span>
              <span className="fh-stat-label">Aspirants Empowered</span>
            </div>
            <div className="fh-stat-divider"></div>
            <div className="fh-stat-item">
              <span className="fh-stat-value">15<span className="fh-stat-plus">+</span></span>
              <span className="fh-stat-label">International Brands</span>
            </div>
            <div className="fh-stat-divider"></div>
            <div className="fh-stat-item">
              <span className="fh-stat-value">50<span className="fh-stat-plus">+</span></span>
              <span className="fh-stat-label">Industry Projects</span>
            </div>
            <div className="fh-stat-divider"></div>
            <div className="fh-stat-item">
              <span className="fh-stat-value">9<span className="fh-stat-plus">+</span></span>
              <span className="fh-stat-label">Expert Mentors</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="fh-bottom-fade"></div>
    </section>
  )
}
