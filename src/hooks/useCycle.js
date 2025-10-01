import { useState } from 'react'

export const useCycle = (...args) => {
    const [current, setCurrent] = useState(0)
    if (args.length === 0) return [null, () => {}]

    const cycle = () => {
        if (current === args.length - 1) {
            setCurrent(0)
        } else {
            setCurrent((prev) => prev + 1)
        }
    }
    return [args[current], cycle]
}
