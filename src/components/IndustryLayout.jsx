import "../pages/IndustryPage.css"

export default function IndustryLayout({ data }) {
  return (
    <div className="industry-page">

      <div className="industry-container">

        {/* LEFT SIDE */}
        <div className="industry-left">
          <h1>{data.title}</h1>

          <div className="industry-desc">
            {data.description.map((item, i) => (
              <p key={i}>✔ {item}</p>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="industry-right">
          <h2>Companies Actively Hiring</h2>

          <div className="company-grid">
            {data.companies.map((company, i) => (
              <div key={i} className="company-card">
                <div className="company-icon">🏢</div>
                <span>{company}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}