import React, { useEffect, useState } from 'react'

function DigitalClock(props) {
    const [time, setTime] = useState(new Date())

    const [seconds, setSeconds] = useState(new Date().getSeconds())
    const [minutes, setMinutes] = useState(new Date().getMinutes())
    setTimeout(() => {
        if (seconds === 59) {
            setSeconds(0)
        } else {
            setSeconds(seconds + 1)
        }
    }, 1000)

    useEffect(() => {
        if (seconds === 0) {
            setMinutes(minutes + 1)
        }
    }, [seconds])
    return (
        <div>
            <p>
                {time.getHours()} : {minutes < 10 ? '0' + minutes : minutes} :{' '}
                {seconds < 10 ? '0' + seconds : seconds}
            </p>
        </div>
    )
}

export default DigitalClock
