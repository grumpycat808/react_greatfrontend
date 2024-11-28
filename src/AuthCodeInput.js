import React, { useRef, useState, useEffect } from 'react'
import './auth-code-input.css'

const initialState = ['', '', '', '', '', '']
function AuthCodeInput({ onSubmit }) {
    const [authCode, setAuthCode] = useState(initialState)
    const [firstEmpty, setFirstEmpty] = useState(0)
    const focus = useRef(null)
    useEffect(() => {
        if (focus.current) focus.current.focus()
    }, [authCode])
    const handleChange = (val, index) => {
        const copy = [...authCode]
        if (val === '') {
            copy[index] = ''
            setFirstEmpty(index)
        } else {
            console.log('handleChange', val)
            const num = parseInt(val, 10)
            if (isNaN(num)) return
            copy[index] = num
            if (index < 5) {
                setFirstEmpty(index + 1)
            }
        }

        setAuthCode(copy)
    }

    const handleKeyPress = (key, index) => {
        if (key === 'Backspace' && authCode[index] === '') {
        }
    }
    return (
        <div className="main">
            <div className="input">
                {authCode.map((_, i) => (
                    <input
                        key={i}
                        value={authCode[i]}
                        required
                        minLength="1"
                        maxLength="1"
                        size="1"
                        className="input-item"
                        onChange={(e) => handleChange(e.target.value, i)}
                        ref={i === firstEmpty ? focus : undefined}
                        onKeyUp={(e) => handleKeyPress(e)}
                    ></input>
                ))}
            </div>
            <div>
                <button onClick={() => setAuthCode(initialState)}>Reset</button>
                <button onClick={onSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default AuthCodeInput
