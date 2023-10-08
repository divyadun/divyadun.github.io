import { useState } from "react"

function CompoundInterest() {
  var [loanAmount, setLoanAmount] = useState(100) 
  var [tenureYears, setTenureYears] = useState(10)   // This is to store and change years in ReactJS

  // var interest = 9
  var [interestRate, setInterestRate] = useState(9)

  var totalInterest = (loanAmount * interestRate * tenureYears)/100
  var totalPayment = loanAmount + totalInterest
  var emi = totalPayment/(tenureYears * 12)

  return (
    <div >
      <p style={{fontSize: '24px', color: 'brown'}}>
        Know your Compound interest EMI powered by Divya
      </p>

      <p>Principle loan amount ?</p>
      <input value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))}/>
      
      <p>Rate of interest in percentage ?</p>
      <input value={interestRate}  onChange={(e) => setInterestRate(Number(e.target.value))}/>
      
      <p>Tenure in years ?</p>
      <input value={tenureYears} onChange={(e) => setTenureYears(Number(e.target.value))}/>

      <h3>Your Interest is: Rs {totalInterest}</h3>
      <h3>Your Total debt to bank is: Rs {totalPayment}</h3>
      <h3>Your Monthly EMI is: Rs {emi}</h3>
    </div>
  )
}

export default CompoundInterest
