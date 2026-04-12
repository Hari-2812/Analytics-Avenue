import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
  { label: 'Program', href: '#roles' },
  { label: 'Syllabus', href: '#syllabus' },
  { label: 'Placement', href: '#placement' },
  { label: 'Team', href: '#experts' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Podcast', href: '/podcast' },
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
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
  }, [mobileOpen])

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>

      <div className="navbar-inner container">

        {/* LOGO */}
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">AA</span>
          <span className="logo-text">Analytics Avenue</span>
        </Link>

        {/* NAV LINKS */}
        <nav className={`navbar-nav ${mobileOpen ? 'navbar-nav-open' : ''}`}>

          {navLinks.map((link) =>
            link.href.startsWith('/') ? (

              /* 🔥 ROUTE LINK */
              <Link
                key={link.label}
                to={link.href}
                className="navbar-link"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>

            ) : (

              /* 🔥 SCROLL LINK */
              <a
                key={link.label}
                href={link.href}
                className="navbar-link"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>

            )
          )}

          {/* MOBILE CTA */}
          <a
            href="#enroll"
            className="quantum-btn-primary navbar-cta-mobile"
            onClick={() => setMobileOpen(false)}
          >
            Enroll Now
          </a>

        </nav>

        {/* HAMBURGER */}
        <button
          className={`navbar-hamburger ${mobileOpen ? 'hamburger-active' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
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