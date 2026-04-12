import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './SyllabusGrid.css'

gsap.registerPlugin(ScrollTrigger)

const modules = [
  {
    id: 'sql',
    title: 'SQL & Data Engineering',
    subtitle: 'For Analytics Platforms',
    videoId: "HXV3zeQKqGY",
    details: [
      'Advanced SQL for analytics, reporting & optimization',
      'Designing analytical data models & warehouse structures',
      'Understanding ETL/ELT pipelines',
      'Working with cloud-based data platforms',
    ],
  },
  {
    id: 'python',
    title: 'Python for Analytics',
    subtitle: '& Data Science',
    videoId: "rfscVS0vtbw",
    details: [
      'Data manipulation & performance optimization',
      'Statistical analysis & modeling',
      'Reusable analytics codebases',
      'Business problem solving',
    ],
  },
  {
    id: 'powerbi',
    title: 'Business Intelligence',
    subtitle: 'Power BI & Visualization',
    videoId: "AGrl-H87pRU",
    details: [
      'Enterprise BI design principles',
      'Executive dashboards',
      'DAX optimization',
      'Data storytelling',
    ],
  },
  {
    id: 'genai',
    title: 'Generative AI',
    subtitle: '& LLM Systems',
    videoId: "VtRLrQ3Ev-U",
    details: [
      'LLM architecture & prompt engineering',
      'GenAI use cases',
      'Vector databases',
      'AI copilots',
    ],
  },
]

export default function SyllabusGrid() {
  const sectionRef = useRef(null)
  const [expandedId, setExpandedId] = useState(null)
  const [playingId, setPlayingId] = useState(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      const cards = gsap.utils.toArray('.syllabus-card')

      cards.forEach((card, i) => {
        if (i < 4) { // 🔥 limit animation count
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
            y: 40,
            opacity: 0,
            duration: 0.5,
            ease: 'power2.out'
          })
        }
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const toggleCard = (id) => {
    setExpandedId(prev => (prev === id ? null : id))
  }

  const playVideo = (id) => {
    setPlayingId(id)
  }

  return (
    <section className="syllabus-section" ref={sectionRef} id="syllabus">
      <div className="container">

        <div className="syllabus-heading">
          <span className="section-label">The Curriculum</span>
          <h2 className="section-title">
            The Quantum <span className="accent-rose">Syllabus</span>
          </h2>
        </div>

        <div className="syllabus-grid">
          {modules.map((mod) => (
            <div
              key={mod.id}
              className={`syllabus-card ${expandedId === mod.id ? 'syllabus-card-expanded' : ''}`}
            >

              {/* 🎬 VIDEO OPTIMIZED */}
              <div
                className="syllabus-video-box"
                onClick={(e) => {
                  e.stopPropagation()
                  playVideo(mod.id)
                }}
              >
                {playingId === mod.id ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${mod.videoId}?autoplay=1`}
                    title={mod.title}
                    loading="lazy"   /* 🔥 important */
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                ) : (
                  <div className="thumbnail-wrapper">
                    <img
                      src={`https://img.youtube.com/vi/${mod.videoId}/hqdefault.jpg`}
                      alt={mod.title}
                      loading="lazy"
                    />
                    <div className="play-button">▶</div>
                  </div>
                )}
              </div>

              <h3 className="syllabus-card-title">{mod.title}</h3>
              <p className="syllabus-card-subtitle">{mod.subtitle}</p>

              {/* DETAILS */}
              {expandedId === mod.id && (
                <ul className="syllabus-detail-list">
                  {mod.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              )}

              <span
                className="syllabus-card-toggle"
                onClick={() => toggleCard(mod.id)}
              >
                {expandedId === mod.id ? 'Collapse' : 'View Details'}
              </span>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}