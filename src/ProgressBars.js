import React, { useState } from 'react'
import './progress-styles.css'
function ProgressBars({ progress, handleAnimationEnd, ready }) {
    console.log('Rendered')
    return (
        <div className="progress-bar">
            <div
                className="progress-container"
                style={{ width: `${progress}%` }}
            >
                <div
                    onAnimationEnd={handleAnimationEnd}
                    className='progress animate'
                >
                    {progress}
                </div>
            </div>
        </div>
    )
}

export default ProgressBars
