import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Timeline } from './components/Timeline'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Timeline />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
