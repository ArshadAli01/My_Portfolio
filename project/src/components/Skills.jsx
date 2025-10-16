import './Skills.css'

const skillsData = [
  {
    id: 1,
    category: 'Languages',
    skills: ['Java', 'Python', 'Scala']
  },
  {
    id: 2,
    category: 'Databases',
    skills: ['MySQL', 'MongoDB']
  },
  {
    id: 3,
    category: 'Frameworks',
    skills: ['Flask', 'Spring-Boot']
  },
  {
    id: 4,
    category: 'Web Technologies',
    skills: ['HTML', 'CSS', 'JavaScript', 'Tailwind']
  },
  
  
  {
    id: 5,
    category: 'Tools',
    skills: ['Git', 'Linux', 'Docker', 'Jira', 'Postman']
  },
  {
    id: 6,
    category: 'Data Science',
    skills: ['Numpy', 'Pandas', 'Data Visualization', 'ML']
  }
]

export function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
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
