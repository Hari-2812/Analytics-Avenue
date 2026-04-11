import { useParams } from "react-router-dom"
import { industryData } from "../data/industryData"
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

        {/* HEADER */}
        <h1>{data.title}</h1>

        {/* DESCRIPTION */}
        <div className="industry-desc">
          {data.description.map((item, i) => (
            <p key={i}>✔ {item}</p>
          ))}
        </div>

        {/* COMPANIES */}
        <h2>Companies Actively Hiring</h2>

        <div className="company-grid">
          {data.companies.map((company, i) => (
            <div key={i} className="company-card">
              {company}
            </div>
          ))}
        </div>

      </div>

    </div>
  )
}