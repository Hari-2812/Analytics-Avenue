import { memo, useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './SampleProjects.css'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    id: 'ecom-analytics',
    title: 'E-Commerce Sales Analytics',
    tech: ['SQL', 'Power BI', 'Python'],
    category: 'Business Intelligence',
    categoryColor: '#6366F1',
    desc: 'End-to-end sales analysis pipeline with Power BI dashboard — revenue trends, churn risk, and product performance.',
    image: '/assets/projects/project-sql.jpg',
    fallbackIcon: '📊',
    metrics: ['15M+ rows analyzed', 'Real retail dataset'],
  },
  {
    id: 'churn-prediction',
    title: 'Customer Churn Prediction',
    tech: ['Python', 'Scikit-learn', 'XGBoost'],
    category: 'Machine Learning',
    categoryColor: '#E879A0',
    desc: 'ML classification model predicting churn with 92% accuracy. Feature engineering + SHAP explainability included.',
    image: '/assets/projects/project-python.jpg',
    fallbackIcon: '🤖',
    metrics: ['92% Accuracy', 'SHAP Explainability'],
  },
  {
    id: 'powerbi-exec',
    title: 'Executive BI Command Centre',
    tech: ['Power BI', 'DAX', 'SQL Server'],
    category: 'Business Intelligence',
    categoryColor: '#6366F1',
    desc: 'Real-time C-suite dashboard with drill-through reports, KPI alerts, and predictive forecasting.',
    image: '/assets/projects/project-powerbi.jpg',
    fallbackIcon: '📈',
    metrics: ['5 departments', 'Live refresh'],
  },
  {
    id: 'genai-chatbot',
    title: 'GenAI Analytics Copilot',
    tech: ['LLMs', 'LangChain', 'Python', 'RAG'],
    category: 'Generative AI',
    categoryColor: '#22D3EE',
    desc: 'AI chatbot that answers business analytics questions by querying your data warehouse using natural language.',
    image: '/assets/projects/project-genai.jpg',
    fallbackIcon: '💬',
    metrics: ['GPT-4 Backend', 'RAG Architecture'],
  },
  {
    id: 'data-pipeline',
    title: 'Scalable ETL Data Pipeline',
    tech: ['Python', 'DBT', 'Snowflake', 'Airflow'],
    category: 'Data Engineering',
    categoryColor: '#10B981',
    desc: 'Production-grade ELT pipeline ingesting multi-source data into Snowflake. Orchestrated with Airflow.',
    image: '/assets/projects/project-ml.jpg',
    fallbackIcon: '⚙️',
    metrics: ['Cloud Native', '10TB+ data'],
  },
  {
    id: 'agentic-ai',
    title: 'Agentic AI Supply Chain Bot',
    tech: ['Agents', 'Python', 'LangGraph', 'GenAI'],
    category: 'Agentic AI',
    categoryColor: '#F59E0B',
    desc: 'Autonomous AI agent that monitors supply chain anomalies, triggers alerts, and drafts executive reports.',
    image: '/assets/projects/project-agents.jpg',
    fallbackIcon: '🚀',
    metrics: ['Multi-Agent', 'Auto Decision'],
  },
]

const ProjectCard = memo(function ProjectCard({ project }) {
  const [imgError, setImgError] = useState(false)

  return (
    <div className="project-card" id={`project-${project.id}`}>
      <div className="project-image-wrap">
        {!imgError ? (
          <picture>
            <source srcSet={project.image.replace(/\.jpg$/, '.webp')} type="image/webp" />
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
              loading="lazy"
              decoding="async"
              onError={() => setImgError(true)}
            />
          </picture>
        ) : (
          <div className="project-fallback">
            <span className="project-fallback-icon">
              {project.fallbackIcon}
            </span>
          </div>
        )}

        <div className="project-image-overlay" />

        <span
          className="project-category-badge"
          style={{ '--cat-color': project.categoryColor }}
        >
          {project.category}
        </span>
      </div>

      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.desc}</p>

        <div className="project-metrics">
          {project.metrics.map((m) => (
            <span key={m} className="project-metric">
              {m}
            </span>
          ))}
        </div>

        <div className="project-tech-stack">
          {project.tech.map((t) => (
            <span key={t} className="project-tech-tag">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
})

export default function SampleProjects() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.projects-header', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      })

      gsap.from('.project-card', {
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="projects-section" ref={sectionRef} id="projects">
      <div className="container">
        <div className="projects-header">
          <span className="section-label">Sample Projects</span>

          <h2 className="section-title">
            Industry-Grade Projects You&apos;ll{' '}
            <span className="accent-rose">Actually Build</span>
          </h2>

          <p className="section-subtitle">
            Not toy datasets. Real-world problems from Healthcare, Retail,
            Finance, Supply Chain, and AI — the kind that get you hired.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        <div className="projects-cta">
          <p className="projects-cta-text">
            50+ more industry projects await inside the program.
          </p>

          <a href="#enroll" className="quantum-btn-primary">
            Get Access to All Projects
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}