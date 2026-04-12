import { useParams } from "react-router-dom"
import { industryData } from "../data/industryData"
import { companyLogos } from "../utils/companyLogos"
import "./IndustryPage.css"

export default function IndustryPage() {
  const { industry } = useParams()
  const data = industryData[industry]

  if (!data) {
    return <h2 style={{ color: "white" }}>Industry Not Found</h2>
  }

  return (
    <div className="industry-page">
      <div className="industry-container">

        <h1>{data.title}</h1>

        <div className="industry-desc">
          {data.description.map((item, i) => (
            <p key={i}>✔ {item}</p>
          ))}
        </div>

        <h2>Companies Actively Hiring</h2>

        <div className="company-grid">
          {data.companies.map((company, i) => (
            <div key={i} className="company-card">

              <img
                src={companyLogos[company] || "https://via.placeholder.com/40?text=🏢"}
                alt={company}
                className="company-logo"
                onError={(e) => {
                  e.target.onerror = null // ✅ prevents blinking
                  e.target.src = "https://via.placeholder.com/40?text=🏢"
                }}
              />

              <span>{company}</span>

            </div>
          ))}
        </div>

      </div>
    </div>
  )
}