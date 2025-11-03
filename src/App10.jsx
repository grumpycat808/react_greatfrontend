import { useDebounce } from './hooks/useDebounce'
import { useState, useEffect } from 'react'
import Test1 from './Test1'
import Test2 from './Test2'
import GenerateTable from './GenerateTable'
function App10() {
    const [keyword, setKeyword] = useState('')

    return (
        <div>
            <GenerateTable></GenerateTable>
        </div>
    )
}

export default App10
