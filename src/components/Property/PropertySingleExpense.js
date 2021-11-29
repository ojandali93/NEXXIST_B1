import React, { useContext } from 'react';
import { PropertyContext } from './Property.js';
import PropertyMortgage from './PropertyMortgage.js'
import { numberWithCommas } from '../Utils.js'

export default function PropertySingleExpenses(props) {
  const {
    property,
    currentMortgage,
    propertyMortgageData
  } = props 

  const { handleMortgageEdit } = useContext(PropertyContext)
  const { editingSection } = useContext(PropertyContext)

  let hoaFee = 0
  if(property['hoaFee'] === null){
    hoaFee = 0
  } else {
    hoaFee = property['hoaFee']
  }
  let totalExpenses = parseInt(currentMortgage) + parseInt(property['taxAnnualAmount']) + parseInt(property['annualHomeInsurance'] / 12) + parseInt(hoaFee)

  return (
    <>
      <div className="property-single-rev-exp-contianer">
        <h2>Monthly Expenses:</h2>
        <div className="expense-menu-row-bar">
          <span onClick={() => {handleMortgageEdit()}}>
            <div className='mortgage-info'>
              <p>Principle &amp; Interest</p>
              <div className="expense-menu-value">
                <p>${numberWithCommas(currentMortgage)}</p>
                {
                  editingSection === 'MORTGAGE' ? <img className="drop-down-icon" src="up-arrow.png"/> : <img className="drop-down-icon" src="down-arrow.png"/>
                }
              </div>
            </div>
            {
              editingSection === 'MORTGAGE' ? <PropertyMortgage property={property} propertyMortgageData={propertyMortgageData}/> : null
            }
          </span>
        </div>
        <div className="expense-menu-row-bar">
          <div className='mortgage-info'>
            <p>Property Tax</p>
            <div className="expense-menu-value">
              <p>${numberWithCommas(parseInt(property['taxAnnualAmount']))}</p>
            </div>
          </div>
        </div>
        <div className="expense-menu-row-bar">
          <div className='mortgage-info'>
            <p>Home Insurance</p>
            <div className="expense-menu-value">
              <p>${numberWithCommas(parseInt(property['annualHomeInsurance'] / 12))}</p>
            </div>
          </div>
        </div>
        <div className="expense-menu-row-bar">
          <div className='mortgage-info'>
            <p>HOA Fee</p>
            <div className="expense-menu-value">
              <p>${hoaFee}</p>
            </div>
          </div>
        </div>
        <div className="expense-menu-row-bar">
          <div className='mortgage-info'>
            <p>Total Expenses</p>
            <div className="expense-menu-value">
              <p>${numberWithCommas(totalExpenses)}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
