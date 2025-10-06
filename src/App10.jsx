import { useFocus } from './hooks/useFocus'
function App10(props) {
    const [ref, focus] = useFocus()

    return (
        <div>
            <input type="number" />
            <input ref={ref} type="text" />
            <button onClick={focus}>Focus input</button>
        </div>
    )
}

export default App10
