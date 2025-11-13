import { useState, useRef } from 'react'

export const useCountdown = ({
    countStart,
    countStop = 0,
    intervalMs = 1000,
    isIncrement = false,
}) => {
    const [count, setCount] = useState(countStart)
    const intervalRef = useRef(null)

    const start = () => {
        stop() // clear any running interval

        intervalRef.current = setInterval(() => {
            setCount((prev) => {
                if (isIncrement ? prev >= countStop : prev <= countStop) {
                    clearInterval(intervalRef.current)
                    return countStop
                }
                return isIncrement ? prev + 1 : prev - 1
            })
        }, intervalMs)
    }

    const stop = () => {
        clearInterval(intervalRef.current)
        intervalRef.current = null
    }

    const reset = () => {
        setCount(countStart)
        stop()
    }

    return { count, start, stop, reset }
}
