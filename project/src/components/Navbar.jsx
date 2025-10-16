import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'
import { useEffect, useState } from 'react'
import './Navbar.css'

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (!mounted) {
    return null
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-text">Portfolio</span>
        </div>

        <div className="navbar-links">
          <button onClick={() => scrollToSection('projects')} className="nav-link">
            Projects
          </button>
          <button onClick={() => scrollToSection('experience')} className="nav-link">
            Experience
          </button>
          <button onClick={() => scrollToSection('skills')} className="nav-link">
            Skills
          </button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">
            Contact
          </button>
        </div>

        <button
          onClick={toggleTheme}
          className="theme-toggle"
          aria-label="Toggle theme"
        >
          <Sun className={`icon sun-icon ${theme === 'dark' ? 'hidden' : 'visible'}`} />
          <Moon className={`icon moon-icon ${theme === 'dark' ? 'visible' : 'hidden'}`} />
        </button>
      </div>
    </nav>
  )
}
