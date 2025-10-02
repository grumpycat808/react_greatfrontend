import { useDefault } from './hooks/useDefault'
function App10(props) {
    const initialUser = 2
    const defaultUser = 1
    const [user, setUser] = useDefault(defaultUser, initialUser)

    return (
        <div>
            <div>User: {user}</div>
            <input onChange={(e) => setUser(e.target.value)} />
            <button onClick={() => setUser((prev) => prev + 1)}>reset</button>
        </div>
    )
}

export default App10
