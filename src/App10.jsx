import { useClickAnyWhere } from './hooks/useClickAnyWhere'
import { useState, useEffect } from 'react'
import Test1 from './Test1'
import Test2 from './Test2'
import GenerateTable from './GenerateTable'
function App10() {
    const [count, setCount] = useState(0)

    useClickAnyWhere(() => {
        console.log('HEY')
        setCount((prev) => prev + 1)
    })

    return <p>Click count: {count}</p>
}

export default App10
