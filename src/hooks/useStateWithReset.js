import { useState, useRef } from 'react'

export const useStateWithReset = (initialStateOrInitializer) => {
    const [val, setVal] = useState(initialStateOrInitializer)
    const initial = useRef(initialStateOrInitializer)
    const resetVal = () => {
        setVal(initial.current)
    }
    return [val, setVal, resetVal]
}
