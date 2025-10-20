import { useState, useEffect } from 'react'
import { useEffectOnce } from './hooks/useEffectOnce'

function Test1(props) {
    const [celsius, setCelsius] = React.useState(0)
    const [fahrenheit, setFahrenheit] = React.useState(32)
    return (
        <div>
            Fahrenheit: <input type="number" name="fahrenheit"></input>
            Celsius: <input type="number" name="celsius"></input>
        </div>
    )
}

export default Test1
