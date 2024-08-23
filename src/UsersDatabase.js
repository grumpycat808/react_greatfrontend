import React, { useEffect, useState } from 'react'
import './styles2.css'
import { v4 } from 'uuid'
function UsersDatabase(props) {
    const staticNames = ['Jaimie Oliver', 'Prince Harry', 'Jennifer Aniston']

    const [names, setNames] = useState(staticNames)
    const [searchStr, setSearchStr] = useState('')
    const [selectedName, setSelectedName] = useState('Jennifer Aniston')
    const [newFname, setNewFname] = useState('')
    const [newLname, setNewLname] = useState('')
    useEffect(() => {
        let filteredNames = [...staticNames]
        filteredNames = filteredNames.filter((name) => name.includes(searchStr))

        setNames(filteredNames)
    }, [searchStr])

    useEffect(() => {
        setNewFname(getFname())
        setNewLname(getLname())
    }, [selectedName])
    const filterOptions = (searchString) => {
        setSearchStr(searchString)
    }
    const handleUpdate = () => {
        const indexOfOG = names.indexOf(selectedName)
        const newNamesList = [...names]
        newNamesList[indexOfOG] = `${newFname} ${newLname}`
        setNames(newNamesList)
        setNewFname('')
        setNewLname('')
    }

    const handleCreate = () => {
        if (selectedName !== '') return

        if (newFname === '' || newLname === '') return
        setNames([...names, `${newFname} ${newLname}`])
        setNewFname('')
        setNewLname('')
    }
    const handleDelete = () => {
        let filtered = [...names]
        filtered = filtered.filter((name) => name !== selectedName)
        console.log('filtered', filtered)
        setNames(filtered)
    }

    const handleSelect = (value) => {
        setSelectedName(value)
    }

    const handleUpdateFname = (value) => {
        setNewFname(value)
    }

    const handleUpdateLname = (value) => {
        setNewLname(value)
    }

    const handleCancel = () => setSelectedName('')
    const getFname = () => selectedName && selectedName.split(' ')[0]
    const getLname = () => selectedName && selectedName.split(' ')[1]
    return (
        <div className="main">
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search"
                    value={searchStr}
                    onChange={(e) => filterOptions(e.target.value)}
                ></input>
            </div>
            <div className="database">
                <div>
                    <label>
                        Pick a fruit:
                        <select
                            size={5}
                            name="selectedName"
                            onChange={(e) => handleSelect(e.target.value)}
                            value={selectedName}
                        >
                            <option key={v4()} value="">
                                Default
                            </option>
                            {names.map((name) => (
                                <option key={v4()} value={name}>
                                    {name}
                                </option>
                            ))}
                        </select>
                    </label>
                </div>

                <form>
                    <label htmlFor="fname">First Name: </label>
                    <input
                        type="text"
                        name="fname"
                        value={newFname}
                        onChange={(e) => handleUpdateFname(e.target.value)}
                    ></input>
                    <label htmlFor="lname">Last Name: </label>
                    <input
                        type="text"
                        name="lname"
                        value={newLname}
                        onChange={(e) => handleUpdateLname(e.target.value)}
                    ></input>
                </form>
            </div>
            <div className="buttons">
                <button
                    disabled={
                        selectedName !== '' ||
                        newFname === '' ||
                        newLname === ''
                    }
                    onClick={handleCreate}
                >
                    Create
                </button>
                <button onClick={handleUpdate}>Update</button>
                <button onClick={handleDelete}>Delete</button>
                <button onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    )
}

export default UsersDatabase
