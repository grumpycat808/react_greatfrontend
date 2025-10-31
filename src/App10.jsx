import { useDebounce } from './hooks/useDebounce'
import { useState, useEffect } from 'react'
import Test1 from './Test1'
import Test2 from './Test2'
function App10() {
    const [keyword, setKeyword] = useState('')
    const debouncedKeyword = useDebounce(keyword, 1000)

    return (
        <div>
            <input
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />
            <p>Debounced keyword: {debouncedKeyword}</p>
        </div>
    )
}

export default App10
