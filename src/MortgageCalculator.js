import React, { useState } from 'react';

function MortgageCalculator(props) {
    const [loanAmt, setLoanAmt] = useState('');
    const [apr, setAPR] = useState('');
    const [loanTerm, setLoanTerm] = useState('');
    const [errors, setErrors] = useState([]);
    const [displayResults, setDisplayResults] = useState(false);
    const [results, setResults] = useState({});
    const validateInput = () => {
        if(!isNumber(loanAmt) || loanAmt === '') {
            setErrors([...errors, "Please enter a valid loan amount."])
        }

        if(!isNumber(apr) || apr === '') {
            setErrors([...errors, "Please enter a valid annual percentage rate."])
        }

        if(!isNumber(loanTerm) || loanTerm === '') {
            setErrors([...errors, "Please enter a valid loan term."])
        }
    }

    const isNumber = (value) =>  /^\d+$/.test(value);

    const calculateResults = () => {
        //M = P(i(1+i)n)/((1+i)n - 1)
        const i = apr/12;
        const n = loanTerm * 12;

        const monthlyPayments = loanAmt(i * Math.pow((1 + i), n)/(Math.pow((1 + i), n)) - 1);
        const totalPaymentAmt = monthlyPayments * 12;
        const totalInterestPaid = totalPaymentAmt - loanAmt;

        setResults({monthlyPayments, totalPaymentAmt, totalInterestPaid});
    }
    const handleSubmit = () => {
        setErrors([]);
        validateInput();
        if(errors.length === 0) {

            setDisplayResults(true);
            calculateResults();
        }
    }
    return (
        <form>
            <input type="text" onChange={(e) => {
                setLoanAmt(e.target.value);
            }} />
            <input type="text" onChange={(e) => {
                setAPR(e.target.value);
            }} />
            <input type="text" onChange={(e) => {
                setLoanTerm(e.target.value);
            }} />
            <button onClick={handleSubmit}>Calculate</button>

            {displayResults && 
                <div>
                    <p>Monthly Payment Amount: </p>
                    <p>Total Payment Amount: </p>
                    <p>Total Interest Paid: </p>
                </div>
            }
        </form>
    );
}

export default MortgageCalculator;