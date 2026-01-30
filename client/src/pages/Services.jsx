import ServiceCard from '../components/ServiceCard'
import './Services.css'

export default function Services() {
  const allServices = [
    {
      icon: '🌐',
      title: 'Web Development & Maintenance',
      description: 'Build modern, responsive websites and maintain them with regular updates and bug fixes.'
    },
    {
      icon: '🤖',
      title: 'Web Scraping',
      description: 'Extract valuable data from websites efficiently using advanced scraping techniques.'
    },
    {
      icon: '📄',
      title: 'CV Writing & Optimization',
      description: 'Create and optimize your CV to impress employers and increase interview opportunities.'
    },
    {
      icon: '✍️',
      title: 'Assignment Writing',
      description: 'Professional writing services for academic and business assignments.'
    },
    {
      icon: '🎨',
      title: 'Poster & Graphic Design',
      description: 'Eye-catching designs for posters, banners, and marketing materials.'
    },
    {
      icon: '🔧',
      title: 'Software Design',
      description: 'Custom software solutions tailored to your specific business needs.'
    },
    {
      icon: '🚀',
      title: 'Landing Pages',
      description: 'High-converting landing pages designed to boost your sales and leads.'
    },
    {
      icon: '🧪',
      title: 'App Testing',
      description: 'Comprehensive testing services to ensure your app performs flawlessly.'
    }
  ]

  return (
    <div className="services-page">
      <div className="services-header">
        <h1>Our Services</h1>
        <p>Comprehensive digital solutions tailored to your business needs</p>
      </div>

      <section className="services-content">
        <div className="services-intro">
          <h2>What We Offer</h2>
          <p>
            At Sketch Tech Solutions, we pride ourselves on delivering high-quality services across
            multiple domains. Whether you need web development, data extraction, or professional writing,
            our team of experts is ready to help you achieve your goals.
          </p>
        </div>

        <div className="services-grid">
          {allServices.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </section>

      <section className="service-packages">
        <h2>Service Packages</h2>
        <div className="packages-grid">
          <div className="package">
            <h3>Starter</h3>
            <p className="price">Affordable</p>
            <ul>
              <li>✓ Single service consultation</li>
              <li>✓ Up to 3 revisions</li>
              <li>✓ Standard turnaround</li>
              <li>✓ Email support</li>
            </ul>
            <button className="package-btn">Choose Plan</button>
          </div>
          <div className="package featured">
            <h3>Professional</h3>
            <p className="price">Recommended</p>
            <ul>
              <li>✓ Multiple services</li>
              <li>✓ Unlimited revisions</li>
              <li>✓ Fast turnaround</li>
              <li>✓ Priority support</li>
              <li>✓ Dedicated account manager</li>
            </ul>
            <button className="package-btn">Choose Plan</button>
          </div>
          <div className="package">
            <h3>Enterprise</h3>
            <p className="price">Custom</p>
            <ul>
              <li>✓ All services included</li>
              <li>✓ Custom solutions</li>
              <li>✓ Priority delivery</li>
              <li>✓ 24/7 support</li>
              <li>✓ Dedicated team</li>
            </ul>
            <button className="package-btn">Contact Us</button>
          </div>
        </div>
      </section>
    </div>
  )
}
