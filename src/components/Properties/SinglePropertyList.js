import React from 'react';
import PropertyImage from './PropertyImage.js';
import PropertyDetails from './PropertyDetails.js';
import PropertyRevAndExp from './PropertyRevAndExp.js'

export default function SinglePropertyList(props) {
  const {
    property
  } = props

  return (
    <div className="single-property-list-container">
      <PropertyImage property={property}/>
      <PropertyDetails property={property}/>
      <PropertyRevAndExp property={property}/>
    </div>
  )
}
