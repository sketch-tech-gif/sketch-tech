import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const services = [
    'Web Development',
    'Web Scraping',
    'CV Writing',
    'Assignment Writing',
    'Graphic Design',
    'Software Design',
    'Landing Pages',
    'App Testing'
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setSubmitted(true)
      setLoading(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      })
      
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    }, 1000)
  }

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Get In Touch</h1>
        <p>We'd love to hear from you. Let's discuss your project!</p>
      </div>

      <section className="contact-content">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <div className="info-items">
            <div className="info-item">
              <div className="info-icon">📧</div>
              <div className="info-details">
                <h3>Email</h3>
                <p>hello@sketchtechsolutions.com</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">📞</div>
              <div className="info-details">
                <h3>Phone</h3>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-details">
                <h3>Address</h3>
                <p>123 Tech Street, Silicon Valley, CA 94025</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">⏰</div>
              <div className="info-details">
                <h3>Business Hours</h3>
                <p>Monday - Friday: 9AM - 6PM EST</p>
              </div>
            </div>
          </div>

          <div className="social-links">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#" className="social-icon">f</a>
              <a href="#" className="social-icon">tw</a>
              <a href="#" className="social-icon">in</a>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          {submitted && (
            <div className="success-message">
              ✓ Thank you! We've received your message and will get back to you soon.
            </div>
          )}
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="service">Service *</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select a service</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>{service}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>What's your turnaround time?</h3>
            <p>Most projects are completed within 5-10 business days, depending on scope and complexity.</p>
          </div>
          <div className="faq-item">
            <h3>Do you offer revisions?</h3>
            <p>Yes! We include unlimited revisions until you're completely satisfied with the result.</p>
          </div>
          <div className="faq-item">
            <h3>What payment methods do you accept?</h3>
            <p>We accept credit cards, bank transfers, PayPal, and other digital payment methods.</p>
          </div>
          <div className="faq-item">
            <h3>Can you work on urgent projects?</h3>
            <p>Absolutely! Contact us to discuss rush delivery options for your project.</p>
          </div>
          <div className="faq-item">
            <h3>Do you offer discounts for bulk projects?</h3>
            <p>Yes, we offer special pricing for multiple services or long-term partnerships.</p>
          </div>
          <div className="faq-item">
            <h3>Is my data secure with you?</h3>
            <p>We prioritize data security and confidentiality. All information is protected with industry-standard encryption.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
