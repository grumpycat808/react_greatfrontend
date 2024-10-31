import React, { useEffect, useState } from 'react'
import useCurrentDate from './use-current-date'

function DigitalClock(props) {
    const time = useCurrentDate()
    // console.log("State changed")
    const getSeconds = () => {
        const seconds = time.getSeconds()
        return seconds < 10 ? '0' + seconds : seconds
    }

    const getMinutes = () => {
        const minutes = time.getMinutes()
        return minutes < 10 ? '0' + minutes : minutes
    }
    return (
        <div>
            <p>
                {time.getHours()} : {getMinutes()} : {getSeconds()}
            </p>
        </div>
    )
}

export default DigitalClock
