import React, { useContext } from 'react';
import { PropertyContext } from './Property.js';
import PropertyMortgage from './PropertyMortgage.js'

export default function PropertySingleExpenses(props) {
  const {
    property,
    currentMortgage,
    propertyMortgageData
  } = props 

  const { handleSetionEdit } = useContext(PropertyContext)
  const { editingSection } = useContext(PropertyContext)

  return (
    <>
      {
        editingSection === '' &&
        <div onClick={() => {handleSetionEdit('MORTGAGE')}} className="property-single-rev-exp-contianer">
          <h2>Monthly Expenses:</h2>
          <div className="expense-menu-row-bar">
            <div className='mortgage-info'>
              <p>Principle &amp; Interest</p>
              <div className="expense-menu-value">
                <p>${currentMortgage}</p>
                <img className="drop-down-icon" src="down-arrow.png"/>
              </div>
            </div>
          </div>
        </div>
      }
      {
        editingSection === 'MORTGAGE' &&
        <div className="property-single-rev-exp-contianer">
          <span onClick={() => {handleSetionEdit('')}}>
            <h2>Monthly Expenses:</h2>
            <div className="expense-menu-row-bar">
              <div className='mortgage-info'>
                <p>Principle &amp; Interest</p>
                <div className="expense-menu-value">
                  <p>${currentMortgage}</p>
                  <img className="drop-down-icon" src="up-arrow.png"/>
                </div>
              </div>
            </div>
          </span>
          {
            <PropertyMortgage property={property} propertyMortgageData={propertyMortgageData}/>
          }
        </div>
      }
    </>
  )
}
