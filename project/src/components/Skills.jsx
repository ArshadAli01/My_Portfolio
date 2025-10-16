import './Skills.css'

const skillsData = [
  {
    id: 1,
    category: 'Frontend',
    skills: ['React', 'JavaScript', 'HTML/CSS', 'TypeScript', 'Vue.js']
  },
  {
    id: 2,
    category: 'Backend',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'REST APIs', 'GraphQL']
  },
  {
    id: 3,
    category: 'Tools & Others',
    skills: ['Git', 'Docker', 'AWS', 'Figma', 'Agile']
  }
]

export function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillsData.map((category) => (
            <div key={category.id} className="skill-category">
              <h3>{category.category}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
