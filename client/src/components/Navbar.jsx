import './Navbar.css'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleOpen = (type) => {
    window.dispatchEvent(new CustomEvent('openModal', { detail: { type } }))
    setOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-icon">✨</span>
          <div>
            <h1>SKETCH TECH SOLUTIONS</h1>
            <p>Your trusted partner for comprehensive digital tech solutions.</p>
          </div>
        </div>

        <button
          className={`hamburger ${open ? 'is-open' : ''}`}
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`navbar-menu ${open ? 'mobile open' : ''}`}>
          <li><button onClick={() => handleOpen('about')}>About</button></li>
          <li><button onClick={() => handleOpen('portfolio')}>Portfolio</button></li>
          <li><button onClick={() => handleOpen('reviews')}>Reviews</button></li>
        </ul>
      </div>
    </nav>
  )
}
