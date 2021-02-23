import React from 'react'
import '../App.css'
import moment from 'moment'

function Timer({ timer, setTimer }) {
    const newSessionTimer = moment.duration(timer, 's').minutes()

    return (
        <div className="set-time-container">
            <div>{newSessionTimer}</div>
            <div className="button-container">
                <button onClick={() => setTimer(timer + 60)}>Up</button>
                <button onClick={() => setTimer(timer === 0 ? timer = 0 : timer - 60)}>Down</button>
            </div>
        </div>
    )
}

export default Timer
