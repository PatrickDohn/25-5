import React, { useState, useEffect } from 'react'
import '../App.css'
import moment from 'moment'
import momentDurationFormatSetup from 'moment-duration-format'

momentDurationFormatSetup(moment)

function Countdown({ timer }) {
    const [currentSessionType, setCurrentSessionType] = useState('Session')
    const [intervalId, setIntervalId] = useState(null)
    const [timeLeft, setTimeLeft] = useState(timer)

    const formatTimeLeft = moment.duration(timeLeft , 's').format('mm:ss', { trim: false})

    useEffect(() => {
        setTimeLeft(timer)
    }, [timer])


    const isStarted = intervalId !== null
    const handleStartStop = () => {
        if(isStarted) {
            clearInterval(intervalId)
            setIntervalId(null)
        } else {
            const newIntervalId = setInterval(() => {
                setTimeLeft(prevTimeLeft => {
                    const newTimeLeft = prevTimeLeft - 1
                    if(newTimeLeft >= 0) {
                       return prevTimeLeft - 1
                    }
                    return prevTimeLeft
                })
            }, 100)
            setIntervalId(newIntervalId)
        }
    }

    return (
        <div className="countdown-container">
            <div className="countdown">{formatTimeLeft}</div>
            <div className="button-container">
                <button onClick={handleStartStop}>{isStarted ? 'Stop' : 'Start'}</button>
                <button>Reset</button>
            </div>
        </div>
    )
}

export default Countdown
