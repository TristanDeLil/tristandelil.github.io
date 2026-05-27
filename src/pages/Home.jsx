import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Blog from '../components/Blog'
import Internship from '../components/Internship'
import Contact from '../components/Contact'

export default function Home() {
  const location = useLocation()

  // Handle hash-based scrolling when coming from another page
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1)
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      window.scrollTo(0, 0)
    }
  }, [location])

  // Scroll reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
        }
      })
    }, { threshold: 0.1 })

    const elements = document.querySelectorAll('section:not(.hero), .project, .blog-item')
    elements.forEach(el => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(20px)'
      el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out'
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <main>
      <Hero />
      <About />
      <Internship />
      <Projects />
      <Blog />
      <Contact />
    </main>
  )
}
