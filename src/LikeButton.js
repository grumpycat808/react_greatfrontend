import React, { useState } from 'react'
import { HeartIcon, SpinnerIcon } from './icons'

import './like-button-styles.css'
function LikeButton(props) {
    const [btnState, setBtnState] = useState('unlike')
    const updateLike = () => {
        const newState = btnState === 'like' ? 'unlike' : 'like'
        const prevState = btnState
        setBtnState('loading')
        fetch('https://www.greatfrontend.com/api/questions/like-button', {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({ action: newState }),
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.message === 'Success!') {
                    setBtnState(newState)
                } else {
                    setBtnState(prevState)
                    console.log(res.message)
                }
            })
    }
    return (
        <div>
            {btnState === 'loading' && (
                <button className="spinner icon">
                    <SpinnerIcon /> Like
                </button>
            )}
            {btnState === 'unlike' && (
                <button className={'default heart icon'} onClick={updateLike}>
                    <HeartIcon /> Like
                </button>
            )}
            {btnState === 'like' && (
                <button className={'liked heart icon'} onClick={updateLike}>
                    <HeartIcon /> Liked
                </button>
            )}
        </div>
    )
}

export default LikeButton
