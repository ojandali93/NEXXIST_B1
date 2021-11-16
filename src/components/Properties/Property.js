import React, { useState, useEffect } from 'react'
import PropertyImage from './PropertyImage.js'
import PropertyDetails from './PropertyDetails.js'
import PropertyContactAgent from './PropertyContactAgent.js'

export default function Property(props) {
  const {
    property
  } = props

  const [propert, setProperty] = useState(property)
  const [principleAndInterest, setPrincipleAndInterest] = useState({})

  const generatePandI = (property) => {
    let newPandI = {}
    newPandI['loan_amount'] = property['price'] // home price default
    newPandI['down_payment_percent'] = 20 // 20% down default
    newPandI['down_payment_amount'] = 0 // needs to be calculated
    newPandI['closing_cost'] = 0 // needs to be calculated
    newPandI['loan_program'] = 0 // 30 year fixed default
    newPandI['interest_rate'] = 3.14 // 3.15% default
    newPandI['total_monthly'] = 0 // needs to be calculated
  }

  useEffect(() => {
  }, [])

  return (
    <div className='property-list-container'>
      <div className="single-property-list-container">
        <PropertyImage property={property}/>
        <PropertyDetails property={property}/>
        {/* <PropertyListRevAndExp property={property}/>
        <PropertyListMetrics property={property}/> */}
        <PropertyContactAgent property={property}/>
      </div>
    </div>
  )
}
