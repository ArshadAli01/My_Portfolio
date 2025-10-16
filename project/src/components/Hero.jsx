import { useState, useEffect } from 'react'
import './Hero.css'

export function Hero() {
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [isDeleting, setIsDeleting] = useState(false)
  const fullText = "Hello, I'm Arshad Ali."
  const typingSpeed = 100
  const deletingSpeed = 50
  const pauseTime = 1500

  useEffect(() => {
    let currentIndex = displayText.length
    let timeoutId

    if (!isDeleting && currentIndex < fullText.length) {
      // Typing phase
      timeoutId = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1))
      }, typingSpeed)
    } else if (!isDeleting && currentIndex === fullText.length) {
      // Pause at the end of typing
      timeoutId = setTimeout(() => {
        setIsDeleting(true)
      }, pauseTime)
    } else if (isDeleting && currentIndex > 0) {
      // Deleting phase
      timeoutId = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex - 1))
      }, deletingSpeed)
    } else if (isDeleting && currentIndex === 0) {
      // Pause at the beginning and start typing again
      timeoutId = setTimeout(() => {
        setIsDeleting(false)
      }, pauseTime)
    }

    return () => clearTimeout(timeoutId)
  }, [displayText, isDeleting])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [])

  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <h1 className="typewriter-text">
            {displayText}
            <span className={`cursor ${showCursor ? 'visible' : 'hidden'}`}>|</span>
          </h1>
          <p>
            Passionate software engineer with hands-on experience in front-end development using React and back-end technologies like Java, Spring Boot, and PostgreSQL.
            Skilled in debugging, writing clean code, and building maintainable systems. 
            Currently exploring Ml and Big Data to expand technical depth and stay current with emerging trends.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={scrollToProjects}>View My Work</button>
            <button className="btn-secondary" onClick={scrollToContact}>Get In Touch</button>
          </div>
        </div>
      </div>
    </section>
  )
}
