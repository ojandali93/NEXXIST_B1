export function numberWithCommas(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function calculateDownPaymentAmount(price, loanAmount){
  let downPaymentAmount = price - loanAmount
  return downPaymentAmount.toFixed(2)
}

export function calculateDownPaymentPercent(price, amountDown){
  let downPaymentPercent = amountDown / price
  console.log(downPaymentPercent)
  return downPaymentPercent.toFixed(2)
}

export function calculateLoanAmount(price, percentDown){
  let loanAmountPercent = 1 - percentDown
  let loanAmount = price * loanAmountPercent
  return loanAmount.toFixed(2)
}

export function calculateClosingCost(loanAmount){
  let closingCost = loanAmount * .03
  return closingCost.toFixed(2)
}

export function calculateMonthlyMortgage(loanAmount, ir){
  let interestRate = (ir / 100)/12
  let powerRate = Math.pow(1 + interestRate, 360)
  let monthlyPayment = loanAmount * ((interestRate * powerRate) / (powerRate - 1))
  return monthlyPayment.toFixed(2)
}