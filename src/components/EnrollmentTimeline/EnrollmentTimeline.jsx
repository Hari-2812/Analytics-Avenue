import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './EnrollmentTimeline.css'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    number: '01',
    title: 'Book 1-to-1 Consultation',
    description: 'Clarify all your doubts with our Data Experts Panel who empowered 1000+ aspirants worldwide.',
    subItems: [
      'How to transition into Analytics & AI without quitting your current job',
      'How freshers & career-gap candidates secure real opportunities',
    ],
  },
  {
    number: '02',
    title: 'Build a Standout Portfolio',
    description: 'Learn how to build industry-level projects that bring organic job calls.',
    subItems: [
      'Fix what\'s missing in your current data skill set',
      'Identify the gap blocking your breakthrough',
    ],
  },
  {
    number: '03',
    title: 'Join Weekend Live Sessions',
    description: 'Interactive live online sessions with instant doubt clarification and real-time portfolio verification.',
    subItems: [
      'Build live projects alongside data scientists',
      'Hands-on industry-oriented learning',
    ],
  },
  {
    number: '04',
    title: 'Access Placement Pipeline',
    description: 'Get connected to placement drives, internships, referral & freelancing opportunities.',
    subItems: [
      'Periodic job updates for those who pass the screening test',
      'Apply for internal and referral job opportunities',
    ],
  },
  {
    number: '05',
    title: 'Get Lifetime LMS Access',
    description: 'Complete access to all programs, mock interviews, interview prep, and new launches forever.',
    subItems: [
      'End-to-end interview preparation series',
      'Access to freelancing & consulting opportunities',
    ],
  },
]

export default function EnrollmentTimeline() {
  const sectionRef = useRef(null)
  const progressRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Heading */
      gsap.from('.timeline-heading', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
      })

      /* Progress line grows on scroll */
      gsap.to(progressRef.current, {
        scrollTrigger: {
          trigger: '.timeline-track',
          start: 'top 60%',
          end: 'bottom 40%',
          scrub: 1,
        },
        scaleY: 1,
        ease: 'none',
      })

      /* Steps stagger in */
      gsap.from('.timeline-step', {
        scrollTrigger: {
          trigger: '.timeline-track',
          start: 'top 70%',
        },
        x: (i) => (i % 2 === 0 ? -40 : 40),
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power3.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="timeline-section" ref={sectionRef} id="enroll">
      <div className="container">
        <div className="timeline-heading">
          <span className="section-label">Enrollment Journey</span>
          <h2 className="section-title">
            Your Journey <span className="accent-rose">Starts Here</span>
          </h2>
          <p className="section-subtitle">
            A clear, step-by-step path from consultation to career placement.
          </p>
        </div>

        <div className="timeline-track">
          {/* Vertical line */}
          <div className="timeline-line">
            <div className="timeline-progress" ref={progressRef}></div>
          </div>

          {/* Steps */}
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`timeline-step ${i % 2 === 0 ? 'step-left' : 'step-right'}`}
              id={`timeline-step-${step.number}`}
            >
              {/* Dot on the line */}
              <div className="timeline-dot">
                <span className="dot-inner"></span>
              </div>

              {/* Content card */}
              <div className="timeline-card">
                <span className="timeline-step-number">{step.number}</span>
                <h3 className="timeline-step-title">{step.title}</h3>
                <p className="timeline-step-desc">{step.description}</p>
                <ul className="timeline-sub-list">
                  {step.subItems.map((item, j) => (
                    <li key={j} className="timeline-sub-item">
                      <span className="sub-item-bullet"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
