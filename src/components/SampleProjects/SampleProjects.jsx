import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './SampleProjects.css'

gsap.registerPlugin(ScrollTrigger)

/* 🔥 WEBP IMAGES */
const projects = [
  {
    id: 'ecom-analytics',
    title: 'E-Commerce Sales Analytics',
    tech: ['SQL', 'Power BI', 'Python'],
    desc: 'End-to-end sales analysis pipeline with Power BI dashboard.',
    image: '/assets/projects/project-sql.webp',
    fallbackIcon: '📊',
    metrics: ['15M+ rows analyzed', 'Real retail dataset'],
  },
  {
    id: 'churn-prediction',
    title: 'Customer Churn Prediction',
    tech: ['Python', 'ML', 'XGBoost'],
    desc: 'ML model predicting churn with 92% accuracy.',
    image: '/assets/projects/project-python.webp',
    fallbackIcon: '🤖',
    metrics: ['92% Accuracy'],
  },
  {
    id: 'powerbi-exec',
    title: 'Executive BI Dashboard',
    tech: ['Power BI', 'DAX'],
    desc: 'Real-time executive dashboard.',
    image: '/assets/projects/project-powerbi.webp',
    fallbackIcon: '📈',
    metrics: ['Live refresh'],
  },
  {
    id: 'genai-chatbot',
    title: 'GenAI Copilot',
    tech: ['LLM', 'Python'],
    desc: 'AI chatbot for analytics queries.',
    image: '/assets/projects/project-genai.webp',
    fallbackIcon: '💬',
    metrics: ['RAG system'],
  },
]

function ProjectCard({ project }) {
  const [imgError, setImgError] = useState(false)

  return (
    <div className="project-card">

      <div className="project-image-wrap">
        {!imgError ? (
          <img
            src={project.image}
            alt={project.title}
            className="project-image"
            loading="lazy"
            width="300"
            height="200"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="project-fallback">
            {project.fallbackIcon}
          </div>
        )}
      </div>

      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.desc}</p>

        <div className="project-metrics">
          {project.metrics.map((m) => (
            <span key={m}>{m}</span>
          ))}
        </div>

        <div className="project-tech">
          {project.tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function SampleProjects() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* 🔥 LIGHTWEIGHT ANIMATION */
      const cards = gsap.utils.toArray('.project-card')

      cards.forEach((card, i) => {
        if (i < 4) { // limit animations
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
            },
            y: 40,
            opacity: 0,
            duration: 0.5,
          })
        }
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="projects-section" ref={sectionRef}>
      <div className="container">

        <h2 className="section-title">
          Industry Projects You'll <span>Build</span>
        </h2>

        <div className="projects-grid">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

      </div>
    </section>
  )
}