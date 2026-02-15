import React, { useEffect, useState } from 'react'

function App() {

 const [time, setTime] = useState(new Date());

 useEffect(() => {
  const id =setInterval(() =>{
    setTime(new Date());
  }, 1000);
  return () => clearInterval(id)

  
 }, [])
  return (
    <div>
      <h1>{time.toDateString()}</h1>
    </div>
  )
}

export default App
