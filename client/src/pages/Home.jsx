import { useState } from 'react'
import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'
import './Home.css'

export default function Home() {
  const [testimonials] = useState([
    {
      id: 1,
      name: 'John Smith',
      company: 'Tech Startup Inc.',
      text: 'Sketch Tech Solutions delivered an exceptional web application that transformed our business. Highly recommended!',
      rating: 5
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      company: 'Digital Marketing Co.',
      text: 'Their web scraping service provided us with valuable market insights. Professional and efficient.',
      rating: 5
    },
    {
      id: 3,
      name: 'Mike Davis',
      company: 'Freelance Designer',
      text: 'The landing page design was perfect for my portfolio. Great attention to detail!',
      rating: 5
    }
  ])

  const featuredServices = [
    { icon: '🌐', title: 'Web Development', description: 'Custom, responsive websites built for performance and growth' },
    { icon: '⚙️', title: 'Software Solutions', description: 'Tailored applications to streamline your business-processes' },
    { icon: '🕸️', title: 'Data Scraping', description: 'Accurate data extraction for research, analysis, and automation' },
    { icon: '🎨', title: 'Design', description: 'Graphics, posters, and branding materials that capture attention' },
    { icon: '✍️', title: 'CV Writing', description: 'Professionally optimized CVs to help you stand out' },
    { icon: '✏️', title: 'Content', description: 'High-quality content and copywriting for web and marketing' }
  ]

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Smart Digital Solutions for Growing Businesses</h1>
          <p className="hero-tagline">Custom solutions for every Digital challenge</p>
          <p>Reliable tech services to build, automate, and grow your business.</p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary">Get Started Today</Link>
            <Link to="/portfolio" className="btn btn-secondary">View Portfolio</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="/hero.svg" alt="Hero mockup" className="hero-asset" />
        </div>
      </section>

      {/* Featured Services (matched layout from design) */}
      <section className="featured-services services-section-large">
        <h2>Our Services</h2>
        <p className="section-subtitle">Professional digital services tailored to your needs.</p>
        <div className="services-grid-2col">
          {featuredServices.map((service, index) => (
            <div key={index} className="service-tile">
              <div className="service-tile-inner">
                <div className="service-tile-icon">{service.icon}</div>
                <div className="service-tile-body">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <h2>Why Choose Us</h2>
        <div className="features-grid">
          <div className="feature">
            <div className="feature-icon">⚡</div>
            <h3>Fast & Reliable</h3>
            <p>Quick turnaround times without compromising quality</p>
          </div>
          <div className="feature">
            <div className="feature-icon">👥</div>
            <h3>Expert Team</h3>
            <p>Skilled professionals with years of industry experience</p>
          </div>
          <div className="feature">
            <div className="feature-icon">💰</div>
            <h3>Affordable Pricing</h3>
            <p>Competitive rates that deliver exceptional value</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🎯</div>
            <h3>Client Focused</h3>
            <p>Your satisfaction is our top priority</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="rating">
                {'⭐'.repeat(testimonial.rating)}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <strong>{testimonial.name}</strong>
                <p>{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* See Our Work */}
      <section className="portfolio-section">
        <h2>See Our Work</h2>
        <p className="section-subtitle">Trusted by businesses worldwide for our commitment to quality and results.</p>
        <div className="portfolio-grid-hero">
          <img src="/port1.svg" alt="Custom Website" />
          <img src="/port2.svg" alt="Software Dashboard" />
          <img src="/port3.svg" alt="Landing Page" />
        </div>
        <div className="portfolio-cta">
          <Link to="/portfolio" className="btn btn-primary">View Portfolio</Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Grow Your Business?</h2>
        <p>Contact our team today and let's build something great together.</p>
        <Link to="/contact" className="btn btn-primary">Get Started</Link>
      </section>
    </div>
  )
}
