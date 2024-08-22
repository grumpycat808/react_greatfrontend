import { useEffect, useState } from 'react'
import Accordion from './Accordion'
import ContactForm from './ContactForm'
import FlightBooker from './FlightBooker'
import ProgressBars from './ProgressBars'
import Stopwatch from './Stopwatch'
import { v4 } from 'uuid'
// import './styles.css'
import JobBoard2 from './JobBoard2'
import UndoCounter from './UndoCounter'
import DataTable from './DataTable'
import ImageCarousel from './ImageCarousel'

export default function App() {
    const [numOfBars, setNumOfBars] = useState(0)
    // const [progressBars, setProgressBars] = useState([])
    const [lastEnded, setLastEnded] = useState(0)
    const [ready, setReady] = useState(false)
    useEffect(() => {
        console.log('ended', lastEnded)
    }, [lastEnded])

    const handleAnimationEnd = (randomIndex) => {
        console.log('animation ends: ', randomIndex)
    }

    const handleAdd = () => {
        setNumOfBars(numOfBars + 1)
    }
    const progressBars = []
    for (let index = 0; index < numOfBars; index++) {
        const key = v4()
        progressBars.push(
            <ProgressBars
                key={index}
                handleAnimationEnd={() => setLastEnded(progressBars.length + 1)}
                progress={65}
            />,
        )
    }

    const images = [
        {
            src: 'https://picsum.photos/id/600/600/400',
            alt: 'Forest',
        },
        {
            src: 'https://picsum.photos/id/100/600/400',
            alt: 'Beach',
        },
        {
            src: 'https://picsum.photos/id/200/600/400',
            alt: 'Yak',
        },
        {
            src: 'https://picsum.photos/id/300/600/400',
            alt: 'Hay',
        },
        {
            src: 'https://picsum.photos/id/400/600/400',
            alt: 'Plants',
        },
        {
            src: 'https://picsum.photos/id/500/600/400',
            alt: 'Building',
        },
    ]

    return (
        <>
            {/* <button onClick={() => setNumOfBars(numOfBars + 1)}>
                Add Progress Bar
            </button>
            {progressBars.map((item) => item)} */}

            <ImageCarousel images={images}></ImageCarousel>
        </>
    )
}
