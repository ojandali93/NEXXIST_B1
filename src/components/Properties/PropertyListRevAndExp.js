import React from 'react'

export default function PropertyListRevAndExp(props) {
  const {

  } = props

  return (
    <div className="property-rev-exp-contianer">
      <h2>Revenue &amp; Expenses:</h2>
      <div className="rev-exp-sectional">
        <p>Monthly Expenses:</p>
        <p>$2,123</p>
      </div>
      <div className="rev-exp-sectional">
        <p>Monthly Expenses:</p>
        <p>$2,123</p>
      </div>
      <div className="rev-exp-sectional">
        <p className="disclaimer-text">** Calculated based on a 30 year fixed loan with 20% down and 3.15% interest rate **</p>
      </div>
    </div>
  )
}
