import { useState, useEffect } from 'react'
import './Navbar.css'

const navLinks = [
  { label: 'Program', href: '#roles' },
  { label: 'Syllabus', href: '#syllabus' },
  { label: 'Placement', href: '#placement' },
  { label: 'Team', href: '#experts' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`} id="navbar">
      <div className="navbar-inner container">
        <a href="#" className="navbar-logo">
          <span className="logo-icon">AA</span>
          <span className="logo-text">Analytics Avenue</span>
        </a>

        <nav className={`navbar-nav ${mobileOpen ? 'navbar-nav-open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="navbar-link"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#enroll"
            className="quantum-btn-primary navbar-cta-mobile"
            onClick={() => setMobileOpen(false)}
          >
            Enroll Now
          </a>
        </nav>

        {/* <a href="#enroll" className="quantum-btn-primary navbar-cta-desktop">
          Enroll Now
        </a> */}

        <button
          className={`navbar-hamburger ${mobileOpen ? 'hamburger-active' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          id="navbar-toggle"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {mobileOpen && (
        <div className="navbar-overlay" onClick={() => setMobileOpen(false)} />
      )}
    </header>
  )
}
