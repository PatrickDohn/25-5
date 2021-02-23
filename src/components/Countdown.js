import React, { useState, useRef } from 'react'
import '../App.css'

function Countdown({ timer }) {
    const [isActive, setIsActive] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const countRef = useRef(null)

    return (
        <div className="countdown-container">
            <div className="countdown">{timer}</div>
            <div className="button-container">
                <button>Start</button>
                <button>Stop</button>
            </div>
        </div>
    )
}

export default Countdown
