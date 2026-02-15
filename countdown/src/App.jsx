import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function App() {

  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    if(!isRunning) return;

    const id = setInterval(() => {
      setTimer(prev => prev + 1)
    }, 1000);
    return () => clearInterval(id);
  }, [isRunning])

  const handleStart = () => {
    setIsRunning (true)
  }
  const handlePause = () => {
    setIsRunning (false)
  }
  const handleReset = () => {
    setIsRunning (false)
    setTimer(0)
  }


  return (
    <div className='time'>
      <h1>Timer: {timer}</h1>

      <div className='btn'>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}

export default App
