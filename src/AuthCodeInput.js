import React, { useRef, useState, useEffect } from 'react'
import './auth-code-input.css'

const initialState = ['', '', '', '', '', '']
function AuthCodeInput({ onSubmit }) {
    const [authCode, setAuthCode] = useState(initialState)
    const [firstEmpty, setFirstEmpty] = useState(0)
    const focus = useRef(null)
    useEffect(() => {
        if (focus.current) focus.current.focus()
    }, [authCode, firstEmpty])
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
        console.log('key', key);
        console.log('authCode[index]', authCode[index]);
        if (key === 'Backspace' && authCode[index] === '') {
            if(index > 0) {
                console.log("index",index)

                setFirstEmpty(index - 1);
            }
        }
    }
    // hellowol
    //123456
    
    const handlePaste = (value) => {
        let trimmed = value.slice(0, 6);
        console.log('trimmed', trimmed);
    
        if(isNaN(parseInt(trimmed, 10))) return;
        console.log(Array.from(trimmed))
        setAuthCode(Array.from(trimmed));
    }

    const validateAuth = () =>{
        let isValid = true;
        authCode.forEach(num => {
            if(isNaN(num) || num === '') isValid = false;
        })
        if(authCode.length !== 6) isValid = false;
        return isValid;
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
                        onKeyUp={(e) => handleKeyPress(e.key, i)}
                        onPaste={(e) => handlePaste(e.clipboardData.getData('Text'))}
                    ></input>
                ))}
            </div>
            <div>
                <button onClick={() => {
                    setAuthCode(initialState);
                    setFirstEmpty(0)
                }}>Reset</button>
                <button disabled={!validateAuth()} onClick={() => onSubmit(authCode)}>Submit</button>
            </div>
        </div>
    )
}

export default AuthCodeInput
