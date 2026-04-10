import { useEffect, useMemo, useRef, useState } from 'react'
import './HeroSection.css'

const YOUTUBE_EMBED_URL = 'https://www.youtube.com/embed/aircAruvnKk'

export default function HeroSection() {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef = useRef(null)
  const videoRef = useRef(null)
  const particlesRef = useRef(null)
  const [loadVideo, setLoadVideo] = useState(false)

  useEffect(() => {
    if (!videoRef.current) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadVideo(true)
          observer.disconnect()
        }
      },
      { rootMargin: '350px 0px' },
    )

    observer.observe(videoRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined
    }

    let ctx
    ;(async () => {
      const { default: gsap } = await import('gsap')
      ctx = gsap.context(() => {
        const particles = particlesRef.current?.querySelectorAll('.hero-particle')
        if (particles) {
          particles.forEach((p, i) => {
            gsap.to(p, {
              y: `random(-30, 30)`,
              x: `random(-20, 20)`,
              duration: `random(3, 6)`,
              repeat: -1,
              yoyo: true,
              ease: 'sine.inOut',
              delay: i * 0.2,
            })
          })
        }

        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
        tl.from(titleRef.current, { y: 60, opacity: 0, duration: 1, delay: 0.3 })
          .from(subtitleRef.current, { y: 40, opacity: 0, duration: 0.8 }, '-=0.4')
          .from(ctaRef.current?.children, { y: 30, opacity: 0, duration: 0.6, stagger: 0.15 }, '-=0.3')
          .from(videoRef.current, { y: 50, opacity: 0, scale: 0.95, duration: 0.9 }, '-=0.3')
      }, heroRef)
    })()

    return () => ctx?.revert()
  }, [])

  const particleData = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 4 + 2,
        color: i % 3 === 0 ? '#EC4899' : '#6366F1',
        opacity: Math.random() * 0.5 + 0.2,
      })),
    [],
  )

  return (
    <section className="hero" ref={heroRef} id="hero">
      <div className="hero-particles" ref={particlesRef}>
        {particleData.map((p) => (
          <span
            key={p.id}
            className="hero-particle"
            style={{
              left: p.left,
              top: p.top,
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: p.color,
              opacity: p.opacity,
            }}
          />
        ))}
        <span className="hero-code-node" style={{ left: '8%', top: '20%' }}>{'{ }'}</span>
        <span className="hero-code-node" style={{ left: '85%', top: '15%' }}>{'<AI />'}</span>
        <span className="hero-code-node" style={{ left: '12%', top: '70%' }}>{'def()'}</span>
        <span className="hero-code-node" style={{ left: '90%', top: '65%' }}>{'SQL'}</span>
      </div>

      <div className="hero-content container">
        <div className="hero-badge">Weekend Training & Placement Program 2026</div>

        <h1 className="hero-title" ref={titleRef}>
          Build Your <span className="hero-title-accent">AI Portfolio</span> like
          the Top 5% <span className="hero-title-accent-rose">Data Experts</span>
        </h1>

        <p className="hero-subtitle" ref={subtitleRef}>
          From India's core Data Scientists. Master SQL, Python, Power BI & Generative AI
          through hands-on, industry-oriented live sessions with real project exposure.
        </p>

        <div className="hero-cta-wrapper" ref={ctaRef}>
          <a href="#enroll" className="hero-btn-primary">
            Start Your Journey
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
          </a>
          <a href="#syllabus" className="quantum-btn-outline hero-btn">
            Explore Syllabus
          </a>
        </div>

        <div className="hero-video-wrapper" ref={videoRef}>
          <div className="hero-video-frame">
            {loadVideo ? (
              <iframe
                src={YOUTUBE_EMBED_URL}
                title="Data Science & AI Program Overview"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            ) : (
              <button
                type="button"
                className="hero-video-placeholder"
                aria-label="Load program overview video"
                onClick={() => setLoadVideo(true)}
              >
                ▶ Play Program Overview
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="hero-bottom-fade"></div>
    </section>
  )
}
