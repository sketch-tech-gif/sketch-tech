import './Navbar.css'

export default function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
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
        <ul className="navbar-menu">
          <li><button onClick={() => window.dispatchEvent(new CustomEvent('openModal', { detail: { type: 'about' } }))}>About</button></li>
          <li><button onClick={() => window.dispatchEvent(new CustomEvent('openModal', { detail: { type: 'portfolio' } }))}>Portfolio</button></li>
          <li><button onClick={() => window.dispatchEvent(new CustomEvent('openModal', { detail: { type: 'reviews' } }))}>Reviews</button></li>
        </ul>
      </div>
    </nav>
  )
}
