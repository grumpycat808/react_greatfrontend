import { useEffect, useRef, useState } from 'react'
import './auth-code-input.css'

const defaultState = ['', '', '', '', '', '']
export default function AuthCodeInput2({ onSubmit }) {
    const [code, setCode] = useState(['', '', '', '', '', ''])
    const listOfInputs = []
    const [focus, setFocus] = useState(0)
    const inputRef = useRef(null)

    useEffect(() => {
        console.log('updating focus')
        inputRef.current.focus()
    }, [focus])
    const updateCode = (value, index) => {
        const copy = [...code]
        if (value === '') {
            copy[index] = ''
        } else {
            if (isNaN(parseInt(value, 10))) return
        }

        copy[index] = value
        setCode(copy)
    }
    const validInput = (code) => {
        return code.filter((item) => isNaN(parseInt(item, 10))).length === 0
    }
    const handlePaste = (value) => {
        const newCode = value.split('')
        if (validInput(newCode)) {
            setCode(newCode)
        }
    }
    const handleKeyPress = (key, index) => {
        console.log('key', key)
        switch (key) {
            case 'Tab':
                break
            case 'Backspace':
                if (code[index] === '' && index > 0) {
                    setFocus(index - 1)
                } else {
                    updateCode('', index)
                }
                break
            case 'ArrowLeft':
                if (focus > 0) setFocus(index - 1)
                break
            case 'ArrowRight':
                if (focus < 5) setFocus(index + 1)
                break
            default:
                updateCode(key, index)
                if (index < 5) {
                    console.log('Update key', index)
                    setFocus(index + 1)
                }
        }
    }
    for (let index = 0; index < 6; index++) {
        listOfInputs.push(
            <input
                type="text"
                onPaste={(e) => handlePaste(e.clipboardData.getData('Text'))}
                onKeyUp={(e) => handleKeyPress(e.key, index)}
                key={index}
                maxLength={1}
                minLength={1}
                onFocus={() => setFocus(index)}
                ref={focus === index ? inputRef : undefined}
                value={code[index]}
            ></input>,
        )
    }
    //123456
    //asdasd
    const handleReset = () => {
        setCode(defaultState)
    }
    return (
        <div className="main">
            <form
                onSubmit={(event) => {
                    event.preventDefault()

                    onSubmit(code.join(''))
                }}
            >
                <div className="input">{listOfInputs.map((item) => item)}</div>
                <div>
                    <button onClick={handleReset} type="reset">
                        Reset
                    </button>
                    <button disabled={!validInput(code)} type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}
