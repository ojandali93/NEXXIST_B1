import React, { useContext } from 'react';
import { PropertyContext } from './Property.js';
import { numberWithCommas } from '../Utils.js'

export default function PropertyMortgage(props) {
  const {
    property,
    propertyMortgageData
  } = props 

  const { handlePropertyPrice } = useContext(PropertyContext)
  const { handleLoanAmount } = useContext(PropertyContext)
  const { handleDownPayment } = useContext(PropertyContext)
  const { handleDownPaymentPercent } = useContext(PropertyContext)
  const { handleInterestRate } = useContext(PropertyContext)
  const { handleLoanProgram } = useContext(PropertyContext)

  let downPaymentPercent = propertyMortgageData['down_payment_percent'] * 100

  return (
    <div>
      <div className="mortgage-input-cell">
        <label>Property Price:</label>
        <span>$<input onInput={(e) => {handlePropertyPrice(e.target.value)}} className="mortage-input" type="number" value={propertyMortgageData['property_price']}/></span>
      </div>
      <div className="mortgage-input-cell">
        <label>Loan Amount:</label>
        <span>$<input onInput={(e) => {handleLoanAmount(e.target.value)}} className="mortage-input" type="number" value={propertyMortgageData['loan_amount']}/></span>
      </div>
      <div className="mortgage-input-cell">
        <label>Down Payment:</label>
        <div>
          <span>$<input onInput={(e) => {handleDownPayment(e.target.value)}} className="mortage-input" type="number" value={propertyMortgageData['down_payment_amount']}/></span>
          <span>%<input onInput={(e) => {handleDownPaymentPercent(e.target.value)}} className="mortage-input-percent" type="number" value={downPaymentPercent}/></span>
        </div>
      </div>
      <div className="mortgage-input-cell">
        <label>
          Interest Rate:
        </label>
        <span>$<input onInput={(e) => {handleInterestRate(e.target.value)}} className="mortage-input-percent" type="number" step=".1" min="0" max="100" value={propertyMortgageData['interest_rate']}/></span>
      </div>
      <div className="mortgage-input-cell">
        <label>
          Loan Program:
        </label>
        <select name="loan-programs" id="loan-programs">
          <option onInput={(e) => {handleLoanProgram(e.target.value)}} value="30-year-fixed">30 year fixed</option>
          <option onInput={(e) => {handleLoanProgram(e.target.value)}} value="15-year-fixed">15 year fixed</option>
        </select>
      </div>
      <div className="mortgage-input-cell">
        <label>
          Closing Cost:
        </label>
        <span>${propertyMortgageData['closing_cost']}</span>
      </div>
    </div>
  )
}
