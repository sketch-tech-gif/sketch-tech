// Mock data for services
const servicesData = [
  {
    id: 1,
    title: 'Web Development & Maintenance',
    description: 'Build modern, responsive websites and maintain them with regular updates and bug fixes.',
    icon: '🌐',
    price: 'Custom Quote'
  },
  {
    id: 2,
    title: 'Web Scraping',
    description: 'Extract valuable data from websites efficiently using advanced scraping techniques.',
    icon: '🤖',
    price: 'Custom Quote'
  },
  {
    id: 3,
    title: 'CV Writing & Optimization',
    description: 'Create and optimize your CV to impress employers and increase interview opportunities.',
    icon: '📄',
    price: '$49 - $149'
  },
  {
    id: 4,
    title: 'Assignment Writing',
    description: 'Professional writing services for academic and business assignments.',
    icon: '✍️',
    price: 'Custom Quote'
  },
  {
    id: 5,
    title: 'Poster & Graphic Design',
    description: 'Eye-catching designs for posters, banners, and marketing materials.',
    icon: '🎨',
    price: '$50 - $200'
  },
  {
    id: 6,
    title: 'Software Design',
    description: 'Custom software solutions tailored to your specific business needs.',
    icon: '🔧',
    price: 'Custom Quote'
  },
  {
    id: 7,
    title: 'Landing Pages',
    description: 'High-converting landing pages designed to boost your sales and leads.',
    icon: '🚀',
    price: '$200 - $500'
  },
  {
    id: 8,
    title: 'App Testing',
    description: 'Comprehensive testing services to ensure your app performs flawlessly.',
    icon: '🧪',
    price: 'Custom Quote'
  }
]

// Get all services
export const getServices = (req, res) => {
  try {
    res.json({
      success: true,
      data: servicesData
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Error fetching services'
    })
  }
}

// Get single service by ID
export const getServiceById = (req, res) => {
  try {
    const { id } = req.params
    const service = servicesData.find(s => s.id === parseInt(id))

    if (!service) {
      return res.status(404).json({
        success: false,
        error: 'Service not found'
      })
    }

    res.json({
      success: true,
      data: service
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Error fetching service'
    })
  }
}
