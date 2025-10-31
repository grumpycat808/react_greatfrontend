import { useState, useEffect } from 'react'

export const useDebounce = (value, delay) => {
    let timeout

    const [newVal, setNewVal] = useState(value)

    useEffect(() => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            setNewVal(value)
            console.log('Hey')
        }, delay)

        return () => clearTimeout(timeout)
    }, [value])
    return newVal
}
