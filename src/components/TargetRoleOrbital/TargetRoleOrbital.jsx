import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import './TargetRoleOrbital.css'

const industries = [
  { title: 'Manufacturing', icon: '🏭', path: '/manufacturing' },
  { title: 'Telecom', icon: '📡', path: '/telecom' },
  { title: 'EV & Battery', icon: '🔋', path: '/ev' },
  { title: 'E-Commerce', icon: '🛒', path: '/ecommerce' },
  { title: 'Logistics', icon: '🚚', path: '/logistics' },
  { title: 'Healthcare', icon: '❤️', path: '/healthcare' },
  { title: 'Automobile', icon: '🚗', path: '/automobile' },
  { title: 'IT Services', icon: '💻', path: '/it' },
]

export default function TargetRoleOrbital() {
  const nodesRef = useRef([])
  const navigate = useNavigate()

  useEffect(() => {
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
      // ENTRY ANIMATION (VISIBLE FROM CORNERS)
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

      // FLOATING EFFECT
      gsap.to(node, {
        y: positions[i].y + 12,
        repeat: -1,
        yoyo: true,
        duration: 2 + i * 0.2,
        ease: 'sine.inOut',
        delay: 1.5,
      })
    })
  }, [])

  const handleClick = (e, path) => {
    const ripple = document.createElement('span')
    ripple.className = 'ripple'
    e.currentTarget.appendChild(ripple)

    setTimeout(() => ripple.remove(), 600)
    navigate(path)
  }

  return (
    <section className="flow-section">
      <h2 className="title">
        AI Converging Across <span>Industries</span>
      </h2>

      <div className="flow-container">

        {/* CENTER */}
        <div className="core">AI CORE</div>

        {/* NODES */}
        {industries.map((item, i) => (
          <div
            key={item.title}
            ref={(el) => (nodesRef.current[i] = el)}
            className="node"
            onClick={(e) => handleClick(e, item.path)}
          >
            <div className="icon">{item.icon}</div>
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </section>
  )
}