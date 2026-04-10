import './Footer.css'

const quickLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Program', href: '#roles' },
  { label: 'Syllabus', href: '#syllabus' },
  { label: 'Placement', href: '#placement' },
  { label: 'Team', href: '#experts' },
]

const services = [
  'Data Engineering',
  'Data Analytics',
  'Data Science',
  'Machine Learning',
  'GenAI & LLM',
  'Power BI Solutions',
]

const industries = [
  'Healthcare',
  'Automotive',
  'Supply Chain',
  'BFSI',
  'Semiconductors',
  'Manufacturing',
]

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-top-line"></div>

      <div className="container">
        <div className="footer-grid">
          {/* Brand column */}
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-icon">AA</span>
              <span className="footer-logo-text">Analytics Avenue</span>
            </div>
            <p className="footer-desc">
              Analytics Avenue is an IT and EdTech organization specializing in advanced analytics, data engineering, and AI-driven solutions. We enable enterprise BI, GenAI, predictive analytics, and scalable data platforms to drive real business impact.
            </p>
            <div className="footer-socials">
              <a href="https://twitter.com" className="footer-social" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://linkedin.com" className="footer-social" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://facebook.com" className="footer-social" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer-link">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-links">
              {services.map((svc) => (
                <li key={svc}>
                  <span className="footer-link">{svc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div className="footer-col">
            <h4 className="footer-col-title">Industries</h4>
            <ul className="footer-links">
              {industries.map((ind) => (
                <li key={ind}>
                  <span className="footer-link">{ind}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4 className="footer-col-title">Contact</h4>
            <ul className="footer-links">
              <li>
                <a href="tel:07835901173" className="footer-link">📞 078 3590 1173</a>
              </li>
              <li>
                <span className="footer-link">📍 Delhi, India</span>
              </li>
              <li>
                <a href="https://analyticsavenue.in" className="footer-link" target="_blank" rel="noopener noreferrer">🌐 analyticsavenue.in</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2026 Analytics Avenue. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#" className="footer-bottom-link">Privacy Policy</a>
            <a href="#" className="footer-bottom-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
