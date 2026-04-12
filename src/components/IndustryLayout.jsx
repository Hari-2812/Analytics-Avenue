import "../pages/IndustryPage.css"

export default function IndustryLayout({ data }) {

  /* 🔥 Generate Clearbit logo dynamically */
  const getLogo = (company) => {
    const domainMap = {
      "TCS": "tcs.com",
      "Infosys": "infosys.com",
      "Wipro": "wipro.com",
      "HCL": "hcltech.com",
      "Tech Mahindra": "techmahindra.com",
      "LTIMindtree": "ltimindtree.com",
      "Reliance Industries": "ril.com",
      "Tata Steel": "tatasteel.com",
      "Bosch India": "bosch.in",
      "Siemens India": "siemens.co.in",
      "Flipkart": "flipkart.com",
      "Amazon India": "amazon.in",
      "Zomato": "zomato.com",
      "Swiggy": "swiggy.com",
      "Tesla": "tesla.com",
      "Ola Electric": "olaelectric.com"
    }

    const domain = domainMap[company]
    return domain
      ? `https://logo.clearbit.com/${domain}`
      : null
  }

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
            {data.companies.map((company, i) => {

              const logo = getLogo(company)

              return (
                <div key={i} className="company-card">

                  <img
                    src={logo || "https://via.placeholder.com/40?text=🏢"}
                    alt={company}
                    className="company-logo"
                    loading="lazy"
                    width="40"
                    height="40"
                    onError={(e) => {
                      e.target.onerror = null
                      e.target.src = "https://via.placeholder.com/40?text=🏢"
                    }}
                  />

                  <span>{company}</span>

                </div>
              )
            })}
          </div>
        </div>

      </div>
    </div>
  )
}