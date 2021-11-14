import React from 'react'

export default function PropertyImage(props) {
  const {
    property
  } = props
  
  return (
    <div>
      <div className="property-list-container">
        <img className="property-image" src={property['imgSrc']} />
      </div>
    </div>
  )
}
