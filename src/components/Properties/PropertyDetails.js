import React from 'react'
import { numberWithCommas } from '../Utils.js'

export default function PropertyDetails(props) {
  const {
    property
  } = props

  return (
    <div className="property-details-contianer">
      <h2>${numberWithCommas(property['price'])}</h2>
      <div className="property-summary-container">
        <p>Beds: {property['bedrooms']}</p>
        <p>Baths: {property['bathrooms']}</p>
        <p>Sqft: {numberWithCommas(property['livingArea'])}</p>
        {
          property['lotAreaUnit'] === 'acres' ? <p>Lot Size: {numberWithCommas(property['lotAreaValue'].toFixed(2))} {property['lotAreaUnit']}</p> : <p>Lot Size: {numberWithCommas(property['lotAreaValue'])} {property['lotAreaUnit']}</p>
        }
      </div>
      <p>{property['address']}</p>
      <div className="property-summary-container">
        <p>Days Listed: {property['daysOnZillow']}</p>
        <p>MLS#: {property['mlsid']}</p>
      </div>
    </div>
  )
}
