import { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './ExpertPanel.css'

gsap.registerPlugin(ScrollTrigger)

const experts = [
  {
    name: 'Kishore',
    role: 'Senior AI Engineer',
    bio: 'Builds Agentic AI solutions for supply chain and automobile industry with 8+ years experience.',
    skills: ['Azure', 'Machine Learning', 'SQL', 'GenAI'],
    avatar: '/assets/experts/kishore.jpg',
  },
  {
    name: 'Bala',
    role: 'Senior Data Scientist',
    bio: 'Builds predictive ML models for healthcare and BFSI sectors with 8+ years of experience.',
    skills: ['AWS', 'Machine Learning', 'SQL', 'GenAI'],
    avatar: '/assets/experts/bala.jpg',
  },
  {
    name: 'Prasanna',
    role: 'Senior BI Developer',
    bio: 'Builds predictive dashboards and data models for global brands with 5+ years of experience.',
    skills: ['AWS', 'GCP', 'SQL', 'Power BI'],
    avatar: '/assets/experts/prasanna.jpg',
  },
  {
    name: 'Mahesh',
    role: 'Senior AI Engineer',
    bio: 'Builds scalable AI solutions for supply chain and automobile industries with 3+ years experience.',
    skills: ['Machine Learning', 'SQL', 'GenAI', 'Agentic AI'],
    avatar: '/assets/experts/mahesh.jpg',
  },
  {
    name: 'Deepak Raj',
    role: 'Agentic AI Engineer',
    bio: 'Builds Agentic AI automations for supply chain to reduce manual efforts and improve efficiency.',
    skills: ['Machine Learning', 'SQL', 'GenAI', 'Agentic AI'],
    avatar: '/assets/experts/deepak.jpg',
  },
  {
    name: 'Subramani',
    role: 'Chief Data Scientist',
    bio: 'Worked with 15+ international brands, honored as a Top AI Speaker, empowered 1,000+ data aspirants.',
    skills: ['Data Engineering', 'Data Science', 'GenAI'],
    avatar: '/assets/experts/subramani.jpg',
  },
  {
    name: 'Aswath',
    role: 'Talent Acquisition Head',
    bio: 'Bridges the gap between industry needs and individual preparation, creating career opportunities.',
    skills: ['Portfolio Building', 'Profile Optimization'],
    avatar: '/assets/experts/aswath.jpg',
  },
  {
    name: 'Nishanth',
    role: 'Senior Data Engineer',
    bio: '8+ years designing scalable data pipelines and architectures across multiple cloud platforms.',
    skills: ['Data Engineering', 'DBT', 'Snowflake', 'Cloud'],
    avatar: '/assets/experts/nishanth.jpg',
  },
  {
    name: 'Rizwan Ahmed',
    role: 'Bio Research Analytics Engineer',
    bio: 'Pre-Doctoral Fellow at IIT Kharagpur. Engineers biomaterial scaffolds with AI-driven analytics.',
    skills: ['Tissue Engineering', 'AI Analytics', 'Systems Pharmacology'],
    avatar: '/assets/experts/rizwan.jpg',
  },
]
export default function ExpertPanel() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.expert-heading', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
      })

      gsap.from('.expert-container-main', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
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
            A unified team of data experts with hands-on experience across multiple core industries.
          </p>
        </div>
      </div>

      <div className="expert-container-main">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          slidesPerView="auto"
          centeredSlides={true}
          loop={true}
          loopedSlides={experts.length}
          watchSlidesProgress={true}

          speed={4000}

          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}

          freeMode={true}
          freeModeMomentum={false}

          onProgress={(swiper) => {
            for (let i = 0; i < swiper.slides.length; i++) {
              const slide = swiper.slides[i]
              const progress = slide.progress
              const distance = Math.abs(progress)

              const scale = Math.max(0.7, 1.15 - (distance * 0.15))
              const opacity = Math.max(0.1, 1 - (distance * 0.3))
              const zIndex = 100 - Math.round(distance * 10)

              slide.style.transform = `scale(${scale})`
              slide.style.opacity = opacity
              slide.style.zIndex = zIndex
            }
          }}

          onSetTransition={(swiper, duration) => {
            for (let i = 0; i < swiper.slides.length; i++) {
              swiper.slides[i].style.transition =
                `all ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`
            }
          }}

          className="expert-swiper-wrapper"
        >
          {experts.map((expert) => (
            <SwiperSlide key={expert.name} className="expert-slide-item">
              {({ isActive }) => (
                <div className={`expert-card-solid ${isActive ? 'expert-card-active' : ''}`}>
                  <div className="expert-card-header"></div>

                  <div className="expert-avatar-box">
                    <img
                      src={expert.avatar}
                      alt={expert.name}
                      className="expert-avatar-img"
                      loading="lazy"
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
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}