import './App.css';
import { useState } from 'react'
import Timer from './components/Timer'
import BreakTime from './components/BreakTime'
import Countdown from './components/Countdown'

function App() {
  const [timer, setTimer] = useState(25)
  const [breakTimer, setbreakTimer] = useState(5)
  return (
    <div className="App">
      <Timer timer={timer} setTimer={setTimer} />
      <BreakTime breakTimer={breakTimer} setbreakTimer={setbreakTimer} />
      <Countdown timer={timer} />
    </div>
  );
}

export default App;
