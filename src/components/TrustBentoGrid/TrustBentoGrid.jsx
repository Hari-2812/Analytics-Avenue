import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './TrustBentoGrid.css'

gsap.registerPlugin(ScrollTrigger)

const bentoItems = [
  {
    id: 'speaker',
    size: 'small',
    title: 'Honored as Top AI Speaker',
    description:
      'Outstanding contributions to AI education and industry adoption across nationwide platforms.',
    image: '/assets/honors/speaker.jpg',
    tag: 'Guest Speaker',
  },
  {
    id: 'srm',
    size: 'small',
    title: 'SRM University Partnership',
    description:
      'Official academic collaboration empowering engineering students with industry-ready AI and data analytics skills.',
    image: '/assets/honors/srm.jpg',
    tag: 'Partnership',
  },
  {
    id: 'aspirants',
    size: 'small',
    title: 'Empowered 1,000+ Data Aspirants',
    description:
      'Through focused AI and data analytics initiatives across rural and urban engineering colleges.',
    image: '/assets/honors/aspirants.jpg',
    tag: 'Impact',
    stat: '1000+',
  },
  {
    id: 'brands',
    size: 'small',
    title: '15+ International Brands',
    description:
      'Worked as decision and data scientist with global organizations.',
    image: '/assets/honors/brands.jpg',
    tag: 'Portfolio',
    stat: '15+',
  },
  {
    id: 'projects',
    size: 'small',
    title: '50+ Industry-Ready Projects',
    description: 'Real-world project exposure across multiple sectors.',
    image: '/assets/honors/projects.jpg',
    tag: 'Projects',
    stat: '50+',
  },
  {
    id: 'movement',
    size: 'small',
    title: 'Nationwide AI Movement',
    description:
      'Bridging academia and industry with future-ready AI talent across India.',
    image: '/assets/honors/movement.jpg',
    tag: 'Mission',
    stat: '🇮🇳',
  },
]

export default function TrustBentoGrid() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.bento-item', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="bento-section" ref={sectionRef} id="trust">
      <div className="container">
        <div className="bento-heading">
          <span className="section-label">Trust & Recognition</span>
          <h2 className="section-title">
            Honours and <span className="accent-rose">Recognitions</span>
          </h2>
          <p className="section-subtitle">
            Real partnerships, real impact, real recognition from academia and
            industry leaders.
          </p>
        </div>

        <div className="bento-grid">
          {bentoItems.map((item) => (
            <div
              key={item.id}
              className={`bento-item bento-${item.size}`}
              id={`bento-${item.id}`}
            >
              {item.image && (
                <div className="bento-image-wrapper">
                  <picture>
                    <source srcSet={item.image.replace(/\.jpg$/, '.webp')} type="image/webp" />
                    <img
                      src={item.image}
                      alt={item.title}
                      className="bento-image"
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                </div>
              )}

              <div className="bento-content">
                <span className="bento-tag">{item.tag}</span>
                {item.stat && <span className="bento-stat">{item.stat}</span>}
                <h3 className="bento-title">{item.title}</h3>
                <p className="bento-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}