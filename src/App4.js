import { useEffect, useState } from 'react'
import Accordion from './Accordion'
import ContactForm from './ContactForm'
import FlightBooker from './FlightBooker'
import ProgressBars from './ProgressBars'
import Stopwatch from './Stopwatch'
import { v4 } from 'uuid'
import './styles.css'
import JobBoard2 from './JobBoard2'

export default function App() {
    const [numOfBars, setNumOfBars] = useState(0)
    const [progressBars, setProgressBars] = useState([])
    const [lastEnded, setLastEnded] = useState(0)
    const [ready, setReady] = useState(false)
    useEffect(() => {
        console.log('ended', lastEnded)
    }, [lastEnded])

  
        setTimeout(() => {
            setReady(true)
        }, 2000)

    const handleAnimationEnd = (randomIndex) => {
        console.log('animation ends: ', randomIndex)
    }
    let animationsEnded = 0
    const handleAdd = () => {
        animationsEnded++
        const random = v4()
        setProgressBars([
            ...progressBars,
            <ProgressBars
                key={random}
                animate={true}
                handleAnimationEnd={() => setLastEnded(progressBars.length + 1)}
                progress={65}
                
            />,
        ])
    }
    return (
        <>
            <button onClick={handleAdd}>Add Progress Bar</button>
            {progressBars.map((item) => item)}
        </>
    )
}
