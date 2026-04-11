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
    video: "https://www.youtube.com/embed/HXV3zeQKqGY",
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
    video: "https://www.youtube.com/embed/rfscVS0vtbw",
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
    video: "https://www.youtube.com/embed/AGrl-H87pRU",
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
    video: "https://www.youtube.com/embed/VtRLrQ3Ev-U",
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

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.syllabus-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        y: 60,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const toggleCard = (id) => {
    setExpandedId(expandedId === id ? null : id)
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

              {/* 🔥 ALWAYS VISIBLE VIDEO */}
              <div className="syllabus-video-box">
                <iframe
                  src={mod.video}
                  title={mod.title}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
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