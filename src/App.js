import './App.css';
import { useState, useEffect } from 'react'
import Timer from './components/Timer'
import BreakTime from './components/BreakTime'
import Countdown from './components/Countdown'

function App() {
  const [timer, setTimer] = useState(60 * 25)
  const [breakTimer, setbreakTimer] = useState(300)
  const [currentSessionType, setCurrentSessionType] = useState('Session')
  const [intervalId, setIntervalId] = useState(null)
  const [timeLeft, setTimeLeft] = useState(timer)

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
                if(currentSessionType === 'Session') {
                    setCurrentSessionType('Break')
                    setTimeLeft(breakTimer)
                } else if(currentSessionType === 'Break') {
                    setCurrentSessionType('Session')
                    setTimeLeft(timer)
                }
            })
        }, 100)
        setIntervalId(newIntervalId)
    }
}


  return (
    <div className="App">
      <Timer timer={timer} setTimer={setTimer} />
      <BreakTime breakTimer={breakTimer} setbreakTimer={setbreakTimer} />
      <Countdown isStarted={isStarted} timeLeft={timeLeft} currentSessionType={currentSessionType} handleStartStop={handleStartStop} breakTimer={breakTimer} timer={timer} />
    </div>
  );
}

export default App;
