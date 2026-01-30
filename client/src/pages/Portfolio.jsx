import { useState } from 'react'
import './Portfolio.css'

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform Redesign',
      category: 'web-development',
      image: '🛍️',
      description: 'Complete redesign of a major e-commerce platform increasing conversions by 45%',
      client: 'TechStore Inc.',
      year: '2023'
    },
    {
      id: 2,
      title: 'Data Analytics Dashboard',
      category: 'web-scraping',
      image: '📊',
      description: 'Built a real-time analytics dashboard by scraping and processing market data',
      client: 'Financial Insights Ltd.',
      year: '2023'
    },
    {
      id: 3,
      title: 'Professional Landing Page',
      category: 'landing-pages',
      image: '🚀',
      description: 'High-converting landing page that generated 500+ qualified leads in first month',
      client: 'StartUp Ventures',
      year: '2023'
    },
    {
      id: 4,
      title: 'Mobile App Testing Suite',
      category: 'app-testing',
      image: '🧪',
      description: 'Comprehensive testing of iOS and Android app identifying and fixing 200+ bugs',
      client: 'MobileFirst Corp.',
      year: '2023'
    },
    {
      id: 5,
      title: 'Brand Identity Design',
      category: 'graphic-design',
      image: '🎨',
      description: 'Complete brand identity including logo, posters, and marketing materials',
      client: 'Creative Studio Pro',
      year: '2023'
    },
    {
      id: 6,
      title: 'Custom CRM Software',
      category: 'software-design',
      image: '⚙️',
      description: 'Custom CRM solution for sales team managing 10,000+ customer relationships',
      client: 'Enterprise Solutions Inc.',
      year: '2023'
    },
    {
      id: 7,
      title: 'Job Application Optimization',
      category: 'cv-writing',
      image: '📝',
      description: 'CV optimization service helping 50+ clients land interviews at top companies',
      client: 'Career Boost Academy',
      year: '2023'
    },
    {
      id: 8,
      title: 'Academic Paper Writing',
      category: 'assignment-writing',
      image: '📚',
      description: 'Professional assignment writing for university students achieving excellent grades',
      client: 'Education Excellence',
      year: '2023'
    }
  ]

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'web-development', label: 'Web Development' },
    { value: 'landing-pages', label: 'Landing Pages' },
    { value: 'web-scraping', label: 'Web Scraping' },
    { value: 'graphic-design', label: 'Graphic Design' },
    { value: 'software-design', label: 'Software Design' },
    { value: 'app-testing', label: 'App Testing' },
    { value: 'cv-writing', label: 'CV Writing' },
    { value: 'assignment-writing', label: 'Assignment Writing' }
  ]

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory)

  return (
    <div className="portfolio-page">
      <div className="portfolio-header">
        <h1>Our Portfolio</h1>
        <p>Showcasing our best work and successful projects</p>
      </div>

      <section className="portfolio-content">
        <div className="filters">
          {categories.map(cat => (
            <button
              key={cat.value}
              className={`filter-btn ${selectedCategory === cat.value ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.value)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.length > 0 ? (
            filteredProjects.map(project => (
              <div key={project.id} className="portfolio-card">
                <div className="project-image">{project.image}</div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-meta">
                    <span className="client">{project.client}</span>
                    <span className="year">{project.year}</span>
                  </div>
                  <button className="view-btn">View Project</button>
                </div>
              </div>
            ))
          ) : (
            <div className="no-projects">
              <p>No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <section className="portfolio-stats">
        <h2>Our Track Record</h2>
        <div className="stats-grid">
          <div className="stat">
            <h3>150+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat">
            <h3>98%</h3>
            <p>Client Satisfaction</p>
          </div>
          <div className="stat">
            <h3>50+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="stat">
            <h3>5+</h3>
            <p>Years Experience</p>
          </div>
        </div>
      </section>
    </div>
  )
}
