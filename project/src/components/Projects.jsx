import './Projects.css'

const projectsData = [
  {
    id: 1,
    icon: '🚀',
    title: 'E-Commerce Platform',
    description: 'A full-featured online shopping platform with payment integration, inventory management, and admin dashboard.',
    demoLink: '#',
    sourceLink: '#'
  },
  {
    id: 2,
    icon: '📱',
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates, team collaboration, and progress tracking.',
    demoLink: '#',
    sourceLink: '#'
  },
  {
    id: 3,
    icon: '🎨',
    title: 'Design Portfolio',
    description: 'A beautiful portfolio website showcasing design work with smooth animations and interactive elements.',
    demoLink: '#',
    sourceLink: '#'
  }
]

export function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">{project.icon}</div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                  <a href={project.demoLink}>View Demo</a>
                  <a href={project.sourceLink}>Source Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
