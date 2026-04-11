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
      gsap.from('.syllabus-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const toggleCard = (id) => {
    setExpandedId(expandedId === id ? null : id)
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
              onClick={() => toggleCard(mod.id)}
            >

              {/* 🔥 VIDEO (THUMBNAIL → PLAY) */}
              <div
                className="syllabus-video-box"
                onClick={(e) => {
                  e.stopPropagation()
                  playVideo(mod.id)
                }}
              >
                {playingId === mod.id ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${mod.videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                    title={mod.title}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                ) : (
                  <div className="thumbnail-wrapper">
                    <img
                      src={`https://img.youtube.com/vi/${mod.videoId}/hqdefault.jpg`}
                      alt={mod.title}
                      className="video-thumbnail"
                      loading="lazy"
                    />
                    <div className="play-button">▶</div>
                  </div>
                )}
              </div>

              <h3 className="syllabus-card-title">{mod.title}</h3>
              <p className="syllabus-card-subtitle">{mod.subtitle}</p>

              {/* DETAILS */}
              <div className="syllabus-card-details">
                {expandedId === mod.id && (
                  <ul className="syllabus-detail-list">
                    {mod.details.map((d, i) => (
                      <li key={i} className="syllabus-detail-item">
                        {d}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <span
                className="syllabus-card-toggle"
                onClick={(e) => {
                  e.stopPropagation()
                  toggleCard(mod.id)
                }}
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