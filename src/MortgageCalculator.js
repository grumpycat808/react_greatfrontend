import React, { useEffect, useState } from 'react'
import './mortgage-calculator.css'
function MortgageCalculator(props) {
    const [loanAmt, setLoanAmt] = useState(100000)
    const [apr, setAPR] = useState(3)
    const [loanTerm, setLoanTerm] = useState(30)
    const [errors, setErrors] = useState([])
    const [displayResults, setDisplayResults] = useState(false)
    const [results, setResults] = useState({
        monthlyPayments: '',
        totalPaymentAmt: '',
        totalInterestPaid: '',
    })

    const validateInput = () => {
        const validationErrors = []
        if (!isNumber(loanAmt) || loanAmt === '') {
            validationErrors.push('Please enter a valid loan amount.')
        }

        if (!isNumber(apr) || apr === '') {
            validationErrors.push(
                'Please enter a valid annual percentage rate.',
            )
        }

        if (!isNumber(loanTerm) || loanTerm === '') {
            validationErrors.push('Please enter a valid loan term.')
        }
        setErrors(validationErrors)
        return validationErrors.length === 0
    }

    const isNumber = (value) => /^\d+$/.test(value)

    const calculateResults = () => {
        // M = P(i(1+i)n)/((1+i)n - 1)
        const r = apr / 12
        const n = loanTerm * 12

        // const monthlyPayments = loanAmt * ((r * (Math.pow((1 + r), n))/(Math.pow((1 + r), n)) - 1));
        const monthlyPayments =
            loanAmt *
            ((0.0025 * Math.pow(1.0025, 360)) / Math.pow(1 + 0.0025, 360) - 1)
        console.log('n', n)
        // console.log(0.25 * (Math.pow((1 + 0.25), 360)))
        const totalPaymentAmt = monthlyPayments * 12
        const totalInterestPaid = totalPaymentAmt - loanAmt
        console.log('monthlyPayments', monthlyPayments)
        setResults({ monthlyPayments, totalPaymentAmt, totalInterestPaid })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const valid = validateInput()

        if (valid) {
            setDisplayResults(true)
            calculateResults()
        }
    }
    return (
        <form>
            <label htmlFor="loan-amt">Loan Amount</label>{' '}
            <input
                type="text"
                name="loan-amt"
                value={loanAmt}
                onChange={(e) => {
                    setLoanAmt(e.target.value)
                }}
            />
            <label htmlFor="apr">Annual percentage rate</label>{' '}
            <input
                name="apr"
                type="text"
                value={apr}
                onChange={(e) => {
                    setAPR(e.target.value)
                }}
            />
            <label htmlFor="loan-term">Loan term: </label>{' '}
            <input
                type="text"
                name="loan-term"
                value={loanTerm}
                onChange={(e) => {
                    setLoanTerm(e.target.value)
                }}
            />
            <button onClick={handleSubmit}>Calculate</button>
            {errors.length > 0 &&
                errors.map((err, i) => {
                    return <li key={i}>{err}</li>
                })}
            {displayResults && (
                <div>
                    <p>Monthly Payment Amount: {results.monthlyPayments}</p>
                    <p>Total Payment Amount: {results.totalPaymentAmt} </p>
                    <p>Total Interest Paid: {results.totalInterestPaid} </p>
                </div>
            )}
        </form>
    )
}

export default MortgageCalculator
