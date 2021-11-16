import React from 'react';
import PropertyImage from './PropertyImage.js';
import PropertyDetails from './PropertyDetails.js';
import PropertyRevAndExp from './PropertyRevAndExp.js';
import PropertyMetrics from './PropertyMetrics.js';
import PropertyContactAgent from './PropertyContactAgent.js'

export default function SinglePropertyList(props) {
  const {
    property
  } = props

  return (
    <div className="single-property-list-container">
      <PropertyImage property={property}/>
      <PropertyDetails property={property}/>
      <PropertyRevAndExp property={property}/>
      <PropertyMetrics property={property}/>
      <PropertyContactAgent property={property}/>
    </div>
  )
}
