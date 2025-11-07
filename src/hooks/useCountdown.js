import { useState } from 'react'

export const useCountdown = ({
    countStart,
    countStop = 0,
    intervalMs = 1000,
    isIncrement = false,
}) => {
    const [count, setCount] = useState(countStart)
    const [intervalId, setIntervalID] = useState(null)

    const start = () => {
        const newId = setInterval(() => {
            if (isIncrement) {
                setCount((prev) => (prev < countStop ? prev + 1 : countStop))
            } else {
                setCount((prev) => (prev > countStop ? prev - 1 : countStop))
            }
        }, intervalMs)

        setIntervalID(newId)
    }

    const stop = () => clearInterval(intervalId)

    const reset = () => {
        setCount(countStart)
        clearInterval(intervalId)
    }

    return { count, start, stop, reset }
}
