import { useState } from 'react'
import { HeartIcon, SpinnerIcon } from './icons'

import './styles.css'

export default function App() {
    const [buttonState, setButtonState] = useState('unlike')
    const [isLoading, setIsLoading] = useState(false)
    // console.log("Hello")
    async function makeRequest(action) {
        const url = 'https://www.greatfrontend.com/api/questions/like-button'
        try {
            const response = await fetch(url, {
                body: JSON.stringify({ action }),
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`)
            }

            const json = await response.json()
            return json
        } catch (error) {
            return {
                message: 'failed',
            }
        }
    }
    const handleClick = (action) => {
        setIsLoading(true)
        makeRequest(action).then((res) => {
            if (res && res.message === 'Success!') {
                setButtonState(action)
            }
            setIsLoading(false)
        })
    }

    return (
        <div>
            {isLoading ? (
                <button className="spinner-icon">
                    <SpinnerIcon /> Like
                </button>
            ) : (
                <button
                    className={
                        buttonState === 'like'
                            ? 'heart-icon liked'
                            : 'heart-icon default'
                    }
                    onClick={() => {
                        if (buttonState === 'like') {
                            handleClick('unlike')
                        } else {
                            handleClick('like')
                        }
                    }}
                >
                    <HeartIcon /> Like
                </button>
            )}
        </div>
    )
}
