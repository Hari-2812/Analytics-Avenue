import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import './HeroSection.css'

export default function HeroSection() {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef = useRef(null)
  const videoRef = useRef(null)
  const particlesRef = useRef(null)

  const [activeIndex, setActiveIndex] = useState(0)

  const points = [
  "🚀 Industry-Aligned Curriculum Built for Real Data Roles",
  "💻 Hands-On Projects with Real-World Business Datasets",
  "🎯 1:1 Mentorship from Working Data Professionals",
  "📊 Master SQL, Python, Power BI & Generative AI Tools",
  "💼 Build a Job-Ready Portfolio with Career Guidance"
]

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* particles */
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

      /* entry animation */
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from(titleRef.current, { y: 60, opacity: 0, duration: 1, delay: 0.3 })
        .from(subtitleRef.current, { y: 40, opacity: 0, duration: 0.8 }, '-=0.4')
        .from(ctaRef.current?.children, { y: 30, opacity: 0, duration: 0.6, stagger: 0.15 }, '-=0.3')
        .from(videoRef.current, { y: 50, opacity: 0, scale: 0.95, duration: 0.9 }, '-=0.3')

    }, heroRef)

    return () => ctx.revert()
  }, [])

  // 🔥 AUTO ROTATE HIGHLIGHT
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % points.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero" ref={heroRef} id="hero">

      <div className="hero-particles" ref={particlesRef}></div>

      <div className="hero-content container">
        <div className="hero-badge">Weekend Training & Placement Program 2026</div>

        <h1 className="hero-title" ref={titleRef}>
          Top 5 Reasons to Join <span className="hero-title-accent">Analytics Avenue</span>
        </h1>

        <p className="hero-subtitle" ref={subtitleRef}>
          Discover how we help you become a job-ready data professional.
        </p>

        {/* 🔥 HIGHLIGHT LIST */}
        <ul className="hero-points">
          {points.map((point, i) => (
            <li
              key={i}
              className={`hero-point ${i === activeIndex ? 'active' : ''}`}
            >
              {point}
            </li>
          ))}
        </ul>

        <div className="hero-cta-wrapper" ref={ctaRef}>
          <a href="#enroll" className="hero-btn-primary">Start Your Journey</a>
          <a href="#syllabus" className="quantum-btn-outline hero-btn">Explore Syllabus</a>
        </div>

        <div className="hero-video-wrapper" ref={videoRef}>
          <div className="hero-video-frame">
            <iframe
              src="https://www.youtube.com/embed/x02hIoqguQI"
              title="Program"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="hero-bottom-fade"></div>
    </section>
  )
}