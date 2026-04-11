import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './SyllabusGrid.css'

gsap.registerPlugin(ScrollTrigger)

const modules = [
  {
    id: 'sql',
    number: '01',
    title: 'SQL & Data Engineering',
    subtitle: 'For Analytics Platforms',
    video: "https://www.youtube.com/watch?v=HXV3zeQKqGY",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6366F1">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    details: [
      'Advanced SQL for analytics, reporting & optimization',
      'Designing analytical data models & warehouse structures',
      'Understanding ETL/ELT pipelines',
      'Working with cloud-based data platforms',
    ],
  },
  {
    id: 'python',
    number: '02',
    title: 'Python for Analytics',
    subtitle: '& Data Science',
    video: "https://www.youtube.com/watch?v=rfscVS0vtbw",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6366F1">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    details: [
      'Data manipulation & performance optimization',
      'Statistical analysis & modeling',
      'Reusable analytics codebases',
      'Business problem solving',
    ],
  },
  {
    id: 'powerbi',
    number: '03',
    title: 'Business Intelligence',
    subtitle: 'Power BI & Visualization',
    video: "https://www.youtube.com/watch?v=AGrl-H87pRU",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6366F1">
        <rect x="3" y="12" width="4" height="9"/>
        <rect x="10" y="7" width="4" height="14"/>
      </svg>
    ),
    details: [
      'Enterprise BI design principles',
      'Executive dashboards',
      'DAX optimization',
      'Data storytelling',
    ],
  },
  {
    id: 'genai',
    number: '04',
    title: 'Generative AI',
    subtitle: '& LLM Systems',
    video: "https://www.youtube.com/watch?v=VtRLrQ3Ev-U",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6366F1">
        <circle cx="12" cy="12" r="4"/>
      </svg>
    ),
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

              {/* ▶ PLAY BUTTON */}
              <div
                className="syllabus-play-btn"
                onClick={(e) => {
                  e.stopPropagation()
                  window.open(mod.video, "_blank")
                }}
              >
                ▶
              </div>

              <div className="syllabus-card-header">
                <span className="syllabus-card-number">{mod.number}</span>
                <div className="syllabus-card-icon">{mod.icon}</div>
              </div>

              <h3 className="syllabus-card-title">{mod.title}</h3>
              <p className="syllabus-card-subtitle">{mod.subtitle}</p>

              {/* ✅ FIXED DETAILS */}
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

              {/* ✅ FIXED TOGGLE */}
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