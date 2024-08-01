import { useState } from 'react'
import Accordion from './Accordion'
import ContactForm from './ContactForm'
import FlightBooker from './FlightBooker'
import ProgressBars from './ProgressBars'
import Stopwatch from './Stopwatch'
import {v4} from 'uuid'
import './styles.css'

export default function App() {

    const [numOfBars, setNumOfBars] = useState(0);
    const [numAnimationEnds, setNumAnimationEnds] = useState(0);
    const progressBars = [];

    const handleAnimationEnd = () => {

    }
    for (let index = 0; index < numOfBars; index++) {
        progressBars.push(<ProgressBars key={v4()} handleAnimationEnd={handleAnimationEnd} progress={65}/>)
    }

    return (
        <>
            {progressBars.map((item) => item)}
            <button onClick={() => setNumOfBars(numOfBars + 1)}>Add Progress Bar</button>
        </>
    )
}
