import React from 'react'
import '../App.css'

function Timer({ timer, setTimer }) {
    return (
        <div className="set-time-container">
            <div>{timer}</div>
            <div className="button-container">
                <button onClick={() => setTimer(timer + 1)}>Up</button>
                <button onClick={() => setTimer(timer - 1)}>Down</button>
            </div>
        </div>
    )
}

export default Timer
