import { useRef } from 'react'

export const useFocus = () => {
    const ref = useRef(null)
    const focus = () => {
        ref.current.focus()
    }
    return [ref, focus]
}
