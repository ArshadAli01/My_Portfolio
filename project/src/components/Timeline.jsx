import { useState, useEffect, useRef } from 'react'
import { Briefcase, GraduationCap } from 'lucide-react'
import './Timeline.css'

const timelineData = [
  {
    id: 1,
    date: '2020 - Present',
    title: 'Senior Developer',
    subtitle: 'Tech Company Inc.',
    description: 'Leading development of scalable web applications, mentoring junior developers, and implementing best practices across the engineering team.',
    type: 'work',
    icon: Briefcase
  },
  {
    id: 2,
    date: '2018 - 2020',
    title: 'Full Stack Developer',
    subtitle: 'Startup Solutions',
    description: 'Built and maintained multiple client projects using modern web technologies. Collaborated with designers to create intuitive user interfaces.',
    type: 'work',
    icon: Briefcase
  },
  {
    id: 3,
    date: '2014 - 2018',
    title: 'Bachelor of Computer Science',
    subtitle: 'University Name',
    description: 'Focused on software engineering and web development. Graduated with honors and completed several collaborative projects.',
    type: 'education',
    icon: GraduationCap
  }
]

export function Timeline() {
  const [visibleItems, setVisibleItems] = useState(new Set())
  const itemRefs = useRef([])

  useEffect(() => {
    const observers = []

    itemRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setVisibleItems((prev) => new Set([...prev, index]))
              }
            })
          },
          {
            threshold: 0.3,
            rootMargin: '-50px'
          }
        )

        observer.observe(ref)
        observers.push(observer)
      }
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  return (
    <section id="experience" className="section timeline-section">
      <div className="container">
        <h2 className="section-title">Education & Experience</h2>
        <div className="timeline">
          {timelineData.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={item.id}
                ref={(el) => (itemRefs.current[index] = el)}
                className={`timeline-item ${visibleItems.has(index) ? 'visible' : ''}`}
              >
                <div className="timeline-marker">
                  <div className="timeline-icon">
                    <Icon size={20} />
                  </div>
                  {index < timelineData.length - 1 && (
                    <div className="timeline-line"></div>
                  )}
                </div>
                <div className="timeline-card">
                  <div className="timeline-date">{item.date}</div>
                  <div className="timeline-content">
                    <h3>{item.title}</h3>
                    <div className="subtitle">{item.subtitle}</div>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
