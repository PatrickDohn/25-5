import React from 'react'
import '../App.css'
import moment from 'moment'
import momentDurationFormatSetup from 'moment-duration-format'

momentDurationFormatSetup(moment)

function Countdown({ isStarted, timeLeft, currentSessionType, handleStartStop, handleResetButtonClick, audioElement }) {


    const formatTimeLeft = moment.duration(timeLeft , 's').format('mm:ss', { trim: false})


    return (
        <div className="countdown-container">
            <div className="countdown">{formatTimeLeft}</div>
            <div className="button-container">
                <p>{currentSessionType}</p>
                <button onClick={handleStartStop}>{isStarted ? 'Stop' : 'Start'}</button>
                <button onClick={handleResetButtonClick}>Reset</button>
            </div>
        </div>
    )
}

export default Countdown
