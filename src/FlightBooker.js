import React, { useState } from 'react'
const getToday = () => {
    var today = new Date()
    var dd = String(today.getDate()).padStart(2, '0')
    var mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
    var yyyy = today.getFullYear()

    return `${yyyy}-${mm}-${dd}`
}

function FlightBooker(props) {
    const [returnFlight, setReturnFlight] = useState('one-way')
    const [departureDate, setDepartureDate] = useState(getToday())
    const [returnDate, setReturnDate] = useState(getToday())

    const handleChange = (e) => {
        console.log(e.target.value)
        setReturnFlight(e.target.value)
    }

    const handleSubmit = () => {
        if (
            Date.parse(departureDate) < new Date() ||
            Date.parse(returnDate) < new Date()
        ) {
            alert('departure or return date cannot be in the past')
        } else if (Date.parse(departureDate) > Date.parse(returnDate)) {
            alert('Return date cannot be before departure date')
        } else {
            alert('Successfully booked flight')
        }
    }
    return (
        <div>
            <select value={returnFlight} onChange={handleChange}>
                <option value="one-way">One-way</option>
                <option value="return">Return</option>
            </select>
            <br></br>
            <input
                type="date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
            ></input>
            {returnFlight === 'return' && (
                <input
                    type="date"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                ></input>
            )}
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default FlightBooker
