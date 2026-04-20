import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import './TargetRoleOrbital.css'

const industries = [
  { title: 'Manufacturing', icon: '🏭', path: '/manufacturing', placementRate: '92%', topRoles: ['Data Analyst', 'AI Engineer'], salaryRange: '₹6–20 LPA' },
  { title: 'Telecom', icon: '📡', path: '/telecom', placementRate: '88%', topRoles: ['Data Scientist', 'ML Engineer'], salaryRange: '₹7–22 LPA' },
  { title: 'EV & Battery', icon: '🔋', path: '/ev', placementRate: '90%', topRoles: ['AI Specialist', 'Data Engineer'], salaryRange: '₹8–25 LPA' },
  { title: 'E-Commerce', icon: '🛒', path: '/ecommerce', placementRate: '95%', topRoles: ['Product Analyst', 'AI Developer'], salaryRange: '₹9–28 LPA' },
  { title: 'Logistics', icon: '🚚', path: '/logistics', placementRate: '87%', topRoles: ['Operations Analyst', 'AI Consultant'], salaryRange: '₹6–21 LPA' },
  { title: 'Healthcare', icon: '❤️', path: '/healthcare', placementRate: '93%', topRoles: ['Health Data Analyst', 'AI Researcher'], salaryRange: '₹10–30 LPA' },
  { title: 'Automobile', icon: '🚗', path: '/automobile', placementRate: '89%', topRoles: ['Automotive AI Engineer', 'Data Analyst'], salaryRange: '₹7–24 LPA' },
  { title: 'IT Services', icon: '💻', path: '/it', placementRate: '96%', topRoles: ['Software Engineer', 'AI Architect'], salaryRange: '₹12–35 LPA' },
]

export default function TargetRoleOrbital() {
  const nodesRef = useRef([])
  const navigate = useNavigate()
  const [selectedIndustry, setSelectedIndustry] = useState(null)
  const cardRef = useRef()
  const titleRef = useRef()
  const subtitleRef = useRef()
  const coreRef = useRef()

  useEffect(() => {
    const isMobile = window.innerWidth <= 768

    const positions = [
      { x: -240, y: -160 },
      { x: 240, y: -160 },
      { x: 320, y: 20 },
      { x: 200, y: 220 },
      { x: -200, y: 220 },
      { x: -320, y: 20 },
      { x: -120, y: -40 },
      { x: 120, y: -40 },
    ]

    nodesRef.current.forEach((node, i) => {

      if (isMobile) {
        gsap.set(node, { clearProps: "all" })
        return
      }

      gsap.fromTo(
        node,
        {
          x: i % 2 === 0 ? -500 : 500,
          y: i < 4 ? -350 : 350,
          opacity: 0,
          scale: 0.5,
        },
        {
          x: positions[i].x,
          y: positions[i].y,
          opacity: 1,
          scale: 1,
          duration: 1.4,
          delay: i * 0.12,
          ease: 'power3.out',
        }
      )

      gsap.to(node, {
        y: positions[i].y + 12,
        repeat: -1,
        yoyo: true,
        duration: 2 + i * 0.2,
        ease: 'sine.inOut',
        delay: 1.5,
      })
    })

    if (!isMobile) {
      gsap.fromTo(titleRef.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0 })
      gsap.fromTo(subtitleRef.current, { opacity: 0 }, { opacity: 1 })
      gsap.to(coreRef.current, { scale: 1.05, repeat: -1, yoyo: true })
    }

  }, [])

  useEffect(() => {
    if (selectedIndustry && cardRef.current) {
      gsap.fromTo(cardRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0 })
    }
  }, [selectedIndustry])

  const handleClick = (e, path, item) => {
    setSelectedIndustry(item)
    gsap.to(e.currentTarget, { scale: 0.95, duration: 0.1, yoyo: true, repeat: 1 })
    navigate(path)
  }

  return (
    <>
      <section className="flow-section">

        <h2 ref={titleRef} className="title">
          AI Converging Across <span>Industries</span>
        </h2>

        <p ref={subtitleRef} className="flow-subtitle">
          Click any industry icon to explore <span>placement opportunities</span>
        </p>

        <div className="flow-container">

          <div ref={coreRef} className="core">AI CORE</div>

          {industries.map((item, i) => (
            <div
              key={item.title}
              ref={(el) => (nodesRef.current[i] = el)}
              className="node"
              onClick={(e) => handleClick(e, item.path, item)}
            >
              <div className="icon">{item.icon}</div>
              <span>{item.title}</span>
            </div>
          ))}

        </div>
      </section>

      {selectedIndustry && (
        <div ref={cardRef} className="placement-card">
          <h3>{selectedIndustry.title}</h3>
          <p><strong>Placement Rate:</strong> {selectedIndustry.placementRate}</p>
          <p><strong>Top Roles:</strong> {selectedIndustry.topRoles.join(', ')}</p>
          <p><strong>Salary Range:</strong> {selectedIndustry.salaryRange}</p>
        </div>
      )}
    </>
  )
}