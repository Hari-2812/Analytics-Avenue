import "./AIFlowFull.css";

export default function AIFlowFull() {
  return (
    <section className="ai-flow-section">

      {/* ===== HEADER ===== */}
      <div className="ai-flow-header">
        <h2 className="ai-title">
          Our Success Strategy <span>Module</span>
        </h2>

        <p className="ai-subtitle">
          Prepared exclusively for freshers, immediate job seekers, and career transition
          candidates from our core data scientist panel
        </p>
      </div>

      {/* ===== FLOW CONTENT ===== */}
      <div className="ai-flow-container">

        {/* LEFT */}
        <div className="ai-left">
          <h1>AI<br />Tools</h1>
        </div>

        {/* SKILLS */}
        <div className="ai-skills">

          <div className="skill-group">
            <ul>
              <li>Python</li>
              <li>SQL</li>
              <li>Power BI</li>
              <li>Statistics</li>
            </ul>
          </div>

          <div className="divider"></div>

          <div className="skill-group">
            <ul>
              <li>GenAI and ML Flow with AgenticAI</li>
              <li>Data Science</li>
              <li>Machine Learning</li>
              <li>MLflow</li>
            </ul>
          </div>

        </div>

        {/* PHASE */}
        <div className="ai-phases">
          <div className="phase">
            <span className="bracket"></span>
            <p>Phase 1</p>
          </div>

          <div className="phase">
            <span className="bracket"></span>
            <p>Phase 2</p>
          </div>
        </div>

        {/* OUTPUT */}
        <div className="ai-output">

          <div className="output-group">
            <ul>
              <li>Data Engineer</li>
              <li>Data Analyst</li>
              <li>Visualization Engineer</li>
              <li>Data Consultant</li>
            </ul>

            <div className="plus">+</div>

            <p className="highlight">
              SQL Developer <br /> & Python Developer
            </p>
          </div>

          <div className="output-group">
            <ul>
              <li>GenAI Specialist</li>
              <li>Data Scientist</li>
              <li>ML Engineer</li>
              <li>AgenticAI Specialist</li>
            </ul>

            <div className="plus">+</div>

            <p className="highlight">
              1 lakh worth digital notes
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}