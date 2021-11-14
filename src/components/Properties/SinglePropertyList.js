import React from 'react';
import PropertyImage from './PropertyImage.js';
import PropertyDetails from './PropertyDetails.js'

export default function SinglePropertyList(props) {
  const {
    property
  } = props

  return (
    <div className="single-property-list-container">
      <PropertyImage property={property}/>
      <PropertyDetails property={property}/>
    </div>
  )
}
