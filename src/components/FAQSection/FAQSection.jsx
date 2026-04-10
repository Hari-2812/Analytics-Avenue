import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './FAQSection.css'

gsap.registerPlugin(ScrollTrigger)

const faqs = [
  {
    question: 'Who is this program designed for?',
    answer: 'This program is designed for freshers, career transition seekers, and working professionals who want to build a career in Data Analytics, Data Science, AI, or Business Intelligence. Whether you are starting fresh or looking to switch, this program covers everything from SQL to GenAI.',
  },
  {
    question: 'What is the format of the training?',
    answer: 'We conduct interactive live online weekend sessions with instant doubt clarification, real-time portfolio verification, and hands-on industry-oriented learning. You build live projects alongside practicing data scientists.',
  },
  {
    question: 'How does the placement support work?',
    answer: 'We offer 3 modes of placement: Referral Programs through our 5000+ data community, Organic Job Calls via profile setup across 9 secret portals, and Internal Project Acquisition from our overseas projects providing additional real-world placement opportunities.',
  },
  {
    question: 'What does the LMS access include?',
    answer: 'Lifetime access to all programs and new launches, end-to-end interview preparation, portfolio customization with expert guidance, mock interviews, periodic job updates, internship and referral opportunities, freelancing access, and 24/7 customer support.',
  },
  {
    question: 'What technologies will I master?',
    answer: 'The curriculum covers 4 core modules: SQL & Data Engineering, Python for Analytics & Data Science, Business Intelligence with Power BI, and Generative AI & LLM Systems. Each module is designed by industry practitioners, not academics.',
  },
  {
    question: 'Is this suitable for someone with no coding background?',
    answer: 'Absolutely. Our program starts from fundamentals and progressively builds up to advanced topics. The hands-on approach with live projects ensures you learn by doing, not just watching. Our expert panel personally guides each aspirant.',
  },
  {
    question: 'How do I get started?',
    answer: 'Step 1: Book a free 1-to-1 consultation with our data experts panel. Step 2: Choose your learning plan and join the weekend program. From there, you build your portfolio, access placement pipelines, and get lifetime LMS access.',
  },
]

export default function FAQSection() {
  const sectionRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.faq-heading', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
      })

      gsap.from('.faq-item', {
        scrollTrigger: {
          trigger: '.faq-list',
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power3.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="faq-section" ref={sectionRef} id="faq">
      <div className="container">
        <div className="faq-heading">
          <span className="section-label">Questions</span>
          <h2 className="section-title">
            Frequently Asked <span className="accent-rose">Questions</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know about the program, placement, and getting started.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`faq-item ${activeIndex === i ? 'faq-item-active' : ''}`}
              id={`faq-item-${i}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFaq(i)}
                aria-expanded={activeIndex === i}
              >
                <span className="faq-question-text">{faq.question}</span>
                <span className="faq-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14"/>
                    <path d="M5 12h14"/>
                  </svg>
                </span>
              </button>
              <div className="faq-answer">
                <p className="faq-answer-text">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
