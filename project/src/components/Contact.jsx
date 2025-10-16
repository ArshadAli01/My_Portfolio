import { useState } from 'react'
import './Contact.css'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-content">
          <h2 className="section-title">Get In Touch</h2>
          <p>
            Have a project in mind or want to collaborate? Feel free to reach out.
            I'd love to hear from you!
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Your message..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="btn-primary">Send Message</button>
          </form>

          <div className="contact-links">
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
            <a href="#">Twitter</a>
            <a href="#">Email</a>
          </div>
        </div>
      </div>
    </section>
  )
}
