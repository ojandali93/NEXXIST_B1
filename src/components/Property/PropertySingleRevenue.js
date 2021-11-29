import React, { useContext } from 'react';
import { PropertyContext } from './Property.js';

export default function PropertySingleRevenue(props) {
  const {
    property, 
    currentRevenueData
  } = props

  const { handleRent } = useContext(PropertyContext)
  const { handleAdditionalRevenue } = useContext(PropertyContext)

  return (
    <div>
      <div className="mortgage-input-cell">
        <label>Monthly Rent:</label>
        <span>$<input className="mortage-input" onInput={(e) => {handleRent(e.target.value)}} type="number" value={currentRevenueData['rent']}/></span>
      </div>
      <div className="mortgage-input-cell">
        <label>Additional Revenue:</label>
        <span>$<input className="mortage-input" onInput={(e) => {handleAdditionalRevenue(e.target.value)}} type="number" value={currentRevenueData['additional_revenue']}/></span>
      </div>
    </div>
  )
}
