import { useStateWithReset } from './hooks/useStateWithReset'
function App10(props) {
    const [value, setValue, resetValue] = useStateWithReset(10)

    return (
        <div>
            <div>Value: {value}</div>
            <input onChange={(e) => setValue(e.target.value)} />
            <button onClick={resetValue}>reset</button>
        </div>
    )
}

export default App10
