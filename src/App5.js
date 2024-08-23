import React, { useState } from 'react'
import UsersDatabase from './UsersDatabase'
import ModalDialog from './ModalDialog'
import BirthyearChart from './BirthyearChart'
import DataTable from './DataTable'
import Database from './Database'
import users from './users.json'
import houses from './houses.json'
function App5(props) {
    const [isOpen, setIsOpen] = useState(false)
    const content =
        'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.'
    return (
        <div className="main">
            <Database
                data={houses}
                columns={['id', 'street', 'city', 'state', 'built_year']}
            ></Database>
            {/* <BirthyearChart></BirthyearChart> */}
            {/* <button onClick={() => setIsOpen(true)}>Show Modal</button> */}
            {/* <ModalDialog title="Modal Title" isOpen={isOpen} content={content} closeModal={() => setIsOpen(false)}></ModalDialog> */}
        </div>
    )
}

export default App5
