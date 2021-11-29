import React, { useState, useEffect } from 'react'
import PropertyImage from '../Properties/PropertyImage.js'
import PropertyDetails from '../Properties/PropertyDetails.js'
import PropertyContactAgent from '../Properties/PropertyContactAgent.js'
import PropertySingleExpenses from './PropertySingleExpense.js'
import PropertyRevenue from './PropertyRevenue.js'

import { calculateDownPaymentAmount } from '../Utils.js'
import { calculateDownPaymentPercent } from '../Utils.js'
import { calculateLoanAmount } from '../Utils.js'
import { calculateClosingCost } from '../Utils.js'
import { calculateMonthlyMortgage } from '../Utils.js'

export const PropertyContext = React.createContext()

export default function Property(props) {
  const {
    property
  } = props

  let loanAmount = calculateLoanAmount(property['price'], .20) 
  let totalRevenue = property['rentZestimate'] + 0

  let PandI = {}
  PandI['property_price'] = property['price'].toFixed(2) 
  PandI['loan_amount'] = loanAmount
  PandI['down_payment_percent'] = .20 
  PandI['down_payment_amount'] = calculateDownPaymentAmount(property['price'], loanAmount) 
  PandI['closing_cost'] = calculateClosingCost(property['price'], .20) 
  PandI['loan_program'] = '30 Year Fixed' 
  PandI['interest_rate'] = 3.14 

  let Revenue = {}
  Revenue['rent'] = property['rentZestimate']
  Revenue['additional_revenue'] = 0

  const [propertyMortgageData, setPropertyMortgageData] = useState(PandI)
  const [editingSection, setEditingSection] = useState('')
  const [currentMortgage, setCurrentMortgage] = useState(0)
  const [currentRevenueData, setCurrentRevenueData] = useState(Revenue)
  const [currentRevenue, setCurrentRevenue] = useState(totalRevenue)

  useEffect(() => {
    let loanAmount = propertyMortgageData['loan_amount']
    let interestRate = propertyMortgageData['interest_rate']
    let currentMortgageAmount = calculateMonthlyMortgage(loanAmount, interestRate)
    setCurrentMortgage(currentMortgageAmount)
  }, [])

  useEffect(() => {
    console.log(`updated down payment percent: ${propertyMortgageData['down_payment_percent']}`)
    let loanAmount = propertyMortgageData['loan_amount']
    let interestRate = propertyMortgageData['interest_rate']
    let currentMortgageAmount = calculateMonthlyMortgage(loanAmount, interestRate)
    setCurrentMortgage(currentMortgageAmount)
  }, [propertyMortgageData])

  const handleSetionEdit = (section) => {
    setEditingSection(section)
  }

  const handlePropertyPrice  = (e) => {
    let loanAmount = calculateLoanAmount(e, propertyMortgageData['down_payment_percent'])
    let downPaymentAmount = calculateDownPaymentAmount(e, loanAmount)
    let closingCost = calculateClosingCost(loanAmount) 
    let newMortgageDate = {}
    newMortgageDate['property_price'] = e
    newMortgageDate['loan_amount'] = loanAmount
    newMortgageDate['down_payment_percent'] = propertyMortgageData['down_payment_percent']
    newMortgageDate['down_payment_amount'] = downPaymentAmount
    newMortgageDate['closing_cost'] = closingCost 
    newMortgageDate['loan_program'] = propertyMortgageData['loan_program']
    newMortgageDate['interest_rate'] = propertyMortgageData['interest_rate']
    setPropertyMortgageData(newMortgageDate)
  }
 
  const handleLoanAmount  = (e) => {
    let loanAmount = e
    let downPaymentAmount = calculateDownPaymentAmount(propertyMortgageData['property_price'], loanAmount) 
    let downPaymentPercent = calculateDownPaymentPercent(propertyMortgageData['property_price'], downPaymentAmount)
    let closingCost = calculateClosingCost(loanAmount) 
    let newMortgageDate = {}
    newMortgageDate['property_price'] = propertyMortgageData['property_price']
    newMortgageDate['loan_amount'] = loanAmount
    newMortgageDate['down_payment_percent'] = downPaymentPercent
    newMortgageDate['down_payment_amount'] = downPaymentAmount
    newMortgageDate['closing_cost'] = closingCost
    newMortgageDate['loan_program'] = propertyMortgageData['loan_program']
    newMortgageDate['interest_rate'] = propertyMortgageData['interest_rate']
    setPropertyMortgageData(newMortgageDate)
  }

  const handleDownPayment  = (e) => {
    let loanAmount = propertyMortgageData['property_price'] - e
    let downPaymentPercent = calculateDownPaymentPercent(propertyMortgageData['property_price'], e)
    let closingCost = calculateClosingCost(loanAmount) 
    let newMortgageDate = {}
    newMortgageDate['property_price'] = propertyMortgageData['property_price']
    newMortgageDate['loan_amount'] = loanAmount
    newMortgageDate['down_payment_percent'] = downPaymentPercent
    newMortgageDate['down_payment_amount'] = e
    newMortgageDate['closing_cost'] = closingCost
    newMortgageDate['loan_program'] = propertyMortgageData['loan_program']
    newMortgageDate['interest_rate'] = propertyMortgageData['interest_rate']
    setPropertyMortgageData(newMortgageDate)
  }

  const handleDownPaymentPercent  = (e) => {
    let downPaymentPercent = e / 100
    let loanAmount = calculateLoanAmount(propertyMortgageData['property_price'], downPaymentPercent)
    let downPaymentAmount = calculateDownPaymentAmount(propertyMortgageData['property_price'], loanAmount)
    let closingCost = calculateClosingCost(loanAmount) 
    let newMortgageDate = {}
    newMortgageDate['property_price'] = propertyMortgageData['property_price']
    newMortgageDate['loan_amount'] = loanAmount
    newMortgageDate['down_payment_percent'] = downPaymentPercent
    newMortgageDate['down_payment_amount'] = downPaymentAmount
    newMortgageDate['closing_cost'] = closingCost
    newMortgageDate['loan_program'] = propertyMortgageData['loan_program']
    newMortgageDate['interest_rate'] = propertyMortgageData['interest_rate']
    setPropertyMortgageData(newMortgageDate)
  }

  const handleInterestRate  = (e) => {
    let newMortgageDate = {}
    newMortgageDate['property_price'] = propertyMortgageData['property_price']
    newMortgageDate['loan_amount'] = propertyMortgageData['loan_amount']
    newMortgageDate['down_payment_percent'] = propertyMortgageData['down_payment_percent']
    newMortgageDate['down_payment_amount'] = propertyMortgageData['down_payment_amount']
    newMortgageDate['closing_cost'] = propertyMortgageData['closing_cost']
    newMortgageDate['loan_program'] = propertyMortgageData['loan_program']
    newMortgageDate['interest_rate'] = e
    setPropertyMortgageData(newMortgageDate)
  }

  const handleRent = (e) => {
    let total = parseInt(e) + parseInt(currentRevenueData['additional_revenue'])
    let newRevenueData = {}
    newRevenueData['rent'] = e
    newRevenueData['additional_revenue'] = currentRevenueData['additional_revenue']
    setCurrentRevenueData(newRevenueData)
    setCurrentRevenue(total)
  }

  const handleAdditionalRevenue = (e) => {
    let total = parseInt(e) + parseInt(currentRevenueData['rent'])
    let newRevenueData = {}
    newRevenueData['rent'] = currentRevenueData['rent']
    newRevenueData['additional_revenue'] = e
    setCurrentRevenueData(newRevenueData)
    setCurrentRevenue(total)
  }

  const handleMortgageEdit = () => {
    if(editingSection === 'MORTGAGE'){
      setEditingSection('')
    } else {
      setEditingSection('MORTGAGE')
    }
  }

  const handleRevenueEdit = () => {
    if(editingSection === 'REVENUE'){
      setEditingSection('')
    } else {
      setEditingSection('REVENUE')
    }
  }

  const PropertyContextValue = {
    editingSection,
    handleSetionEdit,
    handleMortgageEdit,
    handleRevenueEdit,
    handlePropertyPrice,
    handleLoanAmount,
    handleDownPayment,
    handleDownPaymentPercent,
    handleInterestRate,
    handleRent,
    handleAdditionalRevenue
  }

  return (
    <div className='property-list-container'>
      <div className="single-property-list-container">
        <PropertyContext.Provider value={PropertyContextValue}>
          <PropertyImage property={property}/>
          <PropertyDetails property={property}/>
          <PropertySingleExpenses property={property} currentMortgage={currentMortgage} propertyMortgageData={propertyMortgageData}/>
          <PropertyRevenue property={property} currentRevenue={currentRevenue} currentRevenueData={currentRevenueData} propertyMortgageData={propertyMortgageData}/>
          {/* <PropertyListMetrics property={property}/> */}
          <PropertyContactAgent property={property}/>
        </PropertyContext.Provider>
      </div>
    </div>
  )
}
