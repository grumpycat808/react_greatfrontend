import React from 'react'
import DigitalClock from './DigitalClock'
import MortgageCalculator from './MortgageCalculator'
import FileExplorer from './FileExplorer'
import NestedCheckboxes from './NestedCheckboxes'
import { fileData } from './fileData'
function App7(props) {
    return (
        <div>
            <NestedCheckboxes data={fileData}></NestedCheckboxes>
        </div>
    )
}

export default App7
