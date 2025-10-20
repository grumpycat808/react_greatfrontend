import { useEffectOnce } from './hooks/useEffectOnce'
import { useState, useEffect } from 'react'
import Test1 from './Test1'
import Test2 from './Test2'
function App10(props) {
    const [displayed, setDisplayed] = useState(1)

    return (
        <div>
            {displayed === 1 ? <Test1></Test1> : <Test2></Test2>}
            <button
                onClick={() => {
                    displayed === 1 ? setDisplayed(2) : setDisplayed(1)
                }}
            >
                Toggle Component
            </button>
        </div>
    )
}

export default App10
