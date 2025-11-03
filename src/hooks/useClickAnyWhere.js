import { useEffect } from 'react'
export const useClickAnyWhere = (fn) => {
    useEffect(() => {
        console.log('TEST')
        document.addEventListener('click', fn)

        return () => {
            document.removeEventListener('click', fn)
        }
    }, [])
}
