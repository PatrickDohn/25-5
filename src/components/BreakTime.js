import React from 'react'
import '../App.css'
import moment from 'moment'

function BreakTime({ breakTimer, setbreakTimer }) {

    const newBreakTimer = moment.duration(breakTimer, 's').minutes()
    return (
        <div className="break-container">
            <div>{newBreakTimer}</div>
            <div className="button-container">
                <button onClick={() => setbreakTimer(breakTimer + 60)}>Up</button>
                <button onClick={() => setbreakTimer(breakTimer === 0 ? breakTimer = 0 : breakTimer - 60)}>Down</button>
            </div>
        </div>
    )
}

export default BreakTime
