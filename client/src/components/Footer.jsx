import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-contact">
            <h4>Contact</h4>
            <p>📧 sketchtechsolutions@gmail.com</p>
            <p>📱 WhatsApp: +254745909218</p>
          </div>
          <div className="footer-socials">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="https://instagram.com/sketch_tech_gif" target="_blank" rel="noopener noreferrer">📸 Instagram</a>
              <a href="https://tiktok.com/@sketch_tech_gif" target="_blank" rel="noopener noreferrer">🎵 TikTok</a>
              <a href="https://twitter.com/thewishlistV1" target="_blank" rel="noopener noreferrer">𝕏 Twitter</a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} SKETCH TECH SOLUTIONS. All rights reserved.</p>
      </div>
    </footer>
  )
}
