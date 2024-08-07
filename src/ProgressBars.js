import React, { useState } from 'react'
import './progress-styles.css'
function ProgressBars({ progress, handleAnimationEnd, animate, ready }) {
    return (
        <div className='progress-bar'>
            <div
                className="progress-container"
                style={{ width: `${progress}%` }}
            >
                <div
                    onAnimationEnd={handleAnimationEnd}
                    className={animate ? 'progress animate' : 'progress'}
                >
                    {progress}
                </div>
            </div>
        </div>
    )
}

export default ProgressBars
