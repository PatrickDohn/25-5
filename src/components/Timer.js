import React from 'react'
import '../App.css'

function Timer({ timer }) {
    return (
        <div className="set-time-container">
            <div>{timer}</div>
            <div className="button-container">
            <button>Up</button>
            <button>Down</button>
            </div>
        </div>
    )
}

export default Timer
