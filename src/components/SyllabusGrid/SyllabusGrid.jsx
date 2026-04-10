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
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/>
        <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/>
      </svg>
    ),
    details: [
      'Advanced SQL for analytics, reporting & optimization',
      'Designing analytical data models & warehouse structures',
      'Understanding ETL/ELT pipelines from an analytics perspective',
      'Working with cloud-based data platforms in real-world environments',
    ],
  },
  {
    id: 'python',
    number: '02',
    title: 'Python for Analytics',
    subtitle: '& Data Science',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
        <line x1="12" y1="2" x2="12" y2="22"/>
      </svg>
    ),
    details: [
      'Advanced data manipulation & performance optimization',
      'Python for statistical analysis, forecasting & modeling',
      'Structuring reusable analytics codebases for enterprise projects',
      'Translating business problems into analytical solutions',
    ],
  },
  {
    id: 'powerbi',
    number: '03',
    title: 'Business Intelligence',
    subtitle: 'Power BI & Visualization',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="12" width="4" height="9" rx="1"/>
        <rect x="10" y="7" width="4" height="14" rx="1"/>
        <rect x="17" y="3" width="4" height="18" rx="1"/>
      </svg>
    ),
    details: [
      'Enterprise BI design principles & semantic data modeling',
      'Power BI for executive dashboards & decision intelligence',
      'DAX for performance optimization & advanced calculations',
      'Data storytelling for CXOs, business heads & product teams',
    ],
  },
  {
    id: 'genai',
    number: '04',
    title: 'Generative AI',
    subtitle: '& LLM Systems',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4c0 1.1-.9 2-2 2h-4a2 2 0 0 1-2-2 4 4 0 0 1 4-4z"/>
        <path d="M12 8v8"/>
        <path d="M8 16h8"/>
        <circle cx="8" cy="20" r="2"/>
        <circle cx="16" cy="20" r="2"/>
        <circle cx="12" cy="16" r="2"/>
      </svg>
    ),
    details: [
      'LLM architecture, inference workflows & prompt engineering at scale',
      'Designing GenAI use cases for analytics, automation & BI',
      'Hands-on exposure to LLM orchestration, embeddings & vector databases',
      'Building production-ready AI copilots & intelligent decision systems',
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
        ease: 'power3.out',
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
          <p className="section-subtitle">
            Four industry-aligned modules designed by practitioners, not academics. Each module is built to make you job-ready.
          </p>
        </div>

        <div className="syllabus-grid">
          {modules.map((mod) => (
            <div
              key={mod.id}
              className={`syllabus-card ${expandedId === mod.id ? 'syllabus-card-expanded' : ''}`}
              onClick={() => toggleCard(mod.id)}
              role="button"
              tabIndex={0}
              id={`syllabus-card-${mod.id}`}
            >
              <div className="syllabus-card-header">
                <span className="syllabus-card-number">{mod.number}</span>
                <div className="syllabus-card-icon">{mod.icon}</div>
              </div>

              <h3 className="syllabus-card-title">{mod.title}</h3>
              <p className="syllabus-card-subtitle">{mod.subtitle}</p>

              <div className="syllabus-card-details">
                <ul className="syllabus-detail-list">
                  {mod.details.map((detail, i) => (
                    <li key={i} className="syllabus-detail-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              <span className="syllabus-card-toggle">
                {expandedId === mod.id ? 'Collapse' : 'View Details'}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={expandedId === mod.id ? 'toggle-rotated' : ''}>
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
