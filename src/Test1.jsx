import { useState, useEffect } from 'react'

function Test1() {
    const [celsius, setCelsius] = useState(0)

    const fahrenheit = (1.8 * celsius + 32).toFixed(2)

    return (
        <div>
            Fahrenheit:{' '}
            <input
                type="number"
                value={fahrenheit}
                onChange={(e) =>
                    setCelsius(((e.target.value - 32) * (5 / 9)).toFixed(2))
                }
            />
            Celsius:{' '}
            <input
                type="number"
                value={celsius}
                onChange={(e) => setCelsius(e.target.value)}
            />
        </div>
    )
}

export default Test1
