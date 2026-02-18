import React from 'react'
import './ServicesList.css'

export default function ServicesList({ services = [] }) {
  return (
    <div className="services-grid-2col services-list">
      {services.map((s, i) => (
        <div key={i} className="service-tile">
          <div className="service-tile-inner">
            <div className="service-tile-icon">{s.icon}</div>
            <div className="service-tile-body">
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
