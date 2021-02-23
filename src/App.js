import './App.css';
import { useState } from 'react'
import Timer from './components/Timer'
import BreakTime from './components/BreakTime'
import Countdown from './components/Countdown'

function App() {
  const [timer, setTimer] = useState(25)
  return (
    <div className="App">
      <Timer timer={timer} />
      <BreakTime />
      <Countdown />
    </div>
  );
}

export default App;
