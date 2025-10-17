import { useEffect } from 'react'

export const useEffectOnce = (effect) => {
    let counter = 0
    useEffect(() => {
        if (counter === 0) {
            effect()
            counter++
        }
    })
}
