import React from 'react'
import '../App.css'

function BreakTime({ breakTimer, setbreakTimer }) {
    return (
        <div className="break-container">
            <div>{breakTimer}</div>
            <div className="button-container">
                <button onClick={() => setbreakTimer(breakTimer + 1)}>Up</button>
                <button onClick={() => setbreakTimer(breakTimer - 1)}>Down</button>
            </div>
        </div>
    )
}

export default BreakTime
