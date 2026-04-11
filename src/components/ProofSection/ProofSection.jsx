import { useState } from 'react'
import './ProofSection.css'

export default function ProofSection() {
  const [play, setPlay] = useState(false)

  return (
    <section className="proof-section">
      <div className="proof-container">

        {/* LEFT SIDE */}
        <div className="proof-left">

          <h2 className="proof-main-title">
            Top 5 Reasons to Choose Analytics Avenue
          </h2>

          <div className="proof-box">
            <ul>
              <li><strong>Industry-Ready Skills:</strong> Learn tools used in real data teams</li>
              <li><strong>End-to-End Learning:</strong> From data pipelines to AI deployment</li>
              <li><strong>Hands-On Projects:</strong> Build real-world portfolio projects</li>
              <li><strong>Career-Focused Training:</strong> Switch and grow faster</li>
              <li><strong>AI-Driven Approach:</strong> Learn ML, GenAI & automation systems</li>
            </ul>
          </div>

          <div className="proof-highlight">
            ⭐ A perfect platform for career transition seekers, freshers and passionate data experts
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="proof-right">
          <div className="proof-video-card">
            {!play ? (
              <div className="video-thumbnail" onClick={() => setPlay(true)}>
                <img src="/assets/founder.jpg" alt="Video" />
                <div className="play-btn">▶</div>
              </div>
            ) : (
              <iframe
                src="https://www.youtube.com/embed/OWfoMZlzozk?autoplay=1"
                title="YouTube video"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            )}
          </div>
        </div>

      </div>
    </section>
  )
}