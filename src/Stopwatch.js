import React from 'react'
import { useRef } from 'react'

function Stopwatch(props) {
    const msRef = useRef()
    let i = 0
    msRef.innerHTML = 'Hello'
    console.log(msRef)
    // setInterval(() => {
    //     console.log(msRef)
    //     msRef.innerHTML = i;
    //     i++
    // }, 1000)
    return (
        <div>
            <p>
                0s <span ref={msRef}>00</span>ms
            </p>
            <div>
                <button>Start</button> <button>Reset</button>
            </div>
        </div>
    )
}

export default Stopwatch
