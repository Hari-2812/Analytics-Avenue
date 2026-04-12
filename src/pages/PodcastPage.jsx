import { useState } from "react"
import "./PodcastPage.css"

const podcasts = [
  {
    title: "How to Become Data Analyst",
    desc: "Complete roadmap to become a data analyst in 2026.",
    duration: "12 min",
    videoId: "x02hIoqguQI",
  },
  {
    title: "Real Industry Projects Explained",
    desc: "Understand real-world business problems and solutions.",
    duration: "18 min",
    videoId: "rfscVS0vtbw",
  },
  {
    title: "AI vs Data Science Career",
    desc: "Which career is better and how to choose?",
    duration: "15 min",
    videoId: "HXV3zeQKqGY",
  },
]

export default function PodcastPage() {
  const [active, setActive] = useState(podcasts[0])
  const [play, setPlay] = useState(false)

  return (
    <div className="podcast-page">

      <div className="podcast-layout">

        {/* LEFT SIDEBAR */}
        <div className="podcast-sidebar">
          <h3>🎙️ Podcast Library</h3>

          {podcasts.map((p, i) => (
            <div
              key={i}
              className={`podcast-item ${active.title === p.title ? 'active' : ''}`}
              onClick={() => {
                setActive(p)
                setPlay(false)
              }}
            >
              <p>{p.title}</p>
              <span>{p.duration}</span>
            </div>
          ))}
        </div>

        {/* RIGHT CONTENT */}
        <div className="podcast-content">

          {/* HEADER */}
          <div className="podcast-header">
            <h2>{active.title}</h2>
            <span>⏱ {active.duration}</span>
          </div>

          {/* VIDEO */}
          {!play ? (
            <div className="video-thumb" onClick={() => setPlay(true)}>
              <img
                src={`https://img.youtube.com/vi/${active.videoId}/hqdefault.jpg`}
                alt="Podcast"
                loading="lazy"
              />
              <div className="play-btn">▶</div>
            </div>
          ) : (
            <iframe
              src={`https://www.youtube.com/embed/${active.videoId}?autoplay=1`}
              title="Podcast"
              allow="autoplay"
              allowFullScreen
            />
          )}

          {/* DETAILS */}
          <div className="podcast-details">
            <p>{active.desc}</p>

            <ul>
              <li>✔ Real industry insights</li>
              <li>✔ Career guidance from experts</li>
              <li>✔ Practical project understanding</li>
            </ul>
          </div>

        </div>

      </div>

    </div>
  )
}