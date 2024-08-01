import React, { useState } from 'react'

function TemperatureConverter() {
    const [celsius, setCelsius] = useState('')
    const [fahrenheit, setFahrenheit] = useState('')

    const handleCelsiusChange = (value) => {
        setCelsius(value)
        const roundedVal = (value * 1.8 + 32).toFixed(4)
        setFahrenheit(roundedVal)
    }

    const handleFahrenheitChange = (value) => {
        setFahrenheit(value)
        const roundedVal = (value - 32) * (5 / 9).toFixed(4)
        setCelsius(roundedVal)
    }
    return (
        <div className="temperature-conterter">
            <input
                type="number"
                placeholder="celsius"
                value={celsius}
                onChange={(e) => handleCelsiusChange(e.target.value)}
            ></input>
            <input
                type="number"
                placeholder="fahrenheit"
                value={fahrenheit}
                onChange={(e) => handleFahrenheitChange(e.target.value)}
            ></input>
        </div>
    )
}

export default TemperatureConverter
