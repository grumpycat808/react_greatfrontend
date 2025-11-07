import { useCountdown } from './hooks/useCountdown'
import { useState } from 'react'

function App10() {
    const { count, start, stop, reset } = useCountdown({
        countStart: 10,
        intervalMs: 1000,
    })

    return (
        <div>
            <p>Countdown: {count}</p>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default App10
