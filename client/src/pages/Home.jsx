import { useState } from 'react'
import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'
import PackageCard from '../components/PackageCard'
import ServicesList from '../components/ServicesList'
import './Home.css'

export default function Home() {
  const [testimonials] = useState([
    {
      id: 1,
      name: 'John Smith',
      company: 'Tech Startup Inc.',
      text: 'Sketch Tech Solutions delivered an exceptional web application that transformed our business. Highly recommended!'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      company: 'Digital Marketing Co.',
      text: 'Their web scraping service provided us with valuable market insights. Professional and efficient.'
    },
    {
      id: 3,
      name: 'Mike Davis',
      company: 'Freelance Designer',
      text: 'The landing page design was perfect for my portfolio. Great attention to detail!'
    }
  ])

  const featuredServices = [
    { icon: '🌐', title: 'Web Development', description: 'Custom, responsive websites built for performance and growth' },
    { icon: '⚙️', title: 'Software Solutions', description: 'Tailored applications to streamline your business-processes' },
    { icon: '🕸️', title: 'Data Scraping', description: 'Accurate data extraction for research, analysis, and automation' },
    { icon: '🎨', title: 'Design & Branding', description: 'Logos, social templates, and visual systems' },
    { icon: '✍️', title: 'CV & Writing', description: 'CVs, cover letters, and professional documents' },
    { icon: '🎬', title: 'Content Editing', description: 'TikTok/Reels editing, video cuts and thumbnails' }
  ]

  const packages = [
    {
      id: 'student',
      title: 'Student Package',
      price: 'Ksh 350+',
      color: 'navy',
      items: ['CV Writing', 'Cover Letters', 'PDF Editing & Formatting', 'Fast Delivery (24–48 hrs)']
    },
    {
      id: 'business',
      title: 'Business Package',
      price: 'Ksh 1,500+',
      color: 'gold',
      items: ['Logo & Branding', 'Social Media Setup & Templates', 'Marketing Assets']
    },
    {
      id: 'content',
      title: 'Content & Tech Package',
      price: 'Ksh 1,000+',
      color: 'navy',
      items: ['TikTok & Reels Editing', 'Data Entry & Bulk Conversion', 'Online Account Setup']
    }
  ]

  return (
    <div id="main" tabIndex="-1" className="home-page compact-grid">
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
        <ServicesList services={featuredServices} />
      </section>

      {/* Packages (from provided flyer) */}
      <section className="packages">
        <h2>Packages & Pricing</h2>
        <div className="packages-list">
          {packages.map(pkg => (
            <PackageCard key={pkg.id} title={pkg.title} price={pkg.price} items={pkg.items} color={pkg.color === 'gold' ? 'gold' : 'navy'} />
          ))}
        </div>
        <div className="contact-strip">
          <a href="https://wa.me/254745909218" className="contact-whatsapp">WhatsApp: +254745909218</a>
          <a href="https://sketch-tech.vercel.app" className="contact-site">sketch-tech.vercel.app</a>
          <a href="mailto:sketchtechsolutions@gmail.com" className="contact-email">sketchtechsolutions@gmail.com</a>
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
