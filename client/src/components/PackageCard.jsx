import React from 'react'
import './PackageCard.css'

export default function PackageCard({ title, price, items = [], color = 'navy' }) {
  return (
    <article className={`pkg-card pkg-${color}`}>
      <div className="pkg-head">
        <h3>{title}</h3>
        <div className="pkg-price">{price}</div>
      </div>
      <ul className="pkg-items">
        {items.map((it, i) => (
          <li key={i}>{it}</li>
        ))}
      </ul>
    </article>
  )
}
