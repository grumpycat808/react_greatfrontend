import { useEffect, useRef } from 'react'

export const usePrevious = (state) => {
    const ref = useRef()
    useEffect(() => {
        ref.current = state
        console.log('current state', state)
    }, [state])
    return ref.current
}
