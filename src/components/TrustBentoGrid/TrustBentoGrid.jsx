import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './TrustBentoGrid.css'

gsap.registerPlugin(ScrollTrigger)

/* 🔥 WEBP IMAGES */
const bentoItems = [
  {
    id: 'speaker',
    title: 'Top AI Speaker',
    image: '/assets/honors/speaker.webp',
    tag: 'Speaker',
  },
  {
    id: 'srm',
    title: 'SRM Partnership',
    image: '/assets/honors/srm.webp',
    tag: 'Partnership',
  },
  {
    id: 'aspirants',
    title: '1000+ Aspirants',
    image: '/assets/honors/aspirants.webp',
    tag: 'Impact',
    stat: '1000+',
  },
  {
    id: 'brands',
    title: '15+ Brands',
    image: '/assets/honors/brands.webp',
    tag: 'Portfolio',
    stat: '15+',
  },
  {
    id: 'projects',
    title: '50+ Projects',
    image: '/assets/honors/projects.webp',
    tag: 'Projects',
    stat: '50+',
  },
  {
    id: 'movement',
    title: 'AI Movement',
    image: '/assets/honors/movement.webp',
    tag: 'Mission',
    stat: '🇮🇳',
  },
]

export default function TrustBentoGrid() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* 🔥 LIGHTWEIGHT ANIMATION */
      const items = gsap.utils.toArray('.bento-item')

      items.forEach((item, i) => {
        if (i < 6) {
          gsap.from(item, {
            scrollTrigger: {
              trigger: item,
              start: 'top 90%',
            },
            y: 30,
            opacity: 0,
            duration: 0.4,
          })
        }
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="bento-section" ref={sectionRef}>
      <div className="container">

        <h2 className="section-title">
          Honours & <span>Recognition</span>
        </h2>

        <div className="bento-grid">
          {bentoItems.map((item) => (
            <div key={item.id} className="bento-item">

              <div className="bento-image-wrapper">
                <img
                  src={item.image}
                  alt={item.title}
                  className="bento-image"
                  loading="lazy"
                  width="300"
                  height="200"
                />
              </div>

              <div className="bento-content">
                <span>{item.tag}</span>
                {item.stat && <strong>{item.stat}</strong>}
                <h3>{item.title}</h3>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}