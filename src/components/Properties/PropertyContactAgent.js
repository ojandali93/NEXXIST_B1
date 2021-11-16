import React from 'react'

export default function PropertyContactAgent(props) {
  const {
    property
  } = props
  return (
    <div className="contact-agent-container">
      <button className="property-details-button">PROPERTY DETAILS</button>
      <button className="contact-agent-button">CONTACT AGENT</button>
    </div>
  )
}
