import { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [selectedService, setSelectedService] = useState(null)
  const [selectedFeature, setSelectedFeature] = useState(null)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [portfolioOpen, setPortfolioOpen] = useState(false)
  const [reviewsOpen, setReviewsOpen] = useState(false)

  const portfolio = [
    { title: 'Company Website', desc: 'Responsive corporate website with CMS integration' },
    { title: 'E‑commerce Store', desc: 'Fast Shopify-like store with payment integration' },
    { title: 'Landing Campaign', desc: 'Conversion-focused landing page for product launch' }
  ]

  const reviews = [
    { name: 'Aisha K.', rating: 5, text: 'Fast, professional and good communication — great results.' },
    { name: 'John M.', rating: 5, text: 'Delivered exactly what we needed. Increased conversions.' },
    { name: 'Ravi P.', rating: 4, text: 'Excellent quality and support after delivery.' }
  ]

  const services = [
    { icon: '🌐', title: 'Web Dev', description: 'Custom websites', details: 'We build responsive, SEO-friendly websites using modern stacks (React, Next/Vite, Node). Includes CMS integration, e‑commerce, performance optimizations and maintenance.', color: '#3b82f6', textColor: '#fff' },
    { icon: '🤖', title: 'Scraping', description: 'Data extraction', details: 'Automated web data extraction, parsing, and delivery. We handle pagination, proxies, data cleaning, scheduling and deliver CSV/JSON or push to your API.', color: '#8b5cf6', textColor: '#fff' },
    { icon: '📄', title: 'CV Writing', description: 'CV optimization', details: 'Professional CV and LinkedIn profile writing tailored to your target roles, with keyword optimization for applicant tracking systems.', color: '#ec4899', textColor: '#fff' },
    { icon: '✍️', title: 'Writing', description: 'Academic writing', details: 'Research, editing and content writing services including articles, academic papers, reports and marketing copy with revision rounds.', color: '#f59e0b', textColor: '#fff' },
    { icon: '🎨', title: 'Design', description: 'Graphics & posters', details: 'Brand assets, social graphics, posters and UI mockups. We deliver layered source files (PSD/AI) and optimized web/export versions.', color: '#10b981', textColor: '#fff' },
    { icon: '🔧', title: 'Software', description: 'Custom solutions', details: 'End-to-end custom software development: APIs, dashboards, automation and integrations, with testing and deployment support.', color: '#06b6d4', textColor: '#fff' },
    { icon: '🚀', title: 'Landing Page', description: 'High-converting', details: 'Single-page landing pages focused on conversions: A/B ready, fast loading, analytics and tracking setup.', color: '#ef4444', textColor: '#fff' },
    { icon: '🧪', title: 'Testing', description: 'App testing', details: 'Manual and automated QA, test plans, bug reports, regression testing and CI integration to keep releases stable.', color: '#14b8a6', textColor: '#fff' }
  ]

  const features = [
    { icon: '⚡', title: 'Fast', text: 'Quick turnaround', details: 'Rapid delivery without sacrificing quality — prioritized sprints, lean iterations, and clear timelines so your project moves fast and predictably.', color: '#6366f1', textColor: '#fff' },
    { icon: '👥', title: 'Expert', text: 'Skilled team', details: 'Experienced engineers, designers and writers with domain knowledge and best-practice workflows. We pair specialists to fit each project.', color: '#f97316', textColor: '#fff' },
    { icon: '💰', title: 'Affordable', text: 'Best prices', details: 'Transparent, competitive pricing with flexible scopes — hourly, milestone, or fixed-price options to fit budgets without hidden fees.', color: '#22c55e', textColor: '#fff' },
    { icon: '🎯', title: 'Focused', text: 'Your success', details: 'We align deliverables to your goals: measurable KPIs, conversion-focused design, and continuous feedback to ensure outcome-driven results.', color: '#e11d48', textColor: '#fff' }
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const payload = { ...formData }
      // send to backend — adjust URL if your server runs elsewhere
      await axios.post('http://localhost:5000/api/contact/submit', payload)
      setSubmitted(true)
      setFormData({ name: '', email: '', service: '', message: '' })
      setShowModal(false)
      setTimeout(() => setSubmitted(false), 2000)
    } catch (err) {
      console.error('Failed to send contact:', err)
      alert('Failed to send message. Please try again later.')
    }
  }

  useEffect(() => {
    const handler = (e) => {
      const type = e?.detail?.type
      if (type === 'about') setAboutOpen(true)
      if (type === 'portfolio') setPortfolioOpen(true)
      if (type === 'reviews') setReviewsOpen(true)
    }
    window.addEventListener('openModal', handler)
    return () => window.removeEventListener('openModal', handler)
  }, [])

  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        {/* Services Only */}
        <section className="services-section">
          <h2>Services</h2>
          <div className="grid-2">
            {services.map((svc, i) => (
              <div key={i} className="service-mini" style={{ backgroundColor: svc.color, color: svc.textColor }} onClick={() => setSelectedService(svc)} role="button" tabIndex={0} onKeyDown={(e)=>{if(e.key==='Enter')setSelectedService(svc)}}>
                <div>{svc.icon}</div>
                <h4>{svc.title}</h4>
                <p>{svc.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose */}
        <section className="features-section">
          <h2>Why Us</h2>
          <div className="grid-4-mini">
            {features.map((f, i) => (
              <div key={i} className="feature-mini" style={{ backgroundColor: f.color, color: f.textColor }} onClick={() => setSelectedFeature(f)} role="button" tabIndex={0} onKeyDown={(e)=>{if(e.key==='Enter')setSelectedFeature(f)}}>
                <div className="icon-mini">{f.icon}</div>
                <h4>{f.title}</h4>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Button */}
        <div className="cta-section">
          <button className="cta-message-btn" onClick={() => setShowModal(true)}>Leave your message</button>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="modal-overlay" onClick={() => setShowModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setShowModal(false)}>✕</button>
              <h2>Contact Us</h2>
              <form className="contact-form-modal" onSubmit={handleSubmit}>
                {submitted && <div className="success-mini">✓ Sent!</div>}
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                <select name="service" value={formData.service} onChange={handleChange} required>
                  <option>Service</option>
                  {services.map((s, i) => <option key={i}>{s.title}</option>)}
                </select>
                <textarea name="message" placeholder="Message" rows="5" value={formData.message} onChange={handleChange} required />
                <button type="submit" className="submit-btn-modal">Send</button>
              </form>
            </div>
          </div>
        )}
        
        {/* Service Detail Modal */}
        {selectedService && (
          <div className="modal-overlay" onClick={() => setSelectedService(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelectedService(null)}>✕</button>
              <h2>{selectedService.title}</h2>
              <p className="service-detail-text">{selectedService.details}</p>
            </div>
          </div>
        )}

        {/* Feature Detail Modal */}
        {selectedFeature && (
          <div className="modal-overlay" onClick={() => setSelectedFeature(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelectedFeature(null)}>✕</button>
              <h2>{selectedFeature.title}</h2>
              <p className="service-detail-text">{selectedFeature.details}</p>
            </div>
          </div>
        )}

        {/* About Modal */}
        {aboutOpen && (
          <div className="modal-overlay" onClick={() => setAboutOpen(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setAboutOpen(false)}>✕</button>
              <h2>About Us</h2>
              <p className="service-detail-text">Sketch Tech Solutions delivers focused digital services — web development, automation, design and content — with a small expert team. We prioritize outcomes, clear communication and fast turnarounds.</p>
            </div>
          </div>
        )}

        {/* Portfolio Modal */}
        {portfolioOpen && (
          <div className="modal-overlay" onClick={() => setPortfolioOpen(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setPortfolioOpen(false)}>✕</button>
              <h2>Portfolio</h2>
              <div className="portfolio-grid">
                {portfolio.map((p, i) => (
                  <div key={i} className="portfolio-item">
                    <strong>{p.title}</strong>
                    <p>{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Reviews Modal */}
        {reviewsOpen && (
          <div className="modal-overlay" onClick={() => setReviewsOpen(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setReviewsOpen(false)}>✕</button>
              <h2>Reviews</h2>
              <div className="reviews-list">
                {reviews.map((r, i) => (
                  <div key={i} className="review-item">
                    <div className="review-header"><strong>{r.name}</strong> <span className="rating">{'★'.repeat(r.rating)}</span></div>
                    <p>{r.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
      
      {/* WhatsApp Button */}
      <a href="https://wa.me/254745909218" target="_blank" rel="noopener noreferrer" className="whatsapp-btn" title="Chat on WhatsApp">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.935 1.2l-.355.19-3.632-.954.969 3.742.203.323a9.876 9.876 0 001.516 4.741 9.887 9.887 0 009.168 5.145c2.417 0 4.68-.929 6.383-2.631a9.887 9.887 0 002.631-6.384c0-5.447-4.44-9.871-9.91-9.871m8.02 15.313c-1.881 1.959-4.503 3.008-7.399 3.008-5.050 0-9.268-4.066-9.541-9.066l.003-.066a9.931 9.931 0 001.378-4.899 9.928 9.928 0 004.542-1.217l.06-.033c1.364-.655 2.876-.968 4.466-.968 5.229 0 9.449 4.109 9.449 9.128 0 2.393-.965 4.556-2.531 6.157"/>
        </svg>
      </a>
    </div>
  )
}

export default App
