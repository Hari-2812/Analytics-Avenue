import { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './ExpertPanel.css'

gsap.registerPlugin(ScrollTrigger)

/* 🔥 UPDATED WITH WEBP */
const experts = [
  {
    name: 'Kishore',
    role: 'Senior AI Engineer',
    bio: 'Builds Agentic AI solutions for supply chain and automobile industry with 8+ years experience.',
    skills: ['Azure', 'Machine Learning', 'SQL', 'GenAI'],
    avatar: '/assets/experts/kishore.webp',
  },
  {
    name: 'Bala',
    role: 'Senior Data Scientist',
    bio: 'Builds predictive ML models for healthcare and BFSI sectors with 8+ years of experience.',
    skills: ['AWS', 'Machine Learning', 'SQL', 'GenAI'],
    avatar: '/assets/experts/bala.webp',
  },
  {
    name: 'Prasanna',
    role: 'Senior BI Developer',
    bio: 'Builds predictive dashboards and data models for global brands with 5+ years of experience.',
    skills: ['AWS', 'GCP', 'SQL', 'Power BI'],
    avatar: '/assets/experts/prasanna.webp',
  },
  {
    name: 'Mahesh',
    role: 'Senior AI Engineer',
    bio: 'Builds scalable AI solutions for supply chain and automobile industries with 3+ years experience.',
    skills: ['Machine Learning', 'SQL', 'GenAI', 'Agentic AI'],
    avatar: '/assets/experts/mahesh.webp',
  },
  {
    name: 'Deepak Raj',
    role: 'Agentic AI Engineer',
    bio: 'Builds Agentic AI automations for supply chain to reduce manual efforts and improve efficiency.',
    skills: ['Machine Learning', 'SQL', 'GenAI', 'Agentic AI'],
    avatar: '/assets/experts/deepak.webp',
  },
  {
    name: 'Subramani',
    role: 'Chief Data Scientist',
    bio: 'Worked with 15+ international brands, honored as a Top AI Speaker, empowered 1,000+ data aspirants.',
    skills: ['Data Engineering', 'Data Science', 'GenAI'],
    avatar: '/assets/experts/subramani.webp',
  },
  {
    name: 'Aswath',
    role: 'Talent Acquisition Head',
    bio: 'Bridges the gap between industry needs and individual preparation, creating career opportunities.',
    skills: ['Portfolio Building', 'Profile Optimization'],
    avatar: '/assets/experts/aswath.webp',
  },
  {
    name: 'Nishanth',
    role: 'Senior Data Engineer',
    bio: '8+ years designing scalable data pipelines and architectures across multiple cloud platforms.',
    skills: ['Data Engineering', 'DBT', 'Snowflake', 'Cloud'],
    avatar: '/assets/experts/nishanth.webp',
  },
  {
    name: 'Rizwan Ahmed',
    role: 'Bio Research Analytics Engineer',
    bio: 'Pre-Doctoral Fellow at IIT Kharagpur. Engineers biomaterial scaffolds with AI-driven analytics.',
    skills: ['Tissue Engineering', 'AI Analytics', 'Systems Pharmacology'],
    avatar: '/assets/experts/rizwan.webp',
  },
]

export default function ExpertPanel() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* 🔥 LIGHTWEIGHT ANIMATION */
      gsap.from('.expert-heading', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
      })

      gsap.from('.expert-container-main', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="expert-section" ref={sectionRef} id="experts">
      
      <div className="container">
        <div className="expert-heading">
          <span className="section-label">The Team</span>
          <h2 className="section-title">
            Our Data <span className="accent-rose">Experts</span> Panel
          </h2>
          <p className="section-subtitle">
            A unified team of data experts with hands-on experience across multiple industries.
          </p>
        </div>
      </div>

      <div className="expert-container-main">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView="auto"
          centeredSlides={true}
          loop={true}
          speed={800}

          autoplay={{
            delay: 2000, /* 🔥 FIXED (no infinite 0 delay) */
            disableOnInteraction: false,
          }}

          className="expert-swiper-wrapper"
        >
          {experts.map((expert) => (
            <SwiperSlide key={expert.name} className="expert-slide-item">

              <div className="expert-card-solid">

                <div className="expert-avatar-box">
                  <img
                    src={expert.avatar}
                    alt={expert.name}
                    className="expert-avatar-img"
                    loading="lazy"
                    width="120"
                    height="120"
                  />
                </div>

                <div className="expert-card-body">
                  <h3 className="expert-name-text">{expert.name}</h3>
                  <span className="expert-role-text">{expert.role}</span>
                  <p className="expert-bio-text">{expert.bio}</p>

                  <div className="expert-skills-list">
                    {expert.skills.map((skill) => (
                      <span key={skill} className="expert-skill-pill">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </section>
  )
}