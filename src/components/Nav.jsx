import { Link, useLocation } from 'react-router-dom'

export default function Nav() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  const scrollTo = (id) => (e) => {
    if (isHome) {
      e.preventDefault()
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav>
      <Link to="/" className="brand">
        jouw_naam<span>.dev</span>
      </Link>
      <ul>
        <li><Link to="/#about" onClick={scrollTo('about')}>about</Link></li>
        <li><Link to="/#projects" onClick={scrollTo('projects')}>projects</Link></li>
        <li><Link to="/#blog" onClick={scrollTo('blog')}>log</Link></li>
        <li><Link to="/#contact" onClick={scrollTo('contact')}>contact</Link></li>
      </ul>
    </nav>
  )
}
