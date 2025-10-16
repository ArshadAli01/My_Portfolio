import { useState, useEffect } from 'react'
import './Hero.css'

export function Hero() {
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const fullText = "Hello, I'm Arshad Ali."
  const typingSpeed = 100

  useEffect(() => {
    let currentIndex = 0

    const typeInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typeInterval)
      }
    }, typingSpeed)

    return () => clearInterval(typeInterval)
  }, [])

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
            A passionate developer crafting elegant solutions to complex problems.
            Specializing in web development and user experience design.
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
