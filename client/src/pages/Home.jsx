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
    { icon: '🌐', title: 'Web Development', description: 'Custom websites built with modern technologies' },
    { icon: '🤖', title: 'Web Scraping', description: 'Extract and analyze data from any website' },
    { icon: '📄', title: 'CV Writing', description: 'Professional CV optimization for job applications' },
    { icon: '💼', title: 'Assignment Writing', description: 'Expert academic and professional writing' }
  ]

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Sketch Tech Solutions</h1>
          <p>Your trusted partner for comprehensive digital tech solutions</p>
          <div className="hero-buttons">
            <Link to="/services" className="btn btn-primary">Explore Services</Link>
            <Link to="/contact" className="btn btn-secondary">Get Started</Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-graphic">✨💻🚀</div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="featured-services">
        <h2>Our Services</h2>
        <p className="section-subtitle">We offer a wide range of digital solutions tailored to your needs</p>
        <div className="services-grid">
          {featuredServices.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
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

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Transform Your Ideas Into Reality?</h2>
        <p>Get in touch with our team today and let's create something amazing together</p>
        <Link to="/contact" className="btn btn-primary">Contact Us Now</Link>
      </section>
    </div>
  )
}
