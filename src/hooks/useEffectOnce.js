import { useEffect, useState } from 'react'

export const useEffectOnce = (effect) => {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        if (counter === 0) {
            setCounter(1)
            return effect()
        }
    }, [counter])
}
