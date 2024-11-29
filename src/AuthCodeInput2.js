import { useState } from 'react'
import './auth-code-input.css'
export default function AuthCodeInput2({ onSubmit }) {

    const [code, setCode] = useState(['', '', '','', '', ''])
    const listOfInputs = []
    for (let index = 0; index < 6; index++) {
        listOfInputs.push(
            <input type="text" maxLength={1} minLength={1}></input>,
        )
    }
    return (
        <div className="main">
            <form
                onSubmit={(event) => {
                    event.preventDefault()
                    onSubmit()
                }}
            >
                <div className="input">{listOfInputs.map((item) => item)}</div>
                <div>
                    <button type="reset">Reset</button>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}
