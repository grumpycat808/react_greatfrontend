import React from 'react'
import { useCycle } from './hooks/useCycle'
function App10(props) {
    const { result } = useCycle('low', 'medium', 'high')

    return (
        <div>
            <p>State:</p>
            <button
                onClick={() => {
                    result.current[1]()
                    result.current[1]()
                    result.current[1]()
                    console.log(result.current[0])
                }}
            >
                Cycle
            </button>
        </div>
    )
}

export default App10
