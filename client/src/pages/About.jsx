import './About.css'

export default function About() {
  const team = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'Founder & Lead Developer',
      bio: 'With 8+ years in web development, Alex brings vision and technical expertise to every project.'
    },
    {
      id: 2,
      name: 'Sarah Chen',
      role: 'Design Lead',
      bio: 'Creative designer with a passion for creating beautiful and functional user experiences.'
    },
    {
      id: 3,
      name: 'Mike Rodriguez',
      role: 'Full Stack Developer',
      bio: 'Expert in building scalable applications and solving complex technical challenges.'
    },
    {
      id: 4,
      name: 'Emma Watson',
      role: 'Content Specialist',
      bio: 'Professional writer specializing in CVs, assignments, and technical documentation.'
    }
  ]

  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About Sketch Tech Solutions</h1>
        <p>Your Partner in Digital Transformation</p>
      </div>

      <section className="about-story">
        <div className="story-content">
          <h2>Our Story</h2>
          <p>
            Founded in 2018, Sketch Tech Solutions emerged from a simple vision: to provide
            comprehensive, affordable, and high-quality digital tech solutions to businesses and
            individuals worldwide. What started as a small team of passionate developers has grown
            into a full-service digital agency serving hundreds of satisfied clients.
          </p>
          <p>
            We believe in the power of technology to transform ideas into reality. Every project,
            no matter the size, receives our full commitment to excellence and innovation.
          </p>
        </div>
      </section>

      <section className="about-mission">
        <h2>Our Mission & Values</h2>
        <div className="mission-grid">
          <div className="mission-item">
            <h3>🎯 Our Mission</h3>
            <p>
              To empower businesses and individuals with cutting-edge digital solutions that drive
              growth, innovation, and success in the digital age.
            </p>
          </div>
          <div className="mission-item">
            <h3>💎 Quality</h3>
            <p>
              We never compromise on quality. Every deliverable is thoroughly tested and refined
              to meet the highest standards.
            </p>
          </div>
          <div className="mission-item">
            <h3>🤝 Integrity</h3>
            <p>
              Transparency and honesty guide our relationships with clients. We deliver what we
              promise, on time and on budget.
            </p>
          </div>
          <div className="mission-item">
            <h3>🚀 Innovation</h3>
            <p>
              We stay ahead of technology trends and continuously improve our processes and services
              to serve you better.
            </p>
          </div>
        </div>
      </section>

      <section className="about-team">
        <h2>Meet Our Team</h2>
        <p className="team-intro">
          Our talented team of professionals is dedicated to bringing your vision to life.
        </p>
        <div className="team-grid">
          {team.map(member => (
            <div key={member.id} className="team-card">
              <div className="team-avatar">👤</div>
              <h3>{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about-services">
        <h2>Why We're Different</h2>
        <div className="differences-grid">
          <div className="difference">
            <div className="diff-icon">⚡</div>
            <h3>Fast Delivery</h3>
            <p>Quick turnaround without sacrificing quality or attention to detail</p>
          </div>
          <div className="difference">
            <div className="diff-icon">💡</div>
            <h3>Creative Solutions</h3>
            <p>We think outside the box to provide innovative answers to your challenges</p>
          </div>
          <div className="difference">
            <div className="diff-icon">📞</div>
            <h3>Excellent Support</h3>
            <p>Responsive support team ready to assist you throughout your project</p>
          </div>
          <div className="difference">
            <div className="diff-icon">💰</div>
            <h3>Great Value</h3>
            <p>Competitive pricing that delivers exceptional return on investment</p>
          </div>
          <div className="difference">
            <div className="diff-icon">🔒</div>
            <h3>Reliable</h3>
            <p>Proven track record with consistent delivery and client satisfaction</p>
          </div>
          <div className="difference">
            <div className="diff-icon">🌍</div>
            <h3>Global Reach</h3>
            <p>Serving clients worldwide with a local understanding of your market</p>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <h2>Ready to Work With Us?</h2>
        <p>Let's discuss how we can help transform your digital vision into reality</p>
        <a href="/contact" className="cta-btn">Get in Touch</a>
      </section>
    </div>
  )
}
