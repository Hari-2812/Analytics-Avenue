import "../pages/IndustryPage.css"
import { companyLogos } from "../utils/companyLogos"

export default function IndustryLayout({ data }) {
  return (
    <div className="industry-page">
      <div className="industry-container">

        {/* LEFT */}
        <div className="industry-left">
          <h1>{data.title}</h1>

          <div className="industry-desc">
            {data.description.map((item, i) => (
              <p key={i}>✔ {item}</p>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="industry-right">
          <h2>Companies Actively Hiring</h2>

          <div className="company-grid">
            {data.companies.map((company, i) => (
              <div key={i} className="company-card">

                <img
                  src={companyLogos[company] || "https://via.placeholder.com/40?text=🏢"}
                  alt={company}
                  className="company-logo"
                  onError={(e) => {
                    e.target.onerror = null // ✅ stop infinite loop
                    e.target.src = "https://via.placeholder.com/40?text=🏢"
                  }}
                />

                <span>{company}</span>

              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}