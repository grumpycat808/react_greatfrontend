import React, { useState } from 'react'
import UsersDatabase from './UsersDatabase'
import ModalDialog from './ModalDialog'
import BirthyearChart from './BirthyearChart'
import DataTable from './DataTable'

function App5(props) {
    const [isOpen, setIsOpen] = useState(false)
    const content =
        'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.'
    return (
        <div className="main">
            <DataTable></DataTable>
            {/* <BirthyearChart></BirthyearChart> */}
            {/* <button onClick={() => setIsOpen(true)}>Show Modal</button> */}
            {/* <ModalDialog title="Modal Title" isOpen={isOpen} content={content} closeModal={() => setIsOpen(false)}></ModalDialog> */}
        </div>
    )
}

export default App5
