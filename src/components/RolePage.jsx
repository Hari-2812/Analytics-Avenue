import '../styles/role.css'

export default function RolePage({ data }) {
  return (
    <div className="role-page">

      {/* HERO */}
      <section className="role-hero">
        <h1>{data.title}</h1>
        <p>{data.tagline}</p>
      </section>

      {/* INDUSTRY */}
      <section className="role-section">
        <h2>🌐 Industry Domain</h2>
        <h3 className="role-subtitle">{data.domain}</h3>

        {data.description.map((para, i) => (
          <p key={i} style={{ color: "#94a3b8", marginBottom: "10px" }}>
            {para}
          </p>
        ))}
      </section>

      {/* SCOPE */}
      <section className="role-section">
        <h2>🚀 Scope of AI</h2>

        <div className="role-grid">
          {data.scope.map((item, i) => (
            <div key={i} className="role-card">{item}</div>
          ))}
        </div>
      </section>

      {/* COMPANIES */}
      <section className="role-section">
        <h2>🏢 Companies Hiring</h2>

        <div className="company-grid">
          {data.companies.map((c, i) => (
            <div key={i} className="company-card">{c}</div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="role-section">
        <h2>🧠 Skills Required</h2>

        <div className="role-grid">
          {data.skills.map((s, i) => (
            <div key={i} className="role-card">{s}</div>
          ))}
        </div>
      </section>

      {/* TOOLS */}
      <section className="role-section">
        <h2>⚙️ Tools & Technologies</h2>

        <div className="role-grid">
          {data.tools.map((t, i) => (
            <div key={i} className="role-card">{t}</div>
          ))}
        </div>
      </section>

      {/* SALARY */}
      <section className="role-section highlight">
        <h2>💰 Salary & Demand</h2>
        <p style={{ marginBottom: "10px" }}>{data.salary}</p>
        <p>{data.demand}</p>
      </section>

      {/* CTA */}
      <section className="role-cta">
        <h2>Start Your AI Journey 🚀</h2>
        <button className="cta-btn">Enroll Now</button>
      </section>

    </div>
  )
}