import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './Navbar.css'
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
         <Link to="/" className="logo">
            <img src={logo} alt="Logo" />
         </Link>
         <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/project">Project</Link>
            <a href='/assets/Pavithra Resume.pdf' download="Pavithra_Resume.pdf">Resume</a>
            <Link to="/contact">
            <button className="contact">Contact Me</button>
            </Link>
            
         </nav>
    </header>
  )
}

export default Navbar