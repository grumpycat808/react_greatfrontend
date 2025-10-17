import { useEffectOnce } from './hooks/useEffectOnce'
import { useState, useEffect } from 'react'
function App10(props) {
    useEffect(() => {
        console.log('Running effect once on mount')

        return () => {
            console.log('Running clean-up of effect on unmount')
        }
    })

    return null
}

export default App10
