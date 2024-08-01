import React, { useEffect, useState } from 'react'
import './styles.css'

function TrafficLight() {
    const [activeLight, setActiveLight] = useState('green')

    useEffect(() => {
        if (activeLight === 'green') {
            setTimeout(() => {
                console.log('yellow')
                setActiveLight('yellow')
            }, 1000)
        } else if (activeLight === 'yellow') {
            setTimeout(() => {
                console.log('red')
                setActiveLight('red')
            }, 1000)
        } else {
            setTimeout(() => {
                console.log('green')
                setActiveLight('green')
            }, 1000)
        }
    }, [activeLight])
    const redTimeout = () => {
        return new Promise((res) => {
            console.log('red')
            setActiveLight('red')
            setTimeout(() => {
                res()
            }, 1000)
        })
    }
    const yellowTimeout = () => {
        return new Promise((res) => {
            console.log('yellow')
            setActiveLight('yellow')
            setTimeout(() => {
                res()
            }, 1000)
        })
    }

    const greenTimeout = () => {
        return new Promise((res) => {
            console.log('green')
            setActiveLight('green')
            setTimeout(() => {
                res()
            }, 1000)
        })
    }

    // setInterval(() => {
    //     redTimeout()
    // }, 2000)

    return (
        <div className="traffic-lights">
            <div className={activeLight === 'red' ? 'red ' : 'light'}></div>
            <div
                className={activeLight === 'yellow' ? 'yellow ' : 'light'}
            ></div>
            <div className={activeLight === 'green' ? 'green ' : 'light'}></div>
        </div>
    )
}

export default TrafficLight
