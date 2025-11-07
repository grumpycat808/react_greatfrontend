import { useState } from 'react'

export const useCountdown = ({ countStart, intervalMs = 1000 }) => {
    const [count, setCount] = useState(countStart)
    let intervalID

    const start = () => {
        intervalID = setInterval(() => {
            setCount((prev) => prev - 1)
        }, intervalMs)
    }

    const stop = () => clearInterval(intervalID)

    const reset = () => {
        setCount(countStart)
        clearInterval(intervalID)
    }

    return { count, start, stop, reset }
}
