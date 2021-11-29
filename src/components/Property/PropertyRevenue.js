import React, { useContext } from 'react';
import { PropertyContext } from './Property.js';
import { numberWithCommas } from '../Utils.js'
import PropertySingleRevenue from '../Property/PropertySingleRevenue.js'

export default function PropertyRevenue(props) {
  const {
    property,
    currentRevenue,
    currentRevenueData,
    propertyMortgageData
  } = props 

  const { handleRevenueEdit } = useContext(PropertyContext)
  const { editingSection } = useContext(PropertyContext)

  return (
    <>
      <div className="property-single-rev-exp-contianer">
        <span onClick={() => {handleRevenueEdit()}}>
          <h2>Monthly Revenue:</h2>
          <div className="expense-menu-row-bar">
            <div className='mortgage-info'>
              <p>Revenue</p>
              <div className="expense-menu-value">
                <p>${numberWithCommas(currentRevenue)}</p>
                {
                  editingSection === 'REVENUE' ? <img className="drop-down-icon" src="up-arrow.png"/> : <img className="drop-down-icon" src="down-arrow.png"/>
                }
              </div>
            </div>
          </div>
        </span>
        {
          editingSection === 'REVENUE' ? <PropertySingleRevenue property={property} currentRevenueData={currentRevenueData} propertyMortgageData={propertyMortgageData}/> : null
        }
      </div>
    </>
  )
}
